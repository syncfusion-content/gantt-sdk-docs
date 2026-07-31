---
layout: post
title: Scheduling Tasks in JavaScript Gantt Chart Control | Syncfusion
description: Learn here all about scheduling tasks in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Scheduling Tasks
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Scheduling Tasks in JavaScript Gantt Chart Control

Task scheduling in the [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control defines and visualizes task start dates, durations, and end dates as taskbars in a project timeline, enabling precise planning and tracking. Configure scheduling with properties like [taskFields](../api/gantt#taskfields) for mapping task data, [taskMode](../api/gantt#taskmode) for auto or manual validation, [taskType](../api/gantt#tasktype) for fixed unit, work, or duration, and [durationUnit](../api/gantt#durationunit) for day, hour, or minute units. Working time, set via [dayWorkingTime](../api/gantt#dayworkingtime), and non-working periods, like weekends or holidays, ensure realistic calculations. Events like [dataBound](../api/gantt#databound) customize scheduling logic on run-time. Taskbars include ARIA labels for accessibility, describing start, end, and duration, and adapt to responsive designs, though narrow screens may require scrolling for long timelines.

## Configure scheduling modes

Scheduling modes control task date validation:

- **Auto** (default): Validates dates based on dependencies, working time, holidays, and weekends. Parent tasks adjust to child tasks' minimum start and maximum end dates.
- **Manual**: Allows custom dates without automatic validation, editable for parent tasks.
- **Custom**: Renders both auto and manual tasks from the data source.

Configure using:

- [taskMode](../api/gantt#taskmode): Sets global mode.
- [taskFields.manual](../api/gantt/taskFields#manual): Sets per-task mode.

### Automatically scheduled Tasks

The following example configures auto scheduling:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/auto-schedule/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/auto-schedule/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/auto-schedule" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/auto-schedule/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/auto-schedule/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/auto-schedule" %}
{% endif %}

### Manually scheduled Tasks

The following example configures manual scheduling:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/manual-schedule/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/manual-schedule/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/manual-schedule" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/manual-schedule/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/manual-schedule/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/manual-schedule" %}
{% endif %}

### Custom scheduled

The following example mixes auto and manual tasks:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/custom-schedule/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/custom-schedule/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/custom-schedule" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/custom-schedule/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/custom-schedule/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/custom-schedule" %}
{% endif %}

## Configure task types

Task types define how changes to duration, work, or resource units affect other properties:

- **FixedUnit** (default): Adjusts duration when work changes, maintaining unit allocation.
- **FixedWork**: Adjusts duration when units change, maintaining work amount.
- **FixedDuration**: Adjusts units when work changes, maintaining duration.

Configure using:

- [taskType](../api/gantt#tasktype): Sets global type.
- [taskFields.type](../api/gantt/taskFields#type): Sets per-task type.

The following example configures task types:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/task-type/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/task-type/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/task-type" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/task-type/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/task-type/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/task-type" %}
{% endif %}

## Configure duration units

Duration units determine how task length is measured and calculated within the project. The Gantt Chart control supports three duration units that can be applied at both project and individual task levels.

The Gantt Chart control supports the following duration units:

- **Day**: Standard for general planning.
- **Hour**: For detailed task management.
- **Minute**: For short-duration tasks.

Configure using:

- [durationUnit](../api/gantt#durationunit): Sets global unit (default: `day`).
- [taskFields.durationUnit](../api/gantt/taskFields#durationunit): Maps per-task units.
- Duration field values: Includes units directly (e.g., "5 minutes").

The following example maps duration units:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/duration-unit/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/duration-unit/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/duration-unit" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/duration-unit/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/duration-unit/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/duration-unit" %}
{% endif %}

**Defining duration unit with duration value:**

The following example defines units in duration values:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/duration-unit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/duration-unit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/duration-unit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/duration-unit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/duration-unit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/duration-unit-cs1" %}
{% endif %}

## Enable unscheduled tasks

Unscheduled tasks lack start date, end date, or duration, visualized as milestones or single-day tasks. Enable with [allowUnscheduledTasks](../api/gantt#allowunscheduledtasks) set to **true** (default: **false**), defaulting to a 1-day duration from the project start.

Available unscheduled task types:

- **Start date only**

  Tasks with only a start date defined, allowing for open-ended planning.

  ![Start date only task](./images/startDate-only.png)

- **End date only**

  Tasks with only an end date defined, useful for deadline-driven activities.

  ![End date only task](./images/endDate-only.png)

- **Duration only**

  Tasks with only duration specified, providing flexibility in scheduling timing.

  ![Duration only task](./images/duration-only.png)

- **Milestone**

  Special tasks with zero duration representing key project events or deliverables.

  ![Milestone task](./images/milestone.png)

The following example enables unscheduled tasks:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/unscheduledTasks-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/unscheduledTasks-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/unscheduledTasks-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/unscheduledTasks-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/unscheduledTasks-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/unscheduledTasks-cs1" %}
{% endif %}

### Convert to milestone using method

You can convert a task into a milestone using the [convertToMilestone](../api/gantt#converttomilestone) method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/milestone-convert/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/milestone-convert/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/milestone-convert" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/milestone-convert/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/milestone-convert/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/milestone-convert" %}
{% endif %}

## Configure working time range

Working time ranges define productive hours per day, ensuring accurate scheduling calculations. Configure with [dayWorkingTime](../api/gantt#dayWorkingTime) sets project-wide working hours.

The following example sets working hours from 9 AM to 6 PM:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/workingtimerange-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/workingtimerange-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/workingtimerange-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/workingtimerange-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/workingtimerange-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/workingtimerange-cs1" %}
{% endif %}

## Configure weekends and non-working days

Non-working days represent periods when project work cannot be performed, such as weekends, holidays, or planned maintenance periods. These settings ensure realistic project scheduling by excluding non-productive time from calculations.

### Configure work week

Define which days of the week are considered working days using the [workWeek](../api/gantt#workweek) property.

The following example excludes Monday and Tuesday:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/how-to-changeworkweek-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/how-to-changeworkweek-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/how-to-changeworkweek-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/how-to-changeworkweek-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/how-to-changeworkweek-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/how-to-changeworkweek-cs1" %}
{% endif %}

### Weekend configuration

Configure weekends with:

- Default behavior: Saturday and Sunday are non-working.
- Timeline display: [timelineSettings.showWeekend](../api/gantt/timelineSettings#showweekend) controls visibility.
- Working weekends: [includeWeekend](../api/gantt#includeweekend) set to **true** includes weekends.

## Customize scheduling with events

Customize scheduling with:

- [dataBound](../api/gantt#databound): Adjusts task scheduling after data binding, e.g., switching auto-scheduled tasks to manual mode if their start date precedes the project start date.

The following example uses `dataBound` to switch auto-scheduled tasks to manual mode if their start date is before the project start date (04/01/2025):

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/scheduling-events/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/scheduling-events/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/scheduling-events" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/scheduling-events/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/scheduling-events/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/scheduling-events" %}
{% endif %}

## See also

- [How to configure task dependencies?](../gantt/task-dependency)
- [How to manage resources?](../gantt/resources)
- [How to configure holidays?](../gantt/holidays)
