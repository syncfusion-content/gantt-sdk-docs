var GanttData = [
    { TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2, Progress: 30, work: 10, resources: [1], ParentID: 1 },
    { TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4, Progress: 30, work: 20, resources: [{resourceId: 2, resourceUnit: 70}, {resourceId: 1, resourceUnit: 70}], ParentID: 1 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1, Progress: 30, work: 10, resources: [{resourceId: 3, resourceUnit: 25}, {resourceId: 1, resourceUnit: 75}], ParentID: 1 },

    { TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'), Duration: 3, Progress: 30, work: 30, resources: [{resourceId: 4, resourceUnit: 50}, {resourceId: 2, resourceUnit: 70}], ParentID: 5 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3, Progress: 30, work: 40, resources: [{resourceId: 6, resourceUnit: 40}], ParentID: 5 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'), Duration: 2, Progress: 30, work: 60, resources: [{resourceId: 5, resourceUnit: 75}], ParentID: 5 },

    { TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1, Progress: 30 },

    { TaskID: 10, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'), Duration: 3, Progress: 30, work: 30, resources: [{resourceId: 4, resourceUnit: 50}, {resourceId: 2, resourceUnit: 70}] },
    { TaskID: 11, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3, Progress: 30, work: 40, resources: [{resourceId: 6, resourceUnit: 40}] },
    { TaskID: 12, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'), Duration: 2, Progress: 30, work: 60, resources: [{resourceId: 5, resourceUnit: 75}] },

    { TaskID: 13, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'), Duration: 3, Progress: 30, work: 30, resources: [{resourceId: 4, resourceUnit: 50}, {resourceId: 2, resourceUnit: 70}] },
    { TaskID: 14, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3, Progress: 30, work: 40, resources: [{resourceId: 6, resourceUnit: 40}] },
    { TaskID: 15, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'), Duration: 2, Progress: 30, work: 60, resources: [{resourceId: 5, resourceUnit: 75}] }
];

var ProjectResources =  [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team', resourceUnit: 50},
    { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team', resourceUnit: 70 },
    { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team' },
    { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team' },
    { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team' },
    { resourceId: 6, resourceName: 'Van Jack', resourceGroup: 'Development Team', resourceUnit: 40  },
];