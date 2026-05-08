var Scorer = {
    calculate(itinerary, vibes, preferredPace) {
        const allActivities = itinerary.flatMap(day => day.activities);
        const allTags = allActivities.flatMap(a => a.tags);
        
        const tagCounts = {};
        allTags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });

        // Normalize scores to 0-100
        const scores = {
            culture: this.calculateTagScore(tagCounts, 'culture', vibes.includes('culture')),
            food: this.calculateTagScore(tagCounts, 'food', vibes.includes('food')),
            nature: this.calculateTagScore(tagCounts, 'nature', vibes.includes('nature')),
            pace: this.calculatePaceScore(itinerary, preferredPace)
        };

        scores.overall = Math.round((scores.culture + scores.food + scores.nature + scores.pace) / 4);
        
        return scores;
    },

    calculateTagScore(counts, tag, isPreferred) {
        const count = counts[tag] || 0;
        let score = count * 25; // 4 activities of a tag = 100%
        if (isPreferred && count === 0) score = 10; // Penalty if preferred but not found
        return Math.min(score, 100);
    },

    calculatePaceScore(itinerary, preferredPace) {
        const avgActivities = itinerary.length > 0 ? itinerary.flatMap(d => d.activities).length / itinerary.length : 0;
        const actualPace = avgActivities <= 1 ? 1 : (avgActivities <= 2 ? 2 : 3);
        
        const diff = Math.abs(actualPace - preferredPace);
        return Math.max(100 - (diff * 40), 0);
    }
};
