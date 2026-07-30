export var projectNewData: object[] = [
    { TaskID: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), parentID: null },
    { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, parentID: 1 },
    { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, parentID: 1 },
    { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 3, Predecessor: "2", Progress: 30, parentID: 1 },

    { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: "3,4", parentID: null },

    { TaskID: 6, TaskName: 'Market Research', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), parentID: null },
    { TaskID: 7, TaskName: 'Demand Analysis', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), parentID: 6 },
    { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "5", Progress: 30, parentID: 7 },
    { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "5", parentID: 7 },

    { TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "7,8", Progress: 30, parentID: 6 },
    { TaskID: 11, TaskName: 'Product strength analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "9", parentID: 6 },
    { TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: "10", parentID: 6 }
];
