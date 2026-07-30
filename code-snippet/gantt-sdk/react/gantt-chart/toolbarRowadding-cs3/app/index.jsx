import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar, AddDialogFieldsDirective, EditDialogFieldsDirective, EditDialogFieldDirective, AddDialogFieldDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data, resourceCollection } from './datasource';
function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    resourceInfo: 'Resources',
    work: 'Work',
    parentID: 'ParentID',
    segments: 'Segments',
    notes: "Note",
  };
  const resourceFields = {
    id: 'ResourceId',
    name: 'ResourceName',
    unit: 'ResourceUnit',
    group: 'ResourceGroup'
  };
  const editOptions = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };
  const toolbarOptions = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
  return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
    editSettings={editOptions} toolbar={toolbarOptions} height='450px' resourceFields={resourceFields} resources={resourceCollection}>
    <ColumnsDirective>
      <ColumnDirective field="TaskID" width="100"></ColumnDirective>
      <ColumnDirective
        field="TaskName"
        headerText="TaskName"
        width="250"
        clipMode="EllipsisWithTooltip"
      ></ColumnDirective>
      <ColumnDirective field="StartDate"></ColumnDirective>
      <ColumnDirective field="Duration"></ColumnDirective>
      <ColumnDirective field="Progress"></ColumnDirective>
      <ColumnDirective field="newInput"></ColumnDirective>
    </ColumnsDirective>
    <AddDialogFieldsDirective>
      <AddDialogFieldDirective type='General' headerText='General' fields={['TaskID', 'TaskName', 'newInput']} ></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Dependency' ></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Resources'></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Segments' ></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Notes'></AddDialogFieldDirective>
    </AddDialogFieldsDirective>
    <EditDialogFieldsDirective>
      <EditDialogFieldDirective type='General' headerText='General' fields={['TaskID', 'TaskName', 'newInput']} ></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Dependency'></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Notes'></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Resources'></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Segments'></EditDialogFieldDirective>
    </EditDialogFieldsDirective>
    <Inject services={[Edit, Selection, Toolbar]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));