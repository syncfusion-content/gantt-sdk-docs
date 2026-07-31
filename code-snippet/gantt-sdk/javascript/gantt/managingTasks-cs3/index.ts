import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit);

let elem: HTMLElement;
let dropdownlistObj: DropDownList;

let dropdownlist: any = {
    create: (): HTMLElement => {
        elem = document.createElement('input');
        return elem;
    },
    read: () => {
        return dropdownlistObj.value;
    },
    destroy: () => {
        dropdownlistObj.destroy();
    },
    write: (args: any) => {
        dropdownlistObj = new DropDownList({
            dataSource: (gantt as any).treeGrid.grid.dataSource,
            fields: { value: 'TaskName' },
            value: args.rowData[args.column.field],
            floatLabelType: 'Auto'
        });
        dropdownlistObj.appendTo(elem);
    }
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    editSettings: {
        allowEditing: true
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName', edit: dropdownlist },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

gantt.appendTo('#Gantt');