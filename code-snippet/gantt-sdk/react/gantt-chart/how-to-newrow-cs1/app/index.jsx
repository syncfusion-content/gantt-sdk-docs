

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection, Toolbar, ToolbarItem } from '@syncfusion/ej2-react-gantt';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import { data } from './datasource';
function  App (){
    const  taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  const editOptions = {
      allowAdding: true
  };
  let ganttInstance;
  const toolbarOptions = ['Add'];
 let cMenu
 function  toolbarClick(args) {
        if (args.item.id === 'GanttExport_add') {
            cMenu.open(40, 20);
        }
    }
  const menuItems = [
            {
                text: 'Bottom'
            },
            {
                text: 'Above'
            },
            {
                text: 'Below'
            },
            {
                text: 'Child'
            },
            {
                text: 'Top'
            }
        ];
      function  select(args) {
            if (args.item.text === "Bottom") {
            ganttInstance.editSettings.newRowPosition = "Bottom";
            ganttInstance.openAddDialog();
        } else if (args.item.text === "Above") {
            if (ganttInstance.selectedRowIndex == -1) {
                alert("Please select any row");
            } else {
                ganttInstance.editSettings.newRowPosition = "Above";
                ganttInstance.openAddDialog();
            }
        } else if (args.item.text === "Below") {
            if (ganttInstance.selectedRowIndex == -1) {
                alert("Please select any row");
            } else {
                ganttInstance.editSettings.newRowPosition = "Child";
                ganttInstance.openAddDialog();
            }
        } else if (args.item.text === "Child") {
            if (ganttInstance.selectedRowIndex == -1) {
                alert("Please select any row");
            } else {
                ganttInstance.editSettings.newRowPosition = "Child";
                ganttInstance.openAddDialog();
            }
        } else if (args.item.text === "Top") {
            ganttInstance.editSettings.newRowPosition = "Top";
            ganttInstance.openAddDialog();
        }
        }

        return<div>
        <ContextMenuComponent id='contextmenu' ref={(scope) => cMenu = scope} items={menuItems} select={select}/>
        <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
        editSettings={editOptions} toolbar={toolbarOptions} toolbarClick={toolbarClick} height = '450px' ref={gantt => ganttInstance = gantt}>
            <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent></div>
};
ReactDOM.render(<App />, document.getElementById('root'));


