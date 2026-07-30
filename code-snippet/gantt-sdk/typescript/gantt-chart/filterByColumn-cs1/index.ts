import { Gantt, Filter, TaskFieldsModel, SplitterSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    } as TaskFieldsModel,
    splitterSettings: {
        columnIndex: 3
    } as SplitterSettingsModel,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ]
});

gantt.appendTo('#Gantt');

let singleBtn: Button = new Button();
singleBtn.appendTo('#singleFilter');

let multiBtn: Button = new Button();
multiBtn.appendTo('#multipleFilter');

document.getElementById('singleFilter')!.addEventListener('click', () => {
    gantt.clearFiltering();
    gantt.filterByColumn('TaskName', 'startswith', 'Iden', 'and');
});

document.getElementById('multipleFilter')!.addEventListener('click', () => {
    gantt.clearFiltering();
    gantt.filterSettings = {
        columns: [
            { field: 'TaskID', operator: 'equal', value: 2, predicate: 'or' },
            { field: 'TaskID', operator: 'equal', value: 3, predicate: 'or' },
            { field: 'TaskID', operator: 'equal', value: 4, predicate: 'or' }
        ]
    } as FilterSettingsModel;
});