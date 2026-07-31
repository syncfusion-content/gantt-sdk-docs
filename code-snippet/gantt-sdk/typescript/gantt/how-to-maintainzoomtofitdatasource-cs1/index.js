var ganttChart = new ej.gantt.Gantt({
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
  toolbar: ['ZoomToFit'],
  dataBound: function () {
    ganttChart.fitToProject();
  }
});

ganttChart.appendTo('#Gantt');

var changeBtn = new ej.buttons.Button();
changeBtn.appendTo('#changeData');

document.getElementById('changeData').addEventListener('click', function () {
  ganttChart.dataSource = data;
});