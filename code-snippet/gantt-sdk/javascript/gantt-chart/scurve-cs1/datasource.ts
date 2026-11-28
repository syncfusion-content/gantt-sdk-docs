export const GanttData: object[] = [
    {
        TaskID: 1,
        TaskName: 'Website Redesign Project',
        StartDate: new Date(2026, 0, 1),
        Duration: 50
    },
    {
        TaskID: 2,
        TaskName: 'Requirement Analysis',
        StartDate: new Date(2026, 0, 1),
        Duration: 4,
        Progress: 100,
        ParentID: 1
    },
    {
        TaskID: 3,
        TaskName: 'Stakeholder Review',
        StartDate: new Date(2026, 0, 5),
        Duration: 3,
        Progress: 75,
        ParentID: 1
    },
    {
        TaskID: 4,
        TaskName: 'UI Design',
        StartDate: new Date(2026, 0, 8),
        Duration: 5,
        Progress: 70,
        ParentID: 1
    },
    {
        TaskID: 5,
        TaskName: 'UX Validation',
        StartDate: new Date(2026, 0, 13),
        Duration: 4,
        Progress: 55,
        ParentID: 1
    },
    {
        TaskID: 6,
        TaskName: 'Backend Development',
        StartDate: new Date(2026, 0, 17),
        Duration: 8,
        Progress: 50,
        ParentID: 1
    },
    {
        TaskID: 7,
        TaskName: 'Frontend Development',
        StartDate: new Date(2026, 0, 25),
        Duration: 8,
        Progress: 30,
        ParentID: 1
    },
    {
        TaskID: 8,
        TaskName: 'API Integration',
        StartDate: new Date(2026, 1, 2),
        Duration: 5,
        Progress: 20,
        ParentID: 1
    },
    {
        TaskID: 9,
        TaskName: 'Unit Testing',
        StartDate: new Date(2026, 1, 7),
        Duration: 4,
        Progress: 15,
        ParentID: 1
    },
    {
        TaskID: 10,
        TaskName: 'System Testing',
        StartDate: new Date(2026, 1, 11),
        Duration: 4,
        Progress: 0,
        ParentID: 1
    },
    {
        TaskID: 11,
        TaskName: 'Performance Testing',
        StartDate: new Date(2026, 1, 15),
        Duration: 3,
        Progress: 0,
        ParentID: 1
    },
    {
        TaskID: 12,
        TaskName: 'User Acceptance Testing',
        StartDate: new Date(2026, 1, 18),
        Duration: 3,
        Progress: 0,
        ParentID: 1
    },
    {
        TaskID: 13,
        TaskName: 'Production Deployment',
        StartDate: new Date(2026, 1, 21),
        Duration: 2,
        Progress: 0,
        ParentID: 1
    }
];
