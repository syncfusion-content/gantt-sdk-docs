export let data = [
    {
        TaskID: 1,
        TaskName: 'Project planning',
        StartDate: new Date('04/05/2026'),
        Duration: 10,
        Progress: 70
    },
    {
        TaskID: 2,
        TaskName: 'Requirement gathering',
        StartDate: new Date('04/12/2026'),
        Duration: 4,
        Progress: 100,
        ParentID: 1
    },
    {
        TaskID: 3,
        TaskName: 'Requirements sign-off',
        StartDate: new Date('04/07/2026'),
        Duration: 0,
        Progress: 100,
        ParentID: 1
    },
    {
        TaskID: 4,
        TaskName: 'System design',
        StartDate: new Date('04/09/2026'),
        Duration: 3,
        Progress: 75,
        ParentID: 1
    },
    {
        TaskID: 5,
        TaskName: 'Design review',
        StartDate: new Date('04/11/2026'),
        Duration: 0,
        Progress: 100,
        ParentID: 1
    },
    {
        TaskID: 6,
        TaskName: 'Application delivery',
        StartDate: new Date('04/12/2026'),
        Duration: 7,
        Progress: 58
    },
    {
        TaskID: 7,
        TaskName: 'Development',
        StartDate: new Date('04/12/2026'),
        Duration: 3,
        Progress: 75,
        ParentID: 6
    },
    {
        TaskID: 8,
        TaskName: 'Quality assurance testing',
        StartDate: new Date('04/15/2026'),
        Duration: 2,
        Progress: 0,
        ParentID: 6
    },
    {
        TaskID: 9,
        TaskName: 'Issue resolution',
        StartDate: new Date('04/10/2026'),
        Duration: 4,
        Progress: 100,
        ParentID: 6
    },
    {
        TaskID: 10,
        TaskName: 'Production release',
        StartDate: new Date('04/13/2026'),
        Duration: 0,
        Progress: 90,
        ParentID: 6
    }
];
