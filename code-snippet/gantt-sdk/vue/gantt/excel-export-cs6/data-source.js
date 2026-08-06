define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.editingResources = [
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
    exports.ganttData = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 90 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 40  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 10 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 85 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 15 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 70 }
            ]
        },
    ];
    exports.editingData = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0,
                    Progress: 30, resources: [1], info: 'Measure the total property area alloted for construction'
                },
                {
                    TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',
                    resources: [2, 3, 5], info: 'Obtain an engineered soil test of lot where construction is planned.' +
                        'From an engineer or company specializing in soil testing'
                },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 30 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),
                    Duration: 3, Predecessor: '4', Progress: 30, resources: 4,
                    info: 'Develop floor plans and obtain a materials list for estimations'
                },
                {
                    TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),
                    Duration: 3, Predecessor: '6', resources: [4, 8], info: ''
                },
                {
                    TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),
                    Duration: 0, Predecessor: '7', resources: [12, 5], info: ''
                }
            ]
        },
    ];
    
    exports.projectResources = [
        { resourceId: 1, resourceName: 'Project Manager' },
        { resourceId: 2, resourceName: 'Software Analyst' },
        { resourceId: 3, resourceName: 'Developer' },
        { resourceId: 4, resourceName: 'Testing Engineer' }
    ];
    exports.projectData = [
        {
            TaskID: 1,
            TaskName: 'Project Schedule',
            StartDate: new Date('02/08/2019'),
            EndDate: new Date('03/15/2019'),
            subtasks: [
                {
                    TaskID: 2,
                    TaskName: 'Planning',
                    StartDate: new Date('02/08/2019'),
                    EndDate: new Date('02/12/2019'),
                    subtasks: [
                        {
                            TaskID: 3, TaskName: 'Plan timeline', StartDate: new Date('02/08/2019'),
                            EndDate: new Date('02/12/2019'), Duration: 5, Progress: '100', resources: [1]
                        },
                        {
                            TaskID: 4, TaskName: 'Plan budget', StartDate: new Date('02/08/2019'),
                            EndDate: new Date('02/12/2019'), Duration: 5, Progress: '100', resources: [1]
                        },
                        {
                            TaskID: 5, TaskName: 'Allocate resources', StartDate: new Date('02/08/2019'),
                            EndDate: new Date('02/12/2019'), Duration: 5, Progress: '100', resourceS: [1]
                        },
                        {
                            TaskID: 6, TaskName: 'Planning complete', StartDate: new Date('02/10/2019'),
                            EndDate: new Date('02/10/2019'), Duration: 0, Predecessor: '3FS,4FS,5FS'
                        }
                    ]
                },
            ]
        }
    ];
});
