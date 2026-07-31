import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, SplitterSettings } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
    var gantt: GanttComponent = null;

    const taskSettings: object = {
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

    const showColumn = () => {
        if (gantt) {
            const allColumns = gantt.getGanttColumns();
            if (allColumns.length > 0) {
                const firstColumnHeader = allColumns[2].headerText as string;
                gantt.showColumn(firstColumnHeader, 'headerText');
            }
        }
    };

    const hideColumn = () => {
        if (gantt) {
            const visibleColumns = gantt.treeGrid.getVisibleColumns();
            if (visibleColumns.length > 0) {
                const firstVisibleHeader = visibleColumns[2].headerText;
                gantt.hideColumn(firstVisibleHeader, 'headerText');
            }
        }
    };

    return (<div>
            <ButtonComponent id="show" onClick={showColumn} style={{ marginRight: '10px' }}>
                Show Column
            </ButtonComponent>
            <ButtonComponent id="hide" onClick={hideColumn}>
                Hide Column
            </ButtonComponent>
            <GanttComponent
                ref={g => gantt = g}
                height="430px"
                dataSource={data}
                taskFields={taskSettings}
                treeColumnIndex={1}
                splitterSettings={splitterSettings}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
                    <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
                    <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
                    <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
                    <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
                </ColumnsDirective>
            </GanttComponent>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));