export let GanttData: Object[] = [
    { TaskID: 1, TaskName: 'Projéct initiàtion', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), },
    { TaskID: 2, TaskName: 'Identify site locàtion', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 90, ParentID: 1 },
    { TaskID: 3, TaskName: 'Perförm soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 40, ParentID: 1 },
    { TaskID: 4, TaskName: 'Soil tëst appröval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: "2FS", Progress: 10, ParentID: 1 },
    { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), },
    { TaskID: 6, TaskName: 'Develöp floor plan for estimàtion', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 85, ParentID: 5 },
    { TaskID: 7, TaskName: 'List matërials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 15, ParentID: 5 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: "6SS", Progress: 70, ParentID: 5 }
];