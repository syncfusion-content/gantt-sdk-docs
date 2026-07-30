import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
    let ganttInstance = null;
    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const splitterSettings = {
        position: '50%'
    };
    function scroll() {
        ganttInstance.ganttChartModule.scrollObject.setScrollTop(200);
    }

    return (
        <div>
            <ButtonComponent id="scrolltop" onClick={scroll}>
                Set Scroll Top
            </ButtonComponent>
            <br /><br />
            <GanttComponent
                height="430px"
                dataSource={data}
                taskFields={taskSettings}
                splitterSettings={splitterSettings}
                ref={(g) => { ganttInstance = g; }}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));