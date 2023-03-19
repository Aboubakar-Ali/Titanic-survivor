const form = document.getElementById("prediction-form");
const resultDiv = document.getElementById("result");
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarLinks = document.getElementById("navbar-links");

hamburgerMenu.addEventListener("click", () => {
    navbarLinks.classList.toggle("open");
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const age = parseFloat(form.age.value) / 100;
    const sex = parseInt(form.sex.value);
    const pclass = parseInt(form.pclass.value);
    const embarked = parseInt(form.embarked.value);

    const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ age, sex, pclass, embarked })
    });

    const data = await response.json();
    const survived = data.survived;

    resultDiv.textContent = `Prediction: ${survived === 1 ? "Survived" : "Did not survive"}`;

    // Appliquer la classe CSS appropriée en fonction du résultat
    if (survived === 1) {
        resultDiv.classList.remove("result-not-survived");
        resultDiv.classList.add("result-survived");
    } else {
        resultDiv.classList.remove("result-survived");
        resultDiv.classList.add("result-not-survived");
    }

    checkPredictionResult(); // Vérifiez si le résultat de la prédiction est affiché et affichez le bloc "explore-container" si nécessaire
});

function checkPredictionResult() {
    var result = document.getElementById("result");
    if (result.innerHTML.trim() !== "") { // Vérifiez si le résultat de la prédiction est affiché
        document.getElementById("explore-container").style.display = "block"; // Affichez le bloc "explore-container"
    }
}

// Cachez d'abord le bloc "explore-container"
document.getElementById("explore-container").style.display = "none";
