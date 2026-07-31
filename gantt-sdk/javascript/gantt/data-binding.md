---
layout: post
title: Data Binding in JavaScript Gantt Chart Control | Syncfusion
description: Learn here all about data binding in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Data binding
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Data Binding in JavaScript Gantt Chart Control

Data binding connects the JavaScript Gantt Chart control to project data sources, enabling dynamic visualization and management of project information. The control supports both local JavaScript arrays and remote server data through the [dataSource](../api/gantt#datasource) property, which accepts either a `DataManager` instance or JavaScript object array collection.

Understanding data binding implementation ensures the Gantt chart accurately represents and interacts with project data across different scenarios and data structures.

## Understanding data binding approaches

The Gantt Chart control uses `DataManager` to support both RESTful JSON data services and local JavaScript object array binding. This flexibility allows you to choose the most appropriate data source method based on project requirements and data architecture.

**Local Data Binding**: Local data binding retrieves project information from the same application environment. This approach provides faster rendering and reduced network dependency, making it ideal for applications with static or cached project data.

**Remote Data Binding**: Remote data binding connects to external servers or databases to fetch project information dynamically. This method supports real-time data synchronization and scalable data management for enterprise-level applications.

The control supports two primary data structure types for organizing project hierarchies:

- **Hierarchical data binding**: Uses nested object structures where parent tasks contain child arrays
- **Self-referential data binding**: Uses flat data structures with ID fields to establish parent-child relationships

## Local data binding implementation

Local data binding assigns JavaScript object arrays directly to the [dataSource](../api/gantt#datasource) property. The data source can be provided as a raw array or wrapped in a DataManager instance for consistent data operations.

### Hierarchical data structure

Hierarchical data binding organizes complex parent-child relationships through nested object structures. Each parent task contains multiple child tasks through the [child](../api/gantt/taskFields#child) field mapping, creating natural tree structures that represent project hierarchies.

This approach works well for data sources that maintain inherent parent-child relationships in their structure, such as JSON responses from APIs that provide nested task collections.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs1" %}
{% endif %}

### Self-referential data structure

Self-referential data binding uses flat data structures where tasks reference their relationships through ID fields. Map unique task identifiers to the [id](../api/gantt/taskFields#id) field and parent identifiers to the [parentID](../api/gantt/taskFields#parentid) field to establish task hierarchies without nested objects.

This approach enables the control to reconstruct hierarchical tree structures from relational data, making it ideal for database-driven applications where parent-child relationships are maintained through foreign key references.
{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs2" %}
{% endif %}

**Data structure requirements**: When using hierarchical data, link child records to their parent using the `child` property mapping. For self-referential data, ensure each task's parent-child relationship is properly defined by mapping `id` and `parentID` fields correctly to enable proper hierarchy reconstruction.

## Remote data binding implementation

Remote data binding assigns service endpoints as `DataManager` instances to the [dataSource](../api/gantt#datasource) property. This enables real-time data synchronization with external servers, databases, or web services.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs3" %}
{% endif %}

**Server Communication**: DataManager connects to various backend services including RESTful endpoints, OData services, and custom web APIs. Configure the appropriate URL and adaptor type based on the target server architecture and data format requirements.

### URL Adaptor implementation

URL Adaptor enables communication with SQL databases through ADO.NET Entity Data Model, supporting CRUD operations through server method calls that return JSON formatted data. This adaptor facilitates seamless data exchange between the Gantt Chart control and server-side data management systems.

The URL Adaptor handles data requests by calling configured server endpoints and processing responses in standardized JSON formats. This approach supports comprehensive data operations including create, read, update, and delete functionalities.

```typescript
import { Gantt } from "@syncfusion/ej2-gantt";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

let dataSource: DataManager = new DataManager({
  url: "/Home/UrlDatasource",
  adaptor: new UrlAdaptor(),
});

let gantt: Gantt = new Gantt({
  dataSource: dataSource,
  height: "430px",
  taskFields: {
    id: "TaskId",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "SubTasks",
  },
  columns: [
    {
      field: "TaskName",
      headerText: "Task Name",
      width: "250",
      clipMode: "EllipsisWithTooltip",
    },
    { field: "StartDate" },
    { field: "Duration" },
  ],
});
gantt.appendTo("#Gantt");
```

**Server-side endpoint implementation**:

```typescript
GanttDataSourceEntities db = new GanttDataSourceEntities();
public ActionResult UrlDatasource(DataManagerRequest dm)
{
    List<GanttData>DataList = db.GanttDatas.ToList();
    var count = DataList.Count();
    return Json(new { result = DataList, count = count });
}
```

**Server integration**: URL Adaptor requires proper ADO.NET Entity Data Model configuration to establish database connections and entity mappings for seamless data operations.

### Load-on-demand implementation

Load-on-demand rendering displays child records dynamically when parent nodes expand, optimizing performance for large hierarchical datasets. Configure a remote service URL in the DataManager instance and define the [hasChildMapping](../api/gantt/taskFields#hasChildMapping) property in taskFields to enable this functionality.

**Core concept**: The `hasChildMapping` property maps data source field names that indicate whether records contain child elements. This enables the control to display expand icons and manage dynamic loading without pre-loading entire hierarchical structures.

**Loading behavior**: When [loadChildOnDemand](../api/gantt/index-default#loadchildondemand) is enabled, root nodes render in collapsed state initially. Expanding root nodes triggers child data loading from remote servers, with subsequent expand/collapse actions using locally cached data for improved performance.

**Virtualization integration**: Combined `enableVirtualization` and `loadChildOnDemand` settings render only current viewport root nodes in collapsed state, further optimizing memory usage and rendering performance for large datasets.

```typescript
import { Gantt, VirtualScroll, Selection } from "@syncfusion/ej2-gantt";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

Gantt.Inject(Selection, VirtualScroll);

let dataSource: DataManager = new DataManager({
  url: "https://services.syncfusion.com/js/production/api/GanttLoadOnDemand",
  adaptor: new WebApiAdaptor(),
  crossDomain: true,
});

let gantt: Gantt = new Gantt({
  dataSource: dataSource,
  loadChildOnDemand: true,
  enableVirtualization: true,
  allowSelection: true,
  taskFields: {
    id: "taskId",
    name: "taskName",
    startDate: "startDate",
    endDate: "endDate",
    duration: "duration",
    progress: "progress",
    hasChildMapping: "isParent",
    parentID: "parentID",
  },
  columns: [
    { field: "taskId", width: 80 },
    {
      field: "taskName",
      headerText: "Name",
      width: "200",
      clipMode: "EllipsisWithTooltip",
    },
    { field: "startDate" },
    { field: "duration" },
    { field: "progress" },
  ],
  labelSettings: {
    leftLabel: "taskName",
  },
  splitterSettings: {
    columnIndex: 3,
  },
  tooltipSettings: {
    showTooltip: true,
  },
  highlightWeekends: true,
  treeColumnIndex: 1,
  taskbarHeight: 20,
  rowHeight: 40,
  height: "450px",
  projectStartDate: new Date("01/02/2000"),
  projectEndDate: new Date("01/06/2002"),
});
gantt.appendTo("#Gantt");
```

**Server-side data model implementation**:

```typescript
// TreeData.cs
public class TreeData
{
    [System.ControlModel.DataAnnotations.Key]
    public int taskId { get; set; }
    public string taskName { get; set; }
    public DateTime startDate { get; set; }
    public DateTime endDate { get; set; }
    public string duration { get; set; }
    public int progress { get; set; }
    public int? parentID { get; set; }
    public string predecessor { get; set; }
    public bool? isParent { get; set; }
    public bool? IsExpanded { get; set; }

    public static List<TreeData> tree = new List<TreeData>();

    public static List<TreeData> GetTree()
    {
        if (tree.Count == 0)
        {
            Random rand = new Random();
            var x = 0;
            int duration = 0;
            DateTime startDate = new DateTime(2000, 1, 3, 8, 0, 0);
            for (var i = 1; i <= 50; i++)
            {
                startDate = startDate.AddDays(i == 1 ? 0 : 7);
                DateTime childStartDate = startDate;
                TreeData Parent = new TreeData()
                {
                    taskId = ++x,
                    taskName = "Task " + x,
                    startDate = startDate,
                    endDate = childStartDate.AddDays(26),
                    duration = "20",
                    progress = rand.Next(100),
                    predecessor = null,
                    isParent = true,
                    parentID = null,
                    IsExpanded = false
                };
                tree.Add(Parent);
                for (var j = 1; j <= 4; j++)
                {
                    childStartDate = childStartDate.AddDays(j == 1 ? 0 : duration + 2);
                    duration = 5;
                    tree.Add(new TreeData()
                    {
                        taskId = ++x,
                        taskName = "Task " + x,
                        startDate = childStartDate,
                        endDate = childStartDate.AddDays(5),
                        duration = duration.ToString(),
                        progress = rand.Next(100),
                        parentID = Parent.taskId,
                        predecessor = (j > 1 ? (x - 1) + "FS" : ""),
                        isParent = false,
                        IsExpanded = false
                    });
                }
            }
        }
        return tree;
    }
}
```

**Server API endpoint for load-on-demand**:

```typescript
// GanttController.cs
public object Get()
    {
        DataOperations operation = new DataOperations();
        var queryString = Request.Query;
        if (tree.Count == 0)
            tree = TreeData.GetTree();
        if (queryString.Keys.Contains("$filter") && !queryString.Keys.Contains("$top"))
        {
            StringValues filter;
            queryString.TryGetValue("$filter", out filter);
            int? fltr;
            if (filter[0].ToString().Split("eq")[1] == " null")
            {
                fltr = null;
            }
            else
            {
                fltr = Int32.Parse(filter[0].ToString().Split("eq")[1]);
            }
            IQueryable<TreeData> data1 = tree.Where(f => f.parentID == fltr).AsQueryable();
            return new { result = data1.ToList(), count = data1.Count() };
        }
        StringValues expand;
        queryString.TryGetValue("$expand", out expand);
        if (queryString.Keys.Contains("$expand")) // setting the ExpandStateMapping property whether is true or false
        {
            if (expand[0].ToString().Split(",")[0] == "ExpandingAction")
            {
                var val = TreeData.GetTree().Where(ds => ds.taskId == int.Parse(expand[0].ToString().Split(",")[1])).FirstOrDefault();
                val.IsExpanded = true;
            }
            else if (expand[0].ToString().Split(",")[0] == "CollapsingAction")
            {
                var val = TreeData.GetTree().Where(ds => ds.taskId == int.Parse(expand[0].ToString().Split(",")[1])).FirstOrDefault();
                val.IsExpanded = false;
            }
        }
        List<TreeData> data = tree.ToList();
        if (queryString.Keys.Contains("$select"))
        {
            data = (from ord in tree
                    select new TreeData
                    {
                        parentID = ord.parentID
                    }
                    ).ToList();
            return data;
        }
        data = data.Where(p => p.parentID == null).ToList();
        int count = data.Count;

        if (queryString.Keys.Contains("$inlinecount"))
        {
            StringValues Skip;
            StringValues Take;
            StringValues loadchild;

            int skip = (queryString.TryGetValue("$skip", out Skip)) ? Convert.ToInt32(Skip[0]) : 0;
            int top = (queryString.TryGetValue("$top", out Take)) ? Convert.ToInt32(Take[0]) : data.Count();

            var GroupData = TreeData.GetTree().ToList().GroupBy(rec => rec.parentID)
                        .Where(g => g.Key != null).ToDictionary(g => g.Key?.ToString(), g => g.ToList());
            foreach (var Record in data.ToList())
            {
                if (GroupData.ContainsKey(Record.taskId.ToString()))
                {
                    var ChildGroup = GroupData[Record.taskId.ToString()];
                    if (ChildGroup?.Count > 0)
                        AppendChildren(ChildGroup, Record, GroupData, data);
                }
            }
            if (expand.Count > 0 && expand[0].ToString().Split(",")[0] == "CollapsingAction")
            {
                string IdMapping = "taskId";
                List<WhereFilter> CollapseFilter = new List<WhereFilter>();
                CollapseFilter.Add(new WhereFilter() { Field = IdMapping, value = expand[0].ToString().Split(",")[1], Operator = "equal" });
                var CollapsedParentRecord = operation.PerformFiltering(data, CollapseFilter, "and");
                var index = data.Cast<object>().ToList().IndexOf(CollapsedParentRecord.Cast<object>().ToList()[0]);
                skip = index;
            }
            else if (expand.Count > 0 && expand[0].ToString().Split(",")[0] == "ExpandingAction")
            {
                string IdMapping = "taskId";
                List<WhereFilter> ExpandFilter = new List<WhereFilter>();
                ExpandFilter.Add(new WhereFilter() { Field = IdMapping, value = expand[0].ToString().Split(",")[1], Operator = "equal" });
                var ExpandedParentRecord = operation.PerformFiltering(data, ExpandFilter, "and");
                var index = data.Cast<object>().ToList().IndexOf(ExpandedParentRecord.Cast<object>().ToList()[0]);
                skip = index;
            }
            return new { result = data.Skip(skip).Take(top), count = data.Count };
        }
        else
        {
            return TreeData.GetTree();
        }
    }
```

**Recursive children handling**

```typescript
private void AppendChildren(List<TreeData> ChildRecords, TreeData ParentItem,
        Dictionary<string, List<TreeData>> GroupData, List<TreeData> data)
{
    string TaskId = ParentItem.taskId.ToString();
    var index = data.IndexOf(ParentItem);
    foreach (var Child in ChildRecords)
    {
        string ParentId = Child.parentID.ToString();
        if (TaskId == ParentId && (bool)ParentItem.IsExpanded)
        {
            if (data.IndexOf(Child) == -1)
                ((IList)data).Insert(++index, Child);
            if (GroupData.ContainsKey(Child.taskId.ToString()))
            {
                var DeepChildRecords = GroupData[Child.taskId.ToString()];
                if (DeepChildRecords?.Count > 0)
                    AppendChildren(DeepChildRecords, Child, GroupData, data);
            }
        }
    }
}
```

**CRUD operations implementation**:

```typescript
[HttpPost]
public object Post([FromBody] TreeData[] value)
{
    for (var i = 0; i < value.Length; i++)
    {
        TreeData.tree.Insert(0, value[i]);
    }
    return value;
}

[HttpPut]
public object Put([FromBody] TreeData[] value)
{
    if (value.Length == 1 && value[0].isParent == true)
    {
        UpdateDependentRecords(value[0]);
    }
    for (var i = 0; i < value.Length; i++)
    {
        var ord = value[i];
        TreeData val = TreeData.tree.FirstOrDefault(or => or.taskId == ord.taskId);
        if (val != null)
        {
            val.taskId = ord.taskId;
            val.taskName = ord.taskName;
            val.endDate = ord.endDate;
            val.startDate = ord.startDate;
            val.duration = ord.duration;
            val.predecessor = ord.predecessor;
        }
    }
    return value;
}

[HttpDelete("{id:int}")]
[Route("Orders/{id:int}")]
public object Delete(int id)
{
    TreeData.tree.Remove(TreeData.tree.FirstOrDefault(or => or.taskId == id));
    return Json(id);
}

private void UpdateDependentRecords(TreeData ParentItem)
{
    var data = TreeData.tree.Where(p => p.parentID == ParentItem.taskId).ToList();
    var previousData = TreeData.tree.Where(p => p.taskId == ParentItem.taskId).ToList();
    var previousStartDate = previousData[0].startDate;
    var previousEndDate = previousData[0].endDate;
    double sdiff = (double)GetTimeDifference((DateTime)previousStartDate, (DateTime)ParentItem.startDate);
    double ediff = (double)GetTimeDifference((DateTime)previousEndDate, (DateTime)ParentItem.endDate);
    GetRootChildRecords(ParentItem);
    for(var i=0; i<ChildRecords.Count;i++)
    {
        ChildRecords[i].startDate = ((DateTime)ChildRecords[i].startDate).AddSeconds(sdiff);
        ChildRecords[i].endDate = ((DateTime)ChildRecords[i].endDate).AddSeconds(ediff);
    }
}

private void GetRootChildRecords(TreeData ParentItem)
{
    var currentchildRecords = TreeData.tree.Where(p => p.parentID == ParentItem.taskId).ToList();
    for (var i = 0; i < currentchildRecords.Count; i++) {
        var currentRecord = currentchildRecords[i];
        ChildRecords.Add(currentRecord);
        if (currentRecord.isParent == true)
        {
            GetRootChildRecords(currentRecord);
        }
    }
}

public object GetTimeDifference(DateTime sdate, DateTime edate)
{
    return new DateTime(edate.Year, edate.Month, edate.Day, edate.Hour, edate.Minute, edate.Second, DateTimeKind.Utc)
        .Subtract(new DateTime(sdate.Year, sdate.Month, sdate.Day, sdate.Hour, sdate.Minute, sdate.Second, DateTimeKind.Utc)).TotalSeconds;
}
```

**Load-on-demand limitations**:

- Filtering, sorting, and searching operations are not supported in load-on-demand mode.
- Only self-referential data types are supported with remote data binding.
- Load-on-demand requires validated data source structures.

### Advanced server communication

**Additional parameter transmission**: Pass extra parameters to server endpoints using the [addParams](../api/data/query#addparams) method of the [Query](../api/gantt/index-default#query) class. Server-side implementations inherit these parameters through DataManager class extensions, enabling custom data filtering and processing logic.

```typescript
import { Gantt, Edit, Toolbar } from "@syncfusion/ej2-gantt";
import { DataManager, UrlAdaptor, Query } from "@syncfusion/ej2-data";

Gantt.Inject(Edit, Toolbar);

let dataSource: DataManager = new DataManager({
  url: "http://localhost:50039/Home/UrlDatasource",
  adaptor: new UrlAdaptor(),
  batchUrl: "http://localhost:50039/Home/BatchSave",
});

let gantt: Gantt = new Gantt({
  dataSource: dataSource,
  height: "430px",
  taskFields: {
    id: "TaskId",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "SubTasks",
  },
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
  },
  toolbar: [
    "Add",
    "Edit",
    "Delete",
    "Update",
    "Cancel",
    "ExpandAll",
    "CollapseAll",
  ],
  load: function (args) {
    this.query = new Query().addParams("ej2Gantt", "test");
  },
});
gantt.appendTo("#Gantt");
```

**Server-side parameter handling**:

```typescript
namespace URLAdaptor.Controllers
{
    public class HomeController : Controller
    {
        public class Test : DataManagerRequest
        {
            public string ej2Gantt { get; set; }
        }

        public ActionResult UrlDatasource([FromBody]Test dm)
        {
            if (DataList == null)
            {
                ProjectData datasource = new ProjectData();
                DataList = datasource.GetUrlDataSource();
            }
            var count = DataList.Count();
            return Json(new { result = DataList, count = count }, JsonRequestBehavior.AllowGet);
        }

        public class ICRUDModel<T> where T : class
        {
            public object key { get; set; }
            public T value { get; set; }
            public List<T> added { get; set; }
            public List<T> changed { get; set; }
            public List<T> deleted { get; set; }
            public IDictionary<string, object> @params { get; set; }
        }
    }
}
```

**HTTP error handling**: Server-side exceptions during data operations can be captured client-side through the [actionFailure](../api/gantt/index-default#actionfailure) event. This enables proper error messaging and graceful degradation when server communication fails.

**Data validation considerations**:

- **Missing parentID validation**: Tasks without valid parentID references may display incorrectly or appear as root tasks unexpectedly
- **Duplicate task ID prevention**: Ensure unique taskID values to prevent data operation failures or rendering issues
- **Date format validation**: Task dates must follow supported formats (ISO or configured formats) to prevent parsing errors

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/actionfailure-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/actionfailure-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/actionfailure-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/actionfailure-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/actionfailure-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/actionfailure-cs1" %}
{% endif %}

**Fetch API integration**: Use Gantt [dataSource](../api/gantt/index-default#datasource) property to bind data from external Fetch requests. This approach benefits scenarios requiring asynchronous server data retrieval, utilizing the `onSuccess` event for effective data loading management.

To show or hide the loading indicator during fetch, call [showSpinner](../api/gantt/index-default#showspinner) method before sending the request and [hideSpinner](../api/gantt/index-default#hidespinner) method after receiving the data.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/bindajax-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/bindajax-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/bindajax-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/bindajax-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/bindajax-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/bindajax-cs1" %}
{% endif %}

**Fetch binding limitation**: Data sources bound through Fetch requests act as local data sources, preventing server-side CRUD operations. This approach suits read-only scenarios or applications with separate data modification workflows.

## Split task implementation

Split task functionality allows task interruption during planned or unforeseen circumstances, enabling work discontinuation and resumption scenarios. Tasks can be split during load time or dynamically through segment definitions in hierarchical or self-referential approaches.

### Hierarchical split task configuration

Split tasks at load time using hierarchical structures by defining segment details in the data source and mapping through the [taskFields.segments](../api/gantt/taskFields#segments) property. Each task contains segment arrays specifying split periods and durations.

```ts
[
  {
    TaskID: 1,
    TaskName: "Identify Site location",
    StartDate: new Date("04/02/2019"),
    Duration: 4,
    Progress: 50,
    Segments: [
      { StartDate: new Date("04/02/2019"), Duration: 2 },
      { StartDate: new Date("04/04/2019"), Duration: 2 },
    ],
  },
];
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs1" %}
{% endif %}

### Self-referential split task configuration

Define segment details as flat data collections mapped through the [segmentData](../api/gantt#segmentdata) property. The segment ID field connects segments to their parent tasks through the [taskFields.segmentId](../api/gantt/taskfields#segmentid) property mapping.

```typescript
taskFields: {
    segmentId: "segmentId"
},
segmentData: [
    { segmentId: 1, StartDate: new Date("02/04/2019"), Duration: 2 },
    { segmentId: 1, StartDate: new Date("02/05/2019"), Duration: 5 },
    { segmentId: 4, StartDate: new Date("04/02/2019"), Duration: 2 },
    { segmentId: 4, StartDate: new Date("04/04/2019"), Duration: 2 }
],
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/split-task-cs2" %}
{% endif %}

**Segment ID mapping**: The segment ID field contains references to tasks that should be split at load time, enabling the control to associate segment collections with their corresponding parent tasks.

## Expand state management

Control parent task expand status in the Gantt chart by defining the [expandStateMapping](../api/gantt/taskFields#expandstate) property. This property maps to data source field names indicating whether parent tasks should render in expanded or collapsed states based on mapped boolean values.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/expand-state-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/expand-state-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/expand-state-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/expand-state-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
{% endif %}

**State persistence**: ExpandStateMapping ensures parent tasks maintain their intended expanded or collapsed states across data operations, providing consistent user experience and preserving intended data visualization structures.

## Programmatically update datasource

You can programmatically update the Gantt chart data source using the [updateDataSource](../api/gantt/index-default#updatedatasource) method which takes two arguments where the first argument is the new `dataSource` and the second argument is an optional configuration object with `projectStartDate` and `projectEndDate` to define the project timeline.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Display custom message for empty records

You can display a custom message when no data is available by defining an empty record template and assigning it to `treeGrid.grid.emptyRecordTemplate` during the `load` event in the control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/databinding-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Data binding limitations

**Simultaneous binding restrictions**: Gantt supports either hierarchical or self-referential data binding approaches, but implementing both simultaneously in SQL database contexts creates architectural conflicts and rendering inconsistencies.

**Complex JSON management**: Complex JSON structures in SQL tables require intricate query algorithms for accurate task updates or deletions within nested hierarchical levels, potentially impacting performance and data integrity.

**Dual mapping rendering issues**: Mapping both child and parentID fields simultaneously can cause rendering conflicts, particularly when hierarchy structure task IDs link as parent IDs to other records, resulting in display inconsistencies.

**Self-referential search limitations**: Self-referential search functions operate only within self-referential data collections for specific IDs, without searching nested hierarchical levels, limiting search scope and effectiveness.

**Parent ID field precedence**: When parentID fields are mapped, they take rendering precedence over other relationship definitions, potentially affecting Gantt chart display based on parent-child data prioritization.