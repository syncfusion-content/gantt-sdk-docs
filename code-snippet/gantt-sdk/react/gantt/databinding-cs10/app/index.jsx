import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    let ganttInstance;
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId',
        resourceInfo: 'resources'
    };
    function emptyRecordTemplate() {
        return (
            <div className="emptyRecordTemplate">
                <span>There is no data available to display at the moment.</span>
            </div>
        );
    }
    function load(args) {
        if (ganttInstance) {
            ganttInstance.treeGrid.grid.emptyRecordTemplate = emptyRecordTemplate;
        }
    }
    return (<div className="control-section">
        <GanttComponent dataSource={data} taskFields={taskFields} height='450px' load={load} ref={gantt => ganttInstance = gantt!}>
        </GanttComponent>
    </div>);
};
ReactDOM.render(<App />, document.getElementById('root'));
