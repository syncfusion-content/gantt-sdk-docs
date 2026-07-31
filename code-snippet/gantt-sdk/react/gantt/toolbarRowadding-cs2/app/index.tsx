import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection, Toolbar, ToolbarItem } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
   function onActionBegin(args) {
    if (args.requestType == 'beforeOpenAddDialog') {
        args.rowData.TaskName = 'Gantt';
        args.rowData.Progress = 70;
        args.rowData.ganttProperties.taskName = 'Gantt';
        args.rowData.ganttProperties.progress = 70;
    }
    };
  const  editOptions: EditSettingsModel = {
      allowAdding: true
  };
  const  toolbarOptions: ToolbarItem[] = ['Add'];
        return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
        editSettings={editOptions} toolbar={toolbarOptions} height = '450px' actionBegin={onActionBegin}>
            <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));