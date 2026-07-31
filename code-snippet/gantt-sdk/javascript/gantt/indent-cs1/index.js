ej.gantt.Gantt.Inject(ej.gantt.Toolbar,ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			parentID: 'ParentID'
        },
		toolbar: ['Indent', 'Outdent'],
    editSettings: {
        allowEditing: true
    }
});
var ind= new ej.buttons.Button();
ind.appendTo('#indent');
var out= new ej.buttons.Button();
out.appendTo('#outdent');
document.getElementById('indent').addEventListener('click', function() {
   ganttChart.indent();
});
document.getElementById('outdent').addEventListener('click', function() {
   ganttChart.outdent();
});
ganttChart.appendTo('#Gantt');