import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
    let startObj = null;
    let endObj = null;
    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const selectionSettings = {
        mode: 'Row',
        type: 'Multiple'
    };
    function selectRowRange() {
        const start = parseInt(startObj.value, 10);
        const end = parseInt(endObj.value, 10);

        if (!isNaN(start) && !isNaN(end) && start >= 0 && end >= start) {
            const ganttObj = document.querySelector('#gantt').ej2_instances[0];
            ganttObj.clearSelection();
            ganttObj.selectionModule.selectRowsByRange(start, end);
        }
    }
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "20px 0" }}>
                <label style={{ fontWeight: "bold" }}>Start Row Index:</label>
                <TextBoxComponent width="120" type="number" ref={(scope) => { startObj = scope; }} />
                <label style={{ fontWeight: "bold" }}>End Row Index:</label>
                <TextBoxComponent width="120" type="number" ref={(scope) => { endObj = scope; }} />
                <ButtonComponent onClick={selectRowRange}>Select Rows</ButtonComponent>
            </div>
            <GanttComponent
                id="gantt"
                height="370px"
                dataSource={data}
                taskFields={taskSettings}
                selectionSettings={selectionSettings}
                enableHover={true}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" width="90" textAlign="Right" />
                    <ColumnDirective field="TaskName" width="220" />
                    <ColumnDirective field="StartDate" width="150" format="yMd" />
                    <ColumnDirective field="Duration" width="120" textAlign="Right" />
                    <ColumnDirective field="Progress" width="120" textAlign="Right" />
                </ColumnsDirective>
                <Inject services={[Selection]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));