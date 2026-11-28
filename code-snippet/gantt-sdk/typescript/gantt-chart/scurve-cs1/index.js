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
    projectStartDate: new Date(2025, 11, 25),
    projectEndDate: new Date(2026, 1, 15)
});
ganttChart.appendTo('#Gantt');
