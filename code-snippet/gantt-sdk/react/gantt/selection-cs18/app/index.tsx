import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, TaskFieldsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
    let ganttInstance: GanttComponent | null;

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const selectionSettings: SelectionSettingsModel = {
        mode: 'Cell',
        type: 'Multiple'
    };

    const selectCells = (indexes: number[]) => {
        if (ganttInstance) {
            ganttInstance.clearSelection();
            const cell = {
                rowIndex: indexes[0],
                cellIndexes: [indexes[1]]
            };
            console.log('Selected Cell:', cell);
            ganttInstance.selectCells([cell]);
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '10px 0 20px 0' }}>
                <ButtonComponent onClick={() => selectCells([0, 0])}>Select [0, 0]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([1, 1])}>Select [1, 1]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([2, 2])}>Select [2, 2]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([3, 3])}>Select [3, 3]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([4, 4])}>Select [4, 4]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([5, 0])}>Select [5, 0]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([6, 1])}>Select [6, 1]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([7, 2])}>Select [7, 2]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([3, 4])}>Select [3, 4]</ButtonComponent>
            </div>
            <GanttComponent
                height="370px"
                dataSource={data}
                taskFields={taskFields}
                selectionSettings={selectionSettings}
                enableHover={true}
                ref={(gantt: any) => (ganttInstance = gantt)}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="ID" width="80" />
                    <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
                    <ColumnDirective field="StartDate" headerText="Start Date" />
                    <ColumnDirective field="Duration" headerText="Duration" />
                    <ColumnDirective field="Progress" headerText="Progress" />
                </ColumnsDirective>
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));