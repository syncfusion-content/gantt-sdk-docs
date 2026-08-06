import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { DayMarkers } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel } from '@syncfusion/ej2-gantt';
import { projectNewData } from './datasource';

function App() {
    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const eventMarkers: object[] = [
        { day: new Date('2019-04-20'), label: 'Research phase ends' },
        { day: new Date('2019-05-18'), label: 'Design phase ends' },
        { day: new Date('2019-06-05'), label: 'Production phase ends' },
        { day: new Date('2019-06-20'), label: 'Sales and marketing phase starts' }
    ];

    return (
        <GanttComponent
            height="430px"
            dataSource={projectNewData}
            taskFields={taskSettings}
            eventMarkers={eventMarkers}
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
    );
}

ReactDOM.render(<App />, document.getElementById('root'));