import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort, Filter, Resize, ColumnMenu } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const  taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
        allowSorting={true} allowFiltering={true} allowResizing={true} showColumnMenu = {true} height = '450px'>
            <Inject services={[Sort, Filter, Resize, ColumnMenu]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));