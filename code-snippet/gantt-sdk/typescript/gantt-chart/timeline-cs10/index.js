var ganttChart = new ej.gantt.Gantt({
    height: '430px',
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    timelineSettings: {
        topTier: {
            unit: 'Month',
            count: 3,
            formatter: function (date, format, tier, mode) {
                var quarter = 'Q' + (Math.floor(date.getMonth() / 3) + 1);
                var prefix = tier === 'topTier' ? 'T-' : 'B-';
                var suffix = mode === 'Month' ? '-M' : '';
                console.log(format);
                return '' + prefix + quarter + suffix;
            }
        },
        bottomTier: {
            unit: 'Month',
            format: 'MMM'
        }
    },
    splitterSettings: { position: '50%' },
    projectStartDate: new Date('01/04/2019'),
    projectEndDate: new Date('12/30/2019'),
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ]
});

ganttChart.appendTo('#Gantt');