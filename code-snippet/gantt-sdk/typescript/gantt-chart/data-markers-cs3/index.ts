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

let indicatorBtn: Button = new Button({
    content: 'Indicator background change'
});
indicatorBtn.appendTo('#indicatorBtn');

document.getElementById('indicatorBtn')!.addEventListener('click', () => {
    const nodes = gantt.element.querySelectorAll('.e-indicator-span');
    nodes.forEach((box: Element) => {
        const icon = box.children[0] as HTMLElement;
        if (icon) {
            icon.style.color = 'red';
        }
    });
});