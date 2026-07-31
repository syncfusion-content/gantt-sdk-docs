export const data = [
    { TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

    { TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2, Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 50 }], ParentID: 1 },
    { TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4, Progress: 30, work: 20, resources: [{ resourceId: 2, resourceUnit: 70 }], ParentID: 1 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1, Progress: 30, work: 10, resources: [{ resourceId: 3, resourceUnit: 25 }, { resourceId: 1, resourceUnit: 75 }], ParentID: 1 },

    { TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'), Duration: 3, Progress: 30, work: 30, resources: [{ resourceId: 4, resourceUnit: 50 }, { resourceId: 2, resourceUnit: 70 }], ParentID: 5 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3, Progress: 30, work: 40, resources: [{ resourceId: 6, resourceUnit: 40 }], ParentID: 5 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'), Duration: 2, Progress: 30, work: 60, resources: [{ resourceId: 5, resourceUnit: 75 }], ParentID: 5 },

    { TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1, Progress: 30, ParentID: null }
];

export const resources = [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team' },
    { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team' },
    { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team' },
    { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team' },
    { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team' },
    { resourceId: 6, resourceName: 'Van Jack', resourceGroup: 'Development Team' },
    { resourceId: 7, resourceName: 'Fuller Buchanan', resourceGroup: 'Planning Team' },
    { resourceId: 8, resourceName: 'Jack Davolio', resourceGroup: 'Testing Team' },
    { resourceId: 9, resourceName: 'Tamer Vinet', resourceGroup: 'Approval Team' },
    { resourceId: 10, resourceName: 'Vinet Fuller', resourceGroup: 'Development Team' },
    { resourceId: 11, resourceName: 'Bergs Anton', resourceGroup: 'Testing Team' },
    { resourceId: 12, resourceName: 'Construction Supervisor', resourceGroup: 'Approval Team' }
];
