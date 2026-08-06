export let projectResources = [
    { resourceId: 1, resourceName: 'Project Manager' },
    { resourceId: 2, resourceName: 'Software Analyst' },
    { resourceId: 3, resourceName: 'Developer' },
    { resourceId: 4, resourceName: 'Testing Engineer' }
];

export let data = [
    { TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'), ParentID: null },
    { TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2, Progress: 30, resources: [{ resourceId: 1, Unit: 70 }, 6], ParentID: 1 },
    { TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4, resources: [2, 3, 5], ParentID: 1 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1, resources: [8, { resourceId: 9, Unit: 50 }], Progress: 30, ParentID: 1 },
    { TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'), ParentID: null },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'), Duration: 3, Progress: 30, resources: [{ resourceId: 4, Unit: 50 }], ParentID: 5 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3, resources: [4, 8], ParentID: 5 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'), Duration: 2, resources: [12, { resourceId: 5, Unit: 70 }], ParentID: 5 },
    { TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1, Progress: 30, resources: [12], ParentID: null }
];