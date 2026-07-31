


import { Gantt, RowDataBoundEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData, GanttTask } from './datasource.ts';

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
  rowDataBound: rowDataBound,
});
gantt.appendTo('#Gantt');

function rowDataBound(args: RowDataBoundEventArgs) {
  const rowElement = args.row as HTMLElement;
  const rowData = args.data as GanttTask;
  if (rowData.hasChildRecords) {
    rowElement.classList.add('parent-row');
  } else {
    rowElement.classList.add('child-row');
  }
}
