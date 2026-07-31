
export const projectData: object[] = [
  { TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'), taskType: 'FixedUnit' },
  { TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2, Progress: 30, Work: 16, resources: [{ resourceId: 1, Unit: 70 }, 6], ParentID: 1, taskType: 'FixedWork' },
  { TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4, resources: [2, 3, 5], Work: 96, ParentID: 1, taskType: 'FixedDuration' },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1, Work: 16, resources: [8, { resourceId: 9, Unit: 50 }], Progress: 30, ParentID: 1, taskType: 'FixedWork' },

  { TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'), taskType: 'FixedUnit' },
  { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'), Duration: 3, Progress: 30, resources: [{ resourceId: 4, Unit: 50 }], Work: 30, ParentID: 5, taskType: 'FixedDuration' },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3, Work: 48, resources: [4, 8], ParentID: 5, taskType: 'FixedWork' },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'), Duration: 2, Work: 60, resources: [12, { resourceId: 5, Unit: 70 }], ParentID: 5, taskType: 'FixedUnit' },

  { TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1, Progress: 30, resources: [12], Work: 24, taskType: 'FixedDuration' }
];

export const resources: object[] = [
  { resourceId: 1, resourceName: 'Martin Tamer' },
  { resourceId: 2, resourceName: 'Rose Fuller' },
  { resourceId: 3, resourceName: 'Margaret Buchanan' },
  { resourceId: 4, resourceName: 'Fuller King' },
  { resourceId: 5, resourceName: 'Davolio Fuller' },
  { resourceId: 6, resourceName: 'Van Jack' },
  { resourceId: 7, resourceName: 'Fuller Buchanan' },
  { resourceId: 8, resourceName: 'Jack Davolio' },
  { resourceId: 9, resourceName: 'Tamer Vinet' },
  { resourceId: 10, resourceName: 'Vinet Fuller' },
  { resourceId: 11, resourceName: 'Bergs Anton' },
  { resourceId: 12, resourceName: 'Construction Supervisor' }
];
