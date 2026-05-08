var Widgets = {
    init() {
        this.weatherContent = document.getElementById('weather-content');
        this.weatherDest = document.getElementById('weather-dest');
        this.statCost = document.getElementById('stat-cost');
        this.statCount = document.getElementById('stat-count');
        this.budgetFill = document.getElementById('budget-fill');
        this.headerScore = document.getElementById('header-score');
    },

    update(trip, prefs) {
        // Update Weather (Mock)
        this.weatherDest.textContent = trip.dest.name.split(',')[0];
        this.renderWeather();

        // Update Stats
        this.statCost.textContent = `$${trip.totalCost}`;
        this.statCount.textContent = trip.days.flatMap(d => d.activities).length;
        
        const budgetLimit = prefs.budget === 'budget' ? 500 : (prefs.budget === 'mid' ? 1500 : 5000);
        const budgetPct = Math.min((trip.totalCost / budgetLimit) * 100, 100);
        this.budgetFill.style.width = `${budgetPct}%`;
        this.budgetFill.style.background = budgetPct > 90 ? 'var(--color-error)' : 'var(--color-accent)';

        // Update Scores
        this.headerScore.textContent = trip.scores.overall;
        document.getElementById('score-culture').style.width = `${trip.scores.culture}%`;
        document.getElementById('score-food').style.width = `${trip.scores.food}%`;
        document.getElementById('score-pace').style.width = `${trip.scores.pace}%`;
    },

    renderWeather() {
        const conditions = ['☀️', '🌤️', '⛅', '🌦️', '🌧️'];
        let html = '';
        for (let i = 0; i < 4; i++) {
            const cond = conditions[Math.floor(Math.random() * conditions.length)];
            const temp = Math.floor(Math.random() * 15) + 15;
            html += `
                <div class="weather-day">
                    <div class="weather-icon">${cond}</div>
                    <div class="weather-temp">${temp}°</div>
                </div>
            `;
        }
        this.weatherContent.innerHTML = html;
    }
};
