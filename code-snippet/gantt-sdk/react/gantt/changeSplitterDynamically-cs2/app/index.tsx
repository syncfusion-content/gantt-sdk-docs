import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject,Toolbar } from '@syncfusion/ej2-react-gantt';
import { DropDownList } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';
function App() {

  let ganttInstance:any;

  const taskFields:any= {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  
  function onChange(args:any) {
    if(args.value==="1")
    {
      ganttInstance.setSplitterPosition("100%","position")
    }
    else if(args.value==="2")
    {
      ganttInstance.setSplitterPosition("0%", "position");
    }
    else if(args.value==="3")
    {
      ganttInstance.setSplitterPosition("50%", "position");
    }
  
  }
  
  const items:any = [
    {
         item: 'Grid Only',
         id:"1"
    },
    {
         item: 'Chart Only',
         id:"2"
    },
    {
         item: 'Grid and Chart',
         id:"3"
    }];
  const toolbarOptions:any = ['ExpandAll','CollapseAll',{type: "Input", tooltipText:"Change View", template: new DropDownList({dataSource:items, placeholder:"Select", change:onChange, fields:{text:'item', value:'id'}})}]
  
    
return (<GanttComponent ref={gantt => ganttInstance =gantt} dataSource={data} taskFields={taskFields} toolbar={toolbarOptions} height='450px'>
          <Inject services={[Toolbar]}/>
      </GanttComponent>);
};
ReactDOM.render(<App />, document.getElementById('root'));