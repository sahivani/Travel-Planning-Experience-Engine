var Constraints = {
    check(itinerary, preferences) {
        const warnings = [];
        
        // Budget check
        const totalCost = Generator.calculateTotalCost(itinerary);
        const budgetLimit = preferences.budget === 'budget' ? 500 : (preferences.budget === 'mid' ? 1500 : 5000);
        
        if (totalCost > budgetLimit) {
            warnings.push({
                type: 'budget',
                message: `This trip exceeds your estimated ${preferences.budget} budget. Total: $${totalCost}`
            });
        }

        // Travel time check (mock)
        if (itinerary.length > 14) {
            warnings.push({
                type: 'duration',
                message: 'Extended trips may require visa checks for some travelers.'
            });
        }

        return warnings;
    }
};
