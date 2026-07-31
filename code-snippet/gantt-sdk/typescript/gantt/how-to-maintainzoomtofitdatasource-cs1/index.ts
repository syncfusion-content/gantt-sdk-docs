import { Gantt, Toolbar } from '@syncfusion/ej2-gantt';
import { GanttData, data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Gantt.Inject(Toolbar);

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  toolbar: ['ZoomToFit'],
  labelSettings: {
    leftLabel: 'TaskName'
  },
  projectStartDate: new Date('03/24/2019'),
  projectEndDate: new Date('04/28/2019'),
  dataBound: function () {
    this.fitToProject();
  }
});
gantt.appendTo('#Gantt');

let changeBtn: Button = new Button();
changeBtn.appendTo('#changeData');

document.getElementById('changeData').addEventListener('click', () => {
  var obj = document.getElementById('Gantt').ej2_instances[0];
  obj.dataSource = data;
});