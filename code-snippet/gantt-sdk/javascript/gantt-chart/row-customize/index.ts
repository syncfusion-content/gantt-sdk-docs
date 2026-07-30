


import { Gantt, RowDataBoundEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData, GanttTask } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'ID', textAlign: "Right", width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: "Left", width: 180 },
        { field: 'Progress', headerText: 'Progress', textAlign: "Right", width: 120 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: "Right", width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: "Right", width: 90 },
    ],
    treeColumnIndex:1,
    splitterSettings: {
        position: '75%'
    },
    rowHeight: 42,
    rowDataBound:rowDataBound
});
gantt.appendTo('#Gantt');

function rowDataBound(args: RowDataBoundEventArgs): void {
    const task = args.data as GanttTask;
    if (task.TaskID === 2) {
      args.rowHeight = 90;
    }
}