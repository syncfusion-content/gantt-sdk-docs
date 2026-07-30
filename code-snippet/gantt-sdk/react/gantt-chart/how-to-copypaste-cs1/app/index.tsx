import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Selection, ContextMenu, Edit, ContextMenuClickEventArgs, ContextMenuOpenEventArgs, TaskFieldsModel, EditSettingsModel } from "@syncfusion/ej2-react-gantt";
import { taskData } from "./datasource";

function App() {

  let ganttInstance: GanttComponent | null = null;
  let copiedRecord: any = null;

  const data: object[] = taskData;

  const taskSettings: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    parentID: "ParentID"
  };

  const editSettings: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  };

  const contextMenuItems: any[] = [
    { text: "Copy", target: ".e-content", id: "copy" },
    { text: "Paste", target: ".e-content", id: "paste" }
  ];

  function contextMenuClick(args: ContextMenuClickEventArgs): void {
    if (args.item.id === "copy") {
      copiedRecord = args.rowData;
      copiedRecord.taskData.TaskID =
        ganttInstance!.currentViewData.length + 1;
    }

    if (args.item.id === "paste") {
      ganttInstance!.addRecord(
        copiedRecord.taskData,
        "Below",
        args.rowData!.index
      );

      if (copiedRecord.hasChildRecords) {
        addChildRecords(copiedRecord, args.rowData!.index! + 1);
      }

      copiedRecord = null;
    }
  }

  function contextMenuOpen(args: ContextMenuOpenEventArgs): void {
    if (args.type !== "Header") {
      if (copiedRecord) {
        args.hideItems!.push("Copy");
      } else {
        args.hideItems!.push("Paste");
      }
    }
  }

  function addChildRecords(record: any, index: number): void {
    for (let i = 0; i < record.childRecords.length; i++) {
      const childRecord = record.childRecords[i];
      childRecord.taskData.TaskID =
        ganttInstance!.currentViewData.length + 1;

      ganttInstance!.addRecord(childRecord.taskData, "Child", index);

      if (childRecord.hasChildRecords) {
        addChildRecords(childRecord, index + (i + 1));
      }
    }
  }

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskSettings}
      editSettings={editSettings}
      enableContextMenu={true}
      contextMenuItems={contextMenuItems}
      contextMenuClick={contextMenuClick}
      contextMenuOpen={contextMenuOpen}
      ref={(g) => (ganttInstance = g)}
    >
      <Inject services={[Selection, ContextMenu, Edit]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));