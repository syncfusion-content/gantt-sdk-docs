import { Gantt, Toolbar, ExcelExport, Selection, TaskFieldsModel, SelectionSettingsModel, ExcelExportProperties, ColumnModel } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

const selectionSettings: SelectionSettingsModel = {
    type: 'Multiple'
};

const columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '120' },
    { field: 'Duration', headerText: 'Duration', width: '100' },
    { field: 'Progress', headerText: 'Progress', width: '120' }
];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields,
    selectionSettings,
    toolbar: ['ExcelExport'],
    allowExcelExport: true,
    columns,
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            const selectedRecords: Object[] = gantt.treeGrid.getSelectedRecords();
            const exportProperties: ExcelExportProperties = {
                dataSource: selectedRecords
            };
            gantt.excelExport(exportProperties);
        }
    }
});

gantt.appendTo('#GanttDefault');