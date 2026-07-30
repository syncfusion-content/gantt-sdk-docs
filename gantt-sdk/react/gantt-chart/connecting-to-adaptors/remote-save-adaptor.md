---
layout: post
title: React Gantt - Remote Save Adaptor | Syncfusion
description: React Gantt Remote Save adaptor explains the hybrid workflow where the full task set is fetched once and CRUD is persisted via a batch endpoint.
control: RemoteSave Adaptor
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Hybrid Remote Binding with RemoteSaveAdaptor in Syncfusion React Gantt

The [RemoteSaveAdaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors/remote-save-adaptor) in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) provides a hybrid data workflow. The client fetches the complete task set once and applies client‑side operations locally while persisting edits back to the server via batch CRUD requests. This approach keeps the UI responsive for interactive scheduling while ensuring server‑side persistence and authoritative processing for inserts, updates and deletes.

For complete server‑side configuration and additional implementation details, refer to the [DataManager RemoteSaveAdaptor documentation](https://ej2.syncfusion.com/react/documentation/data/adaptors/remote-save-adaptor), which explains endpoint setup, request handling, and best practices for synchronizing CRUD operations with remote services.

This guide describes the conceptual project layout and patterns for wiring the React Gantt chart to a backend that implements a batch CRUD endpoint.

**Project structure:**

- Frontend: a React project that hosts the Gantt and loads the full task dataset into a `DataManager` configured with `RemoteSaveAdaptor`.
- Backend: a web API that serves the complete task list and exposes a batch endpoint that accepts added/changed/deleted records in a single payload.

```
RemoteSaveAdaptor/
├── RemoteSaveAdaptor.client/        # React frontend (Vite/React project).
│   ├── src/
│   │   ├── App.css
│   │   └── App.jsx                  # Add RemoteSaveAdaptor here.
│   └── package.json
└── RemoteSaveAdaptor.Server/        # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

## React Gantt frontend setup using RemoteSave Adaptor

This section describes, at a conceptual level, how the Gantt consumes task data from remote save and submits task changes. Implementation and package installation steps are covered in platform‑specific setup guides and are intentionally omitted here.

### Step 1: Packages and dependencies

- Ensure the React project includes the Syncfusion Gantt and data packages required to render the Gantt and to use the DataManager and RemoteSave Adaptor.
- Right‑click the **RemoteSaveAdaptor.client** folder in **Solution Explorer** and select **Open in Terminal** (available in newer Visual Studio versions), or open a Developer Command prompt/PowerShell from the Start menu and navigate manually to the **RemoteSaveAdaptor.client**. Once inside the folder, confirm that **package.json** is present, then run the following commands to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages:

```bash
npm install @syncfusion/ej2-react-gantt --save
npm install @syncfusion/ej2-data --save
```

### Step 2: CSS and component styling

- Include the required Syncfusion theme and component styles so the Gantt and its input controls render correctly. Add these imports to **index.css** or **App.css**:

```ts
/* Basic Gantt Chart styles */
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-gantt/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";

/* For editing, toolbar, and dialog features */
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";

/* For rich text editor in dialog notes tab */
@import "../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css";
```

Import the **App.css** in the application entry point(**App.jsx**).

```js
import "./App.css";
...
...

```

### Step 3: Configure DataManager with RemoteSave Adaptor

In the React component file **App.jsx**, import `DataManager` and `RemoteSaveAdaptor` from `@syncfusion/ej2-data`. The `DataManager` serves as an abstraction layer that manages the data source configuration and coordinates data operations with the Gantt chart.

**Configure the DataManager**

1. **Assign RemoteSaveAdaptor:** Set the `adaptor` property within the `dataSource` configuration to `new RemoteSaveAdaptor()`.

2. **Map CRUD operations**: CRUD operations within the Gantt chart can be mapped to server-side controller actions using specific properties:
   - `batchUrl`: Specifies the URL for batch editing

3. **Load JSON data**: Fetch initial data from the server that contains all records.

**Configure the Gantt chart**

1. **Set dataSource:** Configure the `dataSource` property of React Gantt chart with a JSON object.

2. **Enable editing:** Use [editSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#editsettings) to allow CRUD actions (allowEditing, allowAdding, allowDeleting).

3. **Add toolbar:** Configure [toolbar](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#toolbar) with items such as Add, Edit, Delete, Update, Cancel, and Search.

4. **Enable client-side features:**

    - [allowAdding](https://ej2.syncfusion.com/react/documentation/api/gantt/editsettingsmodel#allowadding): Enables adding.

    - [allowDeleting](https://ej2.syncfusion.com/react/documentation/api/gantt/editsettingsmodel#allowdeleting): Enables deleting.

    - [allowTaskbarEditing](https://ej2.syncfusion.com/react/documentation/api/gantt/editsettingsmodel#allowtaskbarediting): Enables taskbar editing.

In this example, data is fetched from the server using the `fetch` method and assigned to the Grid's [dataSource](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#datasource) property through the `DataManager` instance.



{% tabs %}
{% highlight js tabtitle="App.jsx" %}
import './App.css';
import { GanttComponent, Inject, Edit, Selection, Toolbar, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import React, { useEffect, useState } from "react";
import { DataManager, RemoteSaveAdaptor } from "@syncfusion/ej2-data";

const serviceUrl = "https://localhost:xxxx/api/gantt"; // Here xxxx represents the port number.

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(serviceUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(new DataManager({
          json: result,
          adaptor: new RemoteSaveAdaptor(),
          batchUrl: `${serviceUrl}/Batch`,
          enableOffline: true
        }));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    allowTaskbarEditing: true
  };

  const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel"];

  return (
    <div>
      {data && (
        <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true} editSettings={editSettings} height='400px' toolbar={toolbarOptions}>
          <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" type="number" />
            <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" type="string" />
            <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="dateTime" />
            <ColumnDirective field="EndDate" headerText="End Date" textAlign="Right" width="150" format="dd/MM/yyyy hh:mm" type="dateTime" />
            <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" type="number" />
            <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" type="number" />
          </ColumnsDirective>
          <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent>
      )}
    </div>
  );
}

export default App;
{% endhighlight %}
{% endtabs %}

## CRUD operations

The DataManager with RemoteSaveAdaptor supports Create, Read, Update, and Delete workflows for task entities. In Gantt usage, these operations cover task creation, task edits (including taskbar edits and resulting scheduling recalculations), dependency creation or modification, and task deletion.

**Server-side batch endpoint**

The server receives a batch payload that contains `added`, `changed`, and `deleted` arrays. The batch endpoint applies each section in turn—assigning identifiers for new tasks if required, updating existing records, and removing deleted items—then returns a response the client can reconcile against its local state.

### Step 1: Complete server-side controller

Add all CRUD methods to the GanttController.cs. Replace the entire controller with this complete version:

{% tabs %}
{% highlight cs tabtitle="GanttController.cs - Batch Handler" %}
using GanttServerSample.Models;
using Microsoft.AspNetCore.Mvc;

namespace GanttServerSample.Controllers
{
    [Route("api/[controller]")]
    public class GanttController : ControllerBase
    {
        /// <summary>
        /// GET endpoint – returns all Gantt tasks
        /// Used by React Gantt for initial data load
        /// </summary>
        [HttpGet]
        public List<GanttTask> GetGanttData()
        {
            return GanttData.GetAllTasks().ToList();
        }

        [HttpPost("Batch")]
        public IActionResult BatchUpdate([FromBody] CRUDModel<GanttTask> crud)
        {
            // INSERT
            if (crud.added != null && crud.added.Count > 0)
            {
                foreach (var task in crud.added)
                {
                    task.TaskId = GanttData.GetAllTasks().Max(x => x.TaskId) + 1;
                    GanttData.GetAllTasks().Add(task);
                }
            }
            // UPDATE
            if (crud.changed != null && crud.changed.Count > 0)
            {
                foreach (var task in crud.changed)
                {
                    var data = GanttData.GetAllTasks()
                        .FirstOrDefault(x => x.TaskId == task.TaskId);
                    if (data != null)
                    {
                        data.TaskName = task.TaskName;
                        data.StartDate = task.StartDate;
                        data.EndDate = task.EndDate;
                        data.Duration = task.Duration;
                        data.Progress = task.Progress;
                        data.ParentId = task.ParentId;
                    }
                }
            }
            // DELETE
            if (crud.deleted != null && crud.deleted.Count > 0)
            {
                foreach (var task in crud.deleted)
                {
                    var data = GanttData.GetAllTasks()
                        .FirstOrDefault(x => x.TaskId == task.TaskId);

                    if (data != null)
                    {
                        GanttData.GetAllTasks().Remove(data);
                    }
                }
            }
            return Ok(crud);
        }


    }
    public class CRUDModel<T> where T : class
    {
        public string? action { get; set; }
        public string? key { get; set; }
        public string? table { get; set; }
        public List<T>? added { get; set; }
        public List<T>? changed { get; set; }
        public List<T>? deleted { get; set; }
    }
}

{% endhighlight %}
{% endtabs %}

> Note: The sample above is a focused illustration of the batch handler shape. Implement your project‑specific scheduling, dependency validation, and identifier assignment logic inside the batch method so server rules remain authoritative.

### Step 2: Client-side gantt configuration

React Gantt enables full CRUD functionality by configuring the required [toolbar](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#toolbar) buttons (`Add`, `Edit`, `Update`, `Delete`, and `Cancel`) and enabling adding, editing, updating, and deleting through the `editSettings` property. This setup allows the Gantt to handle all basic data operations directly from the UI.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
import './App.css';
import { GanttComponent, Inject, Edit, Selection, Toolbar, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import React, { useEffect, useState } from "react";
import { DataManager, RemoteSaveAdaptor } from "@syncfusion/ej2-data";

const serviceUrl = "https://localhost:xxxx/api/gantt"; // Here xxxx represents the port number.

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(serviceUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(new DataManager({
          json: result,
          adaptor: new RemoteSaveAdaptor(),
          batchUrl: `${serviceUrl}/Batch`,
          enableOffline: true
        }));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    allowTaskbarEditing: true
  };

  const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel"];

  return (
    <div>
      {data && (
        <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true} editSettings={editSettings} height='400px' toolbar={toolbarOptions}>
          <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" type="number" />
            <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" type="string" />
            <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="dateTime" />
            <ColumnDirective field="EndDate" headerText="End Date" textAlign="Right" width="150" format="dd/MM/yyyy hh:mm" type="dateTime" />
            <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" type="number" />
            <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" type="number" />
          </ColumnsDirective>
          <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent>
      )}
    </div>
  );
}

export default App;
{% endhighlight %}
{% endtabs %}

## Run and verify (conceptual)

Run the application in Visual Studio, accessible on a URL like **https://localhost:xxxx**. Verify the API returns data at **https://localhost:xxxx/api/gantt/Batch**, where **xxxx** is the port. Gantt displays data fetched from the backend API.

## Troubleshooting

| Issue                     | Cause                                                      | Solution                                                                                 |
|---------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------|
| Empty initial load        | GET task endpoint not returning required task records      | Verify endpoint returns records with required fields (ids, start/end dates, parent ids) |
| Batch requests not applied| Incorrect batchUrl or unsupported server payload            | Confirm `batchUrl` is correct and server accepts expected payload format                |
| Identifier mismatches     | Server not returning stable keys for new records            | Ensure server returns assigned ids so client can replace temporary ids                  |
| CORS or network errors    | Cross-origin requests blocked or misconfiguration              | Confirm CORS is enabled when frontend and backend are hosted separately                 |

## Complete sample repository

For the complete working implementation of this example, refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-react-gantt-chart-samples/tree/master/RemoteSaveAdaptor) repository.

## See also
- [Connect to OdataV4 services](https://ej2.syncfusion.com/react/documentation/gantt/connecting-to-adaptors/odatav4-adaptor)
- [RESTful CRUD Operations in ASP.NET Web Forms](https://ej2.syncfusion.com/react/documentation/gantt/connecting-to-adaptors/web-method-adaptor)
- [Data binding](https://ej2.syncfusion.com/react/documentation/gantt/data-binding)