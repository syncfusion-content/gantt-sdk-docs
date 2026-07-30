import { Gantt, SplitterSettingsModel } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let taskSettings: Object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

let splitterSettings: SplitterSettingsModel = {
    position: '75%'
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    taskFields: taskSettings,
    treeColumnIndex: 1,
    splitterSettings: splitterSettings,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', width: 120 },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ]
});

gantt.appendTo('#Gantt');