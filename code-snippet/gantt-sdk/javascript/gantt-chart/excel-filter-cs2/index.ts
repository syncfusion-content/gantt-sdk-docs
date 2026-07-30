import { Gantt, Filter, Sort, FilterSettingsModel, TaskFieldsModel, ColumnModel } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

Gantt.Inject(Filter, Sort);

const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

const filterSettings: FilterSettingsModel = { type: 'Excel' };

const columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', width: 100, isPrimaryKey: true },
    { field: 'TaskName', headerText: 'Task Name', width: 150 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'EndDate', headerText: 'End Date', width: 150 },
    { field: 'Duration', headerText: 'Duration', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 },
    {
        field: 'IsCompleted',
        headerText: 'Status',
        width: 150,
        displayAsCheckBox: true,
        type: 'boolean',
        filter: {
            type: 'Excel',
            itemTemplate: (args: any): string => {
                return args.IsCompleted ? 'Completed' : 'In Progress';
            }
        }
    }
];

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '450px',
    width: '700px',
    allowFiltering: true,
    filterSettings,
    splitterSettings: { columnIndex: 3 },
    taskFields,
    columns
});

gantt.appendTo('#Gantt');