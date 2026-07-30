import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
  id: 'ganttDefault',
  height: '450px',
  dataSource: data,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  timelineSettings: {
    timelineUnitSize: 65,
    topTier: { unit: 'Day', format: 'MMM dd, yyyy' },
    bottomTier: { unit: 'Hour', format: 'hh:mm a' }
  },
  dayWorkingTime: [{ from: 0, to: 24 }],
  timezone: 'UTC',
  durationUnit: 'Hour',
  dateFormat: 'hh:mm a',
  includeWeekend: true,
  columns: [
    { field: 'TaskID', headerText: 'Task ID', width: 100 },
    { field: 'TaskName', headerText: 'Task Name', width: 250 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Duration', headerText: 'Duration', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 }
  ]
});

gantt.appendTo('#Gantt');