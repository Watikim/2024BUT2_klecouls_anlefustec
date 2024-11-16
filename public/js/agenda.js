document.addEventListener("DOMContentLoaded", () => { 
    const monthName = document.querySelector(".month-name");
    const arrows = document.querySelectorAll(".arrow");
    const dates = document.querySelectorAll(".date");

    const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];    

    let currentDate = new Date();

    // Affiche mois/année
    function updateMonthDisplay() {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        monthName.textContent = `${months[month]} ${year}`;
    }

    // Selection de la date actuelle au chargement / clic
    function highlightCurrentDate() {
        const today = new Date();
        const currentDay = today.getDate();

        dates.forEach((button) => {
            // On enleve la date précédente selectionner si il y en avait une
            button.classList.remove("current-day");
            if (
                parseInt(button.textContent) === currentDay &&
                today.getMonth() === currentDate.getMonth() &&
                today.getFullYear() === currentDate.getFullYear() &&
                !button.classList.contains("faded")
            ) {
                button.classList.add("current-day");
            }

            // Ajout de la gestion du clic pour chaque date
            button.addEventListener("click", () => {
                document.querySelectorAll(".current-day").forEach((current) => {
                    current.classList.remove("current-day");
                });
                button.classList.add("current-day");
            });
        });
    }

    // Navigation précédent/suivant
    arrows.forEach((arrow, index) => {
        arrow.addEventListener("click", () => {
            if (index === 0) {
                // Flèche gauche
                currentDate.setMonth(currentDate.getMonth() - 1);
            } else {
                // Flèche droite
                currentDate.setMonth(currentDate.getMonth() + 1);
            }

            updateMonthDisplay();
            highlightCurrentDate();
        });
    });

    // Initialis la page avec la date actuelle
    updateMonthDisplay();
    highlightCurrentDate();
});