var GanttData = [
    { TaskID: 1, TaskName: 'Website redesign', StartDate: new Date(2026, 0, 1), Duration: 22 },
    { TaskID: 2, TaskName: 'Requirements', StartDate: new Date(2026, 0, 1), Duration: 5, Progress: 100, ParentID: 1 },
    { TaskID: 3, TaskName: 'Design', StartDate: new Date(2026, 0, 6), Duration: 6, Progress: 80, ParentID: 1 },
    { TaskID: 4, TaskName: 'Development', StartDate: new Date(2026, 0, 12), Duration: 8, Progress: 35, ParentID: 1 },
    { TaskID: 5, TaskName: 'Review', StartDate: new Date(2026, 0, 20), Duration: 3, Progress: 0, ParentID: 1 }
];
