var DESTINATIONS = [
    {
        id: 'tokyo',
        name: 'Tokyo, Japan',
        coords: [35.6762, 139.6503],
        tags: ['culture', 'food', 'nightlife', 'adventure'],
        budget: 'luxury',
        pace: 3,
        description: 'A neon-lit metropolis where ancient tradition meets futuristic innovation.'
    },
    {
        id: 'paris',
        name: 'Paris, France',
        coords: [48.8566, 2.3522],
        tags: ['culture', 'food', 'relaxation'],
        budget: 'luxury',
        pace: 2,
        description: 'The City of Light, famous for its art, gastronomy, and romantic atmosphere.'
    },
    {
        id: 'bali',
        name: 'Bali, Indonesia',
        coords: [-8.3405, 115.092],
        tags: ['nature', 'relaxation', 'adventure', 'culture'],
        budget: 'budget',
        pace: 1,
        description: 'A tropical paradise known for its volcanic mountains, iconic rice paddies, and beaches.'
    },
    {
        id: 'new-york',
        name: 'New York City, USA',
        coords: [40.7128, -74.006],
        tags: ['culture', 'food', 'nightlife'],
        budget: 'luxury',
        pace: 3,
        description: 'The Big Apple, a global hub of culture, fashion, and finance.'
    },
    {
        id: 'rome',
        name: 'Rome, Italy',
        coords: [41.9028, 12.4964],
        tags: ['culture', 'food'],
        budget: 'mid',
        pace: 2,
        description: 'The Eternal City, home to nearly 3,000 years of globally influential art, architecture and culture.'
    }
];

if (typeof module !== 'undefined') module.exports = DESTINATIONS;
