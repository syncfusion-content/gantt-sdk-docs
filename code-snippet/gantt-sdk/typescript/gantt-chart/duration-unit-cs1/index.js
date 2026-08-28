
var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '380px',
    daysPerWeek: 5,
    daysPerMonth: 20,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        durationUnit: 'DurationUnit',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 4
    }		
});
ganttChart.appendTo('#Gantt');
