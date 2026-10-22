---
layout: post
title: Constraints in ASP.NET Core Gantt Chart | Scheduling Rules | Syncfusion
description: Learn how to configure task constraints in Syncfusion ASP.NET Core Gantt Chart to enforce scheduling rules, manage deadlines, and meet project milestones accurately.
keywords: asp.net core gantt task constraints, scheduling rules, muststarton, mustfinishon, assoon aspossible, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/task-constraints
platform: gantt-sdk
control: Task Constraints - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Task Constraints with Scheduling Rules in ASP.NET Core Gantt Chart

Task constraints in the ASP.NET Core Gantt Chart component define scheduling rules that control when tasks start or finish, ensuring logical sequences, fixed deadlines, and optimized resource allocation. Constraints affect taskbar positioning, dependency scheduling, and critical path calculations, making schedules realistic by accounting for limitations like tailwind3 delays or compliance dates. They integrate with `taskMode` (e.g., **Auto** for automatic scheduling, **Manual** for fixed dates).

## Benefits of task constraints

Task constraints enhance project planning with the following advantages:

- Enforce logical task sequences, ensuring dependencies are respected (e.g., taskbars align with predecessors).
- Anchor tasks to fixed milestone dates, such as product launches or audits.
- Prevent resource conflicts by spacing tasks that share teams or equipment.
- Support "what-if" scenario testing by adjusting constraints to explore timeline impacts.
- Meet compliance deadlines, ensuring taskbars reflect regulatory requirements.
- Improve accuracy by incorporating real-world constraints like material availability.

## Understand task constraint types

The [constraintType](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttTaskFields.html#Syncfusion_EJ2_Gantt_GanttTaskFields_ConstraintType) property accepts one of eight numeric values from the [ConstraintType](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.ConstraintType.html) enum, each defining a specific scheduling rule. These can be specified using the corresponding numeric value (e.g., 0). The enum values are typically set in the `constraintType` mapping in the task fields or directly in the data source. Below is a table summarizing the constraint types, their descriptions, example use cases, and their corresponding numeric enum values:

| Constraint Type               | Numeric Enum Value | Description                                                                        | Example Use Case                                        |
| ----------------------------- | ------------------ | ---------------------------------------------------------------------------------- | ------------------------------------------------------- |
| As Soon As Possible (ASAP)    | 0                  | Starts the task as soon as dependencies are met. Default for auto-scheduled tasks. | Begin coding once requirements are finalized.           |
| As Late As Possible (ALAP)    | 1                  | Delays the task until the latest possible start without delaying successors.       | Finalize documentation just before release.             |
| Must Start On (MSO)           | 2                  | Requires the task to start on a specific date.                                     | Start integration on July 1 per contract.               |
| Must Finish On (MFO)          | 3                  | Requires the task to finish on a specific date.                                    | Submit reports by March 31 for compliance.              |
| Start No Earlier Than (SNET)  | 4                  | Prevents the task from starting before a date.                                     | Delay marketing until regulatory approval on August 15. |
| Start No Later Than (SNLT)    | 5                  | Requires the task to start on or before a date.                                    | Begin reviews by September 1 for reporting.             |
| Finish No Earlier Than (FNET) | 6                  | Prevents the task from finishing before a date.                                    | Delay training completion until onboarding finishes.    |
| Finish No Later Than (FNLT)   | 7                  | Requires the task to finish on or before a date.                                   | Complete QA by July 25 for release.                     |

## Configure task constraints

Configure task constraints using the [taskFields.constraintType](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttTaskFields.html#Syncfusion_EJ2_Gantt_GanttTaskFields_ConstraintType) and [taskFields.constraintDate](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttTaskFields.html#Syncfusion_EJ2_Gantt_GanttTaskFields_ConstraintDate) properties to map constraint types and dates. Use [ConstraintType](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.ConstraintType.html) enum values for clarity.

**Define taskFields mappings**

Map the following fields in `taskFields`:

- `id`: Task identifier.
- `name`: Task name.
- `startDate`: Task start date.
- `endDate`: Task end date.
- `constraintType`: Constraint type (e.g., a field holding 2 (MustStartOn)).
- `constraintDate`: Date for the constraint.

**Provide constraint data**

Include `constraintType` and `constraintDate` in your data source. For example:

```csharp
new GanttDataSource
{
    TaskId = 1,
    TaskName = "Design Approval",
    StartDate = new DateTime(2025, 7, 1),
    EndDate = new DateTime(2025, 7, 2),
    ConstraintType = 2,
    ConstraintDate = new DateTime(2025, 7, 1)
}
```

The following example applies a **MustStartOn** constraint:

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/task-scheduling/task-constraints-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/task-scheduling/task-constraints-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Task Constraints](images/task-constraints-placeholder.png)

This code sets a task to start on July 1, 2025, with the taskbar reflecting the constraint.

## Handle constraint violations

Constraint violations occur when scheduling changes (e.g., dragging taskbars) conflict with strict constraints (**MustStartOn**, **MustFinishOn**, **StartNoLaterThan**, **FinishNoLaterThan**). By default, a validation popup alerts users. Use the [actionBegin](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ActionBegin) event with `requestType: 'validateTaskViolation'` to manage violations programmatically, setting `args.validateMode` flags to control behavior:

- `respectMustStartOn`: Silently rejects **MustStartOn** violations.
- `respectMustFinishOn`: Silently rejects **MustFinishOn** violations.
- `respectStartNoLaterThan`: Silently rejects **StartNoLaterThan** violations.
- `respectFinishNoLaterThan`: Silently rejects **FinishNoLaterThan** violations.

Setting a flag to **true** cancels updates without a popup; **false** (default) shows the popup. Use `args.cancel` in `taskbarEditing` for pre-edit validation.

```javascript
function actionBegin(args) {
  if (args.requestType === 'validateTaskViolation') {
    args.validateMode = {
      respectMustStartOn: true,
      respectMustFinishOn: true,
      respectStartNoLaterThan: true,
      respectFinishNoLaterThan: true
    };
  }
}
```

The following example disables the **MustStartOn** violation popup:

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/task-scheduling/task-constraints-cs2/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/task-scheduling/task-constraints-cs2/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Handle Constraint Violations](images/constraint-violation-placeholder.png)

## See also

- [How to configure task dependencies?](https://ej2.syncfusion.com/aspnetcore/documentation/gantt/task-dependency)
- [How to customize taskbars?](https://ej2.syncfusion.com/aspnetcore/documentation/gantt/taskbar)
- [How to enable baseline rendering?](https://ej2.syncfusion.com/aspnetcore/documentation/gantt/baseline)
