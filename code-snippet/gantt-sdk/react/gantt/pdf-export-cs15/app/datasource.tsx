export let projectResources: Object[] = [
    { resourceId: 1, resourceName: 'Project Manager' },
    { resourceId: 2, resourceName: 'Software Analyst' },
    { resourceId: 3, resourceName: 'Developer' },
    { resourceId: 4, resourceName: 'Testing Engineer' }
];

export let ganttData: Object[] = [
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


export let data: Object[] = [
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

export let projectData: object[] = [
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