export let GanttData: Object[] = [
  { TaskID: 1, TaskName: 'Project Initiation', ParentID: null, StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), isParent: true },
  { TaskID: 2, TaskName: 'Identify Site location', ParentID: 1, StartDate: new Date('04/02/2019'), Duration: '3days', DurationUnit: 'day', Progress: 50, isParent: false },
  { TaskID: 3, TaskName: 'Perform Soil test', ParentID: 1, StartDate: new Date('04/02/2019'), Duration: '12hours', DurationUnit: 'hour', Progress: 70, resources: [2, 3, 5], isParent: false },
  { TaskID: 4, TaskName: 'Soil test approval', ParentID: 1, StartDate: new Date('04/02/2019'), Duration: '1800minutes', DurationUnit: 'minute', Predecessor: '2FS', Progress: 80, isParent: false },
  { TaskID: 5, TaskName: 'Project Estimation', ParentID: null, StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), isParent: true },
  { TaskID: 6, TaskName: 'Develop floor plan for estimation', ParentID: 5, StartDate: new Date('04/04/2019'), Duration: '12hours', DurationUnit: 'hour', Progress: 50, resources: [4], isParent: false },
  { TaskID: 7, TaskName: 'List materials', ParentID: 5, StartDate: new Date('04/04/2019'), Duration: '3days', DurationUnit: 'day', Progress: 50, resources: [4, 8], isParent: false },
  { TaskID: 8, TaskName: 'Estimation approval', ParentID: 5, StartDate: new Date('04/04/2019'), Duration: '480minutes', DurationUnit: 'minute', Predecessor: '6SS', Progress: 70, resources: [12, 5], isParent: false }
];
