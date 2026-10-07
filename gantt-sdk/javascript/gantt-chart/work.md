---
layout: post
title: Work in JavaScript Gantt Chart | Syncfusion
description: Learn how to configure work and task types in Syncfusion JavaScript Gantt Chart for accurate effort tracking and resource-based scheduling.
keywords: javascript gantt work, task work, duration, work units, resource work, time tracking, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/work
platform: gantt-sdk
control: Work - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Work and Effort Tracking in JavaScript Gantt Chart

The work value represents the effort required to complete a task. Map it from the data source with [taskFields.work](https://ej2.syncfusion.com/javascript/documentation/api/gantt/taskFields#work). Work is measured in hours by default; use [workUnit](https://ej2.syncfusion.com/javascript/documentation/api/gantt#workunit) to specify `Hour`, `Day`, or `Minute`. Work calculations use resource allocation and the project calendar to determine task duration.

## Configure work

Map a numeric field to `taskFields.work` and set `workUnit` to the unit used by those values. For example, `workUnit: 'Day'` interprets work in days. Include the `Edit` module to edit work through the dialog or taskbar interactions.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/work-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/work-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/work-cs1" %}

## Task type

The `work`, `duration`, and resource-unit values are related and can update when one of them changes. Use [taskType](https://ej2.syncfusion.com/javascript/documentation/api/gantt#tasktype) to choose which value remains fixed. `FixedUnit` is the default task type; when `taskFields.work` is mapped and no task type is specified, the default is `FixedWork`. Include the `Edit` module to enable editing. The available task types are:

- `FixedDuration`: Duration remains constant; changing work or resource units adjusts the other value.
- `FixedWork`: Work remains constant; changing duration or resource units adjusts the other value.
- `FixedUnit`: Resource units remain constant; changing work or duration adjusts the other value.

For example, a `FixedWork` task with 40 hours of work and two resources allocated at 50% each takes five 8-hour workdays. Reducing its duration to four days increases each resource allocation to 62.5%.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/work-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/work-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/work-cs2" %}

The following table summarizes how work, duration, and resource units update when one of these values changes:

| Task Type      | Changes in Duration                                                       | Changes in work                                                                  | Changes in Resource Units                                                   |
| -------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Fixed Duration | Work field updates                                                        | Resource unit updates                                                            | Work field updates                                                          |
| Fixed Work     | Resource unit updates.Note: For manually scheduled task work will update. | Duration field updates. Note: For manually scheduled task resource unit updates. | Duration will update. Note: For manually scheduled task work field updates. |
| Fixed Unit     | Work field updates                                                        | Duration field updates. Note: For manually scheduled task resource unit updates. | Duration will update. Note: For manually scheduled task work field updates. |

## Work limitations

- Milestones have zero duration, so work calculations do not apply to them.
- Manually scheduled tasks allow direct control over work, duration, and resource units; their values may not follow automatic task-type calculations.
- Work and task-type editing requires the `Edit` module.
- Use `Hour`, `Day`, or `Minute` for `workUnit` values.
- Resource-based work calculations depend on a mapped `taskFields.resourceInfo` field and valid resource-unit allocations.

## See also

- [Resources](https://ej2.syncfusion.com/javascript/documentation/gantt/resources)
- [Task dependencies](https://ej2.syncfusion.com/javascript/documentation/gantt/task-dependency)
- [Critical path](https://ej2.syncfusion.com/javascript/documentation/gantt/critical-path)
