import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, SplitterSettings, } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const splitterSettings: SplitterSettings = {
    position : '90%'
};
        return <GanttComponent dataSource={data} splitterSettings={splitterSettings} taskFields={taskFields} treeColumnIndex={2}
        height = '450px'>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));