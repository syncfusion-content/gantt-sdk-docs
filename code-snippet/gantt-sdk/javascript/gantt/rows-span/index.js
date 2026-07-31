var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height:'380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        position: '75%'
    },
    queryCellInfo: (args) => {
        if ((args.data)['TaskID'] === 4 && (args.column).field === 'TaskName') {
            args.rowSpan = 2;
        }
    }
});
ganttChart.appendTo('#Gantt');