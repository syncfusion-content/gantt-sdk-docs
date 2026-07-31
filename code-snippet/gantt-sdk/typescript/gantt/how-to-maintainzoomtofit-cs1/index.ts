import { Gantt, Edit, Selection, Toolbar, actionCompleteArgs, ITaskbarEditedEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Selection, Toolbar);

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '430px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  editSettings: {
    allowEditing: true,
    allowTaskbarEditing: true
  },
  toolbar: ['Edit', 'ZoomToFit'],
  actionComplete: (args: actionCompleteArgs) => {
    if ((args.action === "CellEditing" || args.action === "DialogEditing")
      && args.requestType === "save") {
      gantt.dataSource = GanttData;
      gantt.fitToProject();
    }
  },
  taskbarEdited: (args: ITaskbarEditedEventArgs) => {
    if (args) {
      gantt.dataSource = GanttData;
      gantt.fitToProject();
    }
  }
});

gantt.appendTo('#Gantt');