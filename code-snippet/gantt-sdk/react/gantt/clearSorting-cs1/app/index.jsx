import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Sort } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
  let ganttInstance;
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
  const sortingOptions = {
    columns: [{ field: 'TaskID', direction: 'Descending' }, { field: 'TaskName', direction: 'Ascending' }]
  };
  function clickHandler() {
    ganttInstance.clearSorting();
  }
  return (<div>
    <ButtonComponent onClick={clickHandler}>Clear Sorting</ButtonComponent>
    <GanttComponent dataSource={data} taskFields={taskFields} ref={gantt => ganttInstance = gantt} allowSorting={true} sortSettings={sortingOptions} height='450px'>
      <Inject services={[Sort]} />
    </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));