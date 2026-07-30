import { Gantt, Toolbar } from '@syncfusion/ej2-gantt';
import { Dialog } from '@syncfusion/ej2-popups';
import { data } from './datasource.ts';

Gantt.Inject(Toolbar);

let gantt: Gantt = new Gantt({
  dataSource: data,
  height: '370px',
  treeColumnIndex: 1,
  splitterSettings: { position: '75%' },
  collapseAllParentTasks: true,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID', width: 90 },
    { field: 'TaskName', headerText: 'Task Name', width: 290 },
    { field: 'StartDate', headerText: 'Start Date', width: 120 },
    { field: 'Duration', headerText: 'Duration', width: 90 },
    { field: 'Progress', headerText: 'Progress', width: 120 }
  ],
  toolbar: [
    'Add',
    'Edit',
    'Delete',
    { text: 'Show Expand Parent Tasks', id: 'show_parents', tooltipText: 'Show expanded parent tasks in dialog' }
  ],
  toolbarClick: (args: any) => {
    if (args.item.id === 'show_parents') {
      let expandedRecords = gantt.getExpandedRecords(gantt.flatData);
      let parentTasks = expandedRecords
        .filter((record: any) => record.hasChildRecords && record.expanded)
        .map((record: any) => ({
          TaskID: record.TaskID,
          TaskName: record.TaskName
        }));

      let content = parentTasks.length
        ? `<ul>${parentTasks.map((task: any) =>
          `<li>Task ID: ${task.TaskID}, Task Name: ${task.TaskName}</li>`
        ).join('')}</ul>`
        : `<div>No parent tasks found.</div>`;

      dialog.content = content;
      dialog.show();
    }
  }
});

gantt.appendTo('#Gantt');

let dialog: Dialog = new Dialog({
  header: 'Parent Tasks',
  width: '400px',
  isModal: true,
  visible: false,
  showCloseIcon: true
});

dialog.appendTo('#Dialog');