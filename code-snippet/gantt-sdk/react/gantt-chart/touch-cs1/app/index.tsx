import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, TaskFieldsModel, EditSettingsModel } from '@syncfusion/ej2-react-gantt';

function App() {
    let ganttInstance: GanttComponent | null = null;
    let data: Object[] = [
    { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 3, ParentID: 1, Progress: 50 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Predecessor: '2FS', Progress: 50 },
    { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 4, ParentID: 5, Predecessor: '6SS', Progress: 50 }
    ];
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    const editSettings: EditSettingsModel = {
        allowTaskbarEditing: true
    };

    const load = (): void => {
        if (ganttInstance) {
            (ganttInstance as any).isAdaptive = true;
        }
    };

    return <GanttComponent id="ganttDefault"
        dataSource={data}
        ref={gantt => ganttInstance = gantt}
        taskFields={taskFields}
        editSettings={editSettings}
        height='430px'
        load={load}>
        <Inject services={[Edit, Selection]} />
    </GanttComponent>
};

ReactDOM.render(<App />, document.getElementById('root'));