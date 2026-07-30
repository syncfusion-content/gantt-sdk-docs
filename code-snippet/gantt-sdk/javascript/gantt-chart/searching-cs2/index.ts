import { Gantt, Filter, Toolbar, TaskFieldsModel, SplitterSettingsModel, SearchSettingsModel, ColumnModel } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

Gantt.Inject(Filter, Toolbar);

const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

const splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
};

const searchSettings: SearchSettingsModel = {
    fields: ['TaskName'],
    operator: 'contains',
    key: 'Pröduct',
    ignoreCase: true,
    ignoreAccent: true
};

const columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
    { field: 'TaskName', headerText: 'Task Name', width: 250 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Duration', headerText: 'Duration', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 }
];

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '370px',
    taskFields: taskFields,
    splitterSettings: splitterSettings,
    searchSettings: searchSettings,
    toolbar: ['Search'],
    columns: columns
});

gantt.appendTo('#Gantt');