ej.gantt.Gantt.Inject(ej.gantt.Sort,ej.gantt.Selection,ej.gantt.Filter);

var ganttChart = new ej.gantt.Gantt({
        dataSource: virtualData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'parentID'
        },
        columns: [
            { field: 'TaskID' },
            { field: 'TaskName' },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'Progress' }
        ],
        loadingIndicator: { indicatorType: 'Shimmer' },
        enableVirtualization: true,
		allowFiltering:true,
		allowSorting:true
});
ganttChart.appendTo('#Gantt');










