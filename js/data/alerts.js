var ALERTS = [
    {
        id: 'al1',
        destId: 'tokyo',
        type: 'weather',
        message: 'Sudden rain shower expected tomorrow afternoon.',
        severity: 'low'
    },
    {
        id: 'al2',
        destId: 'bali',
        type: 'safety',
        message: 'High volcanic activity reported near Mt. Agung. Avoid the area.',
        severity: 'high'
    },
    {
        id: 'al3',
        destId: 'paris',
        type: 'event',
        message: 'Public transport strike scheduled for this Friday.',
        severity: 'medium'
    }
];

if (typeof module !== 'undefined') module.exports = ALERTS;
