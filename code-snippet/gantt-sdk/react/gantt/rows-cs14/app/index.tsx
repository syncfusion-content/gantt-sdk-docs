import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';
function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const splitterSettings = {
        position: '75%'
    }
    let gantt: GanttComponent;
    const dataBound = () => {
        ((gantt as GanttComponent).treeGrid.getRowByIndex(2) as HTMLElement).style.background = 'rgb(193, 228, 234)';
    }
    return <GanttComponent id='root' ref={g => gantt = g} dataSource={ganttData} taskFields={taskFields} height='400px' splitterSettings={splitterSettings} dataBound={dataBound} gridLines="Both">
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));