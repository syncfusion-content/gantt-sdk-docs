import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection, Toolbar, ToolbarItem, AddDialogFieldsDirective, EditDialogFieldsDirective, EditDialogFieldDirective, AddDialogFieldDirective, EditDialogFieldSettingsModel, AddDialogFieldSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data, resourceCollection } from './datasource';
function App() {
  const taskFields: any = {
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
  const editOptions: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };
  const addAdditionalParams: AddDialogFieldSettingsModel = { inlineMode: { enable: true, onSelection: true } }
  const editAdditionalParams: EditDialogFieldSettingsModel = { inlineMode: { enable: true, onSelection: true } }
  const toolbarOptions: ToolbarItem[] = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
  return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
    editSettings={editOptions} toolbar={toolbarOptions} height='450px' resourceFields={resourceFields} resources={resourceCollection}>
    <AddDialogFieldsDirective>
      <AddDialogFieldDirective type='General'></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Dependency'></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Resources'></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Segments'></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Notes' additionalParams={addAdditionalParams}></AddDialogFieldDirective>
    </AddDialogFieldsDirective>
    <EditDialogFieldsDirective>
      <EditDialogFieldDirective type='General' headerText='General' ></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Dependency' ></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Notes' additionalParams={editAdditionalParams}></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Resources' ></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Segments'></EditDialogFieldDirective>
    </EditDialogFieldsDirective>
    <Inject services={[Edit, Selection, Toolbar]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));