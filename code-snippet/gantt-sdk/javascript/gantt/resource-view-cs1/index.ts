import {
  Gantt,
  Edit,
  Selection,
  Toolbar,
  TaskFieldsModel,
  ResourceFieldsModel,
  EditSettingsModel,
  SplitterSettingsModel,
  LabelSettingsModel,
} from "@syncfusion/ej2-gantt";
import { data, resources } from "./datasource.ts";

Gantt.Inject(Edit, Selection, Toolbar);

let taskSettings: TaskFieldsModel = {
  id: "TaskID",
  name: "TaskName",
  startDate: "StartDate",
  endDate: "EndDate",
  duration: "Duration",
  progress: "Progress",
  dependency: "Predecessor",
  resourceInfo: "resources",
  work: "work",
  parentID: "ParentID",
};

let resourceFields: ResourceFieldsModel = {
  id: "resourceId",
  name: "resourceName",
  unit: "Unit",
  group: "resourceGroup",
};

let editSettings: EditSettingsModel = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  allowTaskbarEditing: true,
  showDeleteConfirmDialog: true,
};

let labelSettings: LabelSettingsModel = {
  rightLabel: "resources",
};

let splitterSettings: SplitterSettingsModel = {
  columnIndex: 3,
};

let gantt: Gantt = new Gantt({
  dataSource: data,
  resources: resources,
  height: "430px",
  viewType: "ResourceView",
  highlightWeekends: true,
  treeColumnIndex: 1,
  projectStartDate: new Date("03/25/2019"),
  projectEndDate: new Date("07/28/2019"),
  taskFields: taskSettings,
  resourceFields: resourceFields,
  editSettings: editSettings,
  columns: [
    { field: "TaskID", visible: false },
    { field: "TaskName", headerText: "Name", width: 250 },
    { field: "work", headerText: "Work" },
    { field: "Progress" },
    { field: "resourceGroup", headerText: "Group" },
    { field: "StartDate" },
    { field: "Duration" },
  ],
  toolbar: [
    "Add",
    "Edit",
    "Update",
    "Delete",
    "Cancel",
    "ExpandAll",
    "CollapseAll",
  ],
  labelSettings: labelSettings,
  splitterSettings: splitterSettings,
});

gantt.appendTo("#Gantt");
