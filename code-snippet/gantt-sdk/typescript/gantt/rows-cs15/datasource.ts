export let GanttData: object[] = [
    { TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3, Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 50 }], ParentID: 1 },
    { TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4, resources: [{ resourceId: 2, resourceUnit: 70 }], Progress: 30, work: 20, ParentID: 1 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 4, resources: [{ resourceId: 1, resourceUnit: 75 }], Predecessor: 2, Progress: 30, work: 10, ParentID: 1 },
    { TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'), Duration: 3, Progress: 30, resources: [{ resourceId: 2, resourceUnit: 70 }], Predecessor: '3FS+2', work: 30, ParentID: 5 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/08/2019'), Duration: 12, resources: [{ resourceId: 6, resourceUnit: 40 }], Progress: 30, work: 40, ParentID: 5 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/03/2019'), Duration: 10, resources: [{ resourceId: 5, resourceUnit: 75 }], Progress: 30, work: 60, ParentID: 5 },
    { TaskID: 9, TaskName: 'Excavate for foundations', StartDate: new Date('04/01/2019'), Duration: 4, Progress: 30, resources: [4], ParentID: 5 },
    { TaskID: 10, TaskName: 'Install plumbing grounds', StartDate: new Date('04/08/2019'), Duration: 4, Progress: 30, Predecessor: '9SS', resources: [3], ParentID: 5 },
    { TaskID: 11, TaskName: 'Dig footer', StartDate: new Date('04/08/2019'), Duration: 3, resources: [2], ParentID: 5 },
    { TaskID: 12, TaskName: 'Electrical utilities', StartDate: new Date('04/03/2019'), Duration: 4, Progress: 30, resources: [3], ParentID: 5 },
    { TaskID: 13, TaskName: 'Sign contract', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30 },
    { TaskID: 14, TaskName: 'Plan timeline', StartDate: new Date('02/04/2019'), EndDate: new Date('02/10/2019'), Duration: 10, Progress: '60',
      Segments: [
        { StartDate: new Date('02/04/2019'), Duration: 2, segmentTask: "segment 1" },
        { StartDate: new Date('02/05/2019'), Duration: 5, segmentTask: "segment 2" },
        { StartDate: new Date('02/08/2019'), Duration: 3, segmentTask: "segment 3" }
      ]
    }
];

export let resourceCollection: object[] = [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team', newData: "Notes forMartin Tamer" },
    { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team', newData: "Notes Rose Fuller" },
    { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team', newData: "Notes Margaret Buchanan" },
    { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team', newData: "Notes Fuller King" },
    { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team', newData: "Notes Davolio Fuller" },
    { resourceId: 6, resourceName: 'Van Jack', resourceGroup: 'Development Team', newData: "Notes Van Jack" }
];
