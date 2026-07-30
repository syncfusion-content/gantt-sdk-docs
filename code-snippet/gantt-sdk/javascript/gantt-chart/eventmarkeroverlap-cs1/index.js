ej.gantt.Gantt.Inject(ej.gantt.DayMarkers);
var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
	height:'450px',
	taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
	    duration: 'Duration',
            progress: 'Progress',
	    child: 'subtasks'
        },
	    eventMarkers: [
            {
                day: '04/10/2019',
                cssClass: 'e-custom-event-marker',
                label: 'Project approval and kick-off'
            },
            {
                day: '04/10/2019',
                cssClass: 'e-custom-event-marker',
                label: 'Project approval and kick-off'
            },
        ],
        dataBound() {
            var labeltop = 100;
            var rightarrow = 110;
            for (var i = 0; i < this.eventMarkers.length; i++) {
              document.getElementsByClassName('e-span-label')[i].style.top = labeltop + 'px';
              document.getElementsByClassName('e-gantt-right-arrow')[i].style.top = rightarrow + 'px';
                labeltop = labeltop + 35;
                rightarrow = rightarrow + 35;  
            }
        },
        projectStartDate: new Date('03/24/2019'),
        projectEndDate: new Date('07/06/2019')
    });
ganttChart.appendTo('#Gantt');
