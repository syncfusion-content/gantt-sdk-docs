import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const filterSettings = {
    type: 'Menu',
    operators: {
      stringOperator: [
        { value: 'startsWith', text: 'Starts With' },
        { value: 'endsWith', text: 'Ends With' },
        { value: 'contains', text: 'Contains' },
        { value: 'equal', text: 'Equal' },
        { value: 'notEqual', text: 'Not Equal' }
      ],
      numberOperator: [
        { value: 'equal', text: 'Equal' },
        { value: 'notEqual', text: 'Not Equal' },
        { value: 'greaterThan', text: 'Greater Than' },
        { value: 'lessThan', text: 'Less Than' }
      ],
      dateOperator: [
        { value: 'equal', text: 'Equal' },
        { value: 'notEqual', text: 'Not Equal' },
        { value: 'greaterThan', text: 'After' },
        { value: 'lessThan', text: 'Before' }
      ],
      booleanOperator: [
        { value: 'equal', text: 'Equal' },
        { value: 'notEqual', text: 'Not Equal' }
      ]
    }
  }

  const splitterSettings = {
    columnIndex: 2
  };

  return (
    <GanttComponent
      height="370px"
      allowFiltering={true}
      filterSettings={filterSettings}
      dataSource={data}
      taskFields={taskFields}
      splitterSettings={splitterSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="120" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
        <ColumnDirective field="StartDate" headerText="Start Date" width="150" type="date" format="yMd" />
        <ColumnDirective field="Progress" headerText="Progress" width="150" />
        <ColumnDirective field="Approved" headerText="Approved" width="140" type="boolean" />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));