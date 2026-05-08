var ItineraryView = {
    init() {
        this.content = document.getElementById('itinerary-content');
        this.title = document.getElementById('itinerary-title');
        this.warnings = document.getElementById('constraint-warnings');
        this.viewToggles = document.querySelectorAll('.view-toggles button');
        
        this.currentView = 'compact';
        this.bindEvents();
    },

    bindEvents() {
        this.viewToggles.forEach(btn => {
            btn.addEventListener('click', () => {
                this.viewToggles.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentView = btn.dataset.view;
                // Re-render if we have data
                if (App.currentTrip) this.render(App.currentTrip);
            });
        });
    },

    render(trip) {
        this.title.textContent = `Trip to ${trip.dest.name}`;
        
        if (trip.days.length === 0) {
            this.content.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">🌍</div>
                    <p>No activities found for this trip.</p>
                </div>
            `;
            return;
        }

        this.content.innerHTML = trip.days.map(day => `
            <div class="day-card animate-slide-up">
                <div class="day-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Day ${day.dayNum} - ${day.date}
                </div>
                <div class="activities-list" id="day-${day.dayNum}-activities">
                    ${day.activities.map(act => this.renderActivity(act)).join('')}
                </div>
            </div>
        `).join('');

        // Initialize Sortable for each day
        if (typeof Sortable !== 'undefined') {
            trip.days.forEach(day => {
                const el = document.getElementById(`day-${day.dayNum}-activities`);
                if (el) {
                    new Sortable(el, {
                        animation: 150,
                        ghostClass: 'sortable-ghost'
                    });
                }
            });
        }
    },

    renderActivity(act) {
        const icon = act.tags.includes('food') ? '🍴' : (act.tags.includes('culture') ? '🏛️' : '✨');
        
        return `
            <div class="activity-item" data-id="${act.id}">
                <div class="activity-time">${act.timeOfDay}</div>
                <div class="activity-icon">${icon}</div>
                <div class="activity-info">
                    <div class="activity-name">${act.name}</div>
                    ${this.currentView === 'detailed' ? `<div class="activity-meta">${act.duration}h • $${act.cost}</div>` : ''}
                </div>
            </div>
        `;
    },

    renderWarnings(warnings) {
        this.warnings.innerHTML = warnings.map(w => `
            <div class="warning-alert animate-fade-in ${w.type}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span>${w.message}</span>
            </div>
        `).join('');
    }
};
