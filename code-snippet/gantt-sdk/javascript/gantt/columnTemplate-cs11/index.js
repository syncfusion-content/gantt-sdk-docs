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
        dependency: 'Predecessor',
        parentID: 'ParentID',
        notes: 'info'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: [
        'Add', 'Edit', 'Update', 'Delete', 'Cancel',
        'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'
    ],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 80 },
        { field: 'TaskName', headerText: 'TaskName', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 150, format: 'yMd', type: 'date' },
        { field: 'EndDate' },
        { field: 'Duration' },
        { field: 'Progress' },
    ],
    queryCellInfo: function (args) {
        if (args.column && args.column.field === 'TaskName') {
            args.cell.innerHTML = '';
            var button = new ej.buttons.Button({ content: args.data.TaskName });
            var btnEle = document.createElement('button');
            btnEle.classList.add('e-btn');
            args.cell.appendChild(btnEle);
            button.appendTo(btnEle);
        }
    }
});

ganttChart.appendTo('#Gantt');