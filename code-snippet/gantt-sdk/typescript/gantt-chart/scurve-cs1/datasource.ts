export const GanttData: object[] = [
    {
        TaskID: 1,
        TaskName: 'Planning Phase',
        StartDate: new Date(2026, 0, 1),
        Duration: 7
    },
    {
        TaskID: 2,
        TaskName: 'Requirements Analysis',
        StartDate: new Date(2026, 0, 1),
        Duration: 3,
        Progress: 100,
        ParentID: 1
    },
    {
        TaskID: 3,
        TaskName: 'Business Review',
        StartDate: new Date(2026, 0, 1),
        Duration: 4,
        Progress: 90,
        ParentID: 1
    },
    {
        TaskID: 4,
        TaskName: 'UI Design',
        StartDate: new Date(2026, 0, 1),
        Duration: 3,
        Progress: 75,
        ParentID: 1
    },
    {
        TaskID: 5,
        TaskName: 'Feasibility Study',
        StartDate: new Date(2026, 0, 4),
        Duration: 3,
        Progress: 60,
        ParentID: 1
    },
    {
        TaskID: 6,
        TaskName: 'Project Approval',
        StartDate: new Date(2026, 0, 1),
        Duration: 2,
        Progress: 40,
        ParentID: 1
    },
    {
        TaskID: 7,
        TaskName: 'Execution Phase',
        StartDate: new Date(2026, 0, 5),
        Duration: 8
    },
    {
        TaskID: 8,
        TaskName: 'Backend Development',
        StartDate: new Date(2026, 0, 6),
        Duration: 5,
        Progress: 55,
        ParentID: 7
    },
    {
        TaskID: 9,
        TaskName: 'Frontend Development',
        StartDate: new Date(2026, 0, 5),
        Duration: 3,
        Progress: 50,
        ParentID: 7
    },
    {
        TaskID: 10,
        TaskName: 'API Integration',
        StartDate: new Date(2026, 0, 7),
        Duration: 3,
        Progress: 35,
        ParentID: 7
    },
    {
        TaskID: 11,
        TaskName: 'Unit Testing',
        StartDate: new Date(2026, 0, 8),
        Duration: 2,
        Progress: 25,
        ParentID: 7
    },
    {
        TaskID: 12,
        TaskName: 'System Testing',
        StartDate: new Date(2026, 0, 8),
        Duration: 2,
        Progress: 10,
        ParentID: 7
    },
    {
        TaskID: 13,
        TaskName: 'Deployment',
        StartDate: new Date(2026, 0, 10),
        Duration: 1,
        Progress: 0,
        ParentID: 7
    }
];
