import { Gantt } from '@syncfusion/ej2-gantt';

const data: Object[] = [
    { TaskID: 1, TaskName: 'Project planning', StartDate: new Date(2024, 0, 1), Duration: 5, Progress: 40 },
    { TaskID: 2, TaskName: 'Requirements gathering', StartDate: new Date(2024, 0, 8), Duration: 4, Progress: 60 },
    { TaskID: 3, TaskName: 'Design', StartDate: new Date(2024, 0, 12), Duration: 6, Progress: 25 },
    { TaskID: 4, TaskName: 'Implementation', StartDate: new Date(2024, 0, 22), Duration: 8, Progress: 10 },
    { TaskID: 5, TaskName: 'Testing', StartDate: new Date(2024, 1, 1), Duration: 5, Progress: 0 }
];

const gantt: Gantt = new Gantt({
    dataSource: data,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        {
            headerText: 'Task Information',
            textAlign: 'Center',
            columns: [
                { field: 'TaskName', headerText: 'Task Name', width: 200 },
                { field: 'Progress', headerText: 'Progress', width: 120 }
            ]
        },
        {
            headerText: 'Schedule',
            textAlign: 'Center',
            columns: [
                { field: 'StartDate', headerText: 'Start Date', width: 130 },
                { field: 'Duration', headerText: 'Duration', width: 110 }
            ]
        }
    ]
});

gantt.appendTo('#Gantt');
