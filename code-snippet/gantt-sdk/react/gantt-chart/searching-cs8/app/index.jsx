import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {

  let ganttInstance = null;
  let key = '';

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    columnIndex: 3
  };

  const toolbar = ['Search'];

  function actionBegin(args) {
    if (args.requestType === 'searching') {
      key = args.searchString ? args.searchString.toLowerCase() : '';
    }
  }

  function queryCellInfo(args) {
    if (key) {
      const field = args.column.field;
      const value = args.data[field];

      if (typeof value === 'string' || typeof value === 'number') {
        const str = value.toString();
        const regex = new RegExp(key, 'gi');
        const highlighted = str.replace(regex, (m) => `<span class='customcss'>${m}</span>`);
        args.cell.innerHTML = highlighted;
      }
    }
  }

  return (
    <div>
      <style>
        {`.customcss { background-color: yellow; font-weight: bold; color: black; }`}
      </style>

      <GanttComponent
        ref={(g) => ganttInstance = g}
        dataSource={data}
        taskFields={taskFields}
        toolbar={toolbar}
        splitterSettings={splitterSettings}
        height="370px"
        actionBegin={actionBegin}
        queryCellInfo={queryCellInfo}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="400" />
          <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
          <ColumnDirective field="Duration" headerText="Duration" width="150" />
          <ColumnDirective field="Progress" headerText="Progress" width="150" />
        </ColumnsDirective>

        <Inject services={[Filter, Toolbar]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));