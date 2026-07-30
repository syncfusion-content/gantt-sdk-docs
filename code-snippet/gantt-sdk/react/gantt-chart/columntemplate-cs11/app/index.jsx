import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, TaskFieldsModel, SplitterSettingsModel, QueryCellInfoEventArgs } from '@syncfusion/ej2-react-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource';

function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID',
    notes: 'info'
  };

  const splitterSettings = { position: '75%' };

  const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];

  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  const queryCellInfo = (args) => {
    if (args.column.field === 'TaskName') {
       args.cell.innerHTML = '';
      const value = args.data.TaskName;
      const button = new Button({ content: value });
      const buttonElement = document.createElement('button');
      buttonElement.classList.add('e-btn');
      args.cell.appendChild(buttonElement);
      button.appendTo(buttonElement);
    }
  };

  return (
    <GanttComponent
      id="ganttDefault"
      height="430px"
      dataSource={GanttData}
      taskFields={taskFields}
      treeColumnIndex={1}
      splitterSettings={splitterSettings}
      projectStartDate={new Date('03/25/2024')}
      projectEndDate={new Date('07/28/2024')}
      editSettings={editSettings}
      toolbar={toolbar}
      queryCellInfo={queryCellInfo}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="80" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
        <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="date" />
      </ColumnsDirective>
      <Inject />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));