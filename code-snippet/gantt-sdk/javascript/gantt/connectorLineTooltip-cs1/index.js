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
		tooltipSettings: {
            showTooltip: true,
            connectorLine: '#dependencyLineTooltip'
        }
});
ganttChart.appendTo('#Gantt');