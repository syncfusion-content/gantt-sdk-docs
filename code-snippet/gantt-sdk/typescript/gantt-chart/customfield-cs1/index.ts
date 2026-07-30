import { Gantt, Edit, Selection, Toolbar, ActionBeginArgs, ActionCompleteArgs } from '@syncfusion/ej2-gantt';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { TextBox, NumericTextBox, MaskedTextBox } from '@syncfusion/ej2-inputs';
import { DatePicker, DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Selection, Toolbar);

let inputs: { [key: string]: any } = {
  booleanedit: CheckBox,
  dropdownedit: DropDownList,
  datepickeredit: DatePicker,
  datetimepickeredit: DateTimePicker,
  maskededit: MaskedTextBox,
  numericedit: NumericTextBox,
  stringedit: TextBox
};

let divElement: HTMLElement;

let gantt: Gantt = new Gantt({
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
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Dialog'
  },
  editDialogFields: [
    { type: 'General', headerText: 'General' },
    { type: 'Dependency' },
    { type: 'Resources' },
    { type: 'Notes' }
  ],
  addDialogFields: [
    { type: 'General', headerText: 'General' },
    { type: 'Dependency' },
    { type: 'Resources' },
    { type: 'Notes' }
  ],
  columns: [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'EndDate', headerText: 'End Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
    { field: 'CustomField', headerText: 'CustomField', width: '150' }
  ],
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'],
  actionBegin: actionBegin,
  actionComplete: actionComplete
});

gantt.appendTo('#Gantt');

function actionBegin(args: ActionBeginArgs): void {
  if (args.requestType === 'beforeOpenEditDialog' || args.requestType === 'beforeOpenAddDialog') {
    let column: any = (gantt as any).columnByField['CustomField'];
    divElement = gantt.createElement('div', { className: 'e-edit-form-column' }) as HTMLElement;
    let inputElement = gantt.createElement('input', {
      attrs: {
        type: 'text',
        id: gantt.controlId + column.field,
        name: column.field,
        title: column.field
      }
    }) as HTMLInputElement;
    divElement.appendChild(inputElement);
    let input: any = {
      enabled: true,
      floatLabelType: 'Auto',
      placeholder: 'CustomField',
      value: (args.rowData as any).CustomField
    };
    let inputObj = new (inputs as any)[column.editType](input);
    inputObj.appendTo(inputElement);
  }
}

function actionComplete(args: ActionCompleteArgs): void {
  if (args.requestType === 'openEditDialog' || args.requestType === 'openAddDialog') {
    let generalTab = document.getElementById(gantt.controlId + 'GeneralTabContainer') as HTMLElement;
    generalTab.appendChild(divElement);
  }
}