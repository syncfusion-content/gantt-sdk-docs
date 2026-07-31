import { Gantt, Filter, TaskFieldsModel, SplitterSettingsModel, FilterSettingsModel, ColumnModel } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

Gantt.Inject(Filter);

let taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

let splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
};

let filterSettings: FilterSettingsModel = {
    columns: [
        { field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Identify' },
        { field: 'TaskID', matchCase: false, operator: 'equal', predicate: 'and', value: 2 }
    ]
};

let columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
    { field: 'TaskName', headerText: 'Task Name', width: 250 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Duration', headerText: 'Duration', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 }
];

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '370px',
    allowFiltering: true,
    taskFields: taskFields,
    splitterSettings: splitterSettings,
    filterSettings: filterSettings,
    columns: columns
});

gantt.appendTo('#Gantt');