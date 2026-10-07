var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        parentID: 'ParentID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress'
    },
    timelineSettings: {
        topTier: {
            unit: 'Week',
            formatter: function (date) {
                var currentDate = new Date(date);
                var firstDay = new Date(currentDate.getFullYear(), 0, 1);
                var days = Math.floor((currentDate.getTime() - firstDay.getTime()) / 86400000);
                var weekNumber = Math.ceil((days + firstDay.getDay() + 1) / 7);
                return 'Week ' + weekNumber;
            }
        },
        bottomTier: {
            unit: 'Day',
            count: 1
        }
    },
    projectStartDate: new Date('2019-04-01'),
    projectEndDate: new Date('2019-10-01')
});

ganttChart.appendTo('#Gantt');