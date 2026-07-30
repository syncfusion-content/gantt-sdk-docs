import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Reorder } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    let ganttInstance;
    const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const splitterSettings = {
      position : '90%'
  };
  function clickHandler(){
   ganttInstance.reorderColumns(['TaskID','TaskName'],'Progress');
  }
        return (<div>
        <ButtonComponent onClick= {clickHandler}>Reorder Task ID and Task Name to Last</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={taskFields}
        splitterSettings={splitterSettings} allowReordering={true} height = '450px' ref={gantt => ganttInstance = gantt}>
            <Inject services={[Reorder]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));