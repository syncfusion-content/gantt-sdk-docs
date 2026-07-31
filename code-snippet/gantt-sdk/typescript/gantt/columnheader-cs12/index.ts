import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '450px',
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
  ],
  dataBound: () => {
    // Style by index
    let headerByIndex =
      gantt.treeGrid.getColumnHeaderByIndex(0);
    if (headerByIndex) {
      headerByIndex.style.color = '#0d0b0b';
    }

    // Style by field
    let taskNameHeader =
      gantt.treeGrid.getColumnHeaderByField('TaskName');
    if (taskNameHeader) {
      taskNameHeader.style.backgroundColor = '#f45ddeab';
      taskNameHeader.style.color = '#0d0b0b';
    }

    // Style by UID
    let headerByUid =
      gantt.treeGrid.getColumnHeaderByUid('grid-column3');
    if (headerByUid) {
      headerByUid.style.backgroundColor = '#f45ddeab';
      headerByUid.style.color = '#0d0b0b';
    }

    // Style by field index
    let durationIndex =
      gantt.treeGrid.getColumnIndexByField('Duration');
    let durationHeader =
      gantt.treeGrid.getColumnHeaderByIndex(durationIndex);
    if (durationHeader) {
      durationHeader.style.color = '#0d0b0b';
    }

    // Style by UID index
    let uidIndex =
      gantt.treeGrid.getColumnIndexByUid('grid-column4');
    let uidHeader =
      gantt.treeGrid.getColumnHeaderByIndex(uidIndex);
    if (uidHeader) {
      uidHeader.style.color = '#0d0b0b';
    }
  }
});

gantt.appendTo('#Gantt');