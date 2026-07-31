import { Gantt, RowDD, Edit, Selection } from '@syncfusion/ej2-gantt';
import { ganttData } from './datasource.ts';

Gantt.Inject(RowDD, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: ganttData,
    height:'380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'parentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'ID', textAlign: "Right", width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: "Left", width: 180 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: "Right", width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: "Right", width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: "Right", width: 120 },
    ],
    allowRowDragAndDrop: true,
    splitterSettings: {
      position: '75%'
    }
});
gantt.appendTo('#Gantt');