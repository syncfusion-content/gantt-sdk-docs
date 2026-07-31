export const data: object[] = [
    { TaskID: 1, TaskName: "Product concept", StartDate: new Date("04/02/2025"), EndDate: new Date("04/08/2025") },
    { TaskID: 2, TaskName: "Define the product usage", StartDate: new Date("04/02/2025"), EndDate: new Date("04/08/2025"), Duration: 1, Progress: 30, ParentID: 1, BaselineStartDate: new Date("04/02/2025"), BaselineEndDate: new Date("04/02/2025") },
    { TaskID: 3, TaskName: "Define the target audience", StartDate: new Date("04/02/2025"), EndDate: new Date("04/04/2025"), Duration: 2, Progress: 40, ParentID: 1 },
    { TaskID: 4, TaskName: "Prepare product sketch and notes", StartDate: new Date("04/05/2025"), Duration: 2, Progress: 30, ParentID: 1, Predecessor: "2" },
    { TaskID: 5, TaskName: "Concept approval", StartDate: new Date("04/08/2025"), EndDate: new Date("04/08/2025"), Duration: 0, ParentID: 1, Predecessor: "3,4", Indicators: [{ date: new Date("04/07/2025"), name: "Design Phase", tooltip: "Design phase completed", iconClass: "okIcon e-icons" }] },
    { TaskID: 6, TaskName: "Market research", StartDate: new Date("04/09/2025"), EndDate: new Date("04/18/2025"), Progress: 30, BaselineStartDate: new Date("04/09/2025"), BaselineEndDate: new Date("04/09/2025") },
    { TaskID: 7, TaskName: "Demand analysis", Progress: 40, ParentID: 6 },
    { TaskID: 8, TaskName: "Customer strength", StartDate: new Date("04/10/2025"), EndDate: new Date("04/13/2025"), Duration: 4, Progress: 30, ParentID: 6, BaselineStartDate: new Date("04/12/2025"), BaselineEndDate: new Date("04/13/2025") },
    { TaskID: 9, TaskName: "Market opportunity analysis", StartDate: new Date("04/09/2025"), EndDate: new Date("04/12/2025"), Duration: 4, ParentID: 7, Predecessor: "5" },
    { TaskID: 10, TaskName: "Competitor analysis", StartDate: new Date("04/15/2025"), EndDate: new Date("04/18/2025"), Duration: 4, Progress: 30, ParentID: 6, Predecessor: "7,8" },
    { TaskID: 11, TaskName: "Product strength analysis", StartDate: new Date("04/15/2025"), EndDate: new Date("04/18/2025"), Duration: 4, Progress: 40, ParentID: 6, Predecessor: "9" }
];
