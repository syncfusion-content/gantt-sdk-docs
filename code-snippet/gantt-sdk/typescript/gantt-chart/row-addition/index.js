ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({ 
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

ganttChart.appendTo('#Gantt');

function generateTaskID() {
  return Math.floor(1000 + Math.random() * 90000);
}

function generateTaskName() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateStartDate() {
  return new Date();
}

function generateDuration(){
  return Math.floor(Math.random() * 10) + 1;
}

function generateNewTask(){
  return {
    TaskID: generateTaskID(),
    TaskName: generateTaskName(),
    StartDate: generateStartDate(),
    Duration: generateDuration(),
    Progress: 0,
  };
}

let above = new ej.buttons.Button();
above.appendTo('#above');

document.getElementById('above').addEventListener('click', () => {
  const newRecord = generateNewTask();
  ganttChart.addRecord(newRecord, 'Above', 0);
});

let below = new ej.buttons.Button();
below.appendTo('#below');

document.getElementById('below').addEventListener('click', () => {
  const newRecord = generateNewTask();
  ganttChart.addRecord(newRecord, 'Below', 1);
});

let child = new ej.buttons.Button();
child.appendTo('#child');

document.getElementById('child').addEventListener('click', () => {
  const newRecord = generateNewTask();
  ganttChart.clearSelection();
  ganttChart.addRecord(newRecord, 'Child', 2);
});


