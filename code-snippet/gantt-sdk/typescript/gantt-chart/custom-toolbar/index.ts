import { Gantt, Toolbar, } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Toolbar);

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '420px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  toolbar: [
    { text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
    { text: 'Collapse All', tooltipText: 'Collapse All', prefixIcon: 'e-collapse-2', id: 'collapseall', align: 'Right' }
  ],
  toolbarClick: toolbarClick,
});
gantt.appendTo('#Gantt');

function toolbarClick (args: ClickEventArgs) {
  if (args.item.id === 'expandall') {
    gantt.expandAll();
  }
  if (args.item.id === 'collapseall') {
    gantt.collapseAll();
  }
}