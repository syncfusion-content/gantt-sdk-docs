import { Gantt, Sort, SortSettingsModel, TaskFieldsModel } from '@syncfusion/ej2-gantt';
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

let sortingOptions: SortSettingsModel = {
    columns: [
        { field: 'TaskID', direction: 'Descending' },
        { field: 'TaskName', direction: 'Ascending' }
    ]
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: taskFields,
    allowSorting: true,
    sortSettings: sortingOptions
});

gantt.appendTo('#Gantt');