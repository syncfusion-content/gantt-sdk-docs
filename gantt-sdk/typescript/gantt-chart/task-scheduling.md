---
layout: post
title: Task scheduling in TypeScript Gantt control | Syncfusion
description: Learn here all about Task scheduling in Syncfusion TypeScript Gantt control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Task scheduling
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Task scheduling in TypeScript Gantt control

The Gantt provides support for automatic and manual task scheduling modes. It is used to indicate whether the start date and end date of all the tasks will be automatically validated or not. [taskMode](../api/gantt#taskmode) is the property used to change the schedule mode of a task.

The Gantt control supports three types of mode. They are:

- `Auto`: All the tasks are automatically validate.
- `Manual`: All the tasks are manually validate by the user.
- `Custom`: Both Auto and Manual tasks are render by mapped from data source.

> Note: The default value of [taskMode](../api/gantt#taskmode) is `Auto`.

## Automatically scheduled Tasks

When the [taskMode](../api/gantt#taskmode) property is set as `Auto`, the start date and end date of all the tasks in the project will be automatically validated. That is, dates are validated based on various factors such as working time, holidays, weekends and predecessors.

In auto scheduling mode, the parent taskbar will be rendered according to the minimum start date and maximum end date of its child records, irrespective of the dates provided to it in the data source.

If a child task is updated, the parent task’s start and end dates are automatically updated to reflect the changes. The parent task’s progress is also updated based on the progress of its child tasks. Therefore, you cannot edit the parent taskbar's fields such as progress, endDate, as the parent taskbar is generated based on its subtasks.

The rendering of the parent taskbar in auto-scheduling mode also takes into account the dependencies between tasks. If a child task is dependent on another task, the parent task’s start date and end date will be adjusted accordingly to ensure that the child task is not scheduled to start before its predecessor is completed.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs1" %}
{% endif %}

## Manually scheduled Tasks

When the [taskMode](../api/gantt#taskmode) property is set as `Manual`, the start date and end date of all the tasks in the project will be same as given in the data source. That is, dates are not validated based on various factors such as dependencies between tasks, holidays, weekends, working time. We can restrict this mode in predecessor validation alone. That is, we can automatically validate the dates based on predecessor values by enabling the [validateManualTasksOnLinking](../api/gantt#validatemanualtasksonlinking) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs2" %}
{% endif %}

## Custom

When the [taskMode](../api/gantt#taskmode) property is set as `Custom`, the scheduling mode for each tasks will be mapped from the data source field. The `Boolean` property [taskFields.manual](../api/gantt/taskFields#manual) is used to map the manual scheduling mode field from the data source.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/task-schedule-cs3" %}
{% endif %}

## Unscheduled Tasks

Unscheduled tasks are planned for a project without any definite schedule dates. The Gantt control supports rendering the unscheduled tasks. You can create or update the tasks with anyone of start date, end date, and duration values or none. You can enable or disable the unscheduled tasks by using the [allowUnscheduledTasks](../api/gantt#allowunscheduledtasks) property. The following images represent the various types of unscheduled tasks in Gantt.

| Taskbar state     | Auto                                      | Manual                                      |
| ----------------- | ----------------------------------------- | ------------------------------------------- |
| `Start Date Only` | ![Alt text](../images/startDate-only.png) | ![Alt text](../images/startDate-manual.png) |
| `End Date Only`   | ![Alt text](../images/endDate-only.png)   | ![Alt text](../images/endDate-manual.png)   |
| `Duration Only`   | ![Alt text](../images/duration-only.png)  | ![Alt text](../images/duration-manual.png)  |
| `Milestone`       | ![Alt text](../images/milestone.png)      | ![Alt text](../images/milestone.png)        |

> Note: A milestone is a task that has no start and end dates, but it has a duration value of zero

## Define unscheduled tasks in data source

You can define the various types of unscheduled tasks in the data source as follows

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/unscheduledTasks-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/unscheduledTasks-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/unscheduledTasks-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/unscheduledTasks-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/unscheduledTasks-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/unscheduledTasks-cs2" %}
{% endif %}

> NOTE
> If the [allowUnscheduledTasks](../api/gantt#allowunscheduledtasks) property is set to false, then the Gantt control automatically calculates the scheduled date values with a default value of duration 1 and the project start date is considered as the start date for the task.

## Working time range

In the Gantt control, working hours for all days of a project can be defined by using the [dayWorkingTime](../api/gantt/dayWorkingTime) property. Based on the working hours, automatic date scheduling and duration validations for a task are performed.

The following code snippet explains how to define the working time range for the project in Gantt.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/workingtimerange-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/workingtimerange-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/workingtimerange-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/workingtimerange-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/workingtimerange-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/workingtimerange-cs2" %}
{% endif %}

> NOTE
>
> - Individual tasks can lie between any time within the defined working time range of the project.
> - The [dayWorkingTime](../api/gantt/dayWorkingTime) property is used to define the working time for the whole project.

### Working time range for specific day in a week

In the Gantt control, [weekWorkingTime](https://ej2.syncfusion.com/documentation/api/gantt#weekworkingtime) property enables you to specify different working hours for each day of the week in your Gantt chart. By configuring this property, you can ensure that tasks are only scheduled during defined working periods, avoiding non-working hours for that respective day.

The [timeRange](https://ej2.syncfusion.com/documentation/api/gantt/weekworkingtime#timerange) property of `weekWorkingTime` accepts multiple breakup in the working time as like [dayWorkingTime](https://ej2.syncfusion.com/documentation/api/gantt#dayworkingtime) property. This working time range will apply only to the working days defined in [dayOfWeek](https://ej2.syncfusion.com/documentation/api/gantt/weekworkingtime#dayofweek) property of `weekWorkingTime`.

The following code snippet explains how to define the week working time range for the project in Gantt. In the below sample working time range for `Monday` and `Tuesday` is set from `10` to `18`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/week-workingtime-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/week-workingtime-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/week-workingtime-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/week-workingtime-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/week-workingtime-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/week-workingtime-cs1" %}
{% endif %}

> NOTE
>
> - By default working time range for all days will be `8` to `12` and `13` to `17` hours.
> - If both `dayWorkingTime` and `weekWorkingTime` are mapped, priority will be given to `weekWorkingTime` property.
> - Default working time defined in `dayWorkingTime` property will be used for the days left out in the `weekWorkingTime` property.
> - If a day is a holiday or non-working day and also initialized in `weekWorkingTime` property, it will only be considered as a non-working day.

## Weekend/non-working days

Non-working days/weekend are used to represent the non-productive days in a project. You can define the non-working days in a week using the [workWeek](../api/gantt#workweek) property in Gantt.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-changeworkweek-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-changeworkweek-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/how-to-changeworkweek-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-changeworkweek-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-changeworkweek-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/how-to-changeworkweek-cs2" %}
{% endif %}

> By default, Saturdays and Sundays are considered as non-working days/weekend in a project.
> In the Gantt control, you can make weekend as working day by setting the [includeWeekend](../api/gantt#includeweekend) property to `true`.

## Duration units

In Gantt, the task's duration value can be measured by the following duration units,

- Day
- Hour
- Minute

In Gantt, we can define duration unit for whole project by using [durationUnit](../api/gantt#durationunit) property, when we defines the value for this property, this unit will be applied for all task which don't has duration unit value. And each task in the project can be defined with different duration units and the duration unit of a task can be defined by the following ways,

- Using [taskFields.durationUnit](../api/gantt/taskFields#durationunit) property, to map the duration unit data source field.
- Defining the duration unit value along with the duration field in the data source.

### Mapping the duration unit field

The below code snippet explains the mapping of duration unit data source field to the Gantt control using the [taskFields.durationUnit](../api/gantt/taskFields#durationunit) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs1" %}
{% endif %}

> NOTE
> The default value of the [durationUnit](../api/gantt/taskFields#durationunit) property is `day`.

### Defining duration unit along with duration field

Duration units for the tasks can also be defined along with the duration values, the below code snippet explains the duration unit for a task along with duration value,

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/durationUnits-cs2" %}
{% endif %}

> NOTE:
> The edit type of the duration column in Gantt is string, to support editing the duration field along with duration units.
