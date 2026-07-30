import { Gantt } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    }
});

gantt.appendTo('#Gantt');

let dateBtn: Button = new Button();
dateBtn.appendTo('#changedate');

document.getElementById('changedate')!.addEventListener('click', () => {
    gantt.updateProjectDates(new Date('04/10/2019'), new Date('06/20/2019'), true);
});