import { Gantt, Columns, TaskFieldsModel } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

const columns: Columns[] = [
    { field: 'TaskID', headerText: 'Task ID', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' }
];

let gantt: Gantt = new Gantt({
    height: '430px',
    dataSource: GanttData,
    taskFields: taskFields,
    timelineSettings: { timelineViewMode: 'Week' },
    columns: columns
});

gantt.appendTo('#Gantt');

let prevBtn: Button = new Button({ content: 'Previous Week' });
prevBtn.appendTo('#previousWeek');

let nextBtn: Button = new Button({ content: 'Next Week' });
nextBtn.appendTo('#nextWeek');

(document.getElementById('previousWeek') as HTMLElement).addEventListener('click', () => {
    gantt.previousTimeSpan();
});

(document.getElementById('nextWeek') as HTMLElement).addEventListener('click', () => {
    gantt.nextTimeSpan();
});