var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
		 height:'450px',
		 taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
			baselineStartDate:"BaselineStartDate",
			baselineEndDate:"BaselineEndDate",
            progress: 'Progress',
		    parentID: 'ParentID'
        },
		tooltipSettings: {
            showTooltip: true,
            baseline: '#baselineTooltip'
        },
	    renderBaseline:true,
		baselineColor:'red'
		
});
ganttChart.appendTo('#Gantt');