ej.gantt.Gantt.Inject(ej.gantt.Filter, ej.gantt.Toolbar);

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
		allowFiltering:true
});
ganttChart.appendTo('#Gantt');

var searchBtn= new ej.buttons.Button();
searchBtn.appendTo('#search');

document.getElementById('search').addEventListener('click', function() {
    var searchText = document.getElementsByClassName('searchtext')[0].value;
    ganttChart.search(searchText);
});
