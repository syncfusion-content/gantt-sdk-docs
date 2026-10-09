var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    projectStartDate: new Date('04/01/2019'),
    projectEndDate: new Date('04/30/2019'),
    taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        parentID: 'ParentId'
    },
    labelSettings: {
        leftLabel: 'TaskName'
    },
    calendarSettings: {
        projectCalendar: {
            workingTime: [
                { from: 9, to: 12 },
                { from: 13, to: 17 }
            ]
        }
    }
});

ganttChart.appendTo('#Gantt');