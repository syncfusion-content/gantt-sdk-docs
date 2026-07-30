

ej.gantt.Gantt.Inject(ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
         dataSource: ganttData,
         taskFields: {
            dependency: 'Predecessor'
         }
});
ganttChart.appendTo('#Gantt');



