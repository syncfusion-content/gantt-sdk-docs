import { Gantt, Resize } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Resize);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    splitterSettings: {
        position: '75%'
    },
    allowResizing: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    dataBound: () => {
        gantt.treeGrid.autoFitColumns(['TaskName']);
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', format: 'yMd', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ]
});

gantt.appendTo('#Gantt');