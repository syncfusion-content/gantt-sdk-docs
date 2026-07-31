var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ],
    dataBound: function () {
        // Style by index
        var headerByIndex = ganttChart.treeGrid.getColumnHeaderByIndex(0);
        if (headerByIndex) {
            headerByIndex.style.color = '#0d0b0b';
        }

        // Style by field
        var taskNameHeader =
            ganttChart.treeGrid.getColumnHeaderByField('TaskName');
        if (taskNameHeader) {
            taskNameHeader.style.backgroundColor = '#f45ddeab';
            taskNameHeader.style.color = '#0d0b0b';
        }

        // Style by UID
        var headerByUid =
            ganttChart.treeGrid.getColumnHeaderByUid('grid-column3');
        if (headerByUid) {
            headerByUid.style.backgroundColor = '#f45ddeab';
            headerByUid.style.color = '#0d0b0b';
        }

        // Style by field index
        var durationIndex =
            ganttChart.treeGrid.getColumnIndexByField('Duration');
        var durationHeader =
            ganttChart.treeGrid.getColumnHeaderByIndex(durationIndex);
        if (durationHeader) {
            durationHeader.style.color = '#0d0b0b';
        }

        // Style by UID index
        var uidIndex =
            ganttChart.treeGrid.getColumnIndexByUid('grid-column4');
        var uidHeader =
            ganttChart.treeGrid.getColumnHeaderByIndex(uidIndex);
        if (uidHeader) {
            uidHeader.style.color = '#0d0b0b';
        }
    }
});

ganttChart.appendTo('#Gantt');