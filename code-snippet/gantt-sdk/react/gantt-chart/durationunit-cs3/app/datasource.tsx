export const data: object[] = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), DurationUnit: 'Day' },
  { TaskID: 2, TaskName: 'Identify Site Location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, DurationUnit: 'Hour', ParentID: 1 },
  { TaskID: 3, TaskName: 'Perform Soil Test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, DurationUnit: 'Minute', ParentID: 1 },
  { TaskID: 4, TaskName: 'Soil Test Approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, DurationUnit: 'Day', ParentID: 1 },

  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), DurationUnit: 'Hour' },
  { TaskID: 6, TaskName: 'Develop Floor Plan for Estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, DurationUnit: 'Day', ParentID: 5 },
  { TaskID: 7, TaskName: 'List Materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, DurationUnit: 'Seconds', ParentID: 5 },
  { TaskID: 8, TaskName: 'Estimation Approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, DurationUnit: 'Day', ParentID: 5 }
];