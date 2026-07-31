import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { GanttData } from './datasource';

function App() {
    let gantt = null;

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings = { position: '75%' };

    const alignmentData = [
        { text: 'Left', value: 'Left' },
        { text: 'Right', value: 'Right' },
        { text: 'Center', value: 'Center' },
        { text: 'Justify', value: 'Justify' }
    ];

    const changeAlignment = (args) => {
        const alignment = args.value;
        if (gantt) {
            const columns = gantt.treeGrid.grid.columns;
            columns.forEach((col) => {
                col.textAlign = alignment;
            });
            gantt.treeGrid.grid.refreshColumns();
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
                    Align the text for columns:
                </label>
                <DropDownListComponent width="120" dataSource={alignmentData} fields={{ text: 'text', value: 'value' }} value={alignmentData[1].value} change={changeAlignment} />
            </div>
            <GanttComponent ref={g => gantt = g} id="ganttDefault"
                height="370px" dataSource={GanttData} splitterSettings={splitterSettings} taskFields={taskFields}            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
                    <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
                    <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" format="yMd" width="150" />
                    <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
                    <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
                </ColumnsDirective>
            </GanttComponent>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));