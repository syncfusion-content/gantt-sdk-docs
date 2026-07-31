var GanttData = [
  { TaskID: 1, TaskName: 'Project Initiation', ParentID: null, StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', ParentID: 1, StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', ParentID: 1, StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', ParentID: 1, StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '2FS+2days', Progress: 50 },
  { TaskID: 5, TaskName: 'Clear the building site', ParentID: 1, StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '4FF+960m' },
  { TaskID: 6, TaskName: 'Project Estimation', ParentID: null, StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 7, TaskName: 'Develop floor plan for estimation', ParentID: 6, StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
  { TaskID: 8, TaskName: 'List materials', ParentID: 6, StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
  { TaskID: 9, TaskName: 'Estimation approval', ParentID: 6, StartDate: new Date('04/06/2019'), Duration: 0, Predecessor: '7SS+16h', Progress: 50 }
];