export const data = [
    { TaskID: 1, TaskName: "Initiation", StartDate: new Date("04/02/2019"), Duration: 5, Progress: 30, ParentID: null, CustomColumn: "Alpha" },
    { TaskID: 2, TaskName: "Planning", StartDate: new Date("04/03/2019"), Duration: 4, Progress: 50, ParentID: 1, CustomColumn: "Beta" },
    { TaskID: 3, TaskName: "Execution", StartDate: new Date("04/04/2019"), Duration: 6, Progress: 70, ParentID: 1, CustomColumn: "Gamma" },
    { TaskID: 4, TaskName: "Closure", StartDate: new Date("04/05/2019"), Duration: 3, Progress: 90, ParentID: 1, CustomColumn: "Delta" },
    { TaskID: 5, TaskName: "Review", StartDate: new Date("04/06/2019"), Duration: 2, Progress: 40, ParentID: null, CustomColumn: "Epsilon" },
    { TaskID: 6, TaskName: "Documentation", StartDate: new Date("04/07/2019"), Duration: 3, Progress: 60, ParentID: 5, CustomColumn: "Zeta" },
    { TaskID: 7, TaskName: "Training", StartDate: new Date("04/08/2019"), Duration: 4, Progress: 80, ParentID: 5, CustomColumn: "Eta" },
    { TaskID: 8, TaskName: "Deployment", StartDate: new Date("04/09/2019"), Duration: 5, Progress: 100, ParentID: 5, CustomColumn: "Theta" }
];