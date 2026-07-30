import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { ganttData, GanttTask } from './datasource.ts';

Gantt.Inject(Edit, Selection);

const gantt = new Gantt({
  dataSource: ganttData,
  height: '430px',
  treeColumnIndex: 1,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
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
  splitterSettings: { position: '75%' },
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
  },
  selectionSettings: { mode: 'Row', type: 'Single' }
});

gantt.appendTo('#Gantt');

function generateTaskID(): number {
  return Math.floor(1000 + Math.random() * 90000);
}

function generateTaskName(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateStartDate(): Date {
  return new Date();
}

function generateDuration(): number {
  return Math.floor(Math.random() * 10) + 1;
}

function generateNewTask(): GanttTask {
  return {
    TaskID: generateTaskID(),
    TaskName: generateTaskName(),
    StartDate: generateStartDate(),
    Duration: generateDuration(),
    Progress: 0,
  };
}

let above: Button = new Button();
above.appendTo('#above');

(document.getElementById('above') as HTMLElement).addEventListener('click', () => {
  const newRecord = generateNewTask();
  gantt.addRecord(newRecord, 'Above', 0);
});

let below: Button = new Button();
below.appendTo('#below');

(document.getElementById('below') as HTMLElement).addEventListener('click', () => {
  const newRecord = generateNewTask();
  gantt.addRecord(newRecord, 'Below', 1);
});

let child: Button = new Button();
child.appendTo('#child');

(document.getElementById('child')  as HTMLElement).addEventListener('click', () => {
  const newRecord = generateNewTask();
  gantt.clearSelection();
  gantt.addRecord(newRecord, 'Child', 2);
});
