import { Gantt, Freeze } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Freeze);

var taskSettings: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    endDate: 'EndDate',
    progress: 'Progress',
    parentID: 'ParentID'
};

var splitterSettings: object = {
    position: '65%'
};

let gantt: Gantt = new Gantt({
    height: '430px',
    dataSource: GanttData,
    taskFields: taskSettings,
    treeColumnIndex: 1,
    splitterSettings: splitterSettings,
    allowSelection: false,
    gridLines: 'Both',

    columns: [
        { field: 'TaskID', headerText: 'Task ID', freeze: 'Left' },
        { field: 'TaskName', headerText: 'Task Name', width: 200, freeze: 'Left' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'EndDate', headerText: 'End Date' },
        { field: 'Progress', headerText: 'Progress', freeze: 'Right' },
        { field: 'Status', headerText: 'Status' }
    ]
});

gantt.appendTo('#Gantt');