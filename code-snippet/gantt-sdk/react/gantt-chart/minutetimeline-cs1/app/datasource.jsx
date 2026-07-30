export const data = [
    { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019 08:00'), EndDate: new Date('04/02/2019 10:00') },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019 08:00'), Duration: 30, Progress: 50, ParentID: 1 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019 08:30'), Duration: 30, Progress: 50, ParentID: 1 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019 09:00'), Duration: 30, Predecessor: '2FS', Progress: 50, ParentID: 1 },
    { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019 10:00'), EndDate: new Date('04/02/2019 12:00') },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/02/2019 10:00'), Duration: 30, Progress: 50, ParentID: 5 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/02/2019 10:30'), Duration: 30, Progress: 50, ParentID: 5 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/02/2019 11:00'), Duration: 30, Predecessor: '6FS', Progress: 50, ParentID: 5 }
];
