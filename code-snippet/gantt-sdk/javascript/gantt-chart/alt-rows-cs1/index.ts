import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  allowSelection: true,
  height: '380px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  treeColumnIndex: 1,
  splitterSettings: {
    position: '75%'
  },
});
gantt.appendTo('#Gantt');