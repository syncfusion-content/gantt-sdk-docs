import { Gantt } from '@syncfusion/ej2-gantt';
import { setCulture, loadCldr, setCurrencyCode } from '@syncfusion/ej2-base';
import { GanttData } from './datasource.ts';

import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';

setCulture('es-AR');
setCurrencyCode('ARS');
loadCldr(cagregorian, currencies, numbers, timeZoneNames);

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '430px',
  locale: 'es-AR',
  treeColumnIndex: 1,
  splitterSettings: {
    position: '75%'
  },
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
    { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
    {
      field: 'StartDate',
      headerText: 'Start Date',
      textAlign: 'Right',
      width: 150,
      format: { type: 'date', format: 'yyyy-MMM-dd' }
    },
    {
      field: 'EndDate',
      headerText: 'End Date',
      textAlign: 'Right',
      width: 210,
      format: { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }
    },
    { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
    {
      field: 'Progress',
      headerText: 'Progress',
      textAlign: 'Right',
      width: 120,
      format: 'c2',
      type: 'number'
    }
  ]
});
gantt.appendTo('#Gantt');