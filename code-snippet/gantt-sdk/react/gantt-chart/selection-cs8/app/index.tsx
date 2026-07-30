import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const selectionSettings: SelectionSettingsModel = {
        mode: 'Row',
        type: 'Multiple'
    };
    function selectRows(indexes: number[]) {
        const ganttObj: any = (document.querySelector('#gantt') as any).ej2_instances[0];
        ganttObj.clearSelection();
        ganttObj.selectRows(indexes);
    }
    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "10px 0 20px 0" }}>
                <ButtonComponent onClick={() => selectRows([1, 3])}>Select [1, 3]</ButtonComponent>
                <ButtonComponent onClick={() => selectRows([0, 2])}>Select [0, 2]</ButtonComponent>
                <ButtonComponent onClick={() => selectRows([2, 4])}>Select [2, 4]</ButtonComponent>
                <ButtonComponent onClick={() => selectRows([0, 5])}>Select [0, 5]</ButtonComponent>
                <ButtonComponent onClick={() => selectRows([1, 6])}>Select [1, 6]</ButtonComponent>
                <ButtonComponent onClick={() => selectRows([0, 7, 2])}>Select [0, 7, 2]</ButtonComponent>
                <ButtonComponent onClick={() => selectRows([1, 6, 7])}>Select [1, 6, 7]</ButtonComponent>
                <ButtonComponent onClick={() => selectRows([4, 6, 7])}>Select [4, 6, 7]</ButtonComponent>
                <ButtonComponent onClick={() => selectRows([2, 5, 6])}>Select [2, 5, 6]</ButtonComponent>
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
                    <ColumnDirective field="TaskName" width="250" />
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