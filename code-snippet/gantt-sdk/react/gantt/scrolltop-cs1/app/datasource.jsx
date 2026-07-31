export let data = [
    {
        TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019')
    },
    {
        TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2, ParentID: 1,
        Progress: 30, work: 10, resources: [1]
    },
    {
        TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4, ParentID: 1,
        resources: [{ resourceId: 2, resourceUnit: 70 }, { resourceId: 1, resourceUnit: 70 }], Progress: 30, work: 20
    },
    {
        TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1, ParentID: 1,
        resources: [{ resourceId: 3, resourceUnit: 25 }, { resourceId: 1, resourceUnit: 75 }], Progress: 30, work: 10,
    },
    {
        TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
        Duration: 3, ParentID: 5, Progress: 30, resources: [{ resourceId: 4, resourceUnit: 50 }, { resourceId: 2, resourceUnit: 70 }], work: 30
    },
    {
        TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3, ParentID: 5,
        resources: [{ resourceId: 6, resourceUnit: 40 }], Progress: 30, work: 40
    },
    {
        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'),
        Duration: 2, ParentID: 5, resources: [{ resourceId: 5, resourceUnit: 75 }], Progress: 30, work: 60,
    },
    {
        TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1,
        Progress: 30,
    },
    {
        TaskID: 10, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
        Duration: 3, Progress: 30, resources: [{ resourceId: 4, resourceUnit: 50 }, { resourceId: 2, resourceUnit: 70 }], work: 30
    },
    {
        TaskID: 11, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3,
        resources: [{ resourceId: 6, resourceUnit: 40 }], Progress: 30, work: 40
    },
    {
        TaskID: 12, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'),
        Duration: 2, resources: [{ resourceId: 5, resourceUnit: 75 }], Progress: 30, work: 60,
    },
    {
        TaskID: 13, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
        Duration: 3, Progress: 30, resources: [{ resourceId: 4, resourceUnit: 50 }, { resourceId: 2, resourceUnit: 70 }], work: 30
    },
    {
        TaskID: 14, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3,
        resources: [{ resourceId: 6, resourceUnit: 40 }], Progress: 30, work: 40
    },
    {
        TaskID: 15, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'),
        Duration: 2, resources: [{ resourceId: 5, resourceUnit: 75 }], Progress: 30, work: 60,
    }
];