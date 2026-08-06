import { Gantt, Sort, TaskFieldsModel, ColumnModel, SplitterSettingsModel } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
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

let splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
};

let columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', width: 100 },
    { field: 'TaskName', headerText: 'Task Name', width: 200 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Duration', headerText: 'Duration', width: 100 },
    { field: 'Progress', headerText: 'Progress', width: 100 },
    { field: 'CustomColumn', headerText: 'Custom Column', width: 150 }
];

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '430px',
    allowSorting: true,
    taskFields: taskFields,
    splitterSettings: splitterSettings,
    columns: columns
});

gantt.appendTo('#Gantt');

let sortBtn: Button = new Button({ cssClass: 'e-outline' });
sortBtn.appendTo('#sortCustom');

document.getElementById('sortCustom')!.addEventListener('click', () => {
    gantt.sortModule.sortColumn('CustomColumn', 'Ascending', false);
});