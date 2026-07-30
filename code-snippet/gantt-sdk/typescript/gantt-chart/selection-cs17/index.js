var ganttInstance;

var ganttChart = new ej.gantt.Gantt({
    dataSource: window.GanttData || data,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    },
    created: function () {
        ganttInstance = document.getElementById('Gantt').ej2_instances[0];
    }
});

ganttChart.appendTo('#Gantt');

/* Button */
var showBtn = new ej.buttons.Button({
    content: 'Show Selected Tasks',
    cssClass: 'action-button'
});
showBtn.appendTo('#showSelected');

/* Button click */
document.getElementById('showSelected').addEventListener('click', function () {

    var tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    var selectedRecords = ganttInstance.selectionModule.getSelectedRecords();

    if (!selectedRecords || selectedRecords.length === 0) {
        return;
    }

    var table = document.createElement('table');
    table.className = 'task-table';

    table.innerHTML = `
        <thead>
            <tr>
                <th>Index</th>
                <th>Task Details</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    var tbody = table.querySelector('tbody');

    selectedRecords.forEach(function (task, index) {
        var tr = document.createElement('tr');
        tr.className = index % 2 !== 0 ? 'alternate-row selected-row' : 'selected-row';

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <div><strong>Task ID:</strong> ${task.TaskID}</div>
                <div><strong>Task Name:</strong> ${task.TaskName}</div>
                <div><strong>Start Date:</strong> ${task.StartDate}</div>
                <div><strong>Duration:</strong> ${task.Duration || '-'}</div>
                <div><strong>Progress:</strong> ${task.Progress || 0}%</div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    tableContainer.appendChild(table);
});