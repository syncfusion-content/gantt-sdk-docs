var GanttData = [
  {
    TaskID: 1,
    TaskName: 'Project initiation',
    StartDate: new Date('03/29/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
      {
        TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3,
        Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 50 }]
      },
      {
        TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4,
        resources: [{ resourceId: 2, resourceUnit: 70 }], Progress: 30, work: 20, Predecessor: ['6FF']
      },
      {
        TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 4,
        resources: [{ resourceId: 1, resourceUnit: 75 }], Predecessor: '2SF', Progress: 30, work: 10,
      },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
    subtasks: [
      {
        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
        Duration: 3, Progress: 30, resources: [{ resourceId: 2, resourceUnit: 70 }], Predecessor: '3FF', work: 30
      },
      {
        TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/08/2019'), Duration: 12,
        resources: [{ resourceId: 6, resourceUnit: 40 }], Progress: 30, work: 40
      },
      {
        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/03/2019'),
        Duration: 10, resources: [{ resourceId: 5, resourceUnit: 75 }], Progress: 30, work: 60, Predecessor: ['7SF']
      },
      {
        TaskID: 9, TaskName: 'Excavate for foundations', StartDate: new Date('04/01/2019'),
        Duration: 4, Progress: 30, resources: [4], Predecessor: 4
      },
      {
        TaskID: 10, TaskName: 'Install plumbing grounds', StartDate: new Date('04/08/2019'), Duration: 4,
        Progress: 30, Predecessor: '9SS', resources: [3]
      },
      {
        TaskID: 11, TaskName: 'Dig footer', StartDate: new Date('04/08/2019'),
        Duration: 3, resources: [2], Predecessor: [3, '6FF']
      },
      {
        TaskID: 12, TaskName: 'Electrical utilities', StartDate: new Date('04/03/2019'),
        Duration: 4, Progress: 30, resources: [3], Predecessor: '8SS'
      }
    ]
  },
  {
    TaskID: 13, TaskName: 'Sign contract', StartDate: new Date('04/04/2019'), Duration: 2,
    Progress: 30,
  }
];