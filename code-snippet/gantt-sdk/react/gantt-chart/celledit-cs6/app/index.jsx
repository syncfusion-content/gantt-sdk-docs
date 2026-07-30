import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar, ColumnsDirective, ColumnDirective, } from '@syncfusion/ej2-react-gantt';
import { data, editingResources } from './datasource';
function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    progress: 'Progress',
    parentID: 'ParentID',
    resourceInfo: 'Resources'
  };
  const resourceFields = {
    id: 'ResourceId',
    name: 'ResourceName'
  };
  const editOptions = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };
  const actionBegin = (args) => {
    if (args.requestType == "beforeOpenEditDialog" || args.requestType == "beforeOpenAddDialog") {
      args.Dependency.columns[3].validationRules = { required: true }
      args.Resources.columns[2].allowEditing = true
      args.Resources.columns[2].validationRules = { required: true }
    }
  };
  const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel'];
  const datetimeParams = { params: { format: 'M/d/y hh:mm a' } };
  const format = { type: 'dateTime', format: 'M/d/y hh:mm a' };
  const startDateRules = { required: true, date: true };
  const taskNameRules = { required: true };
  return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
    editSettings={editOptions} actionBegin={actionBegin.bind(this)} resourceFields={resourceFields} resources={editingResources} height='450px' toolbar={toolbar}>
    <ColumnsDirective>
      <ColumnDirective field='TaskID' width='80'></ColumnDirective>
      <ColumnDirective field='TaskName' validationRules={taskNameRules}></ColumnDirective>
      <ColumnDirective field='StartDate' edit={datetimeParams} editType='datetimepickeredit' format={format} validationRules={startDateRules}></ColumnDirective>
      <ColumnDirective field='Duration' validationRules={taskNameRules}></ColumnDirective>
      <ColumnDirective field='Progress' validationRules={taskNameRules}></ColumnDirective>
    </ColumnsDirective>
    <Inject services={[Edit, Selection, Toolbar]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));