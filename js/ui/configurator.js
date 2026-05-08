var Configurator = {
    init() {
        this.form = document.getElementById('trip-form');
        this.destinationInput = document.getElementById('destination');
        this.suggestionsBox = document.getElementById('dest-suggestions');
        this.vibeTags = document.querySelectorAll('#vibe-tags .tag');
        this.btnGenerate = document.getElementById('btn-generate');
        
        this.bindEvents();
    },

    bindEvents() {
        // Tag selection
        this.vibeTags.forEach(tag => {
            tag.addEventListener('click', () => {
                tag.classList.toggle('active');
            });
        });

        // Destination suggestions
        this.destinationInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            if (val.length < 2) {
                this.suggestionsBox.classList.add('hidden');
                return;
            }

            const matches = DESTINATIONS.filter(d => d.name.toLowerCase().includes(val));
            this.renderSuggestions(matches);
        });

        // Form submit
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleGenerate();
        });
    },

    renderSuggestions(matches) {
        if (matches.length === 0) {
            this.suggestionsBox.classList.add('hidden');
            return;
        }

        this.suggestionsBox.innerHTML = matches.map(m => `
            <div class="suggestion-item" data-id="${m.id}">${m.name}</div>
        `).join('');
        
        this.suggestionsBox.classList.remove('hidden');

        // Add click events to suggestions
        this.suggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                this.destinationInput.value = item.textContent;
                this.suggestionsBox.classList.add('hidden');
            });
        });
    },

    handleGenerate() {
        const vibes = Array.from(this.vibeTags)
            .filter(t => t.classList.contains('active'))
            .map(t => t.dataset.val);

        const prefs = {
            destination: this.destinationInput.value,
            startDate: document.getElementById('date-start').value,
            endDate: document.getElementById('date-end').value,
            travelers: document.getElementById('travelers').value,
            budget: document.getElementById('budget').value,
            pace: parseInt(document.getElementById('pace').value),
            vibes: vibes,
            isVegetarian: document.getElementById('diet-veg').checked,
            isAccessible: document.getElementById('req-acc').checked
        };

        // Show spinner
        this.btnGenerate.querySelector('.spinner').classList.remove('hidden');
        this.btnGenerate.querySelector('span').textContent = 'Planning...';

        // Simulate network delay
        setTimeout(() => {
            try {
                const trip = Generator.generate(prefs);
                if (trip) {
                    App.onTripGenerated(trip, prefs);
                } else {
                    alert('Destination not found. Try Tokyo, Japan; Paris, France; or Bali, Indonesia!');
                }
            } catch (err) {
                console.error('Generation error:', err);
                alert('Oops! Something went wrong while planning your trip. Please check the console for details.');
            } finally {
                // Always hide spinner
                this.btnGenerate.querySelector('.spinner').classList.add('hidden');
                this.btnGenerate.querySelector('span').textContent = 'Generate Itinerary';
            }
        }, 1200);
    }
};
