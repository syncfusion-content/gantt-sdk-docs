export let taskData = [
    { TaskId: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), },
    { TaskId: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 90, ParentId: 1 },
    { TaskId: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 40, ParentId: 1 },
    { TaskId: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 10, ParentId: 1 },
    { TaskId: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), },
    { TaskId: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 85, ParentId: 5 },
    { TaskId: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 15, ParentId: 5 },
    { TaskId: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 70, ParentId: 5 }
];