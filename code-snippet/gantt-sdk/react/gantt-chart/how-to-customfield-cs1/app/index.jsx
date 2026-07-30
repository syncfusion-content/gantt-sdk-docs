import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Edit, Selection, Toolbar } from "@syncfusion/ej2-react-gantt";
import { CheckBox } from "@syncfusion/ej2-buttons";
import { TextBox, NumericTextBox, MaskedTextBox } from "@syncfusion/ej2-inputs";
import { DatePicker, DateTimePicker } from "@syncfusion/ej2-calendars";
import { DropDownList } from "@syncfusion/ej2-dropdowns";

import { data } from "./datasource";

function App() {

  let ganttInstance = null;
  let divElement = null;

  const inputs = {
    booleanedit: CheckBox,
    dropdownedit: DropDownList,
    datepickeredit: DatePicker,
    datetimepickeredit: DateTimePicker,
    maskededit: MaskedTextBox,
    numericedit: NumericTextBox,
    stringedit: TextBox
  };

  const taskSettings = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID"
  };

  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: "Dialog"
  };

  const editDialogFields = [
    { type: "General", headerText: "General" },
    { type: "Dependency" },
    { type: "Resources" },
    { type: "Notes" }
  ];

  const addDialogFields = [
    { type: "General", headerText: "General" },
    { type: "Dependency" },
    { type: "Resources" },
    { type: "Notes" }
  ];

  const columns = [
    { field: "TaskID", headerText: "Task ID", textAlign: "Left", width: "100" },
    { field: "TaskName", headerText: "Task Name", width: "250" },
    { field: "StartDate", headerText: "Start Date", width: "150" },
    { field: "EndDate", headerText: "End Date", width: "150" },
    { field: "Duration", headerText: "Duration", width: "150" },
    { field: "Progress", headerText: "Progress", width: "150" },
    { field: "Priority", headerText: "Custom Field", width: "150" }
  ];

  const toolbar = [
    "Add",
    "Edit",
    "Delete",
    "Update",
    "Cancel",
    "ExpandAll",
    "CollapseAll"
  ];

  function actionBegin(args) {
    if (args.requestType === "beforeOpenEditDialog" ||
      args.requestType === "beforeOpenAddDialog") {

      const column = ganttInstance.columnByField["Priority"];

      divElement = ganttInstance.createElement("div", {
        className: "e-edit-form-column"
      });

      const inputElement = ganttInstance.createElement("input", {
        attrs: {
          type: "text",
          id: ganttInstance.controlId + column.field,
          name: column.field,
          title: column.field
        }
      });

      divElement.appendChild(inputElement);

      const inputOptions = {
        enabled: true,
        floatLabelType: "Auto",
        placeholder: "Priority",
        value: (args.rowData).Priority
      };

      const editorType = inputs[column.editType];
      const inputObj = new editorType(inputOptions);
      inputObj.appendTo(inputElement);
    }
  }

  function actionComplete(args) {
    if (args.requestType === "openEditDialog" ||
      args.requestType === "openAddDialog") {

      const generalTab = document.getElementById(
        ganttInstance.controlId + "GeneralTabContainer"
      );

      if (generalTab && divElement) {
        generalTab.appendChild(divElement);
      }
    }
  }

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskSettings}
      editSettings={editSettings}
      editDialogFields={editDialogFields}
      addDialogFields={addDialogFields}
      columns={columns}
      toolbar={toolbar}
      actionBegin={actionBegin}
      actionComplete={actionComplete}
      ref={(g) => (ganttInstance = g)}
    >
      <Inject services={[Edit, Selection, Toolbar]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));