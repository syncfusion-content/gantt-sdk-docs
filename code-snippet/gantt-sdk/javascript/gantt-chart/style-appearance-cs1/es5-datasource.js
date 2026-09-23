var GanttData = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('01/06/2026'),
        EndDate: new Date('01/09/2026')
    },
    {
        TaskID: 2,
        TaskName: 'Identify Site location',
        StartDate: new Date('01/06/2026'),
        Duration: 0,
        Progress: 30,
        ParentID: 1
    },
    {
        TaskID: 3,
        TaskName: 'Perform soil test',
        StartDate: new Date('01/06/2026'),
        EndDate: new Date('01/09/2026'),
        BaselineStartDate: new Date('01/06/2026'),
        BaselineEndDate: new Date('01/07/2026'),
        Progress: 40,
        ParentID: 1,
        Predecessor: '2'
    },
    {
        TaskID: 4,
        TaskName: 'Soil test approval',
        StartDate: new Date('01/06/2026'),
        Duration: 0,
        BaselineStartDate: new Date(2026, 0, 5, 8, 0, 0),
        BaselineEndDate: new Date(2026, 0, 5, 8, 0, 0),
        Progress: 30,
        ParentID: 1,
        Predecessor: '3'
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('01/06/2026'),
        EndDate: new Date('01/17/2026')
    },
    {
        TaskID: 6,
        TaskName: 'Develop floor plan for estimation',
        StartDate: new Date('01/06/2026'),
        EndDate: new Date('01/09/2026'),
        Progress: 30,
        ParentID: 5,
        Predecessor: '4'
    },
    {
        TaskID: 7,
        TaskName: 'List materials',
        StartDate: new Date('01/06/2026'),
        EndDate: new Date('01/09/2026'),
        BaselineStartDate: new Date('01/09/2026'),
        BaselineEndDate: new Date('01/14/2026'),
        Progress: 40,
        ParentID: 5,
        Predecessor: '6'
    },
    {
        TaskID: 8,
        TaskName: 'Estimation approval',
        StartDate: new Date('01/06/2026'),
        Duration: 0,
        Progress: 30,
        ParentID: 5,
        Predecessor: '7'
    }
];