export let data: Object[] = [
    { TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019') },
    {
        TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3, ParentID: 1,
        Progress: 30, Work: 10, Resources: [{ ResourceId: 1, ResourceUnit: 50 }]
    },
    {
        TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4, ParentID: 1,
        Resources: [{ ResourceId: 2, ResourceUnit: 70 }], Progress: 30, Work: 20
    },
    {
        TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 4, ParentID: 1,
        Resources: [{ ResourceId: 1, ResourceUnit: 75 }], Predecessor: 2, Progress: 30, Work: 10,
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
        Duration: 3, ParentID: 5, Progress: 30, Resources: [{ ResourceId: 2, ResourceUnit: 70 }], Predecessor: '3FS+2', Work: 30
    },
    {
        TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/08/2019'), Duration: 12, ParentID: 5,
        Resources: [{ ResourceId: 6, ResourceUnit: 40 }], Progress: 30, Work: 40
    },
    {
        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/03/2019'),
        Duration: 10, ParentID: 5, Resources: [{ ResourceId: 5, ResourceUnit: 75 }], Progress: 30, Work: 60,
    },
    {
        TaskID: 9, TaskName: 'Excavate for foundations', StartDate: new Date('04/01/2019'),
        Duration: 4, ParentID: 5, Progress: 30, Resources: [4]
    },
    {
        TaskID: 10, TaskName: 'Install plumbing grounds', StartDate: new Date('04/08/2019'), Duration: 4, ParentID: 5,
        Progress: 30, Predecessor: '9SS', Resources: [3]
    },
    {
        TaskID: 11, TaskName: 'Dig footer', StartDate: new Date('04/08/2019'),
        Duration: 3, ParentID: 5, Resources: [2]
    },
    {
        TaskID: 12, TaskName: 'Electrical utilities', StartDate: new Date('04/03/2019'),
        Duration: 4, ParentID: 5, Progress: 30, Resources: [3]
    },
    {
        TaskID: 13, TaskName: 'Sign contract', StartDate: new Date('04/04/2019'), Duration: 2,
        Progress: 30,
    },
    {
        TaskID: 14, TaskName: 'Plan timeline', StartDate: new Date('02/04/2019'), EndDate: new Date('02/10/2019'),
        Duration: 10, Progress: '60',
        Segments: [
            { StartDate: new Date('02/04/2019'), Duration: 2, SegmentTask: "segment 1" },
            { StartDate: new Date('02/05/2019'), Duration: 5, SegmentTask: "segment 2" },
            { StartDate: new Date('02/08/2019'), Duration: 3, SegmentTask: "segment 3" }
        ]
    },
];
export let resourceCollection: Object[] = [
    { ResourceId: 1, ResourceName: 'Martin Tamer', ResourceGroup: 'Planning Team', NewData: "Notes forMartin Tamer" },
    { ResourceId: 2, ResourceName: 'Rose Fuller', ResourceGroup: 'Testing Team', NewData: "Notes Rose Fuller" },
    { ResourceId: 3, ResourceName: 'Margaret Buchanan', ResourceGroup: 'Approval Team', NewData: "Notes Margaret Buchanan" },
    { ResourceId: 4, ResourceName: 'Fuller King', ResourceGroup: 'Development Team', NewData: "Notes Fuller King" },
    { ResourceId: 5, ResourceName: 'Davolio Fuller', ResourceGroup: 'Approval Team', NewData: "Notes Davolio Fuller" },
    { ResourceId: 6, ResourceName: 'Van Jack', ResourceGroup: 'Development Team', NewData: "Notes Van Jack" }
];