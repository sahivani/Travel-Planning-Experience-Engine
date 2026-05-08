var ACTIVITIES = [
    // TOKYO
    { id: 't1', name: 'Tsukiji Outer Market Tour', destId: 'tokyo', tags: ['food', 'culture'], duration: 3, cost: 50, timeOfDay: 'morning' },
    { id: 't2', name: 'Shibuya Crossing & Hachiko', destId: 'tokyo', tags: ['culture', 'nightlife'], duration: 1, cost: 0, timeOfDay: 'afternoon' },
    { id: 't3', name: 'Robot Restaurant Show', destId: 'tokyo', tags: ['nightlife', 'adventure'], duration: 2, cost: 80, timeOfDay: 'evening' },
    { id: 't4', name: 'Asakusa Senso-ji Temple', destId: 'tokyo', tags: ['culture'], duration: 2, cost: 0, timeOfDay: 'morning' },
    { id: 't5', name: 'Akihabara Electric Town', destId: 'tokyo', tags: ['culture', 'nightlife'], duration: 3, cost: 20, timeOfDay: 'afternoon' },
    { id: 't6', name: 'Shinjuku Golden Gai', destId: 'tokyo', tags: ['nightlife', 'food'], duration: 3, cost: 40, timeOfDay: 'evening' },
    { id: 't7', name: 'Meiji Jingu Shrine', destId: 'tokyo', tags: ['culture', 'nature'], duration: 2, cost: 0, timeOfDay: 'morning' },
    { id: 't8', name: 'Harajuku Takeshita Street', destId: 'tokyo', tags: ['culture', 'food'], duration: 2, cost: 15, timeOfDay: 'afternoon' },
    { id: 't9', name: 'TeamLab Borderless', destId: 'tokyo', tags: ['culture', 'adventure'], duration: 3, cost: 35, timeOfDay: 'evening' },

    // PARIS
    { id: 'p1', name: 'Louvre Museum Visit', destId: 'paris', tags: ['culture'], duration: 4, cost: 20, timeOfDay: 'morning' },
    { id: 'p2', name: 'Eiffel Tower Picnic', destId: 'paris', tags: ['relaxation', 'food'], duration: 2, cost: 30, timeOfDay: 'afternoon' },
    { id: 'p3', name: 'Seine River Cruise', destId: 'paris', tags: ['culture', 'relaxation'], duration: 1.5, cost: 15, timeOfDay: 'evening' },
    { id: 'p4', name: 'Montmartre & Sacré-Cœur', destId: 'paris', tags: ['culture', 'food'], duration: 3, cost: 0, timeOfDay: 'morning' },
    { id: 'p5', name: 'Palace of Versailles', destId: 'paris', tags: ['culture', 'nature'], duration: 5, cost: 25, timeOfDay: 'afternoon' },
    { id: 'p6', name: 'Latin Quarter Walk', destId: 'paris', tags: ['culture', 'food'], duration: 2, cost: 10, timeOfDay: 'evening' },

    // BALI
    { id: 'b1', name: 'Tegalalang Rice Terrace', destId: 'bali', tags: ['nature', 'adventure'], duration: 2, cost: 5, timeOfDay: 'morning' },
    { id: 'b2', name: 'Sacred Monkey Forest', destId: 'bali', tags: ['nature', 'adventure'], duration: 2, cost: 5, timeOfDay: 'afternoon' },
    { id: 'b3', name: 'Uluwatu Temple Sunset', destId: 'bali', tags: ['culture', 'nature'], duration: 3, cost: 10, timeOfDay: 'evening' },
    { id: 'b4', name: 'Ubud Art Market', destId: 'bali', tags: ['culture', 'food'], duration: 2, cost: 0, timeOfDay: 'morning' },
    { id: 'b5', name: 'Mount Batur Sunrise Hike', destId: 'bali', tags: ['nature', 'adventure'], duration: 5, cost: 45, timeOfDay: 'morning' },
    { id: 'b6', name: 'Seminyak Beach Relax', destId: 'bali', tags: ['relaxation', 'nature'], duration: 4, cost: 0, timeOfDay: 'afternoon' },

    // NEW YORK
    { id: 'ny1', name: 'Empire State Building', destId: 'new-york', tags: ['culture', 'adventure'], duration: 2, cost: 45, timeOfDay: 'morning' },
    { id: 'ny2', name: 'Central Park Bike Tour', destId: 'new-york', tags: ['nature', 'relaxation'], duration: 3, cost: 25, timeOfDay: 'afternoon' },
    { id: 'ny3', name: 'Broadway Show', destId: 'new-york', tags: ['culture', 'nightlife'], duration: 3, cost: 120, timeOfDay: 'evening' },
    { id: 'ny4', name: 'Statue of Liberty', destId: 'new-york', tags: ['culture'], duration: 4, cost: 30, timeOfDay: 'morning' },
    { id: 'ny5', name: 'The Met Museum', destId: 'new-york', tags: ['culture'], duration: 4, cost: 25, timeOfDay: 'afternoon' },
    { id: 'ny6', name: 'Times Square Dinner', destId: 'new-york', tags: ['food', 'nightlife'], duration: 2, cost: 60, timeOfDay: 'evening' },

    // ROME
    { id: 'r1', name: 'Colosseum & Forum', destId: 'rome', tags: ['culture'], duration: 4, cost: 35, timeOfDay: 'morning' },
    { id: 'r2', name: 'Vatican Museums', destId: 'rome', tags: ['culture'], duration: 4, cost: 30, timeOfDay: 'afternoon' },
    { id: 'r3', name: 'Trastevere Dinner', destId: 'rome', tags: ['food', 'nightlife'], duration: 3, cost: 40, timeOfDay: 'evening' },
    { id: 'r4', name: 'Pantheon & Trevi Fountain', destId: 'rome', tags: ['culture'], duration: 2, cost: 0, timeOfDay: 'morning' },
    { id: 'r5', name: 'Villa Borghese Gardens', destId: 'rome', tags: ['nature', 'relaxation'], duration: 3, cost: 15, timeOfDay: 'afternoon' },
    { id: 'r6', name: 'Piazza Navona Evening', destId: 'rome', tags: ['culture', 'food'], duration: 2, cost: 20, timeOfDay: 'evening' }
];

if (typeof module !== 'undefined') module.exports = ACTIVITIES;
