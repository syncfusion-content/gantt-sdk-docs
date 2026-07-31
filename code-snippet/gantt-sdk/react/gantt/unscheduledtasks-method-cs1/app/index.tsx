
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, TaskFieldsModel, ColumnModel, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
    let ganttInstance: GanttComponent = null;

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const editSettings: EditSettingsModel = {
        allowEditing: true
    };

    const columns: ColumnModel = [
        { field: 'TaskID', headerText: 'ID', width: 80 },
        { field: 'TaskName', headerText: 'Name', width: 160 },
        { field: 'StartDate', headerText: 'Start', width: 110, format: 'MM/dd/yyyy' },
        { field: 'EndDate', headerText: 'End', width: 110, format: 'MM/dd/yyyy' },
        { field: 'Duration', headerText: 'Dur', width: 80 },
        { field: 'Progress', headerText: 'Prog', width: 80 }
    ];

    const convertTaskToMilestone = () => {
        if (ganttInstance) {
            console.log(ganttInstance);
            ganttInstance.convertToMilestone('6'); // Convert TaskID 6 to milestone
        }
    };

    return (
        <div>
            <div style={{ marginBottom: '8px' }}>
                <ButtonComponent onClick={convertTaskToMilestone}>Convert Task 6 to Milestone</ButtonComponent>
            </div>
            <GanttComponent
                ref={g => ganttInstance = g}
                height="460px"
                dataSource={data}
                taskFields={taskFields}
                editSettings={editSettings}
                columns={columns}
                allowUnscheduledTasks={true}
            >
                <Inject services={[Edit]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));