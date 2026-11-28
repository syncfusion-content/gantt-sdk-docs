ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Filter, ej.gantt.Reorder, ej.gantt.Resize, ej.gantt.Selection, ej.gantt.Sort, ej.gantt.Toolbar);

var gantt = new ej.gantt.Gantt({
    dataSource: data,
    height: '450px',
    allowSorting: true,
    allowFiltering: true,
    allowResizing: true,
    allowReordering: true,
    treeColumnIndex: 0,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress'
    },
    toolbar: ['Edit', 'Update', 'Cancel'],
    editSettings: {
        allowEditing: true,
        mode: 'Auto'
    },
    columns: [
        {
            headerText: 'Task Information',
            columns: [
                { field: 'TaskName', headerText: 'Task Name', width: 220, allowEditing: true },
                {
                    headerText: 'Progress Details',
                    columns: [
                        { field: 'Progress', headerText: 'Progress', width: 120, type: 'number', format: 'N0', allowEditing: true },
                        { field: 'Effort', headerText: 'Effort (hours)', width: 130, type: 'number', format: 'N0', allowSorting: false, allowFiltering: false, allowEditing: false, visible: false }
                    ]
                }
            ]
        },
        {
            headerText: 'Schedule',
            columns: [
                {
                    headerText: 'Timeline',
                    columns: [
                        { field: 'StartDate', headerText: 'Start Date', width: 140, format: 'yMd', allowEditing: true },
                        { field: 'Duration', headerText: 'Duration', width: 110, type: 'number', format: 'N0', allowFiltering: false, allowEditing: false }
                    ]
                }
            ]
        },
        { field: 'Budget', headerText: 'Budget', width: 130, type: 'number', format: 'C2', allowEditing: true }
    ]
});

gantt.appendTo('#Gantt');
