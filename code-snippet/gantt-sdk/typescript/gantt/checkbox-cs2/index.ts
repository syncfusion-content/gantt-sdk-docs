import { Gantt, RowDataBoundEventArgs } from '@syncfusion/ej2-gantt';
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
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        verified: 'Verified'
    },
    rowDataBound: (args: RowDataBoundEventArgs) => {
        if (args.row && args.row.getAttribute('aria-rowindex') === '3') {
            args.row.children[3].innerHTML = '';
        }
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        {
            field: 'Verified',
            headerText: 'Verified',
            type: 'boolean',
            displayAsCheckBox: true,
            textAlign: 'Center'
        },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ]
});

gantt.appendTo('#Gantt');