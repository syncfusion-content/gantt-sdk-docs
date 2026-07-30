import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function  App(){
    let ganttInstance;
    const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  function clickHandler(){
    ganttInstance.setSplitterPosition('50%', 'position');
}
 function changeindex(){
    ganttInstance.setSplitterPosition(0, 'columnIndex');
}
        return (<div>
        <ButtonComponent  onClick= { clickHandler}>ChangeByPosition</ButtonComponent>
        <ButtonComponent onClick= { changeindex}>ChangeByIndex</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={taskFields}
        height = '450px' ref={gantt => ganttInstance = gantt}>
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));