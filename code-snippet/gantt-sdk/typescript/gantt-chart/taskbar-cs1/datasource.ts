export const data: object[] = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 30, Info: 'Measure the total property area alloted for construction', ParentID: 1 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2', Info: 'Obtain an engineered soil test of lot where construction is planned.', ParentID: 1 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 30, ParentID: 1 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '4', Progress: 30, Info: 'Develop floor plans and obtain a materials list for estimations', ParentID: 5 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '6', Info: '', ParentID: 5 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '7', Info: '', ParentID: 5 },
  { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30, Info: 'If required obtain approval from HOA' },
  { TaskID: 10, TaskName: 'Project Approval and kick off', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' }
];