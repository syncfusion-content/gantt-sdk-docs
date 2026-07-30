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
 function rowDrop(args: any) {
     if (args.dropPosition == "middleSegment") {
            args.cancel = true;
        }
    };
        return <GanttComponent dataSource={projectNewData} taskFields={taskFields} allowRowDragAndDrop={true} rowDrop={rowDrop} height = '450px'>
        <Inject services={[RowDD, Edit, Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));