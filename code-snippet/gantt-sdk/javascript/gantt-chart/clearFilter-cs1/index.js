ej.gantt.Gantt.Inject(ej.gantt.Filter);

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
		allowFiltering: true,
		filterSettings: {
            columns: [{ field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Identify' },
               { field: 'Progress', matchCase: false, operator: 'equal', predicate: 'and', value: 90 }]
        }
});
ganttChart.appendTo('#Gantt');

var filterBtn= new ej.buttons.Button();
filterBtn.appendTo('#clearFilter');

document.getElementById('clearFilter').addEventListener('click', function() {
    ganttChart.clearFiltering();
});