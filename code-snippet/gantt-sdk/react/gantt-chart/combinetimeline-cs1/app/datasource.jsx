export let data = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
    },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 120, ParentID: 1, Progress: 50, isParent: false },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 120, ParentID: 1, Progress: 50, resources: [2, 3, 5], isParent: false },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 120, ParentID: 1, Predecessor: "2FS", Progress: 50, isParent: false },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
    },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 120, ParentID: 5, Progress: 50, resources: [4], isParent: false },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 120, ParentID: 5, Progress: 50, resources: [4, 8], isParent: false },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 120, ParentID: 5, Predecessor: "6SS", Progress: 50, resources: [12, 5], isParent: false }
];