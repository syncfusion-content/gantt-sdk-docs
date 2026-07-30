import { Gantt, Filter, TaskFieldsModel, SplitterSettingsModel, ColumnModel } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter);

let taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

let filter: object = {
    params: { showSpinButton: false }
};

let taskFilter: object = {
    params: { autofill: false }
};

let splitterSettings: SplitterSettingsModel = {
    columnIndex: 2
};

let columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', width: 120, filter: filter },
    { field: 'TaskName', headerText: 'Task Name', width: 250, filter: taskFilter },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 }
];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    allowFiltering: true,
    taskFields: taskFields,
    splitterSettings: splitterSettings,
    columns: columns
});

gantt.appendTo('#Gantt');