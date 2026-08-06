ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Selection, ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'],
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 80 },
        {
            field: 'TaskName',
            headerText: 'Task Name',
            width: 250,
            template: '#taskNameTemplate'
        },
        {
            field: 'StartDate',
            headerText: 'Start Date',
            width: 150,
            textAlign: 'Right',
            format: 'yMd',
            type: 'date'
        }
    ],
    queryCellInfo: queryCellInfo
});

ganttChart.appendTo('#Gantt');

function queryCellInfo(args) {
    if (args.column.field === 'TaskName') {
        var value = args.data.TaskName;
        var buttonElement = document.createElement('button');
        buttonElement.classList.add('e-btn');
        args.cell.appendChild(buttonElement);

        var btn = new ej.buttons.Button({ content: value });
        btn.appendTo(buttonElement);
    }
}