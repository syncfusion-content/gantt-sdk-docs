import { Gantt, Selection, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { ColorPicker, ColorPickerEventArgs } from '@syncfusion/ej2-inputs';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    treeColumnIndex: 1,
    splitterSettings: {
        columnIndex: 3
    },
    enableHover: false,
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
        { field: 'TaskName', headerText: 'Task Name', width: 260 },
        {
            headerText: 'Change Color',
            width: 140,
            template: '<input class="color-input" />'
        },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    queryCellInfo: colorPicker
});

gantt.appendTo('#Gantt');

function colorPicker(args: QueryCellInfoEventArgs): void {
    if (args.column.headerText === 'Change Color') {
        const inputElement = args.cell.querySelector('input') as HTMLInputElement;

        if (!inputElement.classList.contains('e-colorpicker')) {
            const picker: ColorPicker = new ColorPicker({
                mode: 'Palette',
                change: change
            });
            picker.appendTo(inputElement);
        }
    }
}

function change(args: ColorPickerEventArgs): void {
    const rows = gantt.treeGrid.getSelectedRows() as HTMLElement[];
    for (const row of rows) {
        row.style.backgroundColor = args.value as string;
    }
    gantt.clearSelection();
}