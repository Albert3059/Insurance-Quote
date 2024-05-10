document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get user input values
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const location = document.getElementById("location").value;
    const coverage = document.getElementById("coverage").value;

    // Simulate quote generation (replace with actual logic)
    const quote = generateQuote(name, age, location, coverage);

    // Display quote result
    displayQuote(quote);
});

function generateQuote(name, age, location, coverage) {
    // Simulate quote generation logic
    const basePremium = 100;
    let premiumMultiplier = 1;

    if (age < 25) {
        premiumMultiplier += 0.2;
    }

    // Additional logic based on coverage type, location, etc.

    const totalPremium = basePremium * premiumMultiplier;

    return {
        name: name,
        age: age,
        location: location,
        coverage: coverage,
        premium: totalPremium.toFixed(2)
    };
}

function displayQuote(quote) {
    const quoteDetails = document.getElementById("quoteDetails");
    quoteDetails.innerHTML = `
        <p><strong>Name:</strong> ${quote.name}</p>
        <p><strong>Age:</strong> ${quote.age}</p>
        <p><strong>Location:</strong> ${quote.location}</p>
        <p><strong>Coverage Type:</strong> ${quote.coverage}</p>
        <p><strong>Premium:</strong> $${quote.premium}</p>
    `;

    document.getElementById("quoteResult").classList.remove("hidden");
}
