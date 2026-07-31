import { Gantt, Column } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
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
    columns: <Column[]>[
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ]
});
gantt.appendTo('#Gantt');

let showBtn: Button = new Button();
showBtn.appendTo('#show');

let hideBtn: Button = new Button();
hideBtn.appendTo('#hide');

document.getElementById('show')!.addEventListener('click', () => {
    let allColumns = gantt.getGanttColumns();
    if (allColumns.length > 2) {
        gantt.showColumn(allColumns[2].headerText as string, 'headerText');
    }
});

document.getElementById('hide')!.addEventListener('click', () => {
    let visibleColumns = gantt.treeGrid.getVisibleColumns();
    if (visibleColumns.length > 2) {
        gantt.hideColumn(visibleColumns[2].headerText as string, 'headerText');
    }
});
