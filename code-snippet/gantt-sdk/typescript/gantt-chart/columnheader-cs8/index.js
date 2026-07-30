function setHeaderHeight() {
    var headerDiv = document.querySelector('.orientationcss > div');
    if (!headerDiv) {
        return;
    }
    var textWidth = headerDiv.scrollWidth;
    var headerCells = document.querySelectorAll('.e-headercell');
    headerCells.forEach(function (cell) {
        cell.style.height = textWidth + 'px';
    });
}

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
        {
            field: 'Duration',
            headerText: 'Duration',
            textAlign: 'Center',
            customAttributes: { class: 'orientationcss' }
        },
        { field: 'Progress', headerText: 'Progress' }
    ],
    created: setHeaderHeight
});

ganttChart.appendTo('#Gantt');