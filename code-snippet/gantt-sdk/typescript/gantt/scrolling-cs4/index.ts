


import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        position: "50%"
    }
});
gantt.appendTo('#Gantt');

let scrollBtn: Button = new Button();
scrollBtn.appendTo('#scrollTop');

document.getElementById('scrollTop').addEventListener('click', () => {
    gantt.ganttChartModule.scrollObject.setScrollTop(300);
});