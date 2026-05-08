/**
 * WanderLens - Travel Planning & Experience Engine
 * Main Application Entry Point
 */

var App = {
    currentTrip: null,
    currentPrefs: null,

    init() {
        console.log('App: Initializing...');
        
        // Global error catcher
        window.onerror = function(msg, url, line, col, error) {
            console.error('GLOBAL ERROR:', msg, 'at', url, ':', line);
            Ticker.setMessage(`[ERROR] System malfunction: ${msg}`);
            return false;
        };

        try {
            Configurator.init();
            ItineraryView.init();
            MapModule.init();
            Widgets.init();
            Ticker.init();
            ExportModule.init();

            this.setInitialDates();
            console.log('App: Initialization complete.');
        } catch (err) {
            console.error('App: Initialization failed', err);
        }
    },

    setInitialDates() {
        try {
            const today = new Date();
            const nextWeek = new Date();
            nextWeek.setDate(today.getDate() + 7);
            const returnDate = new Date();
            returnDate.setDate(today.getDate() + 14);

            const startInput = document.getElementById('date-start');
            const endInput = document.getElementById('date-end');
            
            if (startInput) startInput.value = nextWeek.toISOString().split('T')[0];
            if (endInput) endInput.value = returnDate.toISOString().split('T')[0];
        } catch (err) {
            console.warn('App: Could not set initial dates', err);
        }
    },

    onTripGenerated(trip, prefs) {
        console.log('App: Handling generated trip', trip);
        this.currentTrip = trip;
        this.currentPrefs = prefs;

        // Update UI components with individual error handling
        this.safeUpdate('ItineraryView', () => {
            ItineraryView.render(trip);
            ItineraryView.renderWarnings(Constraints.check(trip, prefs));
        });

        this.safeUpdate('MapModule', () => {
            MapModule.update(trip.dest);
        });

        this.safeUpdate('Widgets', () => {
            Widgets.update(trip, prefs);
        });

        this.safeUpdate('Ticker', () => {
            Ticker.update(trip);
        });

        if (window.innerWidth < 900) {
            document.querySelector('.itinerary-view').scrollIntoView({ behavior: 'smooth' });
        }
    },

    safeUpdate(componentName, updateFn) {
        try {
            console.log(`App: Updating ${componentName}...`);
            updateFn();
        } catch (err) {
            console.error(`App: Failed to update ${componentName}`, err);
            // Don't re-throw, allow other components to try updating
        }
    }
};

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
