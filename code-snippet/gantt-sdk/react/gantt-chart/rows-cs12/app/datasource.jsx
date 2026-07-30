let data = [
    { TaskID: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, ParentID: 1, Progress: 30 },
    { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, ParentID: 1, },
    { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 3, ParentID: 1, Predecessor: "2", Progress: 30 },
    { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: "3,4" },
    { TaskID: 6, TaskName: 'Market Research', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 7, TaskName: 'Demand Analysis', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentID: 6, },
    { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, ParentID: 7, Predecessor: "5", Progress: 30 },
    { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, ParentID: 7, Predecessor: "5" },
    { TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, ParentID: 6, Predecessor: "7,8", Progress: 30 },
    { TaskID: 11, TaskName: 'Product strength analysis', StartDate: new Date('04/04/2019'), Duration: 4, ParentID: 6, Predecessor: "9" },
    { TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 0, ParentID: 6, Predecessor: "10" }
];