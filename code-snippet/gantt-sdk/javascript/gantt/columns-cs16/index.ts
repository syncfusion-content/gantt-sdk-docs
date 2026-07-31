import { Gantt } from '@syncfusion/ej2-gantt';
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
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
        {
            field: 'StartDate',
            headerText: 'Start Date',
            textAlign: 'Right',
            width: 170,
            format: { type: 'date', format: "EEE, MMM d, ''yy" }
        },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        {
            field: 'Progress',
            headerText: 'Progress',
            textAlign: 'Right',
            width: 120,
            format: '##.0000'
        }
    ]
});

gantt.appendTo('#Gantt');