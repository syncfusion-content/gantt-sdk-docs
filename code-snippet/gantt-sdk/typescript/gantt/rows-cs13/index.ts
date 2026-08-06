import { Gantt, RowDataBoundEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData, GanttTask } from 'datasource.ts';

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '380px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  splitterSettings: {
    position: '75%'
  },
  rowDataBound: onRowDataBound,
});
gantt.appendTo('#Gantt');

function onRowDataBound(args: RowDataBoundEventArgs): void {
  const progress = (args.data as GanttTask).Progress as number;
  if (progress < 30) {
    (args.row as HTMLElement).classList.add('below-30');
  } else if (progress >= 30 && progress < 80) {
    (args.row as HTMLElement).classList.add('below-80');
  } else {
    (args.row as HTMLElement).classList.add('above-80');
  }
}