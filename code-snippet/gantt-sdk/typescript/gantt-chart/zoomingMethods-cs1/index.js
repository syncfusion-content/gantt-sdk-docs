var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			      duration: 'Duration',
            progress: 'Progress',
			      dependency: 'Predecessor',
            parentID: 'parentID'
        },
        labelSettings: {
            leftLabel: 'TaskName'
        },
	    projectStartDate: new Date('03/24/2019'),
        projectEndDate: new Date('04/28/2019')
    });
ganttChart.appendTo('#Gantt');

var zoomInBtn= new ej.buttons.Button();
zoomInBtn.appendTo('#zoomIn');

document.getElementById('zoomIn').addEventListener('click', function() {
  ganttChart.zoomIn();
});

var zoomOutBtn= new ej.buttons.Button();
zoomInBtn.appendTo('#zoomOut');

document.getElementById('zoomOut').addEventListener('click', function() {
  ganttChart.zoomOut();
});

var fitToBtn= new ej.buttons.Button();
zoomInBtn.appendTo('#fitToProject');

document.getElementById('fitToProject').addEventListener('click', function() {
  ganttChart.fitToProject();
});