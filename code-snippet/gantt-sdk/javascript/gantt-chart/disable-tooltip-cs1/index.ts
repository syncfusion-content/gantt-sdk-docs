import { Gantt } from '@syncfusion/ej2-gantt';
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
        baselineStartDate: 'BaselineStartDate',
        baselineEndDate: 'BaselineEndDate'
    },
    tooltipSettings: {
        showTooltip: true
    },
    beforeTooltipRender: (args: any) => {
        if (
            args.args.target.classList.contains('e-gantt-child-taskbar') ||
            args.args.target.classList.contains('e-gantt-parent-taskbar') ||
            args.args.target.classList.contains('e-taskbar-left-resizer') ||
            args.args.target.classList.contains('e-taskbar-right-resizer')
        ) {
            args.cancel = true;
        }
    }
});

gantt.appendTo('#Gantt');