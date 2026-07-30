import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, RowDD, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { projectNewData } from './datasource';
function App(){
   const taskFields: any = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      parentID: 'ParentID'
  };
 function rowDragStartHelper(args: any) {
      var record = args.data[0] ? args.data[0] : args.data;
      var taskId = record.ganttProperties.taskId;
      if (taskId <= 4) {
          args.cancel = true;
    }
};
        return <GanttComponent dataSource={projectNewData} taskFields={taskFields} allowRowDragAndDrop={true} rowDragStartHelper={rowDragStartHelper} height = '450px'>
        <Inject services={[RowDD, Edit, Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));