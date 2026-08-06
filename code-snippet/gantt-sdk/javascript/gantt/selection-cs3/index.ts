import { Gantt, Selection, CellSelectingEventArgs, CellSelectEventArgs, CellDeselectEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    enableHover: false,
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
        mode: 'Cell',
        type: 'Single'
    },
    cellSelecting: (args: CellSelectingEventArgs) => {
        updateMessage('Trigger cellSelecting');
        if ((args.data as any).TaskName === 'Perform Soil test') {
            args.cancel = true;
            updateMessage('Trigger cellSelecting - Selection canceled for "Perform Soil test"');
        }
    },
    cellSelected: (args: CellSelectEventArgs) => {
        updateMessage('Trigger cellSelected');
        (args.currentCell as HTMLElement).style.backgroundColor = 'rgb(96, 158, 101)';
    },
    cellDeselecting: (args: CellDeselectEventArgs) => {
        updateMessage('Trigger cellDeselecting');
        if (args.cells && args.cells.length > 0) {
            (args.cells[0] as HTMLElement).style.color = 'rgb(253, 253, 253)';
        }
    },
    cellDeselected: (args: CellDeselectEventArgs) => {
        updateMessage('Trigger cellDeselected');
        if (args.cells && args.cells.length > 0) {
            (args.cells[0] as HTMLElement).style.backgroundColor = 'rgb(245, 69, 69)';
        }
    }
});

gantt.appendTo('#Gantt');

function updateMessage(text: string): void {
    const msgEl: HTMLElement | null = document.getElementById('message');
    if (msgEl) {
        msgEl.innerText = text;
        msgEl.style.display = 'block';
    }
}