ej.gantt.Gantt.Inject(ej.gantt.Sort);

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
		allowSorting:true,
		actionBegin: actionHandler,
        actionComplete: actionHandler
});
ganttChart.appendTo('#Gantt');

function actionHandler(args) {
    alert(args.requestType + ' ' + args.type); //custom Action
}