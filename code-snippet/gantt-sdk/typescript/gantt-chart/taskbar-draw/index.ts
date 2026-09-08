import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import {GanttData} from './datasource.ts';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    projectStartDate: new Date('03/28/2019'),
    projectEndDate: new Date('05/18/2019'),
    taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        endDate: 'EndDate'
    },
    labelSettings: {
        leftLabel: 'TaskName'
    },
    allowUnscheduledTasks: true,
    editSettings: {
        allowTaskbarEditing: true,
        allowTaskbarDraw: true
    }
});

gantt.appendTo('#Gantt');