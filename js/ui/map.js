var MapModule = {
    init() {
        this.map = L.map('map', {
            zoomControl: false,
            attributionControl: false
        }).setView([20, 0], 2);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19
        }).addTo(this.map);
    },

    update(dest) {
        if (!dest || !dest.coords) return;
        
        this.map.flyTo(dest.coords, 12, {
            duration: 2
        });

        // Add marker
        if (this.currentMarker) this.map.removeLayer(this.currentMarker);
        
        this.currentMarker = L.marker(dest.coords).addTo(this.map);
        this.currentMarker.bindPopup(`<b>${dest.name}</b><br>${dest.description}`).openPopup();
    }
};
