
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
            holidays: [
                { from: new Date('04/10/2019'), to: new Date('04/10/2019'), label: 'Holiday 1' },
                { from: new Date('04/17/2019'), to: new Date('04/17/2019'), label: 'Holiday 2' }
            ]
        }
    }
});

ganttChart.appendTo('#Gantt');