import { Gantt, Sort, TaskFieldsModel, ColumnModel, SplitterSettingsModel } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

Gantt.Inject(Sort);

let message: string = '';

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

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '430px',
    allowSorting: true,
    taskFields: taskFields,
    columns: columns,
    splitterSettings: splitterSettings,
    actionBegin: (args: any) => {
        if (args.requestType === 'sorting' && args.columnName === 'TaskID') {
            message = `${args.requestType} action cancelled for ${args.columnName} column`;
            args.cancel = true;
            updateMessage();
        }
    },
    actionComplete: (args: any) => {
        if (args.requestType === 'sorting' && args.columnName === 'StartDate') {
            message = `${args.requestType} action cancelled for ${args.columnName} column`;
            updateMessage();
        }
    }
});

gantt.appendTo('#Gantt');

function updateMessage(): void {
    const msgElement = document.getElementById('message');
    if (msgElement) {
        msgElement.innerText = message;
    }
}