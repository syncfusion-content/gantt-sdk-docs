import { Gantt, Edit, Filter, Reorder, Resize, Selection, Sort, Toolbar } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Filter, Reorder, Resize, Selection, Sort, Toolbar);

const data: Object[] = [
    { TaskID: 1, TaskName: 'Project planning', StartDate: new Date(2024, 0, 1), Duration: 5, Progress: 40, Effort: 32, Budget: 12000 },
    { TaskID: 2, TaskName: 'Requirements gathering', StartDate: new Date(2024, 0, 8), Duration: 4, Progress: 60, Effort: 24, Budget: 8500 },
    { TaskID: 3, TaskName: 'Design', StartDate: new Date(2024, 0, 12), Duration: 6, Progress: 25, Effort: 40, Budget: 14500 },
    { TaskID: 4, TaskName: 'Implementation', StartDate: new Date(2024, 0, 22), Duration: 8, Progress: 10, Effort: 64, Budget: 26000 },
    { TaskID: 5, TaskName: 'Testing', StartDate: new Date(2024, 1, 1), Duration: 5, Progress: 0, Effort: 36, Budget: 11000 }
];

const gantt: Gantt = new Gantt({
    dataSource: data,
    height: '450px',
    allowSorting: true,
    allowFiltering: true,
    allowResizing: true,
    allowReordering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress'
    },
    toolbar: ['Edit', 'Update', 'Cancel'],
    editSettings: {
        allowEditing: true,
        mode: 'Auto'
    },
    columns: [
        {
            headerText: 'Task Information',
            columns: [
                { field: 'TaskName', headerText: 'Task Name', width: 220, allowEditing: true },
                {
                    headerText: 'Progress Details',
                    columns: [
                        { field: 'Progress', headerText: 'Progress', width: 120, type: 'number', format: 'N0', allowEditing: true },
                        { field: 'Effort', headerText: 'Effort (hours)', width: 130, type: 'number', format: 'N0', allowSorting: false, allowFiltering: false, allowEditing: false, visible: false }
                    ]
                }
            ]
        },
        {
            headerText: 'Schedule',
            columns: [
                {
                    headerText: 'Timeline',
                    columns: [
                        { field: 'StartDate', headerText: 'Start Date', width: 140, format: 'yMd', allowEditing: true },
                        { field: 'Duration', headerText: 'Duration', width: 110, type: 'number', format: 'N0', allowFiltering: false, allowEditing: false }
                    ]
                }
            ]
        },
        { field: 'Budget', headerText: 'Budget', width: 130, type: 'number', format: 'C2', allowEditing: true }
    ]
});

gantt.appendTo('#Gantt');
