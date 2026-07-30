import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';

function App() {
    const taskData = [
        { TaskID: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
        { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, ParentID: 1 },
        { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, ParentID: 1 },
        { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2, Predecessor: '2', Progress: 30, ParentID: 1 },
        { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/10/2019'), Duration: 0, Predecessor: '3,4', Indicators: [{ date: '04/10/2019', name: '#briefing', title: 'Product concept briefing' }] }
    ];

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName', 
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    const labelSettings = { leftLabel: 'TaskName' };

    const taskbarTemplate = (props) => {
        const width = props.ganttProperties.width;
        const progress = props.ganttProperties.progress || 0;
        const progressWidth = (progress * width) / 100;

        return (
            <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar">
                <div className="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar" style={{ width: `${progressWidth}px`, height: '100%' }}></div>
                <span className="e-badge e-badge-primary" style={{ marginLeft: '6px' }}>{progress}%</span>
            </div>
        );
    };

    const projectStartDate = new Date('03/28/2019');
    const projectEndDate= new Date('04/18/2019');

    return (
        <GanttComponent
            id="Gantt"
            height="450px"
            dataSource={taskData}
            taskFields={taskFields}
            labelSettings={labelSettings}
            projectStartDate={projectStartDate}
            projectEndDate={projectEndDate}
            taskbarTemplate={taskbarTemplate}
        />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));