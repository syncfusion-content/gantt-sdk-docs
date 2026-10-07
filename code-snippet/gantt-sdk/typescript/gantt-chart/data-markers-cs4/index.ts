import { Gantt } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
        indicators: 'Indicators'
    }
});

gantt.appendTo('#Gantt');

let hideBtn: Button = new Button({
    content: 'Hide data markers'
});
hideBtn.appendTo('#hideBtn');

let showBtn: Button = new Button({
    content: 'Show data markers'
});
showBtn.appendTo('#showBtn');

document.getElementById('hideBtn')!.addEventListener('click', () => {
    const nodes = gantt.element.querySelectorAll('.e-indicator-span');
    nodes.forEach((box: HTMLElement) => {
        box.style.display = 'none';
    });
});

document.getElementById('showBtn')!.addEventListener('click', () => {
    const nodes = gantt.element.querySelectorAll('.e-indicator-span');
    nodes.forEach((box: HTMLElement) => {
        box.style.display = '';
    });
});
