var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '400px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        dependency: 'Predecessor'
    },
    editSettings: {
        allowEditing: true,
        editMode: 'Auto',
        allowTaskbarEditing: true
    }
});

ganttChart.appendTo('#Gantt');