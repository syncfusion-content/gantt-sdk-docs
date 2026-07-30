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
    },
    splitterSettings: {
        position: '50%'
    }
});

gantt.appendTo('#Gantt');

let scrollBtn: Button = new Button();
scrollBtn.appendTo('#scrolltop');

document.getElementById('scrolltop')!.addEventListener('click', () => {
    gantt.ganttChartModule.scrollObject.setScrollTop(200);
});