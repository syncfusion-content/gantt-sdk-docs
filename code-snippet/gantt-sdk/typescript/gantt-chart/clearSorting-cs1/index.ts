import { Gantt, Sort, TaskFieldsModel, SortSettingsModel } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Sort);

let taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
};

let sortSettings: SortSettingsModel = {
    columns: [
        { field: 'TaskID', direction: 'Descending' },
        { field: 'TaskName', direction: 'Ascending' }
    ]
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    taskFields: taskFields,
    sortSettings: sortSettings
});

gantt.appendTo('#Gantt');

let clearBtn: Button = new Button();
clearBtn.appendTo('#clearSorting');

document.getElementById('clearSorting')!.addEventListener('click', () => {
    gantt.clearSorting();
});