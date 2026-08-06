export const data: object[] = [
    { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), Progress: 30 },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/03/2019'), Progress: 50, ParentID: 1 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/04/2019'), Progress: 50, ParentID: 1 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/05/2019'), Progress: 50, ParentID: 1 },
    { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/06/2019'), Progress: 60 },
    { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/07/2019'), Progress: 70, ParentID: 5 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/08/2019'), Progress: 80, ParentID: 5 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/09/2019'), Progress: 90, ParentID: 5 }
];