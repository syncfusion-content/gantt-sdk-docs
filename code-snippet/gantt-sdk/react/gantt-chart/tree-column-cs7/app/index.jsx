import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Toolbar
} from '@syncfusion/ej2-react-gantt';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource';

function App() {
  let ganttInstance = null;
  let dialogInstance = null;
  let parentTasks = [];

  var taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  var splitterSettings = { position: '75%' };

  var toolbarOptions = [
    'Add',
    'Edit',
    'Delete',
    { text: 'Show Expand Parent Tasks', id: 'show_parents', tooltipText: 'Show expanded parent tasks in dialog' }
  ];

  var onToolbarClick = (args) => {
    if (args.item.id === 'show_parents' && ganttInstance && dialogInstance) {
      var expandedRecords = ganttInstance.getExpandedRecords(ganttInstance.flatData);
      parentTasks = expandedRecords
        .filter((record) => record.hasChildRecords && record.expanded === true)
        .map((record) => ({
          TaskID: record.TaskID,
          TaskName: record.TaskName
        }));

      // Update dialog content manually
      var contentHtml = parentTasks.length
        ? `<ul>${parentTasks.map(task => `<li>Task ID: ${task.TaskID}, Task Name: ${task.TaskName}</li>`).join('')}</ul>`
        : `<div>No parent tasks found.</div>`;

      dialogInstance.content = contentHtml;
      dialogInstance.show();
    }
  };

  return (
    <div>
      <GanttComponent
        ref={(gantt) => (ganttInstance = gantt)}
        id="gantt"
        height="370px"
        dataSource={data}
        taskFields={taskFields}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
        collapseAllParentTasks={true}
        toolbar={toolbarOptions}
        toolbarClick={onToolbarClick}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
          <ColumnDirective field="StartDate" headerText="Start Date" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" width="120" />
        </ColumnsDirective>
        <Inject services={[Toolbar]} />
      </GanttComponent>

      <DialogComponent
        ref={(dialog) => (dialogInstance = dialog)}
        width="400px"
        height="auto"
        header="Parent Tasks"
        visible={false}
        showCloseIcon={true}
        isModal={true}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));