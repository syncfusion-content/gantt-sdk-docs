import { Gantt, Sort, TaskFieldsModel, ColumnModel, SplitterSettingsModel, SortSettingsModel } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

Gantt.Inject(Sort);

let taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

let columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
    { field: 'TaskName', headerText: 'Task Name', width: 250 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Duration', headerText: 'Duration', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 }
];

let splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
};

let sortSettings: SortSettingsModel = {
    allowUnsort: false
};

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '430px',
    allowSorting: true,
    taskFields: taskFields,
    columns: columns,
    splitterSettings: splitterSettings,
    sortSettings: sortSettings
});

gantt.appendTo('#Gantt');