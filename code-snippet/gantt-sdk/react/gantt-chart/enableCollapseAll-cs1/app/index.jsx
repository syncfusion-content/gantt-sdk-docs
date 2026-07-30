import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
    const  taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
        collapseAllParentTasks={true} height = '450px'>
      </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));