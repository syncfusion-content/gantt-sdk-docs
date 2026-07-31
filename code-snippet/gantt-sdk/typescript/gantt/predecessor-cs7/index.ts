import { Gantt } from '@syncfusion/ej2-gantt';
import { Switch } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let switchObj: Switch = new Switch({ checked: true, change: Onchange });
switchObj.appendTo('#switch');
function Onchange() {
	if (switchObj.checked) {
    gantt.autoUpdatePredecessorOffset = true;
	} else {
		gantt.autoUpdatePredecessorOffset = false;
	}
}
let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '420px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency:'Predecessor',
    baselineStartDate: "BaselineStartDate",
    baselineEndDate: "BaselineEndDate",
    child: 'subtasks',
  },
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  },
  autoUpdatePredecessorOffset: true,
  eventMarkers: [
      {
          day: '04/10/2019',
          cssClass: 'e-custom-event-marker',
          label: 'Project approval and kick-off'
      }
  ],
  holidays: [{
      from: "04/04/2019",
      to: "04/05/2019",
      label: " Public holidays",
      cssClass: "e-custom-holiday"
  
  },
  {
      from: "04/12/2019",
      to: "04/12/2019",
      label: " Public holiday",
      cssClass: "e-custom-holiday"
  
  }],
  columns: [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'Predecessor', headerText: 'Depedency', width: '150' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
  ],
});
gantt.appendTo('#Default');