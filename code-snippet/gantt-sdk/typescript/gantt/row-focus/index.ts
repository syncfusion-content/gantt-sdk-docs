import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

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
  allowSelection: true,
  autoFocusTasks: true,
  treeColumnIndex:1
});
gantt.appendTo('#Gantt');

let checkbox: CheckBox = new CheckBox({ 
  label: 'Enable / Disable Auto-focus Tasks', 
  checked: true,
  change:onCheckBoxChange 
});
checkbox.appendTo('#checkbox');

function onCheckBoxChange(args: ChangeEventArgs): void {
  gantt.autoFocusTasks = args.checked;
}

