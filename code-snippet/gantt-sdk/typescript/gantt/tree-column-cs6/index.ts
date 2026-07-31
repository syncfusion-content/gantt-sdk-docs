import { Gantt } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

let gantt: Gantt = new Gantt({
  dataSource: data,
  height: '460px',
  treeColumnIndex: 1,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'parentID'
  },
  columns: [
    { field: 'TaskID', headerText: 'ID', width: 80 },
    { field: 'TaskName', headerText: 'Name', width: 200 },
    { field: 'Duration', headerText: 'Duration', width: 100 }
  ]
});

gantt.appendTo('#Gantt');

new Button({}, '#expandAll');
new Button({}, '#collapseAll');
new Button({}, '#expandLevel0');
new Button({}, '#collapseLevel1');
new Button({}, '#expandById');
new Button({}, '#collapseById');
new Button({}, '#expandFirstRow');
new Button({}, '#collapseFirstRow');

document.getElementById('expandAll')!.onclick = () => {
  gantt.expandAll();
};

document.getElementById('collapseAll')!.onclick = () => {
  gantt.collapseAll();
};

document.getElementById('expandLevel0')!.onclick = () => {
  gantt.treeGrid.expandAtLevel(0);
};

document.getElementById('collapseLevel1')!.onclick = () => {
  gantt.treeGrid.collapseAtLevel(1);
};

document.getElementById('expandById')!.onclick = () => {
  gantt.treeGrid.expandByKey(2);
};

document.getElementById('collapseById')!.onclick = () => {
  gantt.treeGrid.collapseByKey(1);
};

document.getElementById('expandFirstRow')!.onclick = () => {
  let rows = gantt.treeGrid.getRows();
  if (rows.length) {
    gantt.treeGrid.expandRow(rows[0]);
  }
};

document.getElementById('collapseFirstRow')!.onclick = () => {
  let rows = gantt.treeGrid.getRows();
  if (rows.length) {
    gantt.treeGrid.collapseRow(rows[0]);
  }
};