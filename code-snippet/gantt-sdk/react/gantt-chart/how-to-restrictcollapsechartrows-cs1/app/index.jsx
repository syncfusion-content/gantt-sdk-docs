

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function  App(){
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentId'
    };
    let ganttInstance;
    const editOptions = {
      allowEditing: true,
      allowAdding:true
    };
    let gantt;
    function collapsing(args) {
        if (gantt.ganttChartModule.isExpandCollapseFromChart) {
            args.cancel = true;
        }
    };
    return (
        <div>
            <GanttComponent 
                dataSource={data} 
                ref={gantt => ganttInstance = gantt} 
                taskFields={taskFields} 
                collapsing={collapsing} 
                allowSelection={true}
                editSettings={editOptions} 
                height = '450px'
            >
            <Inject services={[Edit, Selection]} />
            </GanttComponent>
        </div>
    );   
};
ReactDOM.render(<App />, document.getElementById('root'));


