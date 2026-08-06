import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data, ProjectResources } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        resourceInfo: 'resources'
    };
    const splitterSettings = {
        columnIndex: 7
    };
    const resourceFields = {
        id: 'resourceID',
        name: 'resourceName',
    };
    function ganttTemplate(props) {
        var src = props.TaskID + '.png';
        return (<div className='image' >
            <img src={src} style={{ height: '42px' }} />
        </div>);
    };
    const template = ganttTemplate;
    return <GanttComponent dataSource={data} rowHeight={60} taskFields={taskFields}
        splitterSettings={splitterSettings} resourceFields={resourceFields} resources={ProjectResources} height='450px'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID'></ColumnDirective>
            <ColumnDirective field='resources' headerText='Resources' width='250' template={template} textAlign='Center'></ColumnDirective>
            <ColumnDirective field='TaskName'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));