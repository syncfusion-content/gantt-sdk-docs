var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 2
    },
    filterSettings: {
        type: 'Menu'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: '120' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
        { field: 'Approved', headerText: 'Approved', width: '100', type: 'boolean' }
    ],
    actionBegin: function (args) {
        var msg = '';

        if (args.requestType === 'filterBeforeOpen') {
            if (args.columnType === 'number') {
                args.filterModel.customFilterOperators.numberOperator = [
                    { value: 'equal', text: 'Equal' },
                    { value: 'notequal', text: 'Not Equal' }
                ];
                msg = 'Custom number filter operators applied.';
            } else if (args.columnType === 'string') {
                args.filterModel.customFilterOperators.stringOperator = [
                    { value: 'contains', text: 'Contains' },
                    { value: 'startswith', text: 'Starts With' }
                ];
                msg = 'Custom string filter operators applied.';
            }
        }

        if (args.requestType === 'filtering' && args.currentFilteringColumn === 'StartDate') {
            args.cancel = true;
            msg = 'Filtering is not allowed for StartDate column';
        } else if (!msg) {
            msg = args.requestType + ' action is triggered in actionBegin';
        }

        updateMessage(msg);
    },
    actionComplete: function (args) {
        var msg = '';

        if (args.requestType === 'filterAfterOpen') {
            msg = 'Applied custom CSS for filter dialog';

            var content = args.filterModel.dlgDiv.querySelector('.e-dlg-content');
            var footer = args.filterModel.dlgDiv.querySelector('.e-footer-content');

            if (content) { content.style.background = '#eeeaea'; }
            if (footer) { footer.style.background = '#30b0ce'; }
        }

        if (args.requestType === 'filtering') {
            msg = args.requestType + ' action is triggered in actionComplete';
        }

        updateMessage(msg);
    }
});

gantt.appendTo('#Gantt');

function updateMessage(text) {
    var msgElement = document.getElementById('message');
    if (msgElement) {
        msgElement.textContent = text;
    }
}