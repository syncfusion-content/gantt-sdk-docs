import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

let primaryGantt: Gantt;
let secondaryGantt: Gantt;

let taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
};

function syncScroll(args: any): void {
    if (args.requestType === 'scroll' && args.scrollDirection === 'Horizontal') {
        const chart = secondaryGantt.element.querySelector('.e-chart-root-container > div') as HTMLElement;
        if (chart) {
            chart.scrollLeft = args.scrollLeft;
        }
    }
}

primaryGantt = new Gantt({
    dataSource: data,
    height: '450px',
    width: '100%',
    taskFields: taskFields,
    treeColumnIndex: 1,
    allowSelection: true,
    dateFormat: 'MMM dd, y',
    highlightWeekends: true,
    actionComplete: syncScroll
});
primaryGantt.appendTo('#primaryGantt');

secondaryGantt = new Gantt({
    dataSource: data,
    height: '450px',
    width: '100%',
    taskFields: taskFields,
    treeColumnIndex: 1,
    allowSelection: true,
    dateFormat: 'MMM dd, y',
    highlightWeekends: true
});
secondaryGantt.appendTo('#secondaryGantt');