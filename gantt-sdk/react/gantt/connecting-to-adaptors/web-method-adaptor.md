---
layout: post
title: React Gantt - Web Method Adaptor | Syncfusion
description: React Gantt Web Method adaptor explains how the adaptor conveys task-related requests and task modification payloads to server web methods.
control: WebMethod Adaptor
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Remote Data Binding with Custom Web Methods in Syncfusion React Gantt

The [WebMethodAdaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors/web-method-adaptor) enables the Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt to communicate with server web methods and legacy endpoints by packaging task data requests and task modification payloads into a structured request envelope the server can deserialize. This adaptor is suitable for backend that expose web methods where task requests and updates are handled via HTTP POST operations.

For backend configuration and expected request/response shapes, consult the WebMethod adaptor backend setup documentation for your platform. After the backend is prepared, configure the DataManager in the React application to use the WebMethod adaptor as the Gantt data source.

For complete server‑side configuration and additional implementation details, refer to the [DataManager Webmethod Adaptor documentation](https://ej2.syncfusion.com/react/documentation/data/adaptors/web-method-adaptor), which covers endpoint setup, query processing, and best practices for integrating WebMethod‑based services.

**Project structure (conceptual):**

- Frontend: a React project hosting the Gantt and a DataManager configured for WebMethod endpoints.
- Backend: a web methods service that receives the adaptor's request envelope, processes task queries and mutation payloads, and returns JSON task records and related metadata.


```
WebMethodAdaptor/
├── WebMethodAdaptor.client/     # React frontend (Vite/React project).
│   ├── src/
│   │   ├── App.css
│   │   └── App.jsx                  # Add WebMethodAdaptor here.
│   └── package.json
└── WebMethodAdaptor.Server/     # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

## React Gantt frontend setup using WebMethod adaptor

This section describes, at a conceptual level, how the Gantt consumes task data from web methods and submits task changes. Implementation and package installation steps are covered in platform‑specific setup guides and are intentionally omitted here.

### Step 1: Packages and dependencies

- Ensure the React project includes the Syncfusion Gantt and data packages required to render the Gantt and to use the DataManager and WebMethod adaptor.
- Right‑click the **WebMethodAdaptor.client** folder in **Solution Explorer** and select **Open in Terminal** (available in newer Visual Studio versions), or open a Developer Command prompt/PowerShell from the Start menu and navigate manually to the **WebMethodAdaptor.client**. Once inside the folder, confirm that **package.json** is present, then run the following commands to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages:

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

### Step 3: Configure DataManager with WebMethod adaptor

- Configure a DataManager instance that targets your web method endpoints and specifies the WebMethod adaptor. The Gantt uses that DataManager to fetch tasks, request related datasets, and submit task create/update/delete payloads wrapped in the expected envelope.

Conceptually, the adaptor sends a request object that contains request metadata (for example, whether the client requires counts or which timeline range to return) together with task update payloads when the user performs create, update, or delete actions in the Gantt.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
import React from "react";
import { DataManager, WebMethodAdaptor } from "@syncfusion/ej2-data";
import { GanttComponent, Inject, Selection, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';

function App() {
  // Configure DataManager with WebMethodAdaptor
  const data = new DataManager({
    url: "https://localhost:xxxx/api/Gantt", // Here xxxx represents the port number.
    adaptor: new WebMethodAdaptor(),
    crossDomain: true
  });
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Dependency',
    parentID: 'ParentID',
  };

  return (
    <GanttComponent dataSource={data} taskFields={taskFields} height='400px' >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" type="number" />
        <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" type="string" />
        <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="dateTime" />
        <ColumnDirective field="EndDate" headerText="End Date" textAlign="Right" width="150" format="dd/MM/yyyy hh:mm" type="dateTime" />
        <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" type="string" />
        <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" type="number" />
      </ColumnsDirective>
      <Inject services={[Selection]} />
    </GanttComponent>
  );
}

export default App;

{% endhighlight %}
{% endtabs %}

**Server-side data operations**

When task sets are large or when scheduling rules must be applied consistently, the server receives responsibility for processing task queries and task modifications. Using web methods, the server applies scheduling rules, dependency validation, and any project‑specific business logic before returning task records or acknowledging changes.The `Syncfusion.EJ2.AspNet.Core` package supports this approach by providing built‑in methods that efficiently handle these operations on the server, ensuring smooth performance even with heavy data loads.

## CRUD operations

The DataManager with WebMethodAdaptor supports Create, Read, Update, and Delete workflows for task entities. In Gantt usage, these operations cover task creation, task edits (including taskbar edits and resulting scheduling recalculations), dependency creation or modification, and task deletion.

**Mapping CRUD operations to service endpoints**

CRUD operations are conveyed to the service using standard WebMethod conventions. The WebMethodAdaptor works with a single task endpoint and standard HTTP methods:

| Operation | HTTP Method | URL Example | Description |
|-----------|-------------|-------------|-------------|
| **Read** | POST | `/api/Gantt` | Get all records. |
| **Create** | POST | `/api/Gantt` | Add a new record. |
| **Update** | POST | `/api/Gantt` | Update record. |
| **Delete** | POST | `/api/Gantt` | Delete record. |

### Step 1: Complete server-side controller

Add all CRUD methods to the GanttController.cs. Replace the entire controller with this complete version:

{% tabs %}
{% highlight cs tabtitle="GanttController.cs - Complete CRUD Implementation" %}
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using WebMethodAdaptorDemo.Server.Models;

namespace WebMethodAdaptorDemo.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GanttController : ControllerBase
    {
        [HttpGet]
        public List<GanttTask> GetOrderData()
        {
            return GanttDataAdaptor.GetGanttTasks().ToList();
        }

        [HttpPost]
        public object Post([FromBody] CRUDModel<GanttTask> data)
        {

            if (data == null)
                return BadRequest();

            // Work against the single backing list once
            var tasks = GanttDataAdaptor.GetGanttTasks(); // assume List<GanttTask>

            if (data.action == "batch")
            {
                // Added: assign TaskID if missing and add to backing list
                if (data.added != null)
                {
                    int nextId = tasks.Any() ? tasks.Max(t => t.TaskID) + 1 : 1;
                    foreach (var task in data.added)
                    {
                        if (task.TaskID == 0)
                            task.TaskID = nextId++;
                        tasks.Add(task);
                    }
                }

                // Changed: update existing items safely (check for null)
                if (data.changed != null)
                {
                    foreach (var task in data.changed)
                    {
                        var existing = tasks.FirstOrDefault(t => t.TaskID == task.TaskID);
                        if (existing == null) continue;

                        existing.TaskName = task.TaskName;
                        existing.StartDate = task.StartDate;
                        existing.EndDate = task.EndDate;
                        existing.Duration = task.Duration;
                        existing.Progress = task.Progress;
                        existing.Dependency = task.Dependency;
                        existing.ParentID = task.ParentID;
                    }
                }

                // Deleted: remove by TaskID
                if (data.deleted != null)
                {
                    foreach (var task in data.deleted)
                    {
                        var existing = tasks.FirstOrDefault(t => t.TaskID == task.TaskID);
                        if (existing != null)
                            tasks.Remove(existing);
                    }
                }
            }

            // Return the updated data and count
            var dataSource = tasks.AsQueryable();
            int totalRecordsCount = tasks.Count;
            return Ok(new { result = dataSource, count = totalRecordsCount });
        }
    }

    /// <summary>
    /// Wrapper class for WebMethodAdaptor requests.
    /// WebMethodAdaptor wraps DataManagerRequest inside a 'value' property.
    /// </summary>
    public class DataManager
    {
        public required DataManagerRequest Value { get; set; }
    }

    public class CRUDModel<T>
        where T : class
    {
        public string? action { get; set; }
        public string? keyColumn { get; set; }
        public object? key { get; set; }
        public T? value { get; set; }
        public List<T>? added { get; set; }
        public List<T>? changed { get; set; }
        public List<T>? deleted { get; set; }
        public IDictionary<string, object>? @params { get; set; }
    }
}

{% endhighlight %}
{% endtabs %}

### Step 2: Client-side gantt configuration

React Gantt enables full CRUD functionality by configuring the required [toolbar](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#toolbar) buttons (`Add`, `Edit`, `Update`, `Delete`, and `Cancel`) and enabling adding, editing, updating, and deleting through the `editSettings` property. This setup allows the Gantt to handle all basic data operations directly from the UI.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
import React from "react";
import { DataManager, WebMethodAdaptor } from "@syncfusion/ej2-data";
import { GanttComponent, Inject, Edit, Selection, Toolbar, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';

function App() {
  // Configure DataManager with WebMethodAdaptor
  const data = new DataManager({
    url: "https://localhost:xxxx/api/Gantt", // Here xxxx represents the port number.
    adaptor: new WebMethodAdaptor(),
    crossDomain: true
  });
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Dependency',
    parentID: 'ParentID',
  };
  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    allowTaskbarEditing: true
  };
  const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];

  return (
    <GanttComponent dataSource={data} taskFields={taskFields} editSettings={editSettings} height='400px' toolbar={toolbar} >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" type="number" />
        <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" type="string" />
        <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="dateTime" />
        <ColumnDirective field="EndDate" headerText="End Date" textAlign="Right" width="150" format="dd/MM/yyyy hh:mm" type="dateTime" />
        <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" type="string" />
        <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" type="number" />
      </ColumnsDirective>
      <Inject services={[Edit, Selection, Toolbar]} />
    </GanttComponent>
  );
}

export default App;

{% endhighlight %}
{% endtabs %}

## Run the application (conceptual)

Run the application in Visual Studio, accessible on a URL like **https://localhost:xxxx**. Verify the API returns data at **https://localhost:xxxx/api/Gantt**, where **xxxx** is the port. Gantt displays data fetched from the backend API.

## Troubleshooting

| Issue                     | Cause                                                                                   | Solution                                                                                                              |
|---------------------------|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Empty response            | Web method not returning task records or required metadata                              | Verify method returns records with parent ids, resource assignments, and start/end dates for the timeline range     |
| 404 responses             | Incorrect web method route or endpoint configuration                                     | Confirm DataManager URLs and routes are correctly configured and accessible                                          |
| 500 or server errors      | Server-side exceptions or improper request parameter handling                            | Check server logs, validate parameter parsing, and ensure scheduling/dependency logic is error-free                  |
| CORS errors               | Cross-origin requests blocked or not configured                                          | Ensure CORS is enabled when frontend and backend are hosted on different origins                                     |
| Related data mismatches   | Remote datasets not returning expected values for relationships and dependencies         | Confirm related endpoints return correct data required for display and dependency resolution                         |

## Complete sample repository

For the complete working implementation of this example, refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-react-gantt-chart-samples/tree/master/WebMethodAdaptor) repository.

## See also
- [Connect to OdataV4 services](https://ej2.syncfusion.com/react/documentation/gantt/connecting-to-adaptors/odatav4-adaptor)
- [Hybrid data binding](https://ej2.syncfusion.com/react/documentation/gantt/connecting-to-adaptors/remote-save-adaptor)
- [Data binding](https://ej2.syncfusion.com/react/documentation/gantt/data-binding)