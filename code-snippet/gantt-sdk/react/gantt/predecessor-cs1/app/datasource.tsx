export const data: object[] = [
    { TaskID: 1, TaskName: 'Planning Phase', StartDate: new Date('04/01/2024'), ParentID: null },
    { TaskID: 2, TaskName: 'Collect Requirements', StartDate: new Date('04/01/2024'), Duration: 3, ParentID: 1 },
    { TaskID: 3, TaskName: 'Analyze Requirements', StartDate: new Date('04/03/2024'), Duration: 2, ParentID: 1 },
    { TaskID: 4, TaskName: 'Finalize Planning Report', StartDate: new Date('04/05/2024'), Duration: 1, Predecessor: '2FS,3FS', ParentID: 1 },
    { TaskID: 10, TaskName: 'Execution Phase', StartDate: new Date('04/01/2024'), ParentID: null },
    { TaskID: 11, TaskName: 'Prepare Work Breakdown Structure', StartDate: new Date('04/02/2024'), Duration: 3, ParentID: 10 },
    { TaskID: 12, TaskName: 'Assign Resources', StartDate: new Date('04/04/2024'), Duration: 2, ParentID: 10 },
    // Difference shown here: 4FS → 13
    { TaskID: 13, TaskName: 'Execution Start Approval', StartDate: new Date('04/06/2024'), Duration: 2, Predecessor: '4FS', ParentID: 10 },
    // Invalid dependency examples
    { TaskID: 20, TaskName: 'Invalid: Child Depends on Planning Phase', StartDate: new Date('04/07/2024'), Duration: 1, Predecessor: '1FS', ParentID: 10 },
    { TaskID: 21, TaskName: 'Invalid: Execution Phase Depends on Task 11', StartDate: new Date('04/08/2024'), Duration: 1, Predecessor: '11FS', ParentID: null }
];