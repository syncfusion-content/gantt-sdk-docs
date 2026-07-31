import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { virtualData } from './datasource';
import { updateData } from './updatedata';

function App() {
    let ganttObj = null;

    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID',
        dependency: 'Predecessor'
    };

    const splitterSettings = {
        columnIndex: 1
    };

    const projectStartDate = new Date('04/01/2024');

    const updateDataSourceMethod = () => {
        const otherinfo = {
            projectStartDate: new Date('01/01/2024'),
            projectEndDate: new Date('01/01/2025')
        };
        ganttObj.updateDataSource(updateData, otherinfo);
    };

    return (
        <div>
            <button style={{ marginBottom: '20px' }} onClick={updateDataSourceMethod}>Update DataSource</button>
            <GanttComponent
                height='450px'
                dataSource={virtualData}
                taskFields={taskSettings}
                splitterSettings={splitterSettings}
                projectStartDate={projectStartDate}
                enableVirtualization={true}
                ref={(g) => (ganttObj = g)}
            >
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));