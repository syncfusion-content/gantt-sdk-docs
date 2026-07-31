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
	    collapsing:function(args){
		    if(args.data.TaskID==1)
				args.cancel=true;
		},
		expanding:function(args){
			if(args.data.TaskID==5)
				args.cancel=true;
		}
});
ganttChart.appendTo('#Gantt');