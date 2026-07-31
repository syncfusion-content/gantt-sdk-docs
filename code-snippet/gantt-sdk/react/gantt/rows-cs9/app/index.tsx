import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
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
    let ganttInstance:any;
   function clickHandler() {
         ganttInstance.reorderRows([1,2,3], 4, 'child');
    }
       return(<div>
        <ButtonComponent onClick= {clickHandler}>Perform Drag And Drop</ButtonComponent>
        <GanttComponent dataSource={projectNewData} taskFields={taskFields}
        allowRowDragAndDrop={true} allowFiltering={true} height = '450px'
        ref={gantt =>  ganttInstance= gantt}>
        <Inject services={[RowDD, Edit, Selection]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));