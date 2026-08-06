import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

interface IGanttTask {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  EndDate: Date;
  Duration: number;
  Progress: number;
  ParentID: number;
}

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '430px',
  treeColumnIndex: 1,
  splitterSettings: { position: '75%' },
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
    { field: 'TaskName', headerText: 'Task Name', width: 290 },
    { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
    { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
    { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
  ],

  expanding: (args: any) => {
    const data = args.data as IGanttTask;
    if (data) {
      updateMessage(
        `Expanding Task: ${data.TaskName} (ID: ${data.TaskID})`,
        'blue'
      );

      if (data.TaskID === 1) {
        args.cancel = true;
        updateMessage(
          `Expanding cancelled for Task: ${data.TaskName} (ID: ${data.TaskID})`,
          'red'
        );
      }
    }
  },

  collapsing: (args: any) => {
    const data = args.data as IGanttTask;
    if (data) {
      updateMessage(
        `Collapsing Task: ${data.TaskName} (ID: ${data.TaskID})`,
        'orange'
      );

      if (data.TaskID === 5) {
        args.cancel = true;
        updateMessage(
          `Collapsing cancelled for Task: ${data.TaskName} (ID: ${data.TaskID})`,
          'red'
        );
      }
    }
  },

  expanded: (args: any) => {
    const data = args.data as IGanttTask;
    if (data && args.row) {
      updateMessage(
        `Task Expanded: ${data.TaskName} (ID: ${data.TaskID})`,
        'green'
      );

      args.row.style.background = '';

      const progress =
        data.Progress !== undefined && data.Progress !== null
          ? data.Progress
          : 0;

      if (progress > 50) {
        args.row.style.background = '#c0f6c7ff';
      }
    }
  },

  collapsed: (args: any) => {
    const data = args.data as IGanttTask;
    if (data && args.row) {
      updateMessage(
        `Task Collapsed: ${data.TaskName} (ID: ${data.TaskID})`,
        'purple'
      );

      args.row.style.background = '';

      const progress =
        data.Progress !== undefined && data.Progress !== null
          ? data.Progress
          : 0;

      if (progress < 50) {
        args.row.style.background = '#fb9c9cff';
      }
    }
  }
});

gantt.appendTo('#Gantt');

function updateMessage(text: string, color: string): void {
  const messageEle = document.getElementById('message') as HTMLElement;
  messageEle.innerText = text;
  messageEle.style.color = color;
}