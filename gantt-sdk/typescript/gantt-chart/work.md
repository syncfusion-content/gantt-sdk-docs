---
layout: post
title: Work in TypeScript Gantt control | Syncfusion
description: Learn here all about Work in Syncfusion TypeScript Gantt control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Work
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Work in TypeScript Gantt control

## Work

The work is the total hours required to complete a task. Work can be mapped from the data source field using the property [taskFields.work](../api/gantt/taskFields#work). Work can be measured in `Hour`, `Day`, `Minute`. By default, work is measured in `Hour` and it can be changed, by using the property [workUnit](../api/gantt#viewtype).

> Note: When the work field is mapped from the data source, the default task type will be `FixedWork`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/work-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/work-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/work-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/work-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/work-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/work-cs1" %}
{% endif %}

## Task type

The work, duration and resource unit fields of a task depends upon each other and will change automatically on editing any one of these fields. But we can also set these field’s values as constant using the [taskType](../api/gantt#tasktype) property. `FixedUnit` is the default [taskType](../api/gantt#tasktype). The following values can be set to the [taskType](../api/gantt#tasktype) property,

- `FixedDuration` - Duration task field will remain constant while updating resource unit or work field.
- `FixedWork` - Work field will remain constant while updating resource unit or duration fields.
- `FixedUnit` - Resource units will remain constant while updating duration or work field.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/work-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/work-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/work-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/work-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/work-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/work-cs2" %}
{% endif %}

Following table explains how the work, duration and resource unit fields will gets updated on changing any of the fields

| Task Type      | Changes in Duration                                                       | Changes in work                                                                  | Changes in Resource Units                                                   |
| -------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Fixed Duration | Work field updates                                                        | Resource unit updates                                                            | Work field updates                                                          |
| Fixed Work     | Resource unit updates.Note: For manually scheduled task work will update. | Duration field updates. Note: For manually scheduled task resource unit updates. | Duration will update. Note: For manually scheduled task work field updates. |
| Fixed Unit     | Work field updates                                                        | Duration field updates. Note: For manually scheduled task resource unit updates. | Duration will update. Note: For manually scheduled task work field updates. |

> Note

1. Fixed Unit is the default taskType in Gantt.
2. The above calculations are not applicable for Milestones.
