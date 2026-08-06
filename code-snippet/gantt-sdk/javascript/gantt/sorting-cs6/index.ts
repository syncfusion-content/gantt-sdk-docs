import { Gantt, Sort, TaskFieldsModel, ColumnModel, SplitterSettingsModel, SortEventArgs } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

Gantt.Inject(Sort);

let currentSortOrder: 'Ascending' | 'Descending' = 'Ascending';

function customSortComparer(reference: string | null, comparer: string | null): number {
    const sortAsc: boolean = currentSortOrder === 'Ascending';

    if (reference === null && comparer === null) return 0;
    if (reference === null) return 1;
    if (comparer === null) return -1;

    if (reference < comparer) return sortAsc ? -1 : 1;
    if (reference > comparer) return sortAsc ? 1 : -1;

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

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '430px',
    allowSorting: true,
    taskFields: taskFields,
    columns: columns,
    splitterSettings: splitterSettings,
    actionBegin: (args: SortEventArgs) => {
        if (args.requestType === 'sorting') {
            currentSortOrder = args.direction as 'Ascending' | 'Descending';
        }
    }
});

gantt.appendTo('#Gantt');