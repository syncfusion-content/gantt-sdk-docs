export let GanttData: Object[] = [
    { TaskID: 1, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3, Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 50 }] },
    { TaskID: 2, TaskName: 'Perform soil test', StartDate: new Date('04/03/2019'), Duration: 4, Progress: 30, work: 20, resources: [{ resourceId: 1, resourceUnit: 70 }], Predecessor: '1FS' },
    { TaskID: 3, TaskName: 'Soil test approval', StartDate: new Date('04/09/2019'), Duration: 4, Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 25 }], Predecessor: '2FS' },

    { TaskID: 4, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/01/2019'), Duration: 5, Progress: 30, work: 30, resources: [{ resourceId: 2, resourceUnit: 50 }] },
    { TaskID: 5, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, work: 40, resources: [{ resourceId: 2, resourceUnit: 40 }], Predecessor: '4FS-2' },
    { TaskID: 6, TaskName: 'Estimation approval', StartDate: new Date('04/09/2019'), Duration: 4, Progress: 30, work: 60, resources: [{ resourceId: 2, resourceUnit: 75 }], Predecessor: '5FS-1' },

    { TaskID: 7, TaskName: 'Install temporary power service', StartDate: new Date('04/01/2019'), Duration: 14, Progress: 30, resources: [{ resourceId: 3, resourceUnit: 75 }] },
    { TaskID: 8, TaskName: 'Clear the building site', StartDate: new Date('04/08/2019'), Duration: 9, Progress: 30, resources: [{ resourceId: 3, resourceUnit: 100 }], Predecessor: '7FS-9' },
    { TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/12/2019'), Duration: 5, resources: [{ resourceId: 3, resourceUnit: 100 }], Predecessor: '8FS-5' }
];

export let ProjectResources: object[] =  [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team', resourceUnit: 50},
    { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team', resourceUnit: 70 },
    { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team' },
    { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team' },
    { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team' },
    { resourceId: 6, resourceName: 'Van Jack', resourceGroup: 'Development Team', resourceUnit: 40  },
];