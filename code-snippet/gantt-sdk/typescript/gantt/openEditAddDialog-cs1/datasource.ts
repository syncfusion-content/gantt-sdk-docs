export let editingData: Object[] = [
    { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    {
        TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0,
        ParentID: 1, Progress: 30, resources: [1], info: 'Measure the total property area alloted for construction'
    },
    {
        TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Predecessor: '2',
        resources: [2, 3, 5], info: 'Obtain an engineered soil test of lot where construction is planned.' + 'From an engineer or company specializing in soil testing'
    },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, ParentID: 1, Predecessor: '3', Progress: 30 },
    { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    {
        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3,
        ParentID: 5, Predecessor: '4', Progress: 30, resources: 4, info: 'Develop floor plans and obtain a materials list for estimations'
    },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Predecessor: '6', resources: [4, 8], info: '' },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, ParentID: 5, Predecessor: '7', resources: [12, 5], info: '' },
    {
        TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30, resources: [12],
        info: 'If required obtain approval from HOA (homeowners association) or ARC (architectural review committee)'
    },
    { TaskID: 10, TaskName: 'Project Approval and kick off', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' },
    { TaskID: 11, TaskName: 'Site Work', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019') },
    {
        TaskID: 12, TaskName: 'Clear the building site', StartDate: new Date('04/04/2019'), Duration: 2, ParentID: 11, Progress: 30,
        Predecessor: '9', resources: [6, 7], info: 'Clear the building site (demolition of existing home if necessary)'
    },
    { TaskID: 13, TaskName: 'Install temporary power service', StartDate: new Date('04/04/2019'), Duration: 2, ParentID: 11, Predecessor: '12', resources: [6, 7], info: '' },
    { TaskID: 14, TaskName: 'Foundation', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019') },
    {
        TaskID: 15, TaskName: 'Excavate for foundations', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 14, Progress: 30,
        Predecessor: '13', resources: [2, 8], info: 'Excavate the foundation and dig footers (Scope of work is dependent of foundation designed by engineer)'
    },
    {
        TaskID: 16, TaskName: 'Dig footer', StartDate: new Date('04/04/2019'),
        Duration: 2, ParentID: 14, Predecessor: '15FF', resources: [8], info: ''
    },
    {
        TaskID: 17, TaskName: 'Install plumbing grounds', StartDate: new Date('04/04/2019'), Duration: 4, ParentID: 14,
        Progress: 30, Predecessor: '15', resources: [9], info: ''
    },
    {
        TaskID: 18, TaskName: 'Pour a foundation and footer with concrete', StartDate: new Date('04/04/2019'),
        Duration: 1, ParentID: 14, Predecessor: '17', resources: [8, 9, 10], info: ''
    },
    {
        TaskID: 19, TaskName: 'Cure basement walls', StartDate: new Date('04/04/2019'), Duration: 4, ParentID: 14,
        Progress: 30, Predecessor: '18', resources: [10], info: ''
    },
];

export let editingResources: Object[] = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];