import { Gantt, Sort, TaskFieldsModel, ColumnModel, SplitterSettingsModel, SortSettingsModel } from '@syncfusion/ej2-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

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
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 120 },
    { field: 'TaskName', headerText: 'Task Name', width: 250 },
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
        { field: 'TaskName', direction: 'Ascending' }
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

let dropDown: DropDownList = new DropDownList({
    dataSource: [
        { text: 'Task ID', value: 'TaskID' },
        { text: 'Task Name', value: 'TaskName' },
        { text: 'Start Date', value: 'StartDate' },
        { text: 'Duration', value: 'Duration' },
        { text: 'Progress', value: 'Progress' }
    ],
    fields: { text: 'text', value: 'value' },
    index: 0,
    width: '120px'
});
dropDown.appendTo('#columns');

let button: Button = new Button({ cssClass: 'e-outline' });
button.appendTo('#removeSort');

document.getElementById('removeSort')!.addEventListener('click', () => {
    let field: string = dropDown.value as string;
    gantt.removeSortColumn(field);
});