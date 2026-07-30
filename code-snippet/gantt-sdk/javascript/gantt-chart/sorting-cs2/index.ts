


import { Gantt, Sort } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';
import { SortEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Sort);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    allowSorting: true,
    actionBegin: actionHandler,
    actionComplete: actionHandler
});
gantt.appendTo('#Gantt');

function actionHandler(args: SortEventArgs) {
    alert(args.requestType + ' ' + args.type);
}