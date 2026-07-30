---
layout: post
title: Data Binding in React Gantt Chart Component | Syncfusion
description: Learn here all about data binding in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Data binding 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Data Binding in React Gantt Chart Component

Data binding connects the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component to project data sources, enabling dynamic visualization and management of project information. The component supports both local JavaScript arrays and remote server data through the [dataSource](https://ej2.syncfusion.com/react/documentation/api/gantt#datasource) property, which accepts either a `DataManager` instance or JavaScript object array collection.

Understanding data binding implementation ensures the Gantt chart accurately represents and interacts with project data across different scenarios and data structures.

The following video explains data binding in Gantt chart:

{% youtube "https://www.youtube.com/watch?v=MlKuX7TeMtw" %}

## Understanding data binding approaches

The Gantt Chart component uses `DataManager` to support both RESTful JSON data services and local JavaScript object array binding. This flexibility allows you to choose the most appropriate data source method based on project requirements and data architecture.

**Local Data Binding**: Local data binding retrieves project information from the same application environment. This approach provides faster rendering and reduced network dependency, making it ideal for applications with static or cached project data.

**Remote Data Binding**: Remote data binding connects to external servers or databases to fetch project information dynamically. This method supports real-time data synchronization and scalable data management for enterprise-level applications.

The component supports two primary data structure types for organizing project hierarchies:
• **Hierarchical data binding**: Uses nested object structures where parent tasks contain child arrays
• **Self-referential data binding**: Uses flat data structures with ID fields to establish parent-child relationships

## Local data binding implementation

Local data binding assigns JavaScript object arrays directly to the [dataSource](https://ej2.syncfusion.com/react/documentation/api/gantt#datasource) property. The data source can be provided as a raw array or wrapped in a DataManager instance for consistent data operations.

### Hierarchical data structure

Hierarchical data binding organizes complex parent-child relationships through nested object structures. Each parent task contains multiple child tasks through the [child](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#child) field mapping, creating natural tree structures that represent project hierarchies.

This approach works well for data sources that maintain inherent parent-child relationships in their structure, such as JSON responses from APIs that provide nested task collections.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/databinding-cs1" %}

### Self-referential data structure

Self-referential data binding uses flat data structures where tasks reference their relationships through ID fields. Map unique task identifiers to the [id](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#id) field and parent identifiers to the [parentID](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#parentid) field to establish task hierarchies without nested objects.

This approach enables the component to reconstruct hierarchical tree structures from relational data, making it ideal for database-driven applications where parent-child relationships are maintained through foreign key references.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/databinding-cs2" %}

**Data structure requirements**: When using hierarchical data, link child records to their parent using the `child` property mapping. For self-referential data, ensure each task's parent-child relationship is properly defined by mapping `id` and `parentID` fields correctly to enable proper hierarchy reconstruction.

## Remote data binding implementation

Remote data binding assigns service endpoints as `DataManager` instances to the [dataSource](https://ej2.syncfusion.com/react/documentation/api/gantt#datasource) property. This enables real-time data synchronization with external servers, databases, or web services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/databinding-cs3" %}

**Server Communication**: DataManager connects to various backend services including RESTful endpoints, OData services, and custom web APIs. Configure the appropriate URL and adaptor type based on the target server architecture and data format requirements.

### URL Adaptor implementation

URL Adaptor enables communication with SQL databases through ADO.NET Entity Data Model, supporting CRUD operations through server method calls that return JSON formatted data. This adaptor facilitates seamless data exchange between the Gantt Chart component and server-side data management systems.

The URL Adaptor handles data requests by calling configured server endpoints and processing responses in standardized JSON formats. This approach supports comprehensive data operations including create, read, update, and delete functionalities.

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App(){
    const taskFields = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };
    const dataSource = new DataManager({
        url: '/Home/UrlDatasource',
        adaptor: new UrlAdaptor
    });
    const columns = [
        { field: 'TaskName', headerText: 'Task Name', width: '250', clipMode: 'EllipsisWithTooltip' },
        { field: 'StartDate' },
        { field: 'Duration' }
    ];
    return <GanttComponent dataSource={dataSource} taskFields={taskFields} columns={columns} 
            height='430px'>
           </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));
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

Load-on-demand rendering displays child records dynamically when parent nodes expand, optimizing performance for large hierarchical datasets. Configure a remote service URL in the DataManager instance and define the [hasChildMapping](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#hasChildMapping) property in taskFields to enable this functionality.

**Core concept**: The `hasChildMapping` property maps data source field names that indicate whether records contain child elements. This enables the component to display expand icons and manage dynamic loading without pre-loading entire hierarchical structures.

**Loading behavior**: When [loadChildOnDemand](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#loadchildondemand) is enabled, root nodes render in collapsed state initially. Expanding root nodes triggers child data loading from remote servers, with subsequent expand/collapse actions using locally cached data for improved performance.

**Virtualization integration**: Combined `enableVirtualization` and `loadChildOnDemand` settings render only current viewport root nodes in collapsed state, further optimizing memory usage and rendering performance for large datasets.

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, VirtualScroll, Selection } from '@syncfusion/ej2-react-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

function App(){
    const taskFields = {
        id: 'taskId',
        name: 'taskName',
        startDate: 'startDate',
        endDate: 'endDate',
        duration: 'duration',
        progress: 'progress',
        hasChildMapping: "isParent",
        parentID: "parentID"
    };
    const dataManager = new DataManager({
        url: 'https://services.syncfusion.com/react/production/api/GanttLoadOnDemand',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    const tooltipSettings = {
        showTooltip: true
    };
    const splitterSettings = {
        columnIndex: 3
    };
    const columns = [
        { field: 'taskId', width: 80 },
        { field: 'taskName', headerText: 'Name', width: '200', clipMode: 'EllipsisWithTooltip' },
        { field: 'startDate' },
        { field: 'duration' },
        { field: 'progress' },
    ];
    const projectStartDate = new Date('01/02/2000');
    const projectEndDate = new Date('01/06/2002');

    return <GanttComponent dataSource={dataManager} taskFields={taskFields} 
            loadChildOnDemand={true} enableVirtualization={true} allowSelection={true}
            columns={columns} treeColumnIndex={1} height='450px' 
            projectStartDate={projectStartDate} projectEndDate={projectEndDate}
            highlightWeekends={true} taskbarHeight={20} rowHeight={40} 
            tooltipSettings={tooltipSettings} splitterSettings={splitterSettings}>
            <Inject services={[VirtualScroll, Selection]} />
           </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));
```

**Server-side data model implementation**:

```typescript
// TreeData.cs
public class TreeData
{
    [System.ComponentModel.DataAnnotations.Key]
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
    if (TreeData.tree.Count == 0)
        TreeData.tree = TreeData.GetTree();

    if (queryString.Keys.Contains("$filter") && !queryString.Keys.Contains("$top"))
    {
        StringValues filter;
        queryString.TryGetValue("$filter", out filter);
        int? fltr = (filter[0].ToString().Split("eq")[1] == " null") ?
            null : Int32.Parse(filter[0].ToString().Split("eq")[1]);
        IQueryable<TreeData> data1 = TreeData.tree.Where(f => f.parentID == fltr).AsQueryable();
        return new { result = data1.ToList(), count = data1.Count() };
    }

    StringValues expandVal;
    queryString.TryGetValue("$expand", out expandVal);
    if (queryString.Keys.Contains("$expand") && expandVal.Count > 0)
    {
        var state = expandVal[0].ToString().Split(",")[0];
        var taskId = int.Parse(expandVal[0].ToString().Split(",")[1]);
        var task = TreeData.tree.FirstOrDefault(ds => ds.taskId == taskId);
        if (state == "ExpandingAction") task.IsExpanded = true;
        else if (state == "CollapsingAction") task.IsExpanded = false;
    }

    List<TreeData> data = TreeData.tree.ToList();
    data = data.Where(p => p.parentID == null).ToList();
    return new { result = data, count = data.Count };
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
```

**Hierarchical update utility methods**:

```typescript
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

**Additional parameter transmission**: Pass extra parameters to server endpoints using the [addParams](https://ej2.syncfusion.com/documentation/api/data/query#addparams) method of the [Query](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#query) class. Server-side implementations inherit these parameters through DataManager class extensions, enabling custom data filtering and processing logic.

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-gantt';
import { DataManager, UrlAdaptor, Query } from '@syncfusion/ej2-data';

function App(){
    let ganttInstance;
    const taskFields = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'SubTasks'
    };
    const dataSource = new DataManager({
        url: 'http://localhost:50039/Home/UrlDatasource',
        adaptor: new UrlAdaptor,
        batchUrl: 'http://localhost:50039/Home/BatchSave',
    });
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    };
    const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'];
    
    const load = (args) => {
        ganttInstance.query = new Query().addParams('ej2Gantt', "test");
    };
    
    return <GanttComponent dataSource={dataSource} taskFields={taskFields} 
            editSettings={editSettings} toolbar={toolbar} load={load}
            height='430px' ref={gantt => ganttInstance = gantt}>
            <Inject services={[Edit, Toolbar]} />
           </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));
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

**HTTP error handling**: Server-side exceptions during data operations can be captured client-side through the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#actionfailure) event. This enables proper error messaging and graceful degradation when server communication fails.

**Data validation considerations**:
- **Missing parentID validation**: Tasks without valid parentID references may display incorrectly or appear as root tasks unexpectedly
- **Duplicate task ID prevention**: Ensure unique taskID values to prevent data operation failures or rendering issues
- **Date format validation**: Task dates must follow supported formats (ISO or configured formats) to prevent parsing errors

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/databinding-cs4" %}

**Fetch API integration**: Use Gantt [dataSource](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#datasource) property to bind data from external Fetch requests. This approach benefits scenarios requiring asynchronous server data retrieval, utilizing the `onSuccess` event for effective data loading management.

To show or hide the loading indicator during fetch, call [showSpinner](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#showspinner) method before sending the request and [hideSpinner](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#hidespinner) method after receiving the data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/databinding-cs5" %}

**Fetch binding limitation**: Data sources bound through Fetch requests act as local data sources, preventing server-side CRUD operations. This approach suits read-only scenarios or applications with separate data modification workflows.

## Split task implementation

Split task functionality allows task interruption during planned or unforeseen circumstances, enabling work discontinuation and resumption scenarios. Tasks can be split during load time or dynamically through segment definitions in hierarchical or self-referential approaches.

### Hierarchical split task configuration

Split tasks at load time using hierarchical structures by defining segment details in the data source and mapping through the [taskFields.segments](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#segments) property. Each task contains segment arrays specifying split periods and durations.

```typescript
[
    {
        TaskID: 1, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50,
        Segments: [
            { StartDate: new Date("04/02/2019"), Duration: 2 },
            { StartDate: new Date("04/04/2019"), Duration: 2 }
        ]
    }
]
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/databinding-cs6" %}

### Self-referential split task configuration

Define segment details as flat data collections mapped through the [segmentData](https://ej2.syncfusion.com/react/documentation/api/gantt#segmentdata) property. The segment ID field connects segments to their parent tasks through the [taskFields.segmentId](https://ej2.syncfusion.com/react/documentation/api/gantt/taskfields#segmentid) property mapping.

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

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/databinding-cs7" %}

**Segment ID mapping**: The segment ID field contains references to tasks that should be split at load time, enabling the component to associate segment collections with their corresponding parent tasks.

## Expand state management

Control parent task expand status in the Gantt chart by defining the [expandStateMapping](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#expandstate) property. This property maps to data source field names indicating whether parent tasks should render in expanded or collapsed states based on mapped boolean values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/databinding-cs8" %}

**State persistence**: ExpandStateMapping ensures parent tasks maintain their intended expanded or collapsed states across data operations, providing consistent user experience and preserving intended data visualization structures.

## programmatically update datasource

You can programmatically update the Gantt chart data source using the [updateDataSource](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#updatedatasource) method which takes two arguments where the first argument is the new `dataSource` and the second argument is an optional configuration object with `projectStartDate` and `projectEndDate` to define the project timeline.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

## Display custom message for empty records

You can display a custom message when no data is available by defining an empty record template and assigning it to `treeGrid.grid.emptyRecordTemplate` during the `load` event in the component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/databinding-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

## Data binding limitations

**Simultaneous binding restrictions**: Gantt supports either hierarchical or self-referential data binding approaches, but implementing both simultaneously in SQL database contexts creates architectural conflicts and rendering inconsistencies.

**Complex JSON management**: Complex JSON structures in SQL tables require intricate query algorithms for accurate task updates or deletions within nested hierarchical levels, potentially impacting performance and data integrity.

**Dual mapping rendering issues**: Mapping both child and parentID fields simultaneously can cause rendering conflicts, particularly when hierarchy structure task IDs link as parent IDs to other records, resulting in display inconsistencies.

**Self-referential search limitations**: Self-referential search functions operate only within self-referential data collections for specific IDs, without searching nested hierarchical levels, limiting search scope and effectiveness.

**Parent ID field precedence**: When parentID fields are mapped, they take rendering precedence over other relationship definitions, potentially affecting Gantt chart display based on parent-child data prioritization.
