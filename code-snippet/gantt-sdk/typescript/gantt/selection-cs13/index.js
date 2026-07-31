var ganttObj = new ej.gantt.Gantt({
    height: '370px',
    dataSource: GanttData,
    selectionSettings: {
        mode: 'Cell',
        type: 'Multiple'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    }
});

ganttObj.appendTo('#Gantt');

var dialogObj = new ej.popups.Dialog({
    header: 'Selected Cell Details',
    visible: false,
    width: '600px',
    height: '300px',
    showCloseIcon: true,
    position: { X: 300, Y: 100 }
});

dialogObj.appendTo('#Dialog');

var showBtn = new ej.buttons.Button();
showBtn.appendTo('#showDetails');

document.getElementById('showDetails').addEventListener('click', function () {

    var selectedRecords = ganttObj.selectionModule.getCellSelectedRecords();
    var selectedIndexes = ganttObj.selectionModule.getSelectedRowCellIndexes();
    var container = document.getElementById('details-container');

    var html = `
        <table border="1" cellpadding="6" cellspacing="0" style="width:100%;border-collapse:collapse">
            <thead>
                <tr>
                    <th>Row Index</th>
                    <th>Cell Index</th>
                    <th>Row Details</th>
                </tr>
            </thead>
            <tbody>
        `;

    selectedIndexes.forEach(function (index, i) {
        var r = selectedRecords[i] || {};
        html += `
            <tr>
                <td>${index.rowIndex}</td>
                <td>${index.cellIndexes.join(', ')}</td>
                <td>
                    <table style="width:100%;border-collapse:collapse">
                        <tr><td><b>Task ID:</b></td><td>${r.TaskID}</td></tr>
                        <tr><td><b>Task Name:</b></td><td>${r.TaskName}</td></tr>
                        <tr><td><b>Start Date:</b></td><td>${r.StartDate ? new Date(r.StartDate).toDateString() : ''}</td></tr>
                        <tr><td><b>Duration:</b></td><td>${r.Duration}</td></tr>
                        <tr><td><b>Progress:</b></td><td>${r.Progress}%</td></tr>
                    </table>
                </td>
            </tr>`;
    });

    html += '</tbody></table>';

    container.innerHTML = html;
    dialogObj.show();
});