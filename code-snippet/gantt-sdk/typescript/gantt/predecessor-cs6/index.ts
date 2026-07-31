import { Gantt } from '@syncfusion/ej2-gantt';
import { Switch } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let switchObj: Switch = new Switch({ checked: false, change: Onchange });
switchObj.appendTo('#switch');
function Onchange() {
	let ganttDependencyViewContainer = document.querySelector('.e-gantt-dependency-view-container') as HTMLElement;
	if (switchObj.checked) {
    ganttDependencyViewContainer.style.visibility = 'hidden';
	} else {
		ganttDependencyViewContainer.style.visibility  = 'visible';
	}
}
let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '420px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    dependency: 'Predecessor',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
  },
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  },
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