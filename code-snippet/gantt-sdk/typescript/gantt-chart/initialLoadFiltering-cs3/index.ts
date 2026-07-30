import { Gantt, Filter, TaskFieldsModel, SplitterSettingsModel } from '@syncfusion/ej2-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataManager } from '@syncfusion/ej2-data';
import { createElement } from '@syncfusion/ej2-base';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter);

let gantt: Gantt;
let dropInstance: DropDownList;

let taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

let splitterSettings: SplitterSettingsModel = {
    columnIndex: 2
};

let filter = {
    ui: {
        create: (args: any) => {
            let input: HTMLElement = createElement('input', { className: 'flm-input' });
            args.target.appendChild(input);
            dropInstance = new DropDownList({
                dataSource: new DataManager(GanttData),
                fields: { text: 'TaskName', value: 'TaskName' },
                placeholder: 'Select a value',
                popupHeight: '200px'
            });
            dropInstance.appendTo(input);
        },
        write: (args: any) => {
            dropInstance.value = args.filteredValue;
        },
        read: (args: any) => {
            args.fltrObj.filterByColumn(
                args.column.field,
                args.operator,
                dropInstance.value
            );
        }
    }
};

gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    allowFiltering: true,
    taskFields: taskFields,
    splitterSettings: splitterSettings,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 250, filter: filter },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ]
});

gantt.appendTo('#Gantt');