import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, RowDD, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { projectNewData } from './datasource';
function App(){
    const taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      parentID: 'ParentID'
  };
  const  selectionSettings = {
    type: 'Multiple'
  };
        return <GanttComponent dataSource={projectNewData} taskFields={taskFields} allowRowDragAndDrop={true} selectionSettings={selectionSettings} height='450px'>
        <Inject services={[RowDD, Edit, Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));