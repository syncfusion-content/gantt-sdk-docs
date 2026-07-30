import { Gantt, ColumnModel } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let headerTextMap: { [key: string]: string } = {
  TaskID: 'ID',
  TaskName: 'Name',
  StartDate: 'Start Date',
  Duration: 'Task Duration',
  Progress: 'Task Progress'
};

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
  ]
});
gantt.appendTo('#Gantt');

let changeBtn: Button = new Button({ cssClass: 'e-outline' });
changeBtn.appendTo('#changeHeader');

document.getElementById('changeHeader')!.addEventListener('click', () => {
  gantt.treeGrid.grid.columns.forEach((column: ColumnModel) => {
    if (headerTextMap[column.field as string]) {
      column.headerText = headerTextMap[column.field as string];
    }
  });
  gantt.treeGrid.grid.refreshHeader();
});