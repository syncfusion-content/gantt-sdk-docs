import { Gantt } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 150 }
    ]
});

gantt.appendTo('#Gantt');

let addBtn: Button = new Button({ cssClass: 'e-info' });
addBtn.appendTo('#add');

let deleteBtn: Button = new Button({ cssClass: 'e-info' });
deleteBtn.appendTo('#delete');

document.getElementById('add')!.addEventListener('click', () => {
    let newColumns = [
        { field: 'TaskID', headerText: 'TaskID', width: 120 },
        { field: 'StartDate', headerText: 'StartDate', width: 120, format: 'yMd' }
    ];
    newColumns.forEach(col => {
        gantt.treeGrid.grid.columns.push(col as any);
    });
    gantt.treeGrid.grid.refreshColumns();
});

document.getElementById('delete')!.addEventListener('click', () => {
    gantt.treeGrid.grid.columns.pop();
    gantt.treeGrid.grid.refreshColumns();
});