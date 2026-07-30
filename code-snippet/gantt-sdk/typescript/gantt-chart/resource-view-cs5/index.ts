import {
  Gantt,
  RowDD,
  Edit,
  Toolbar,
  Selection,
  Resize,
  ActionBeginArgs,
} from "@syncfusion/ej2-gantt";
import { data, resources } from "./datasource.ts";

Gantt.Inject(RowDD, Edit, Toolbar, Selection, Resize);

let gantt: Gantt = new Gantt({
  height: "430px",
  dataSource: data,
  resources: resources,
  taskFields: {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    resourceInfo: "resources",
    work: "work",
    parentID: "ParentID",
  },
  resourceFields: {
    id: "resourceId",
    name: "resourceName",
    unit: "resourceUnit",
    group: "resourceGroup",
  },
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  },
  toolbar: ["Add"],
  labelSettings: {
    leftLabel: "TaskName",
  },
  actionBegin: (args: ActionBeginArgs) => {
    if (
      args.requestType === "beforeOpenAddDialog" ||
      args.requestType === "beforeOpenEditDialog"
    ) {
      args.Resources.columns[1].visible = false;
    }
  },
});

gantt.appendTo("#Gantt");
