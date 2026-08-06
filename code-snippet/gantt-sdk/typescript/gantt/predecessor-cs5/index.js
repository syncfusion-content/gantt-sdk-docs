var ganttChart = new ej.gantt.Gantt({
	dataSource: GanttData,
    height: '380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        dependency: 'Predecessor',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    editSettings: {
        allowTaskbarEditing: true
    },
    actionBegin: (args) => {
        if (args.requestType == "validateLinkedTask") {
            args.validateMode.preserveLinkWithEditing = false;
        }
    }
});
ganttChart.appendTo('#Gantt');