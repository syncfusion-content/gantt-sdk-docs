import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, SplitterSettings } from '@syncfusion/ej2-react-gantt';
import { SwitchComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
    var gantt: GanttComponent;

    const taskFields: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings: SplitterSettings = {
        position: '75%'
    };

    const handleSwitchChange = (args: ChangeEventArgs) => {
        if (gantt) {
            const durationColumn = gantt.treeGrid.grid.getColumnByField('Duration');
            durationColumn.visible = args.checked ? true : false;
            gantt.treeGrid.grid.refreshColumns();
        }
    };

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ padding: '10px 10px' }}>Enable or disable visible property</label>
                <SwitchComponent id="switch" change={handleSwitchChange} />
            </div>
            <GanttComponent
                ref={g => gantt = g}
                dataSource={data}
                taskFields={taskFields}
                splitterSettings={splitterSettings}
                treeColumnIndex={1}
                height="430px"
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
                    <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
                    <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
                    <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" visible={false} />
                    <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="150" />
                </ColumnsDirective>
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));