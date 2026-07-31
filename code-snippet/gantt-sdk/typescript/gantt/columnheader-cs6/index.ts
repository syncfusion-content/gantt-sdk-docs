import { Gantt } from '@syncfusion/ej2-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { TextBox } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';
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
  ]
});
gantt.appendTo('#Gantt');

let columnList: DropDownList = new DropDownList({
  dataSource: [
    { text: 'TaskName', value: 'TaskName' },
    { text: 'StartDate', value: 'StartDate' },
    { text: 'Duration', value: 'Duration' },
    { text: 'Progress', value: 'Progress' }
  ],
  fields: { text: 'text', value: 'value' },
  index: 0,
  width: '150px'
});
columnList.appendTo('#columnList');

let headerText: TextBox = new TextBox({
  placeholder: 'Enter new header text',
  width: '200px'
});
headerText.appendTo('#headerText');

let changeBtn: Button = new Button();
changeBtn.appendTo('#changeHeader');

document.getElementById('changeHeader')!.addEventListener('click', () => {
  let field: string = columnList.value as string;
  let column = gantt.treeGrid.grid.getColumnByField(field);
  if (column && headerText.value!.trim() !== '') {
    column.headerText = headerText.value!;
    gantt.treeGrid.grid.refreshHeader();
  }
});