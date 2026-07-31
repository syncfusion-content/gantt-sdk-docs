import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection, Toolbar, ColumnsDirective, ColumnDirective, } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const editOptions: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };
  const toolbar: any = ['Add', 'Edit', 'Update', 'Delete', 'Cancel'];
  const datetimeParams = { params: { format: 'M/d/y hh:mm a' } };
  const format = { type: 'dateTime', format: 'M/d/y hh:mm a' };
  const startDateRules = { required: true, date: true };
  const taskNameRules: any = { required: true };
  const customFn: any = (args: any) => {
    return args.value.length >= 8;
  };
  const priorityRules: any = {
    minLength: [customFn, 'Value should be greater than 8 letters'],
    required: true
  };
  return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
    editSettings={editOptions} height='450px' toolbar={toolbar}>
    <ColumnsDirective>
      <ColumnDirective field='TaskID' width='80'></ColumnDirective>
      <ColumnDirective field='TaskName' validationRules={priorityRules}></ColumnDirective>
      <ColumnDirective field='StartDate' edit={datetimeParams} editType='datetimepickeredit' format={format} validationRules={startDateRules}></ColumnDirective>
      <ColumnDirective field='Duration' validationRules={taskNameRules}></ColumnDirective>
      <ColumnDirective field='Progress' validationRules={taskNameRules}></ColumnDirective>
    </ColumnsDirective>
    <Inject services={[Edit, Selection, Toolbar]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));