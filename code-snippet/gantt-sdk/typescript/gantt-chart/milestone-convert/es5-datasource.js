 var GanttData = [
  { TaskID: 1, TaskName: 'Project Initiation', ParentID: null, StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), isParent: true },
  { TaskID: 2, TaskName: 'Identify Site location', ParentID: 1, Duration: 3, Progress: 50, isParent: false },
  { TaskID: 3, TaskName: 'Perform Soil test', ParentID: 1, StartDate: new Date('04/02/2019'), Progress: 50, isParent: false },
  { TaskID: 4, TaskName: 'Soil test approval', ParentID: 1, EndDate: new Date('04/08/2019'), Progress: 50, isParent: false },
  { TaskID: 5, TaskName: 'Project Estimation', ParentID: null, StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), isParent: true },
  { TaskID: 6, TaskName: 'Develop floor plan for estimation', ParentID: 5, StartDate: new Date('04/04/2019'), EndDate: new Date('04/08/2019'), Progress: 50, resources: [4], isParent: false },
  { TaskID: 7, TaskName: 'List materials', ParentID: 5, StartDate: new Date('04/04/2019'), Progress: 50, isParent: false },
  { TaskID: 8, TaskName: 'Estimation approval', ParentID: 5, Duration: 0, Progress: 50, isParent: false }
];