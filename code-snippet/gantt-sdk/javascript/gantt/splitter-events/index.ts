


import { Gantt,} from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        dependency: 'Predecessor'
    },
    splitterSettings: {
        columnIndex: 2
    },
    treeColumnIndex: 1,
    dataBound: dataBound,
    splitterResizing: splitterResizing,
    splitterResized: splitterResized
});

gantt.appendTo('#Gantt');

function dataBound () {
    const splitterBar = document.querySelector('.e-split-bar') as HTMLElement;
    if (splitterBar) {
        splitterBar.addEventListener('mouseover', () => {
            splitterBar.style.background = 'grey';
            const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
            if (resizeHandler) {
                resizeHandler.style.visibility = 'hidden';
            }
        });
        splitterBar.addEventListener('mouseleave', () => {
            splitterBar.style.background = '#dee2e6';
            const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
            if (resizeHandler) {
                resizeHandler.style.visibility = 'visible';
            }
        });
    }
}

function splitterResizing () {
    const splitterBar = document.querySelector('.e-split-bar') as HTMLElement;
    if (splitterBar) {
        splitterBar.style.background = 'grey';
        const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
        if (resizeHandler) {
            resizeHandler.style.visibility = 'hidden';
        }
    }
}

function splitterResized () {
    const splitterBar = document.querySelector('.e-split-bar') as HTMLElement;
    if (splitterBar) {
        splitterBar.style.background = '#dee2e6';
        const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
        if (resizeHandler) {
            resizeHandler.style.visibility = 'visible';
        }
    }
}