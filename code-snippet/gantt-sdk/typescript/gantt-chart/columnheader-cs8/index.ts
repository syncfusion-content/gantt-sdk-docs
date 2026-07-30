import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

function setHeaderHeight(): void {
  const headerDiv: HTMLElement | null =
    document.querySelector('.orientationcss > div');
  if (!headerDiv) {
    return;
  }
  const textWidth: number = headerDiv.scrollWidth;
  const headerCells: NodeListOf<HTMLElement> =
    document.querySelectorAll('.e-headercell');
  headerCells.forEach((cell: HTMLElement) => {
    cell.style.height = textWidth + 'px';
  });
}

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
    {
      field: 'Duration',
      headerText: 'Duration',
      textAlign: 'Center',
      customAttributes: { class: 'orientationcss' }
    },
    { field: 'Progress', headerText: 'Progress' }
  ],
  created: setHeaderHeight
});

gantt.appendTo('#Gantt');