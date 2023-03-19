document.addEventListener("DOMContentLoaded", function () {
    // Bar Chart 1 - Survivants et décédés par sexe et classe
    const barChart1 = document.getElementById("bar-chart-1").getContext("2d");

    const barData1 = {
        labels: ["1ère classe", "2ème classe", "3ème classe"],
        datasets: [
            {
                label: "Femmes",
                data: [3, 6, 72],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
            {
                label: "Hommes",
                data: [77, 91, 300],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    new Chart(barChart1, {
        type: "bar",
        data: barData1,
        options: barOptions,
    });

    // Pie Chart - Pourcentage de décès total par sexe
    const pieCtx = document.getElementById("pie-chart").getContext("2d");

    const pieData = {
        labels: ["Femmes", "Hommes"],
        datasets: [
            {
                data: [14.75, 85.25],
                backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
                borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
                borderWidth: 1,
            },
        ],
    };

    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2, // Vous pouvez ajuster cette valeur pour modifier la taille du graphique circulaire
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    new Chart(pieCtx, {
        type: "pie",
        data: pieData,
        options: pieChartOptions,
    });

    // Bar Chart 2 - Nombre de décès et de survivants par groupe d'âge
    const barChart2 = document.getElementById("bar-chart-2").getContext("2d");

    const barData2 = {
        labels: ["Enfants", "Adultes", "Personnes âgées"],
        datasets: [
            {
                label: "Décédés",
                data: [69, 348, 7],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
            {
                label: "Survivants",
                data: [70, 219, 1],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    new Chart(barChart2, {
        type: "bar",
        data: barData2,
        options: barOptions,
    });

    // Bar Chart 3 - Pourcentage de décès par groupe d'âge
    const barChart3 = document.getElementById("bar-chart-3").getContext("2d");

    const barData3 = {
        labels: ["Enfants", "Adultes", "Personnes âgées"],
        datasets: [
            {
                label: "Pourcentage de décès",
                data: [49.64, 61.38, 87.5],
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
            },
        ],
    };

    new Chart(barChart3, {
        type: "bar",
        data: barData3,
        options: barOptions,
    });
});

document.getElementById("hamburger-menu").addEventListener("click", function () {
    const navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("open");
});

