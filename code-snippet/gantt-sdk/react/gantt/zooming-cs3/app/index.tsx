
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { Toolbar, Selection } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TaskFieldsModel } from '@syncfusion/ej2-gantt';
import { data } from './datasource';

function App() {
    let ganttRef: GanttComponent | null = null;

    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const zoomIn = () => {
        if (ganttRef) ganttRef.zoomIn();
    };

    const zoomOut = () => {
        if (ganttRef) ganttRef.zoomOut();
    };

    const fitToProject = () => {
        if (ganttRef) ganttRef.fitToProject();
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <ButtonComponent id="zoomIn" onClick={zoomIn} style={{ marginRight: '8px' }}>ZoomIn</ButtonComponent>
                <ButtonComponent id="zoomOut" onClick={zoomOut} style={{ marginRight: '8px' }}>ZoomOut</ButtonComponent>
                <ButtonComponent id="fitToProject" onClick={fitToProject}>FitToProject</ButtonComponent>
            </div>
            <GanttComponent
                id="ganttDefault"
                height="430px"
                dataSource={data}
                taskFields={taskSettings}
                ref={gantt => ganttRef = gantt}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
                    <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                    <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                    <ColumnDirective field="Duration" headerText="Duration" width="150" />
                    <ColumnDirective field="Progress" headerText="Progress" width="150" />
                </ColumnsDirective>
                <Inject services={[Toolbar, Selection]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));