var gantt = new ej.gantt.Gantt({
    dataSource: data,
    height: '370px',
    treeColumnIndex: 1,
    splitterSettings: { position: '75%' },
    collapseAllParentTasks: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', width: 120 },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    toolbar: [
        'Add',
        'Edit',
        'Delete',
        { text: 'Show Expand Parent Tasks', id: 'show_parents', tooltipText: 'Show expanded parent tasks in dialog' }
    ],
    toolbarClick: function (args) {
        if (args.item.id === 'show_parents') {
            var expandedRecords = gantt.getExpandedRecords(gantt.flatData);
            var parentTasks = expandedRecords
                .filter(function (record) {
                    return record.hasChildRecords && record.expanded === true;
                })
                .map(function (record) {
                    return {
                        TaskID: record.TaskID,
                        TaskName: record.TaskName
                    };
                });

            var content = parentTasks.length
                ? '<ul>' + parentTasks.map(function (task) {
                    return '<li>Task ID: ' + task.TaskID + ', Task Name: ' + task.TaskName + '</li>';
                }).join('') + '</ul>'
                : '<div>No parent tasks found.</div>';

            dialog.content = content;
            dialog.show();
        }
    }
});

gantt.appendTo('#Gantt');

var dialog = new ej.popups.Dialog({
    header: 'Parent Tasks',
    width: '400px',
    isModal: true,
    visible: false,
    showCloseIcon: true
});

dialog.appendTo('#Dialog');