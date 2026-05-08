var Ticker = {
    init() {
        this.ticker = document.getElementById('live-ticker');
    },

    update(trip) {
        const destAlerts = ALERTS.filter(a => a.destId === trip.dest.id);
        
        if (destAlerts.length === 0) {
            this.ticker.textContent = `All systems clear in ${trip.dest.name}. Enjoy your trip!`;
            return;
        }

        const messages = destAlerts.map(a => `[${a.type.toUpperCase()}] ${a.message}`);
        this.ticker.textContent = messages.join(' • ');
    },

    setMessage(msg) {
        this.ticker.textContent = msg;
    }
};
