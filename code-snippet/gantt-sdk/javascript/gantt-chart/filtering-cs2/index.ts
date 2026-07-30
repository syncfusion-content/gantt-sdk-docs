import { Gantt, Filter, TaskFieldsModel, ColumnModel } from '@syncfusion/ej2-gantt';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter);

const taskFields: TaskFieldsModel = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  progress: 'Progress',
  parentID: 'ParentID'
};

const columns: ColumnModel[] = [
  { field: 'TaskID', headerText: 'Task ID', width: 120 },
  { field: 'TaskName', headerText: 'Task Name', width: 250 },
  { field: 'StartDate', headerText: 'Start Date', width: 150 },
  { field: 'Progress', headerText: 'Progress', width: 150 }
];

const fieldData: string[] = columns.map((col: ColumnModel) => col.field as string);
const typeData: string[] = ['Menu', 'Excel'];

const gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '430px',
  allowFiltering: true,
  taskFields: taskFields,
  splitterSettings: { columnIndex: 2 },
  columns: columns
});
gantt.appendTo('#Gantt');

let fieldDropDown: DropDownList;
let typeDropDown: DropDownList;

fieldDropDown = new DropDownList({
  dataSource: fieldData,
  placeholder: 'Select column',
  change: onFieldChange
});
fieldDropDown.appendTo('#fieldDropDown');

typeDropDown = new DropDownList({
  dataSource: typeData,
  placeholder: 'Select filter type',
  enabled: false,
  change: onTypeChange
});
typeDropDown.appendTo('#typeDropDown');

function onFieldChange(): void {
  typeDropDown.enabled = true;

  const selectedField: string = fieldDropDown.value as string;
  const column: ColumnModel | undefined = columns.find((c: ColumnModel) => c.field === selectedField);

  const nextType: any = (column && column.filter && (column.filter as any).type)
    ? (column.filter as any).type
    : null;

  typeDropDown.value = nextType;
  typeDropDown.dataBind();
}

function onTypeChange(args: ChangeEventArgs): void {
  const selectedField: string = fieldDropDown.value as string;
  const selectedType: any = args.value;

  const column: ColumnModel | undefined = columns.find((c: ColumnModel) => c.field === selectedField);

  if (column) {
    column.filter = { ...(column.filter || {}), type: selectedType } as any;

    typeDropDown.value = selectedType;
    typeDropDown.dataBind();

    gantt.refresh();
  }
}