import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

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
  dataBound: dataBound,
});
gantt.appendTo('#Gantt');

function dataBound() {
  (gantt.treeGrid.getRowByIndex(2) as HTMLElement).style.background = 'rgb(193, 228, 234)';
}
