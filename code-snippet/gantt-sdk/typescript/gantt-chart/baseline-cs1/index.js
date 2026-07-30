var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			baselineStartDate:"BaselineStartDate",
			baselineEndDate:"BaselineEndDate",
            baselineDuration: "BaselineDuration",
		    parentID: "ParentID"
        },
		renderBaseline:true,
		baselineColor:'red'
    });
ganttChart.appendTo('#Gantt');