var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    },
    created: function () {
        var gantt = document.getElementById('Gantt').ej2_instances[0];
        if (gantt) {
            gantt.treeGrid.grid.selectionSettings.enableSimpleMultiRowSelection = false;
        }
    }
});

ganttChart.appendTo('#Gantt');