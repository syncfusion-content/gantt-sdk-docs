
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Gantt, Selection as GanttSelection, Edit as GanttEdit, RowDD as GanttRowDD } from '@syncfusion/ej2-gantt';
import { TreeGrid, RowDD as TGRowDD, Edit as TGEdit, Selection as TGSelection, RowDragEventArgs} from '@syncfusion/ej2-treegrid';
import { ganttData } from './datasource.ts';

Gantt.Inject(GanttSelection, GanttEdit, GanttRowDD);
TreeGrid.Inject(TGRowDD, TGEdit, TGSelection);

const gantt = new Gantt({
    dataSource: ganttData,
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    selectionSettings: {
        type: 'Multiple'
    },
    editSettings: {
        allowDeleting: true
    },
    splitterSettings: {
        position: '75%'
    },
    load: () => {
        // Enable dropping rows from Gantt into the TreeGrid by targeting its ID.
        gantt.treeGrid.rowDropSettings = { targetID: 'TreeGrid' };
    },
    rowDrop: (args: RowDragEventArgs) => {
        const targetGridEl = (args.target as Element).closest('.e-grid') as HTMLElement | null;
        if (targetGridEl) {
            args.cancel = true;
            const targetRow = (args.target as Element).closest('.e-row') as HTMLElement | null;
            const rowIndex = !isNullOrUndefined(targetRow) ? (targetRow as any).rowIndex : 0;
            const draggedData = args.data as object[];
            draggedData.forEach((item) => {
                treeGrid.addRecord(item, rowIndex);
                gantt.deleteRecord(item as any);
            });
        }
    }
});
gantt.appendTo('#Gantt');

const treeGrid = new TreeGrid({
    dataSource: [],
    childMapping: 'subtasks',
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
        { field: 'taskName', headerText: 'Task Name', textAlign: 'Left', width: 180 },
        { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', type: 'date', format: 'yMd', width: 120 },
        { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 120 }
    ],
    editSettings: { allowAdding: true, allowEditing: true },
    selectionSettings: { type: 'Multiple' }
});
treeGrid.appendTo('#TreeGrid');