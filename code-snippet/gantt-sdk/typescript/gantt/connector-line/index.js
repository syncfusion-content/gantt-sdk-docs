var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '440px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        dependency: 'Predecessor',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    connectorLineWidth:2,
    connectorLineBackground:'red',
});
ganttChart.appendTo('#Gantt');