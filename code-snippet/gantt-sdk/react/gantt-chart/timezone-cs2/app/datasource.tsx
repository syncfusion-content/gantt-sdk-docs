export const data: object = [
    { TaskID: 1, TaskName: "Project Schedule", StartDate: new Date("02/04/2019 08:00"), EndDate: new Date("03/10/2019") },
    { TaskID: 2, TaskName: "Planning", StartDate: new Date("02/04/2019 08:00"), EndDate: new Date("02/10/2019"), ParentID: 1 },
    { TaskID: 3, TaskName: "Plan timeline", StartDate: new Date("02/04/2019 08:00"), EndDate: new Date("02/10/2019"), Duration: 6, Progress: "60", ParentID: 2 },
    { TaskID: 4, TaskName: "Plan budget", StartDate: new Date("02/04/2019 08:00"), EndDate: new Date("02/10/2019"), Duration: 6, Progress: "90", ParentID: 2 },
    { TaskID: 5, TaskName: "Allocate resources", StartDate: new Date("02/04/2019 08:00"), EndDate: new Date("02/10/2019"), Duration: 6, Progress: "75", ParentID: 2 },
    { TaskID: 6, TaskName: "Planning complete", StartDate: new Date("02/06/2019 08:00"), EndDate: new Date("02/10/2019"), Duration: 0, Predecessor: "3FS,4FS,5FS", ParentID: 2 },
    { TaskID: 7, TaskName: "Design", StartDate: new Date("02/13/2019 08:00"), EndDate: new Date("02/17/2019 08:00"), ParentID: 1 },
    { TaskID: 8, TaskName: "Software Specification", StartDate: new Date("02/13/2019 08:00"), EndDate: new Date("02/15/2019"), Duration: 3, Progress: "60", Predecessor: "6FS", ParentID: 7 },
    { TaskID: 9, TaskName: "Develop prototype", StartDate: new Date("02/13/2019 08:00"), EndDate: new Date("02/15/2019"), Duration: 3, Progress: "100", Predecessor: "6FS", ParentID: 7 },
    { TaskID: 10, TaskName: "Get approval from customer", StartDate: new Date("02/16/2019 08:00"), EndDate: new Date("02/17/2019 08:00"), Duration: 2, Progress: "100", Predecessor: "9FS", ParentID: 7 },
    { TaskID: 11, TaskName: "Design complete", StartDate: new Date("02/17/2019 08:00"), EndDate: new Date("02/17/2019 08:00"), Duration: 0, Predecessor: "10FS", ParentID: 7 }
];