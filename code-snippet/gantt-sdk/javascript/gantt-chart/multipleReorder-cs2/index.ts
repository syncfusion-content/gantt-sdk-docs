import { Gantt, Reorder } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Reorder);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    allowReordering: true,
    treeColumnIndex: 1,
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ]
});

gantt.appendTo('#Gantt');

let reorderBtn: Button = new Button();
reorderBtn.appendTo('#reorderByIndex');

document.getElementById('reorderByIndex').addEventListener('click', () => {
    gantt.treeGrid.grid.reorderColumnByIndex(1, 3);
});