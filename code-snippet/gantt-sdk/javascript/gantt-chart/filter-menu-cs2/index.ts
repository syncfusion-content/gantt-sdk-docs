import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 2
    },
    filterSettings: {
        type: 'Menu'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ]
});

gantt.appendTo('#Gantt');

let filterBtn: Button = new Button();
filterBtn.appendTo('#performFilter');

let clearBtn: Button = new Button();
clearBtn.appendTo('#clearFilter');

(document.getElementById('performFilter') as HTMLElement).addEventListener('click', () => {
    gantt.filterByColumn('TaskName', 'startswith', 'Project');
});

(document.getElementById('clearFilter') as HTMLElement).addEventListener('click', () => {
    gantt.clearFiltering();
});