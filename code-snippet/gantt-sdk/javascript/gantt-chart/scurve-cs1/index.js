ej.gantt.Gantt.Inject(ej.gantt.SCurve, ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    editSettings: {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        allowTaskbarEditing: true
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    timelineSettings: {
        topTier: { unit: 'Week' },
        bottomTier: { unit: 'Day' }
    },
    sCurveSettings: {
        visible: true,
        dataSet: [
            { field: 'Progress', color: '#4CAF50' },
            { field: 'Duration', color: '#2196F3' }
        ]
    },
    columns: [
        { field: 'TaskID', headerText: 'ID', width: 70 },
        { field: 'TaskName', headerText: 'Task Name', width: 220 },
        { field: 'StartDate', headerText: 'Start Date', width: 130, format: 'yMd' },
        { field: 'Duration', headerText: 'Duration', width: 100 },
        { field: 'Progress', headerText: 'Progress (%)', width: 120 }
    ],
    splitterSettings: { columnIndex: 2 },
    allowSelection: true,
    projectStartDate: new Date(2025, 11, 28),
    projectEndDate: new Date(2026, 1, 15)
});
ganttChart.appendTo('#Gantt');
