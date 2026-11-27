export let GanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Prepare project plan',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50,
        Segments: [
            { StartDate: new Date('04/02/2019'), Duration: 2 },
            { StartDate: new Date('04/05/2019'), Duration: 2 }
        ]
    }
];
