export let GanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Define the product and its usage',
        StartDate: new Date('04/05/2026'),
        Duration: 4,
        Progress: 50
    },
    {
        TaskID: 2,
        TaskName: 'Prepare project plan',
        StartDate: new Date('04/05/2026'),
        Duration: 6,
        Progress: 50,
        ParentID: 1,
        Segments: [
            { StartDate: new Date('04/07/2026'), Duration: 4 },
            { StartDate: new Date('04/09/2026'), Duration: 2 }
        ]
    },
    {
        TaskID: 3,
        TaskName: 'Finalize project plan',
        StartDate: new Date('04/07/2026'),
        Duration: 7,
        Progress: 50,
        ParentID: 1
    },
    {
        TaskID: 4,
        TaskName: 'Allocate resources',
        StartDate: new Date('04/09/2026'),
        Duration: 10,
        Progress: 70
    },
    {
        TaskID: 5,
        TaskName: 'Design the product',
        StartDate: new Date('04/06/2026'),
        Duration: 7,
        Progress: 70,
        ParentID: 4,
        Segments: [
            { StartDate: new Date('04/05/2026'), Duration: 2 },
            { StartDate: new Date('04/07/2026'), Duration: 2 },
            { StartDate: new Date('04/11/2026'), Duration: 2 }
        ]
    },
    {
        TaskID: 6,
        TaskName: 'Develop the product',
        StartDate: new Date('04/07/2026'),
        Duration: 7,
        Progress: 50,
        ParentID: 4
    },
    {
        TaskID: 7,
        TaskName: 'Test the product',
        StartDate: new Date('04/15/2026'),
        Duration: 0,
        Progress: 50,
        ParentID: 4
    }
];
