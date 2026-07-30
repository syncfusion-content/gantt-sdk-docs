import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt;
let ganttInstance: Gantt;

gantt = new Gantt({
    dataSource: GanttData,
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
    created: () => {
        ganttInstance = document.getElementById('Gantt')!.ej2_instances[0] as Gantt;
    }
});

gantt.appendTo('#Gantt');

/* Button */
let showBtn: Button = new Button({
    content: 'Show Selected Tasks',
    cssClass: 'action-button'
});
showBtn.appendTo('#showSelected');

/* Button click */
document.getElementById('showSelected')!.addEventListener('click', () => {

    let tableContainer: HTMLElement = document.getElementById('tableContainer')!;
    tableContainer.innerHTML = '';

    let selectedRecords: any[] =
        ganttInstance.selectionModule.getSelectedRecords() as any[];

    if (!selectedRecords || selectedRecords.length === 0) {
        return;
    }

    let table: HTMLTableElement = document.createElement('table');
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

    let tbody: HTMLTableSectionElement =
        table.querySelector('tbody') as HTMLTableSectionElement;

    selectedRecords.forEach((task, index) => {
        let row: HTMLTableRowElement = document.createElement('tr');
        row.className = index % 2 !== 0
            ? 'selected-row alternate-row'
            : 'selected-row';

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <div><strong>Task ID:</strong> ${task.TaskID}</div>
                <div><strong>Task Name:</strong> ${task.TaskName}</div>
                <div><strong>Start Date:</strong> ${task.StartDate}</div>
                <div><strong>Duration:</strong> ${task.Duration || '-'}</div>
                <div><strong>Progress:</strong> ${task.Progress || 0}%</div>
            </td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
});