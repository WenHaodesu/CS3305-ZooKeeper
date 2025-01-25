// Function to generate a random equation
function generateEquation() {
    const equationType = Math.random() < 0.5 ? "single" : "double"; // Randomly choose equation type

    if (equationType === "single") {
        // Single variable equation: ax + b = c
        const a = Math.floor(Math.random() * 10) + 1; // Coefficient (1-10)
        const b = Math.floor(Math.random() * 20) - 10; // Constant (-10 to 10)
        const x = Math.floor(Math.random() * 10) + 1; // Solution (1-10)
        const c = a * x + b; // Calculate result

        return {
            equations: [`${a}x + ${b} = ${c}`], // Formatted equation
            solution: x, // Correct solution
        };
    } else {
        // Two variable equations: ax + by = c
        const x = Math.floor(Math.random() * 10) + 1; // Fixed x value
        const y = Math.floor(Math.random() * 10) + 1; // Fixed y value

        // Generate first equation
        const a1 = Math.floor(Math.random() * 10) + 1;
        const b1 = Math.floor(Math.random() * 10) + 1;
        const c1 = a1 * x + b1 * y;

        // Generate second equation
        const a2 = Math.floor(Math.random() * 10) + 1;
        const b2 = Math.floor(Math.random() * 10) + 1;
        const c2 = a2 * x + b2 * y;

        return {
            equations: [`${a1}x + ${b1}y = ${c1}`, `${a2}x + ${b2}y = ${c2}`], // Formatted equations
            solution: x, // We only care about solving x
        };
    }
}

// Function to display the current equation
function displayEquation(equationData) {
    const questionElement = document.getElementById("question");
    if (equationData.equations.length === 1) {
        questionElement.innerHTML = `Solve for x:<br>${equationData.equations[0]}`;
    } else {
        questionElement.innerHTML = `Solve for x:<br>1) ${equationData.equations[0]}<br>2) ${equationData.equations[1]}`;
    }
}

// Update DOM on page load
document.addEventListener("DOMContentLoaded", () => {
    const hintElement = document.getElementById("hint");

    // Generate and display the initial equation
    const equationData = generateEquation();
    window.currentEquation = equationData; // Store the current equation data
    displayEquation(equationData);
    hintElement.textContent = "x is the temperature where the animal lives.";
});

document.getElementById("submit-btn").addEventListener("click", () => {
    const userAnswer = document.getElementById("answer").value;
    const correctAnswer = window.currentEquation.solution;

    if (parseInt(userAnswer) === correctAnswer) {
        alert("Correct! Great job!");
        // Generate a new equation after correct answer
        const newEquation = generateEquation();
        window.currentEquation = newEquation;
        displayEquation(newEquation);
    } else {
        alert("Wrong answer. Try again!");
        // Do nothing, keep the current equation
    }
});



