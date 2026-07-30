
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { DayMarkers } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TaskFieldsModel } from '@syncfusion/ej2-gantt';
import { projectNewData } from './datasource';

function App() {
    let ganttRef: GanttComponent | null = null;
    let eventMarkersEnabled = true;

    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const defaultMarkers: object[] = [
        { day: new Date('04/09/2019'), label: 'Research phase' },
        { day: new Date('04/30/2019'), label: 'Design phase' },
        { day: new Date('05/23/2019'), label: 'Production phase' },
        { day: new Date('06/20/2019'), label: 'Sales and marketing phase' }
    ];

    const toggleEventMarkers = () => {
        if (ganttRef) {
            ganttRef.eventMarkers = eventMarkersEnabled ? [] : [...defaultMarkers];
        }
        eventMarkersEnabled = !eventMarkersEnabled;
    };

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <ButtonComponent onClick={toggleEventMarkers}>Event Markers</ButtonComponent>
            </div>
            <GanttComponent
                height="430px"
                dataSource={projectNewData}
                taskFields={taskSettings}
                eventMarkers={defaultMarkers}
                ref={gantt => ganttRef = gantt}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
                    <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                    <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                    <ColumnDirective field="Duration" headerText="Duration" width="150" />
                    <ColumnDirective field="Progress" headerText="Progress" width="150" />
                </ColumnsDirective>
                <Inject services={[DayMarkers]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));