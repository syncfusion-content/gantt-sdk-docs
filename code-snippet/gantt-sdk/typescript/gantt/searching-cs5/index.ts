import { Gantt, Filter, Toolbar, TaskFieldsModel, SplitterSettingsModel, ColumnModel } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter, Toolbar);

let key: string = '';

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

const columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
    { field: 'TaskName', headerText: 'Task Name', width: 400 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Duration', headerText: 'Duration', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 }
];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    taskFields: taskFields,
    splitterSettings: splitterSettings,
    toolbar: ['Search'],
    columns: columns,
    actionBegin: (args: any) => {
        if (args.requestType === 'searching') {
            key = args.searchString ? args.searchString.toLowerCase() : '';
        }
    },
    queryCellInfo: (args: any) => {
        if (key) {
            const field: string = args.column.field;
            const value: string | number = args.data[field];

            if (typeof value === 'string' || typeof value === 'number') {
                const str: string = value.toString();
                const regex: RegExp = new RegExp(key, 'gi');
                const highlighted: string = str.replace(regex, (m: string) =>
                    `<span class='customcss'>${m}</span>`
                );
                args.cell.innerHTML = highlighted;
            }
        }
    }
});

gantt.appendTo('#Gantt');