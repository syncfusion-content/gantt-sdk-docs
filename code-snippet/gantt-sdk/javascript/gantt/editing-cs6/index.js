ej.gantt.Gantt.Inject(ej.gantt.Edit);

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
            parentID: 'ParentID'
        },
		editSettings: {
              allowEditing: true,
			  allowTaskbarEditing:true,
              mode:'Auto'
            }
       
});
ganttChart.appendTo('#Gantt');