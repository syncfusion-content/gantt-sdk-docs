import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '450px',
  splitterSettings: {
    position: '75%'
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' }
  ]
});

gantt.appendTo('#Gantt');