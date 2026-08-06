import { Gantt } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'parentID'
    },
    labelSettings: {
        leftLabel: 'TaskName'
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/28/2019')
});
gantt.appendTo('#Gantt');

let zoomInBtn: Button = new Button();
zoomInBtn.appendTo('#zoomIn');

document.getElementById('zoomIn').addEventListener('click', () => {
    gantt.zoomIn();
});

let zoomOutBtn: Button = new Button();
zoomOutBtn.appendTo('#zoomOut');

document.getElementById('zoomOut').addEventListener('click', () => {
    gantt.zoomOut();
});

let fitToBth: Button = new Button();
fitToBth.appendTo('#fitToProject');

document.getElementById('fitToProject').addEventListener('click', () => {
    gantt.fitToProject();
});