export const data = [
  { TaskID: 1, TaskName: 'Project Kickoff', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Site Selection', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 55 },
  { TaskID: 3, TaskName: 'Soil Analysis', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 65 },
  { TaskID: 4, TaskName: 'Approval of Soil Report', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 35 },
  { TaskID: 5, TaskName: 'Cost Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 6, TaskName: 'Create Floor Plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 95 },
  { TaskID: 7, TaskName: 'Material Listing', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 35 },
  { TaskID: 8, TaskName: 'Approval of Estimate', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 85 }
];