var ExportModule = {
    init() {
        document.getElementById('btn-print').addEventListener('click', () => {
            window.print();
        });

        document.getElementById('btn-share').addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'My WanderLens Trip',
                    text: 'Check out my travel itinerary!',
                    url: window.location.href
                }).catch(console.error);
            } else {
                alert('Sharing is not supported on this browser. Try copying the URL!');
            }
        });
    }
};
