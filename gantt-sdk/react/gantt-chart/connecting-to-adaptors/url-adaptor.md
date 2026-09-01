---
layout: post
title: React Gantt Chart - URL Adaptor | Syncfusion
description: React Gantt Chart URL Adaptor enables integration with custom REST APIs, supporting remote data binding and server-side CRUD operations.
keywords: react gantt url adaptor, url data binding, url backend, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/react/gantt-chart/connecting-to-adaptors/url-adaptor
platform: gantt-sdk
control: URL Adaptor - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Remote Data Binding with URL Adaptor in React Gantt Chart

The [UrlAdaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors/url-adaptor) is recommended when your React Gantt Chart needs to communicate with custom REST API endpoints that do not follow OData conventions. Unlike ODataAdaptor and ODataV4Adaptor, which require OData-compliant services and query formats, UrlAdaptor works with standard REST APIs and gives you full control over how data is processed on the server. It is ideal for applications that perform server-side data operations such as loading, creating, updating, and deleting task records through custom backend implementations.

The UrlAdaptor in the Syncfusion® React DataManager streamlines connecting the React Gantt Chart to REST API endpoints by managing request and response handling for remote data operations. It automatically converts Gantt Chart actions, such as CRUD operations, into HTTP requests and processes server responses, enabling seamless remote data binding without requiring custom request logic.

For details on configuring the backend (expected request/response format, server‑side processing), refer to the [UrlAdaptor backend setup documentation](https://ej2.syncfusion.com/react/documentation/data/adaptors/url-adaptor).

Once the project creation and backend setup are complete, the next step is to render the Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt Chart component on the client side.

**Project structure:**

```
UrlAdaptor/
├── UrlAdaptor.client/           # React frontend (Vite/React project).
│   ├── src/
│   │   ├── App.css
│   │   └── App.jsx                  # Add URL Adaptor here.
│   └── package.json
└── UrlAdaptor.Server/           # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

## React Gantt Chart frontend setup using Syncfusion UrlAdaptor

The following steps explain how to integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt Chart with UrlAdaptor on the client side. After completing the frontend configuration, you can proceed with the backend setup required to handle remote data operations.

### Step 1: Install Syncfusion packages

Right‑click the **UrlAdaptor.client** folder in **Solution Explorer** and select **Open in Terminal** (available in newer Visual Studio versions), or open a Developer Command prompt/PowerShell from the Start menu and navigate manually to the **UrlAdaptor.client directory**. Once inside the folder, confirm that **package.json** is present, then run the following commands to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages:

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

Import the **App.css** file in **App.jsx** (or **main.jsx** depending on your application structure).

```js
import "./App.css";
...
...

```

### Step 3: Create React Gantt Chart component with UrlAdaptor

- Gantt Chart integration with backend APIs is enabled through the `UrlAdaptor`, which serves as a connector between the Syncfusion DataManager and RESTful services. Configure the DataManager with URL Adaptor to connect the React Gantt Chart to backend REST endpoints for remote data operations. This design is particularly effective for large datasets where server-side processing is essential.

By delegating these operations to the server rather than executing them in the browser, the Gantt Chart ensures that only the required data is retrieved for each request.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
import { GanttComponent, Inject, Selection, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
  const dataSource = new DataManager({
    url: `https://localhost:xxxx/api/Gantt/DataSource`, // Here xxxx represents the port number
    adaptor: new UrlAdaptor(),
    crossDomain: true
  });
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
  return (
    <>
      <GanttComponent id='UrlAdaptorGantt' 
        dataSource={dataSource}  
        taskFields={taskFields} 
        >
        <ColumnsDirective>
          <ColumnDirective field='TaskID' width='80'></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Job Name' width='250' clipMode='EllipsisWithTooltip'></ColumnDirective>
          <ColumnDirective field='StartDate'></ColumnDirective>
          <ColumnDirective field='EndDate' ></ColumnDirective>
          <ColumnDirective field='Duration'></ColumnDirective>
          <ColumnDirective field='Progress'></ColumnDirective>
          <ColumnDirective field='Predecessor'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Selection]}/>
      </GanttComponent>
    </>
  )
}

export default App;

{% endhighlight %}
{% endtabs %}

> The Gantt Chart sends a `DataManagerRequest` (typically via POST), and the server must return JSON in the format { result: [...], count: N } for proper data binding.

## Server-side data operations

When task sets are large or when scheduling rules must be applied consistently, the server receives responsibility for processing task queries and task modifications. Using web methods, the server applies scheduling rules, dependency validation, and any project‑specific business logic before returning task records or acknowledging changes. The `Syncfusion.EJ2.AspNet.Core` package supports this approach by providing built‑in methods that efficiently handle these operations on the server, ensuring smooth performance even with heavy data loads.

## CRUD operations

The DataManager configured with URL Adaptor supports Create, Read, Update, and Delete workflows for task entities. In Gantt Chart usage, these operations cover task creation, task edits (including taskbar edits and resulting scheduling recalculations), dependency creation or modification, and task deletion.

**Server-side batch endpoint**

The server receives a batch payload that contains `added`, `changed`, and `deleted` arrays. The batch endpoint applies each section in turn—assigning identifiers for new tasks if required, updating existing records, and removing deleted items—then returns a response the client can reconcile against its local state.


### Install the required ASP.NET Core package

Before creating the controller, install the Syncfusion ASP.NET Core package that provides the `DataManagerRequest` class and server-side data operation support.

```bash
dotnet add package Syncfusion.EJ2.AspNet.Core
```

### Step 1: Complete server-side controller

Add all CRUD methods to GanttController.cs. Replace the entire controller with this complete version:

{% tabs %}
{% highlight cs tabtitle="GanttController.cs - Batch Handler" %}
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using UrlAdaptor.Server.Models;

namespace UrlAdaptor.Server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class GanttController : Controller
    {
        private readonly ILogger<GanttController> _logger;

        public GanttController(ILogger<GanttController> logger)
        {
            _logger = logger;
        }
        // This example uses an in-memory static collection for demonstration purposes. In production applications, store and retrieve data from a database or other persistent storage.
        public static List<TaskData> DataList = new();

        [HttpPost("DataSource")]
        public IActionResult DataSource([FromBody] DataManagerRequest dm)
        {
            var dataSource = TaskData.GetGanttData();
            int count = dataSource.Count;
            DataList = dataSource;

            return dm.RequiresCounts
                ? Json(new { result = dataSource, count = count })
                : Json(dataSource);
        }
        public class CRUDModel
        {
            public List<TaskData>? Added { get; set; }
            public List<TaskData>? Changed { get; set; }
            public List<TaskData>? Deleted { get; set; }
            public TaskData? Value { get; set; }
            public int key { get; set; }
            public string? action { get; set; }
        }
        [HttpPost("BatchUpdate")]
        public IActionResult BatchUpdate([FromBody] CRUDModel batchmodel)
        {
            try
            {
                if (batchmodel.Changed != null && batchmodel.Changed.Count > 0)
                {
                  for (var i = 0; i < batchmodel.Changed.Count; i++)
                  {
                    var value = batchmodel.Changed[i];
                    TaskData result = DataList.Where(or => or.TaskID == value.TaskID).FirstOrDefault();
                    if( result != null)
                    {
                      result.TaskID = value.TaskID;
                      result.TaskName = value.TaskName;
                      result.StartDate = value.StartDate;
                      result.EndDate = value.EndDate;
                      result.Duration = value.Duration;
                      result.Progress = value.Progress;
                      result.Predecessor = value.Predecessor;
                      result.ParentID = value.ParentID;
                    }                        
                  }
                }
                if (batchmodel.Deleted != null)
                {
                  for (var i = 0; i < batchmodel.Deleted.Count; i++)
                  {
                    var record = DataList.Where(ds => ds.TaskID == batchmodel.Deleted[i].TaskID).FirstOrDefault();
                    if (record != null)
                    {
                      DataList.Remove(record);
                    }
                  }
                }
                if (batchmodel.Added != null)
                {
                  for (var i = 0; i < batchmodel.Added.Count; i++)
                  {
                    DataList.Insert(0, batchmodel.Added[i]);
                  }
                }
                return Json(new { addedRecords = batchmodel.Added, changedRecords = batchmodel.Changed, deletedRecords = batchmodel.Deleted });
            }
            catch (Exception ex)
            {
                // Return the exception message in the response
                return StatusCode(500, new
                {
                    error = ex.Message
                });
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

> Note: The sample above is a focused illustration of the batch handler shape. Implement your project‑specific scheduling, dependency validation, and identifier assignment logic inside the batch method so server rules remain authoritative.

### Step 2: Client-side Gantt Chart configuration

React Gantt Chart enables full CRUD functionality by configuring the required [toolbar](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#toolbar) buttons (`Add`, `Edit`, `Update`, `Delete`, and `Cancel`) and enabling adding, editing, updating, and deleting through the [editSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#editsettings) property. This setup allows the Gantt Chart to handle all basic data operations directly from the UI.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
import { GanttComponent,Inject, Edit, Selection, Toolbar, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
function App() {
  const dataSource = new DataManager({
    url: `https://localhost:xxxx/api/Gantt/DataSource`, // Here xxxx represents the port number.
    batchUrl: 'https://localhost:xxxx/api/Gantt/BatchUpdate',
    adaptor: new UrlAdaptor(),
    crossDomain: true
  });
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID',
  };
  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };  
  const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel'];
  return (
    <>
      <GanttComponent id='UrlAdaptorGantt'  
        dataSource={dataSource}  
        taskFields={taskFields} 
        editSettings={editSettings} 
        toolbar={toolbar} 
        >
        <ColumnsDirective>
          <ColumnDirective field='TaskID' width='80'></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Job Name' width='250' clipMode='EllipsisWithTooltip'></ColumnDirective>
          <ColumnDirective field='StartDate'></ColumnDirective>
          <ColumnDirective field='EndDate' ></ColumnDirective>
          <ColumnDirective field='Duration'></ColumnDirective>
          <ColumnDirective field='Progress'></ColumnDirective>
          <ColumnDirective field='Predecessor'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Edit, Selection, Toolbar]}/>
      </GanttComponent>
    </>
  )
}

export default App;

{% endhighlight %}
{% endtabs %}

## Run and verify (conceptual)

Run both the ASP.NET Core backend and the React application.

Verify that the API endpoints are reachable:

- https://localhost:xxxx/api/Gantt/DataSource
- https://localhost:xxxx/api/Gantt/BatchUpdate

When the React application loads, the Gantt Chart retrieves data from the DataSource endpoint and displays the records.

## Troubleshooting

| Issue                     | Cause                                                      | Solution                                                                                 |
|---------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------|
| Empty initial load        | POST DataSource endpoint not returning required task records      | Verify endpoint returns records with required fields (ids, start/end dates, parent ids) |
| Batch requests not applied| Incorrect batchUrl or unsupported server payload            | Confirm `batchUrl` is correct and server accepts expected payload format                |
| Identifier mismatches     | Server not returning stable keys for new records            | Ensure server returns assigned ids so client can replace temporary ids                  |
| CORS or network errors    | Cross-origin requests blocked or misconfiguration              | Confirm CORS is enabled when frontend and backend are hosted separately                 |

## Complete sample repository

For the complete working implementation of this example, refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-react-gantt-chart-samples/tree/master/UrlAdaptor) repository.

## See also
- [Connect to OdataV4 services](https://help.syncfusion.com/gantt-sdk/react/gantt-chart/connecting-to-adaptors/odatav4-adaptor)
- [RESTful CRUD Operations in ASP.NET Web Forms](https://help.syncfusion.com/gantt-sdk/react/gantt-chart/connecting-to-adaptors/web-method-adaptor)
- [Data binding](https://help.syncfusion.com/gantt-sdk/react/gantt-chart/data-binding)