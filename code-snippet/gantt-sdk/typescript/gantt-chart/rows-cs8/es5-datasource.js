var ganttData = [
  { TaskID: 1, TaskName: 'Project Initiation', ParentID: null, StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', ParentID: 1, StartDate: new Date('04/02/2019'), Duration: 4, Progress: 30 },
  { TaskID: 3, TaskName: 'Perform Soil test', ParentID: 1, StartDate: new Date('04/02/2019'), Duration: 4, Progress: 80 },
  { TaskID: 4, TaskName: 'Soil test approval', ParentID: 1, StartDate: new Date('04/02/2019'), Duration: 1, Progress: 100 },
  { TaskID: 5, TaskName: 'Project Estimation', ParentID: null, StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 6, TaskName: 'Develop floor plan for estimation', ParentID: 5, StartDate: new Date('04/04/2019'), Duration: 3, Progress: 40 },
  { TaskID: 7, TaskName: 'List materials', ParentID: 5, StartDate: new Date('04/04/2019'), Duration: 3, Progress: 90 },
  { TaskID: 8, TaskName: 'Estimation approval', ParentID: 5, StartDate: new Date('04/04/2019'), Duration: 3, Progress: 20 }
];
