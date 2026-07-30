var GanttData = [
  { TaskID: 1, TaskName: 'Project initiation', ParentID: null, StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'), taskType: 'FixedDuration' },
  { TaskID: 2, TaskName: 'Identify site location', ParentID: 1, StartDate: new Date('03/29/2019'), Duration: 2, Progress: 30, Work: 16, resources: [{ resourceId: 1, Unit: 70 }, 6], taskType: 'FixedWork' },
  { TaskID: 3, TaskName: 'Perform soil test', ParentID: 1, StartDate: new Date('03/29/2019'), Duration: 4, Work: 96, resources: [2, 3, 5], taskType: 'FixedWork' },
  { TaskID: 4, TaskName: 'Soil test approval', ParentID: 1, StartDate: new Date('03/29/2019'), Duration: 1, Work: 16, Progress: 30, resources: [8, { resourceId: 9, Unit: 50 }], taskType: 'FixedWork' },
  { TaskID: 5, TaskName: 'Project estimation', ParentID: null, StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'), taskType: 'FixedDuration' },
  { TaskID: 6, TaskName: 'Develop floor plan for estimation', ParentID: 5, StartDate: new Date('03/29/2019'), Duration: 3, Progress: 30, Work: 30, resources: [{ resourceId: 4, Unit: 50 }], taskType: 'FixedWork' },
  { TaskID: 7, TaskName: 'List materials', ParentID: 5, StartDate: new Date('04/01/2019'), Duration: 3, Work: 48, resources: [4, 8], taskType: 'FixedWork' },
  { TaskID: 8, TaskName: 'Estimation approval', ParentID: 5, StartDate: new Date('04/01/2019'), Duration: 2, Work: 60, resources: [12, { resourceId: 5, Unit: 70 }], taskType: 'FixedWork' },
  { TaskID: 9, TaskName: 'Sign contract', ParentID: null, StartDate: new Date('04/01/2019'), Duration: 1, Progress: 30, Work: 24, resources: [12], taskType: 'FixedWork' }
];