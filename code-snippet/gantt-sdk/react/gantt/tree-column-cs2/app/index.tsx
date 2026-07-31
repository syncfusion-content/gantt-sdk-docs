import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  var ganttInstance: GanttComponent = null;
  var taskSettings: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  var splitterSettings: object = {
    position: '75%'
  };

  var queryCellInfo = (args: any): void => {
    var rowData = args.data;
    var columnIndex = args.column.index;
    var treeColumnIndex = ganttInstance.treeColumnIndex;
    if (!rowData.hasChildRecords && columnIndex === treeColumnIndex) {
      args.cell.classList.add('indents');
    }
  };

  return (
    <div>
      <GanttComponent
        id="gantt"
        height="370px"
        dataSource={data}
        treeColumnIndex={1}
        taskFields={taskSettings}
        splitterSettings={splitterSettings}
        queryCellInfo={queryCellInfo}
        ref={g => ganttInstance = g}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
          <ColumnDirective field="StartDate" headerText="Start Date" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" width="120" />
        </ColumnsDirective>
        <Inject services={[]} />
      </GanttComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));