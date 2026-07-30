import { Gantt, Sort, TaskFieldsModel, ColumnModel, SplitterSettingsModel, SortSettingsModel } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Sort);

function customSortComparer(reference: any, comparer: any): number {
    if (reference < comparer) return -1;
    if (reference > comparer) return 1;
    return 0;
}

let taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

let columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 120 },
    { field: 'TaskName', headerText: 'Task Name', width: 250, sortComparer: customSortComparer },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Duration', headerText: 'Duration', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 }
];

let splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
};

let sortSettings: SortSettingsModel = {
    columns: [
        { field: 'TaskID', direction: 'Descending' },
        { field: 'StartDate', direction: 'Ascending' }
    ]
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    allowSorting: true,
    taskFields: taskFields,
    columns: columns,
    splitterSettings: splitterSettings,
    sortSettings: sortSettings
});

gantt.appendTo('#Gantt');