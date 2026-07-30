
export const ganttData = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019') },
  { TaskID: 2, ParentID: 1, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
  { TaskID: 3, ParentID: 1, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
  { TaskID: 4, ParentID: 1, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },

  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019') },
  { TaskID: 6, ParentID: 5, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
  { TaskID: 7, ParentID: 5, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
  { TaskID: 8, ParentID: 5, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
];
