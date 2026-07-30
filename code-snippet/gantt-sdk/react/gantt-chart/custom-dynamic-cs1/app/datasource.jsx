
export const ganttData = [
  { TaskID: 1, TaskName: 'Planning', StartDate: new Date('03/25/2024'), EndDate: new Date('04/05/2024') },
  { TaskID: 2, ParentID: 1, TaskName: 'Plan timeline', StartDate: new Date('03/25/2024'), Duration: 5, Progress: 40 },
  { TaskID: 3, ParentID: 1, TaskName: 'Allocate resources', StartDate: new Date('03/26/2024'), Duration: 4, Progress: 20 },
  { TaskID: 4, TaskName: 'Implementation', StartDate: new Date('04/06/2024'), EndDate: new Date('07/20/2024') },
  { TaskID: 5, ParentID: 4, TaskName: 'Software development', StartDate: new Date('04/06/2024'), Duration: 60, Progress: 30 },
  { TaskID: 6, ParentID: 4, TaskName: 'Testing phase', StartDate: new Date('06/15/2024'), Duration: 20, Progress: 10 }
];
