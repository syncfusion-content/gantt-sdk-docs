import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Gantt.Inject(Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    editSettings: {
        allowEditing: true,
    },
    allowUnscheduledTasks: true
});
gantt.appendTo('#Gantt');

let button: Button = new Button();
button.appendTo('#milestone');

document.getElementById('milestone').addEventListener('click', () => {
    gantt.convertToMilestone('6')
});