---
layout: post
title: Task Constraints in TypeScript Gantt Chart Control | Syncfusion 
description: Learn how to implement and manage task constraints in the Syncfusion TypeScript Gantt Chart control to enforce scheduling rules and dependencies.
platform: gantt-sdk
control: Task Constraints
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Task Constraints in TypeScript Gantt Chart Control

Task constraints in the [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control define scheduling rules that control when tasks start or finish, ensuring logical sequences, fixed deadlines, and optimized resource allocation. Constraints affect taskbar positioning, dependency scheduling, and critical path calculations, making schedules realistic by accounting for limitations like material delays or compliance dates. They integrate with `taskMode` (e.g., **Auto** for automatic scheduling, **Manual** for fixed dates).

## Benefits of task constraints

Task constraints enhance project planning with the following advantages:
- Enforce logical task sequences, ensuring dependencies are respected (e.g., taskbars align with predecessors).
- Anchor tasks to fixed milestone dates, such as product launches or audits.
- Prevent resource conflicts by spacing tasks that share teams or equipment.
- Support "what-if" scenario testing by adjusting constraints to explore timeline impacts.
- Meet compliance deadlines, ensuring taskbars reflect regulatory requirements.
- Improve accuracy by incorporating real-world constraints like material availability.

## Understand task constraint types

The [constraintType](../api/gantt/taskFieldsModel#constrainttype) property accepts one of eight numeric values from the [ConstraintType](../api/gantt/constraintType) enum, each defining a specific scheduling rule. These can be specified using the corresponding numeric value (e.g., 0). The enum values are typically set in the `taskFields.constraintType` mapping or directly in the data source. Below is a table summarizing the constraint types, their descriptions, example use cases, and their corresponding numeric enum values:

| Constraint Type | Numeric Enum Value | Description | Example Use Case |
|-----------------|--------------------|-------------|------------------|
| As Soon As Possible (ASAP) | 0 | Starts the task as soon as dependencies are met. Default for auto-scheduled tasks. | Begin coding once requirements are finalized. |
| As Late As Possible (ALAP) | 1 | Delays the task until the latest possible start without delaying successors. | Finalize documentation just before release. |
| Must Start On (MSO) | 2 | Requires the task to start on a specific date. | Start integration on July 1 per contract. |
| Must Finish On (MFO) | 3 | Requires the task to finish on a specific date. | Submit reports by March 31 for compliance. |
| Start No Earlier Than (SNET) | 4 | Prevents the task from starting before a date. | Delay marketing until regulatory approval on August 15. |
| Start No Later Than (SNLT) | 5 | Requires the task to start on or before a date. | Begin reviews by September 1 for reporting. |
| Finish No Earlier Than (FNET) | 6 | Prevents the task from finishing before a date. | Delay training completion until onboarding finishes. |
| Finish No Later Than (FNLT) | 7 | Requires the task to finish on or before a date. | Complete QA by July 25 for release. |

## Configure task constraints

Configure task constraints using the [taskFields.constraintType](../api/gantt/taskFieldsModel#constrainttype) and [taskFields.constraintDate](../api/gantt/taskFieldsModel#constraintdate) properties to map constraint types and dates. Use [ConstraintType](../api/gantt/constraintType) enum values for clarity.

**Define taskFields mappings**

Map the following fields in `taskFields`:
- `id`: Task identifier.
- `name`: Task name.
- `startDate`: Task start date.
- `endDate`: Task end date.
- `constraintType`: Constraint type (e.g., `constraintType: 2` (MustStartOn)).
- `constraintDate`: Date for the constraint.

**Provide constraint data**

Include `constraintType` and `constraintDate` in your data source. For example:

```json
{
  "taskId": 1,
  "taskName": "Design Approval",
  "startDate": new Date("2025-07-01"),
  "endDate": new Date("2025-07-02"),
  "constraintType": 2,
  "constraintDate": new Date("2025-07-01")
}
```

The following example applies a **MustStartOn** constraint. This code sets a task to start on July 1, 2025, with the taskbar reflecting the constraint.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs1/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs1" %}

{% endif %}

## Handle constraint violations

Constraint violations occur when scheduling changes (e.g., dragging taskbars) conflict with strict constraints (**MustStartOn**, **MustFinishOn**, **StartNoLaterThan**, **FinishNoLaterThan**). By default, a validation popup alerts users. Use the [actionBegin](../api/gantt#actionbegin) event with `requestType: 'validateTaskViolation'` to manage violations programmatically, setting `args.validateMode` flags to control behavior:

- `respectMustStartOn`: Silently rejects **MustStartOn** violations.
- `respectMustFinishOn`: Silently rejects **MustFinishOn** violations.
- `respectStartNoLaterThan`: Silently rejects **StartNoLaterThan** violations.
- `respectFinishNoLaterThan`: Silently rejects **FinishNoLaterThan** violations.

Setting a flag to **true** cancels updates without a popup; **false** (default) shows the popup. Use `args.cancel` in `taskbarEditing` for pre-edit validation.

```
actionBegin(args) {
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

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs2/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/task-constraints-cs2" %}

{% endif %}

## See also
- [How to configure task dependencies?](./task-dependency)
- [How to customize taskbars?](./taskbar)
- [How to enable baseline rendering?](./baseline)