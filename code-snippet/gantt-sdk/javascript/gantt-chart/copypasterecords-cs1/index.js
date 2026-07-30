var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    enableContextMenu: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    },
    contextMenuItems: [
        { text: 'Copy', target: '.e-content', id: 'copy' },
        { text: 'Paste', target: '.e-content', id: 'paste' }
    ],
    contextMenuClick: contextMenuClick,
    contextMenuOpen: contextMenuOpen
});

ganttChart.appendTo('#Gantt');

var copiedRecord;

function contextMenuClick(args) {
    if (args.item.id === 'copy') {
        copiedRecord = args.rowData;
        copiedRecord.taskData.TaskID = ganttChart.currentViewData.length + 1;
    }
    if (args.item.id === 'paste') {
        ganttChart.addRecord(copiedRecord.taskData, 'Below', args.rowData.index);
        if (copiedRecord.hasChildRecords) {
            addChildRecords(copiedRecord, args.rowData.index + 1);
        }
        copiedRecord = undefined;
    }
}

function contextMenuOpen(args) {
    if (args.type !== 'Header') {
        if (copiedRecord) {
            args.hideItems.push('Copy');
        } else {
            args.hideItems.push('Paste');
        }
    }
}

function addChildRecords(record, index) {
    for (var i = 0; i < record.childRecords.length; i++) {
        var childRecord = record.childRecords[i];
        childRecord.taskData.TaskID = ganttChart.currentViewData.length + 1;
        ganttChart.addRecord(childRecord.taskData, 'Child', index);
        if (childRecord.hasChildRecords) {
            addChildRecords(childRecord, index + (i + 1));
        }
    }
}