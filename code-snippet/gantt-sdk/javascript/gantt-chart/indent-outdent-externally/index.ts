import { Gantt, Selection, Edit } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { ganttData } from './datasource.ts';

Gantt.Inject(Selection, Edit,);

let gantt: Gantt = new Gantt({
  dataSource: ganttData,
  height: '380px',
  treeColumnIndex:1,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
    { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
    { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
    { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
    { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
  ],
  editSettings: {
    allowEditing: true,
  },
  splitterSettings: {
    position: '75%'
  }
});
gantt.appendTo('#Gantt');

let indent: Button = new Button();
indent.appendTo('#indent');

(document.getElementById('indent') as HTMLElement).addEventListener('click', () => {
  gantt.selectRow(2);
  gantt.indent();
});

let outdent: Button = new Button();
outdent.appendTo('#outdent');

(document.getElementById('outdent') as HTMLElement).addEventListener('click', () => {
  gantt.selectRow(2);
  gantt.outdent();
});