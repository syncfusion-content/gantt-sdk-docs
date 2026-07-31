export const data = [
  { TaskID: 1, TaskName: 'Project Management', StartDate: new Date('2023-04-02'), EndDate: new Date('2023-04-12'), Duration: 10, Progress: 40, IsCompleted: true },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('2023-04-02'), Duration: 4, Progress: 100, IsCompleted: true, ParentID: 1 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('2023-04-02'), Duration: 4, Progress: 50, IsCompleted: true, ParentID: 1 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('2023-04-02'), Duration: 4, Progress: 100, IsCompleted: true, ParentID: 1 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('2023-04-02'), EndDate: new Date('2023-04-10'), Duration: 8, Progress: 60, IsCompleted: false },
  { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2023-04-04'), Duration: 3, Progress: 100, IsCompleted: false, ParentID: 5 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('2023-04-04'), Duration: 3, Progress: 40, IsCompleted: false, ParentID: 5 }
];
