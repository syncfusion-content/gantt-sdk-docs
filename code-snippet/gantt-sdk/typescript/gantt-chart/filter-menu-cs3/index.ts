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

let filterSettings: FilterSettingsModel = {
    type: 'Menu',
    operators: {
        stringOperator: [
            { value: 'startsWith', text: 'Starts With' },
            { value: 'endsWith', text: 'Ends With' },
            { value: 'contains', text: 'Contains' },
            { value: 'equal', text: 'Equal' },
            { value: 'notEqual', text: 'Not Equal' }
        ],
        numberOperator: [
            { value: 'equal', text: 'Equal' },
            { value: 'notEqual', text: 'Not Equal' },
            { value: 'greaterThan', text: 'Greater Than' },
            { value: 'lessThan', text: 'Less Than' }
        ],
        dateOperator: [
            { value: 'equal', text: 'Equal' },
            { value: 'notEqual', text: 'Not Equal' },
            { value: 'greaterThan', text: 'After' },
            { value: 'lessThan', text: 'Before' }
        ],
        booleanOperator: [
            { value: 'equal', text: 'Equal' },
            { value: 'notEqual', text: 'Not Equal' }
        ]
    }
};

let splitterSettings: SplitterSettingsModel = {
    columnIndex: 2
};

let columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', width: 120 },
    { field: 'TaskName', headerText: 'Task Name', width: 250 },
    { field: 'StartDate', headerText: 'Start Date', width: 150, type: 'date', format: 'yMd' },
    { field: 'Progress', headerText: 'Progress', width: 150 },
    { field: 'Approved', headerText: 'Approved', width: 140, type: 'boolean' }
];

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '370px',
    allowFiltering: true,
    filterSettings: filterSettings,
    taskFields: taskFields,
    splitterSettings: splitterSettings,
    columns: columns
});

gantt.appendTo('#Gantt');