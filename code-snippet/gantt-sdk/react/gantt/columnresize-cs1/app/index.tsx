import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, SplitterSettings, Inject, Resize } from '@syncfusion/ej2-react-gantt';
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
    position : '90%'
};
        return <GanttComponent dataSource={data} taskFields={taskFields}
        allowResizing={true} splitterSettings={splitterSettings} height = '450px'>
            <Inject services={[Resize]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));