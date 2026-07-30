export let data: Object[] = [
    {
        TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 0,
        ParentID: 1, Progress: 30, resources: [1], info: 'Measure the total property area alloted for construction'
    },
    {
        TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Predecessor: '2',
        resources: [2, 3, 5], info: 'Obtain an engineered soil test of lot where construction is planned.' +
            'From an engineer or company specializing in soil testing'
    },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, ParentID: 1, Predecessor: '3', Progress: 30 },
    {
        TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),
        Duration: 3, ParentID: 5, Predecessor: '4', Progress: 30, resources: 4,
        info: 'Develop floor plans and obtain a materials list for estimations'
    },
    {
        TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),
        Duration: 3, ParentID: 5, Predecessor: '6', resources: [4, 8], info: ''
    },
    {
        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),
        Duration: 0, ParentID: 5, Predecessor: '7', resources: [12, 5], info: ''
    },
    {
        TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/04/2019'), Duration: 1,
        Predecessor: '8', Progress: 30, resources: [12],
        info: 'If required obtain approval from HOA (homeowners association) or ARC (architectural review committee)'
    },
    {
        TaskID: 10, TaskName: 'Project approval and kick off', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'),
        Duration: 0, Predecessor: '9'
    },
    {
        TaskID: 11, TaskName: 'Site work', StartDate: new Date('05/04/2019'), EndDate: new Date('05/21/2019'),
    },
    {
        TaskID: 12, TaskName: 'Clear the building site', StartDate: new Date('05/04/2019'),
        Duration: 2, ParentID: 11, Progress: 30, Predecessor: '9', resources: [6, 7],
        info: 'Clear the building site (demolition of existing home if necessary)'
    },
    {
        TaskID: 13, TaskName: 'Install temporary power service', StartDate: new Date('05/15/2019'),
        Duration: 2, ParentID: 11, Predecessor: '12', resources: [6, 7], info: ''
    },
    { TaskID: 14, TaskName: 'Foundation', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019') },
    {
        TaskID: 15, TaskName: 'Excavate for foundations', StartDate: new Date('04/04/2019'),
        Duration: 3, ParentID: 14, Progress: 30, Predecessor: '13', resources: [2, 8],
        info: 'Excavate the foundation and dig footers (Scope of work is dependent of foundation designed by engineer)'
    },
    {
        TaskID: 16, TaskName: 'Dig footer', StartDate: new Date('04/04/2019'),
        Duration: 2, ParentID: 14, Predecessor: '15FF', resources: [8], info: ''
    },
    {
        TaskID: 17, TaskName: 'Install plumbing grounds', StartDate: new Date('04/04/2019'), Duration: 4,
        ParentID: 14, Progress: 30, Predecessor: '15', resources: [9], info: ''
    },
    {
        TaskID: 18, TaskName: 'Pour a foundation and footer with concrete', StartDate: new Date('04/04/2019'),
        Duration: 1, ParentID: 14, Predecessor: '17', resources: [8, 9, 10], info: ''
    },
    {
        TaskID: 19, TaskName: 'Cure basement walls', StartDate: new Date('04/04/2019'), Duration: 4,
        ParentID: 14, Progress: 30, Predecessor: '18', resources: [10], info: ''
    },
    { TaskID: 20, TaskName: 'Framing', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019') },
    {
        TaskID: 21, TaskName: 'Add load-bearing structure', StartDate: new Date('04/04/2019'),
        Duration: 3, ParentID: 20, Progress: 30, Predecessor: '19', resources: [4, 5],
        info: 'Build the main load-bearing structure out of thick pieces of wood and' +
            'possibly metal I-beams for large spans with few supports'
    },
    {
        TaskID: 22, TaskName: 'Install floor joists', StartDate: new Date('04/04/2019'),
        Duration: 3, ParentID: 20, Predecessor: '21', resources: [2, 3], info: 'Add floor and ceiling joists and install subfloor panels'
    },
    {
        TaskID: 23, TaskName: 'Add ceiling joists', StartDate: new Date('04/04/2019'),
        Duration: 3, ParentID: 20, Progress: 30, Predecessor: '22SS', resources: [5], info: ''
    },
    {
        TaskID: 24, TaskName: 'Install subfloor panels', StartDate: new Date('04/04/2019'),
        Duration: 3, ParentID: 20, Predecessor: '23', resources: [8, 9]
    },
    {
        TaskID: 25, TaskName: 'Frame floor walls', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 20,
        Progress: 30, Predecessor: '24', resources: [10], info: ''
    },
    {
        TaskID: 26, TaskName: 'Frame floor decking', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 20,
        Progress: 30, Predecessor: '25SS', resources: [4, 8], info: ''
    },
    { TaskID: 27, TaskName: 'Exterior finishing', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019') },
    {
        TaskID: 28, TaskName: 'Cover outer walls and roof in OSB', StartDate: new Date('04/04/2019'),
        Duration: 3, ParentID: 27, Progress: 30, Predecessor: '26', resources: [2, 8],
        info: 'Cover outer walls and roof in OSB or plywood and a water-resistive barrier'
    },
    {
        TaskID: 29, TaskName: 'Add water resistive barrier', StartDate: new Date('04/04/2019'),
        Duration: 3, ParentID: 27, Predecessor: '28', resources: [1, 10],
        info: 'Cover the walls with siding, typically vinyl, wood, or brick veneer but possibly stone or other materials'
    },
    {
        TaskID: 30, TaskName: 'Install roof shingles', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 27,
        Progress: 30, Predecessor: '29', resources: [8, 9], info: 'Install roof shingles or other covering for flat roof'
    },
    { TaskID: 31, TaskName: 'Install windows', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 27, Predecessor: '29', resources: 7 },
];