import { createElement } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort, Filter, ColumnMenu, SplitterSettings } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const splitterSettings: SplitterSettings = {
    columnIndex : 5
};
    function columnMenuOpen(){
        alert('columnMenuOpen event is Triggered');
    }
    let ganttInstance:any;
    function columnMenuClick(){
        alert('columnMenuClick event is Triggered');
    }
        return (<div>
        <GanttComponent dataSource={data} taskFields={taskFields} showColumnMenu={true}
        columnMenuOpen= { columnMenuOpen } columnMenuClick= { columnMenuClick }
        allowFiltering={true} allowSorting={true}
        splitterSettings={splitterSettings} height = '450px' ref={gantt => ganttInstance = gantt}>
        <Inject services={[Sort, Filter, ColumnMenu]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));