import { Gantt } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

var ganttChart = new Gantt({
    dataSource: data,
    height: '370px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        expandState: 'isExpand',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    splitterSettings: {
        position: '75%'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', width: 120 },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ]
});

ganttChart.appendTo('#Gantt');