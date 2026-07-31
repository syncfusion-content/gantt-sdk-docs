import { ContextMenu, MenuItemModel, ContextMenuModel } from '@syncfusion/ej2-navigations';
import { Gantt, Toolbar, Filter, Edit, Selection } from '@syncfusion/ej2-gantt';
import { EmitType } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

Gantt.Inject(Toolbar, Selection, Filter, Edit);

enableRipple(true);

let menuItems: MenuItemModel[] = [
  {
    text: 'Top'
  },
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
  }];

let menuOptions: ContextMenuModel = {
  items: menuItems,
  select: select
};

let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
  if (args.item.text === 'Add') {
    menuObj.open(60, 20);
  }
};

function select(args: any) {
  let gantt: any = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
  if (args.item.text === "Bottom") {
    gantt.editSettings.newRowPosition = "Bottom";
    gantt.openAddDialog();
  } else if (args.item.text === "Above") {
    if (gantt.selectedRowIndex == -1) {
      alert("Please select any row");
    } else {
      gantt.editSettings.newRowPosition = "Above";
      gantt.openAddDialog();
    }
  } else if (args.item.text === "Below") {
    if (gantt.selectedRowIndex == -1) {
      alert("Please select any row");
    } else {
      gantt.editSettings.newRowPosition = "Below";
      gantt.openAddDialog();
    }

  } else if (args.item.text === "Child") {
    if (gantt.selectedRowIndex == -1) {
      alert("Please select any row");
    } else {
      gantt.editSettings.newRowPosition = "Child";
      gantt.openAddDialog();
    }
  } else if (args.item.text === "Top") {
    gantt.editSettings.newRowPosition = "Top";
    gantt.openAddDialog();
  }
}

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '450px',
  allowSelection: true,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true
  },
  toolbarClick: clickHandler,
  toolbar: ['Edit', { text: 'Add', tooltipText: 'Add', id: 'Add' }],
});

gantt.appendTo('#Gantt');