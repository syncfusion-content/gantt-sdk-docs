import { Gantt, Sort, TaskFieldsModel, SplitterSettingsModel } from '@syncfusion/ej2-gantt';
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

let splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    taskFields: taskFields,
    splitterSettings: splitterSettings
});

gantt.appendTo('#Gantt');

let sortBtn: Button = new Button();
sortBtn.appendTo('#sortColumn');

document.getElementById('sortColumn')!.addEventListener('click', () => {
    gantt.sortModule.sortColumn('TaskID', 'Descending', false);
});