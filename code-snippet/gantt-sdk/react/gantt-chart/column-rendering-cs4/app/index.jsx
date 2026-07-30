import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
  let gantt;

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    position: '75%'
  };

  const getConcatenatedNames = (field, rowData) => {
    return rowData.Name.map(
      (person) => person.lastName || person.firstName
    ).join(' ');
  };

  return (
    <GanttComponent
      ref={(g) => (gantt = g)}
      height="430px"
      dataSource={GanttData}
      taskFields={taskFields}
      treeColumnIndex={1}
      splitterSettings={splitterSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
        <ColumnDirective
          field="Name"
          headerText="Full Name"
          textAlign="Right"
          valueAccessor={getConcatenatedNames}
          width="250"
        />
        <ColumnDirective field="Duration" headerText="Duration" width="90" />
        <ColumnDirective field="Progress" headerText="Progress" width="120" />
      </ColumnsDirective>
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));