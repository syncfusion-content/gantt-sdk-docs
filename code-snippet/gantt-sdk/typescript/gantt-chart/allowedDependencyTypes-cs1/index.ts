import { Gantt, Edit, Selection, DayMarkers } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Selection, DayMarkers);

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  },
  allowedDependencyTypes: ['SF'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  allowSelection: true,
  gridLines: "Both",
  highlightWeekends: true,
  labelSettings: {
    leftLabel: 'TaskName',
    taskLabel: 'Progress'
  },
  height: '550px',
  projectStartDate: new Date('03/21/2019'),
  projectEndDate: new Date('05/30/2019')
});
gantt.appendTo('#Default');