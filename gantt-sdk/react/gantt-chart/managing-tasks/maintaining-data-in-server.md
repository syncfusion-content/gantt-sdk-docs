---
layout: post
title: Maintaining Data in Server in React Gantt Chart Component | Syncfusion
description: Learn how to manage Gantt data in a server using URLAdaptor for batch CRUD operations in the Syncfusion React Gantt Chart component for seamless project updates.
platform: gantt-sdk
control: Maintaining data in server
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Maintaining Data in Server in React Gantt Chart Component

Maintaining Gantt data in a server enables persistent project updates through RESTful web services, using DataManager’s `UrlAdaptor` to handle CRUD operations with a backend like ASP.NET and ADO.NET Entity Data Model. Configure the data source with a DataManager instance, specifying `url` for fetching data and `batchUrl` for batch updates, ensuring task data aligns with [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt/#taskfields) mappings (e.g., id, name, startDate). The server processes insert, edit, and delete actions, returning JSON data with `result` for the data list and `count` for the total count. Batch operations handle interdependent tasks, such as updating a child task affecting its parent or predecessors, ensuring hierarchy and dependency integrity without manual adjustments. Use valid `taskFields` mappings and ensure dependency strings avoid circular references for successful operations.

## Configure URL adaptor with batch updates

Configure the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component to fetch and update data using DataManager with `UrlAdaptor`. Set the data source to a DataManager instance with `url` for the server endpoint to retrieve data and `batchUrl` for batch CRUD operations (insert, edit, delete). The server returns JSON with `result` as the data list and `count` as the total records. This setup supports large datasets and batch updates, automatically handling related tasks, such as parent or predecessor adjustments, via the `BatchSave` endpoint.

```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    child: 'SubTasks'
  };
  public dataSource: DataManager = new DataManager({
    url: '/Home/UrlDatasource',
    adaptor: new UrlAdaptor,
    batchUrl: "Home/BatchSave"
  });
    render() {
        return <GanttComponent dataSource={this.dataSource} taskFields={this.taskFields} height = '450px'>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));
```

```ts

public class ICRUDModel<T> where T : class
{
    public object key { get; set; }
    public T value { get; set; }
    public List<T> added { get; set; }
    public List<T> changed { get; set; }
    public List<T> deleted { get; set; }
}
public ActionResult BatchSave([FromBody]ICRUDModel<GanttData> data)
{
    List<GanttData> uAdded = new List<GanttData>();
    List<GanttData> uChanged = new List<GanttData>();
    List<GanttData> uDeleted = new List<GanttData>();
    //...
    return Json(new { addedRecords = uAdded, changedRecords = uChanged, deletedRecords = uDeleted });
}

```

## Perform insert action

Handle insert actions by processing the `added` argument in the `BatchSave` endpoint. Add new records to the database using Entity Framework and return them as `addedRecords` in JSON format. This ensures new tasks, including subtasks, integrate seamlessly into the project hierarchy.

```ts

GanttDataSourceEntities db = new GanttDataSourceEntities();
public ActionResult BatchSave([FromBody]ICRUDModel<GanttData> data)
{
    List<GanttData> uAdded = new List<GanttData>();
    //Performing insert operation
    if (data.added != null && data.added.Count() > 0)
    {
        foreach (var rec in data.added)
        {
            uAdded.Add(this.Create(rec));
        }
    }
    return Json(new { addedRecords = uAdded });
    //...
}
public GanttData Create(GanttData value)
{
    db.GanttDatas.Add(value);
    db.SaveChanges();
    return value;
}

```

## Perform editing action

Handle editing actions by processing the `changed` argument in the `BatchSave` endpoint. Update modified records in the database using Entity Framework and return them as `changedRecords` in JSON format. This supports updates to task details, ensuring dependent tasks like parents or predecessors adjust automatically.

```ts

GanttDataSourceEntities db = new GanttDataSourceEntities();
public ActionResult BatchSave([FromBody]ICRUDModel<GanttData> data)
{
    List<GanttData> uChanged = new List<GanttData>();
    //Performing update operation
    if (data.changed != null && data.changed.Count() > 0)
    {
        foreach (var rec in data.changed)
        {
            uChanged.Add(this.Edit(rec));
        }
    }
    return Json(new { changedRecords = uChanged });
    //...
}
public GanttData Edit(GanttData value)
{
    GanttData result = db.GanttDatas.Where(currentData => currentData.TaskId == value.TaskId).FirstOrDefault();
    if (result != null)
    {
        result.TaskId = value.TaskId;
        result.TaskName = value.TaskName;
        result.StartDate = value.StartDate;
        result.EndDate = value.EndDate;
        result.Duration = value.Duration;
        result.Progress = value.Progress;
        result.Predecessor = value.Predecessor;
        db.SaveChanges();
        return result;
    }
    else
    {
        return null;
    }
}

```

## Perform delete action

Handle delete actions by processing the `deleted` argument in the `BatchSave` endpoint. Remove records and their child subtasks recursively from the database using Entity Framework, returning them as `deletedRecords` in JSON format. This ensures data integrity by cascading deletions through the task hierarchy.

```ts

GanttDataSourceEntities db = new GanttDataSourceEntities();
public ActionResult BatchSave([FromBody]ICRUDModel<GanttData> data)
{
    List<GanttData> uDeleted = new List<GanttData>();
    //Performing delete operation
    if (data.deleted != null && data.deleted.Count() > 0)
    {
        foreach (var rec in data.deleted)
        {
            uDeleted.Add(this.Delete(rec.TaskId));
        }
    }
    return Json(new { deletedRecords = uDeleted });
}
public GanttData Delete(string value)
{
    var result = db.GanttDatas.Where(currentData => currentData.TaskId == value).FirstOrDefault();
    db.GanttDatas.Remove(result);
    RemoveChildRecords(value);
    db.SaveChanges();
    return result;
}
public void RemoveChildRecords(string key)
{
    var childList = db.GanttDatas.Where(x => x.ParentId == key).ToList();
    foreach (var item in childList)
    {
        db.GanttDatas.Remove(item);
        RemoveChildRecords(item.TaskId);
    }
}

```

## See also
- [How to bind remote data?](https://ej2.syncfusion.com/react/documentation/gantt/data-binding#remote-data)
- [How to configure task editing?](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/task-bar-editing)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)