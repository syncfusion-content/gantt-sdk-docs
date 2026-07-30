import { Gantt, Freeze } from '@syncfusion/ej2-gantt';
import { GanttData, resourceCollection } from './datasource.ts';

Gantt.Inject(Freeze);

var taskSettings: object = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  endDate: 'EndDate',
  dependency: 'Predecessor',
  progress: 'Progress',
  parentID: 'ParentID',
  resourceInfo: 'Resources'
};

var splitterSettings: object = {
  position: '65%'
};

var labelSettings: object = {
  taskLabel: 'Progress'
};

var resourceFields: object = {
  id: 'resourceId',
  name: 'resourceName'
};

let gantt: Gantt = new Gantt({
  height: '430px',
  dataSource: GanttData,
  taskFields: taskSettings,
  treeColumnIndex: 1,
  splitterSettings: splitterSettings,
  gridLines: 'Both',
  resources: resourceCollection,
  resourceFields: resourceFields,
  labelSettings: labelSettings,

  columns: [
    { field: 'TaskID', headerText: 'Task ID', freeze: 'Left' },
    { field: 'TaskName', headerText: 'Task Name', width: 200 },
    { field: 'StartDate', headerText: 'Start Date', width: 130 },
    { field: 'Duration', headerText: 'Duration', width: 110 },
    { field: 'EndDate', headerText: 'End Date', width: 130 },
    { field: 'Progress', headerText: 'Progress', width: 110, freeze: 'Fixed' },
    { field: 'Predecessor', headerText: 'Dependency', width: 120 },
    { field: 'Resources', headerText: 'Assignee', freeze: 'Right' }
  ]
});

gantt.appendTo('#Gantt');