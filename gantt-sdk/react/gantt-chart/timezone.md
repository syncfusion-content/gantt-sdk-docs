---
layout: post
title: Timezone in React Gantt Chart Component | Syncfusion
description: Learn how to configure timezones in the Syncfusion React Gantt Chart component for consistent task scheduling, CRUD operations, and global team coordination.
platform: gantt-sdk
control: Timezone
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Timezone in React Gantt Chart Component

The React Gantt Chart component uses the system timezone by default for task scheduling and taskbar rendering, based on JavaScript’s `new Date()` (e.g., Wed Dec 12 2018 05:23:27 GMT+0530 for IST). To support global teams or specific regions, the [timezone](https://ej2.syncfusion.com/react/documentation/api/gantt#timezone) property allows setting IANA timezones (e.g., "UTC", "Asia") to ensure consistent date display across users. This property function properly when the timeline displays hours. To enable this, set `timelineViewMode` to **'Hour'** or configure `topTier.unit` as **'Day'** and `bottomTier.unit` as **'Hour'**.

The `Timezone` class from `@syncfusion/ej2-base` provides methods (`offset`, `convert`, `remove`) to manipulate task dates, integrating with `taskFields.startDate` and `taskFields.endDate`. CRUD operations adjust dates via events like [actionBegin](https://ej2.syncfusion.com/react/documentation/gantt/events#actionbegin) and [actionComplete](https://ej2.syncfusion.com/react/documentation/gantt/events#actioncomplete).

## Configure consistent time display

Set the [timezone](https://ej2.syncfusion.com/react/documentation/api/gantt#timezone) property to a valid IANA timezone (e.g., "UTC") to display consistent task dates across all users, aligning taskbars with database times.

The following example sets UTC timezone:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/timezone-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/timezone-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/timezone-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/timezone-cs1" %}

This code ensures taskbars reflect UTC dates, unaffected by local timezones.

## Set specific timezone

Set a specific timezone using the [timezone](https://ej2.syncfusion.com/react/documentation/api/gantt#timezone) property, such as **America/New_York** (UTC -05:00), to display tasks consistently based on that timezone regardless of the local system's setting. This ensures a task from 9:00 AM to 10:00 AM in New York time, renders the same for all viewers, avoiding time differences in multi-region projects.

```typescript
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  GanttComponent,
  Inject,
  Selection,
  Sort,
  ColumnsDirective,
  ColumnDirective
} from "@syncfusion/ej2-react-gantt";

function App() {

  const data = [
    { TaskID: 1, TaskName: "Project Initiation", StartDate: new Date("2025/08/26 09:00"), EndDate: new Date("2025/08/26 10:00") },
    { TaskID: 2, TaskName: "Define Scope", StartDate: new Date("2025/08/26 10:00"), EndDate: new Date("2025/08/26 12:00"), Duration: 2, parentID: 1 },
    { TaskID: 3, TaskName: "Plan Timeline", StartDate: new Date("2025/08/26 13:00"), EndDate: new Date("2025/08/26 14:00"), Duration: 2, parentID: 1 },
    { TaskID: 4, TaskName: "Resource Allocation", StartDate: new Date("2025/08/26 14:00"), EndDate: new Date("2025/08/26 15:00") },
    { TaskID: 5, TaskName: "Develop Prototype", StartDate: new Date("2025/08/26 15:00"), EndDate: new Date("2025/08/26 16:00"), Duration: 2, parentID: 4 },
    { TaskID: 6, TaskName: "Test Prototype", StartDate: new Date("2025/08/26 16:00"), EndDate: new Date("2025/08/26 17:00"), Duration: 2, parentID: 4 }
    ];

  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    parentID: "parentID"
  };

  return (
    <GanttComponent
      height="450px"
      dataSource={data}
      taskFields={taskFields}
      durationUnit="Hour"
      timezone="America/New_York"
    />
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## Display tasks without timezone

Without a specified timezone, the Gantt Chart component renders tasks according to the local system’s timezone, the default behavior. The `new Date()` constructor interprets task dates relative to the system’s timezone settings, causing variations in displayed times across different regions. For instance, a task scheduled from 9:00 AM to 10:00 AM UTC, appears as 5:00 AM to 6:00 AM EDT on a system in New York (UTC -04:00, accounting for daylight saving time). This suits localized projects where tasks are managed within a single timezone but may cause scheduling conflicts in distributed teams, as a task’s displayed time shifts depending on the system’s location.

```typescript
import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent } from "@syncfusion/ej2-react-gantt";

function App() {

  const data = [
    { TaskID: 1, TaskName: "Project Initiation", StartDate: new Date("2025/08/26 09:00"), EndDate: new Date("2025/08/26 10:00") },
    { TaskID: 2, TaskName: "Define Scope", StartDate: new Date("2025/08/26 10:00"), EndDate: new Date("2025/08/26 12:00"), Duration: 2, parentID: 1 },
    { TaskID: 3, TaskName: "Plan Timeline", StartDate: new Date("2025/08/26 13:00"), EndDate: new Date("2025/08/26 14:00"), Duration: 2, parentID: 1 },
    { TaskID: 4, TaskName: "Resource Allocation", StartDate: new Date("2025/08/26 14:00"), EndDate: new Date("2025/08/26 15:00") },
    { TaskID: 5, TaskName: "Develop Prototype", StartDate: new Date("2025/08/26 15:00"), EndDate: new Date("2025/08/26 16:00"), Duration: 2, parentID: 4 },
    { TaskID: 6, TaskName: "Test Prototype", StartDate: new Date("2025/08/26 16:00"), EndDate: new Date("2025/08/26 17:00"), Duration: 2, parentID: 4 }
  ];

  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    parentID: "parentID"
  };

  return (
    <GanttComponent
      dataSource={data}
      height="450px"
      taskFields={taskFields}
      durationUnit="Hour"
    />
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## Handle CRUD operations with timezone

CRUD operations respect the [timezone](https://ej2.syncfusion.com/react/documentation/api/gantt#timezone) set at load time, with edits processed in the user’s timezone and converted to the database timezone (e.g., UTC) in client-side events like [actionBegin](https://ej2.syncfusion.com/react/documentation/gantt/events#actionbegin) and [actionComplete](https://ej2.syncfusion.com/react/documentation/gantt/events#actioncomplete).

The following example handles CRUD with timezone:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/timezone-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/timezone-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/timezone-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/timezone-cs2" %}

## Use timezone methods

The **Timezone** class from `@syncfusion/ej2-base` provides methods to manipulate task dates for display or storage in Gantt.

### offset

Calculates the difference (in minutes) between a UTC date and a specified timezone.

| Parameter | Type   | Description                          |
| --------- | ------ | ------------------------------------ |
| Date      | Date   | UTC date object                      |
| Timezone  | string | IANA timezone (e.g., "Europe/Paris") |

**Returns**: number

```typescript
// Assume your local timezone as IST/UTC+05:30.
let timezone: Timezone = new Timezone();
let date: Date = new Date(2018, 11, 5, 15, 25, 11);
let timeZoneOffset: number = timezone.offset(date, "Europe/Paris");
console.log(timeZoneOffset); //-60
```

### convert

Converts a date from one timezone to another.

| Parameter  | Type          | Description                                            |
| ---------- | ------------- | ------------------------------------------------------ |
| Date       | Date          | UTC date object                                        |
| fromOffset | number/string | Source timezone or offset (e.g., "Europe/Paris" or 60) |
| toOffset   | number/string | Target timezone or offset (e.g., "Asia/Tokyo" or -540) |

**Returns**: Date

```typescript
// Assume your local timezone as IST/UTC+05:30.
let timezone: Timezone = new Timezone();
let date: Date = new Date(2018, 11, 5, 15, 25, 11);
let convertedDate: Date = timezone.convert(date, "Europe/Paris", "Asia/Tokyo");
let convertedDate1: Date = timezone.convert(date, 60, -360);
console.log(convertedDate); //2018-12-05T08:55:11.000Z.
console.log(convertedDate1); //2018-12-05T16:55:11.000Z.
```

### remove

Removes the timezone offset, returning a UTC-equivalent date.

| Parameter | Type   | Description                          |
| --------- | ------ | ------------------------------------ |
| date      | Date   | UTC date object                      |
| timezone  | string | IANA timezone (e.g., "Europe/Paris") |

**Returns**: Date

```typescript
// Assume your local timezone as IST/UTC+05:30.
let timezone: Timezone = new Timezone();
let date: Date = new Date(2018, 11, 5, 15, 25, 11);
let convertedDate: Date = timezone.remove(date, "Europe/Paris");
console.log(convertedDate); //2018-12-05T14:25:11.000Z.
```

## See also

- [How to configure task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to customize taskbars?](https://ej2.syncfusion.com/react/documentation/gantt/taskbar)
- [How to configure task constraints?](https://ej2.syncfusion.com/react/documentation/gantt/task-constraints)
