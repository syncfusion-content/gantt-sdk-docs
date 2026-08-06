import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar, AddDialogFieldsDirective, EditDialogFieldsDirective, EditDialogFieldDirective, AddDialogFieldDirective } from '@syncfusion/ej2-react-gantt';
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
  const addDependencyParams = { allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",] }
  const addResourcesParams = { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "NewData" }] }
  const addSegmentsParams = { columns: [{ field: "SegmentTask", width: "170px", headerText: "Segment Task" }], }
  const editDependencyParams = { allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",] }
  const editResourcesParams = { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "NewData" }] }
  const editSegmentsParams = { columns: [{ field: "SegmentTask", width: "170px", headerText: "Segment Task" }], }
  const toolbarOptions = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
  return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
    editSettings={editOptions} toolbar={toolbarOptions} height='450px' resourceFields={resourceFields} resources={resourceCollection}>
    <AddDialogFieldsDirective>
      <AddDialogFieldDirective type='General' headerText='General' ></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Dependency' additionalParams={addDependencyParams}></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Resources' additionalParams={addResourcesParams}></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Segments' additionalParams={addSegmentsParams}></AddDialogFieldDirective>
    </AddDialogFieldsDirective>
    <EditDialogFieldsDirective>
      <EditDialogFieldDirective type='General' headerText='General' ></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Dependency' additionalParams={editDependencyParams}></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Resources' additionalParams={editResourcesParams}></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Segments' additionalParams={editSegmentsParams}></EditDialogFieldDirective>
    </EditDialogFieldsDirective>
    <Inject services={[Edit, Selection, Toolbar]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));