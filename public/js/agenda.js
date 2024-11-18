document.addEventListener("DOMContentLoaded", () => { 
    const monthName = document.querySelector(".month-name");
    const arrows = document.querySelectorAll(".arrow");

    const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];    

    let currentDate = new Date();
    let selectedRange = { start: null, end: null }; // Stocke la plage sélectionnée

    // Affiche mois/année
    function updateMonthDisplay() {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        monthName.textContent = `${months[month]} ${year}`;
    }

    // Génère le calendrier avec des dates uniques
    function generateCalendar() {
        const calendar = document.querySelector(".datepicker-calendar");
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        
        // Obtenir le premier jour et le nombre de jours dans le mois
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Obtenir le nombre de jours du mois précédent
        const prevMonthDays = new Date(year, month, 0).getDate();

        // Ajouter les jours du mois précédent (faded)
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = prevMonthDays - i;
            const date = new Date(year, month - 1, day);
            const button = createDateButton(date, true);
            calendar.appendChild(button);
        }

        // Ajouter les jours du mois actuel
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const button = createDateButton(date, false);
            calendar.appendChild(button);
        }

        // Ajouter les jours du mois suivant (faded)
        const nextMonthStartDay = (firstDay + daysInMonth) % 7;
        for (let day = 1; day <= (7 - nextMonthStartDay) % 7; day++) {
            const date = new Date(year, month + 1, day);
            const button = createDateButton(date, true);
            calendar.appendChild(button);
        }

        highlightRange();
    }

    // Crée un bouton de date
    function createDateButton(date, faded) {
        const button = document.createElement("button");
        button.classList.add("date");
        if (faded) button.classList.add("faded");
        button.textContent = date.getDate();
        button.dataset.date = date.toISOString().split("T")[0]; // Associe une date unique

        // Gestion du clic pour la sélection
        button.addEventListener("click", () => handleDateClick(date));
        return button;
    }

    // Gestion du clic pour sélectionner une plage de dates
    function handleDateClick(date) {
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
        // Si aucune plage ou une plage complète est sélectionnée
        selectedRange = { start: date, end: null };
    } else if (date < selectedRange.start) {
        // Si la date cliquée est avant le début
        selectedRange = { start: date, end: selectedRange.start };
    } else {
        // Sinon, définir comme fin de plage
        selectedRange.end = date;
    }

    // Inclure le jour cliqué immédiatement
    highlightRange();
    }

    // Met en surbrillance la plage sélectionnée
    function highlightRange() {
        const allDates = document.querySelectorAll(".date");
    
        allDates.forEach((button) => {
            const buttonDate = new Date(button.dataset.date);
            button.classList.remove("range-start", "range-end", "in-range");
    
            if (selectedRange.start && +buttonDate === +selectedRange.start) {
                button.classList.add("range-start");
            }
            if (selectedRange.end && +buttonDate === +selectedRange.end) {
                button.classList.add("range-end");
            }
            if (
                selectedRange.start &&
                selectedRange.end &&
                buttonDate >= selectedRange.start && // Inclut la date de début
                buttonDate <= selectedRange.end      // Inclut la date de fin
            ) {
                button.classList.add("in-range");
            }
        });
    }
    

    // Navigation précédent/suivant
    arrows.forEach((arrow, index) => {
        arrow.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() + (index === 0 ? -1 : 1));
            updateMonthDisplay();
            generateCalendar();
        });
    });
    
    // Initialise la page
    updateMonthDisplay();
    generateCalendar();
});

