import { Gantt, QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-gantt';
import { GanttData, GanttTask } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
      position: '75%'
    },
    queryCellInfo: (args: QueryCellInfoEventArgs) => {
        if ((args.data as GanttTask)['TaskID'] === 4 && (args.column as Column).field === 'TaskName') {
            args.rowSpan = 2;
        }
    }
});
gantt.appendTo('#Gantt');