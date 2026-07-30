
import { Gantt } from '@syncfusion/ej2-gantt';
import { Tooltip } from '@syncfusion/ej2-popups';
import { GanttData, GanttTask } from './datasource.ts';

const gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '430px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
    { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
    { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 },
    { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
    { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 }
  ],
  treeColumnIndex: 1,
  splitterSettings: {
    position: '50%'
  },
  dataBound: () => {
    const ganttElement = document.getElementById('Gantt') as HTMLElement;
    ganttElement.addEventListener('mouseover', (mouseargs: MouseEvent) => {
      let target: HTMLElement | null = null;
      if (
        mouseargs.target &&
        ((mouseargs.target as HTMLElement).classList.contains('e-rowcell') ||
          (mouseargs.target as HTMLElement).classList.contains('e-chart-row-cell'))
      ) {
        target = mouseargs.target as HTMLElement;
      }
      if (target) {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Row details';
        const tooltip = new Tooltip({
          content: buttonElement,
          width: '100px',
          height: '40px',
          opensOn: 'Hover'
        }, target);
        buttonElement.addEventListener('click', () => {
          const rowElement = target.closest('.e-row') || target.closest('.e-chart-row');
          if (rowElement) {
            const rowIndex = rowElement.getAttribute('aria-rowindex');
            if (rowIndex !== null && gantt) {
              const rowInfo = gantt.treeGrid.getRowInfo(target);
              const rowData = rowInfo.rowData as GanttTask;
              const messageElement = document.getElementById('message') as HTMLElement;
              if (rowData) {
                messageElement.textContent = `Button clicked for Task ID: ${rowInfo.rowData['TaskID']}`;
              }
            }
          }
        });
      }
    });
  }
});

gantt.appendTo('#Gantt');
