function calculatePremium(carValue, riskRating) {
    try {

        const yearlyPremium = (carValue * riskRating) / 100;
        const monthlyPremium = yearlyPremium / 12;

        return {
            monthly_premium: parseFloat(monthlyPremium.toFixed(2)),
            yearly_premium: parseFloat(yearlyPremium.toFixed(2))
        };



    } catch (error) {
        return { error: error.message };
    }
}

    