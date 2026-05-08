var Generator = {
    generate(preferences) {
        console.log('Generator: Received preferences', preferences);
        
        const { destination, startDate, endDate, budget, travelers, vibes, pace } = preferences;
        
        if (!destination) {
            console.error('Generator: Destination is missing');
            return null;
        }

        // Find destination object
        const dest = DESTINATIONS.find(d => 
            d.name.toLowerCase().includes(destination.toLowerCase()) || 
            destination.toLowerCase().includes(d.id)
        );
        
        if (!dest) {
            console.warn('Generator: Destination object not found for', destination);
            return null;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);
        
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            console.error('Generator: Invalid dates provided', startDate, endDate);
            throw new Error('Please select valid departure and return dates.');
        }

        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        const numDays = Math.max(1, Math.min(diffDays, 14));

        console.log(`Generator: Planning ${numDays} days for ${dest.name}`);

        const itinerary = [];
        const possibleActivities = ACTIVITIES.filter(a => a.destId === dest.id);

        for (let i = 0; i < numDays; i++) {
            const currentDate = new Date(start);
            currentDate.setDate(start.getDate() + i);
            
            const day = {
                dayNum: i + 1,
                date: currentDate.toDateString(),
                activities: []
            };

            const slots = ['morning'];
            if (pace >= 2) slots.push('afternoon');
            if (pace >= 3) slots.push('evening');

            slots.forEach(slot => {
                const activity = this.pickBestActivity(possibleActivities, slot, vibes || [], itinerary);
                if (activity) {
                    day.activities.push(activity);
                }
            });

            itinerary.push(day);
        }

        console.log('Generator: Itinerary created', itinerary);

        return {
            dest,
            days: itinerary,
            totalCost: this.calculateTotalCost(itinerary),
            scores: Scorer.calculate(itinerary, vibes || [], pace)
        };
    },

    pickBestActivity(activities, slot, vibes, itinerary) {
        let candidates = activities.filter(a => a.timeOfDay === slot);
        candidates = candidates.filter(a => !this.isAlreadySelected(itinerary, a.id));
        
        if (candidates.length === 0) {
            candidates = activities.filter(a => !this.isAlreadySelected(itinerary, a.id));
            if (candidates.length === 0) return null;
        }

        candidates.sort((a, b) => {
            const aTags = a.tags || [];
            const bTags = b.tags || [];
            const aMatch = aTags.filter(t => vibes.includes(t)).length;
            const bMatch = bTags.filter(t => vibes.includes(t)).length;
            return bMatch - aMatch;
        });

        return candidates[0];
    },

    isAlreadySelected(itinerary, activityId) {
        return itinerary.some(day => day.activities && day.activities.some(a => a.id === activityId));
    },

    calculateTotalCost(itinerary) {
        return itinerary.reduce((total, day) => {
            return total + (day.activities ? day.activities.reduce((dayTotal, a) => dayTotal + (a.cost || 0), 0) : 0);
        }, 0);
    }
};
