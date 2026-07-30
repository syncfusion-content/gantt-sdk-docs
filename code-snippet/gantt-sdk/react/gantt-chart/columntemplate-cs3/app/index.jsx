import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
    customData: 'customData'
  };

  const splitterSettings = {
    position: '75%'
  };

  const lineData = [
    [0, 6, -4, 1, -3, 2, 5],
    [5, -4, 6, 3, -1, 2, 0],
    [6, 4, 0, 3, -2, 5, 1],
    [4, -6, 3, 0, 1, -2, 5],
    [3, 5, -6, -4, 0, 1, 2],
    [1, -3, 4, -2, 5, 0, 6],
    [2, 4, 0, -3, 5, -6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, -6, 4, 1, -3, 2, 5],
    [6, 4, 0, -3, 2, -5, 1]
  ];

  const sparklineTemplate = (props) => {
    const index = props.TaskID - 1;
    return (
      <SparklineComponent
        id={`spark-${props.TaskID}`}
        height="50px"
        width="100%"
        type="Line"
        lineWidth={2}
        valueType="Numeric"
        fill="#3C78EF"
        dataSource={lineData[index]}
      />
    );
  };

  return (
    <GanttComponent
      dataSource={data}
      taskFields={taskFields}
      splitterSettings={splitterSettings}
      treeColumnIndex={1}
      height="430px"
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
        <ColumnDirective field="customData" headerText="Custom Data" width="280" template={sparklineTemplate} />
      </ColumnsDirective>
      <Inject />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));