export let projectViewMultiTaskData = [
    {
        TaskID: 1,
        TaskName: 'Product Concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isExpand: false,
    },
    { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, ParentID: 1, Progress: 30 },
    { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 1, },
    { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/10/2019'), Duration: 3, ParentID: 1, Predecessor: "2", Progress: 30 },
    {
        TaskID: 5,
        TaskName: 'Feedback and Testing',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        isExpand: true,
    },
    { TaskID: 6, TaskName: 'Internal testing and feedback', StartDate: new Date('04/04/2019'), Duration: 5, ParentID: 5, Progress: 30 },
    { TaskID: 7, TaskName: 'Customer testing and feedback', StartDate: new Date('04/10/2019'), Duration: 7, ParentID: 5, Progress: 30 },
    {
        TaskID: 8,
        TaskName: 'Product Development',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        isExpand: false,
    },
    { TaskID: 9, TaskName: 'Important improvements', StartDate: new Date('04/04/2019'), Duration: 2, ParentID: 8, Progress: 30 },
    { TaskID: 10, TaskName: 'Address any unforeseen issues', StartDate: new Date('04/06/2019'), Duration: 2, ParentID: 8, Progress: 30 },
    {
        TaskID: 11,
        TaskName: 'Final Product',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        isExpand: true,
    },
    { TaskID: 12, TaskName: 'Branding product', StartDate: new Date('04/06/2019'), Duration: 5, ParentID: 11 },
    { TaskID: 13, TaskName: 'Marketing and pre-sales', StartDate: new Date('04/12/2019'), Duration: 10, ParentID: 11, Progress: 30 }
];