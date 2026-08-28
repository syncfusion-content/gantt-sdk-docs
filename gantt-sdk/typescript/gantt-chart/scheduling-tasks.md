---
layout: post
title: Scheduling Tasks in TypeScript Gantt Chart | Syncfusion
description: Learn how to manage task scheduling in the Syncfusion TypeScript Gantt Chart with task modes, duration units, working time, and holidays.
keywords: typescript gantt scheduling, task scheduling, date calculations, dependencies, constraints, timeline, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/scheduling-tasks
platform: gantt-sdk
control: Scheduling Tasks - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Task Scheduling with Duration Units in TypeScript Gantt Chart

Task scheduling in the [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control defines and visualizes task start dates, durations, and end dates as taskbars in a project timeline, enabling precise planning and tracking. Configure scheduling with properties like [taskFields](https://ej2.syncfusion.com/documentation/api/gantt#taskfields) for mapping task data, [taskMode](https://ej2.syncfusion.com/documentation/api/gantt#taskmode) for auto or manual validation, [taskType](https://ej2.syncfusion.com/documentation/api/gantt#tasktype) for fixed unit, work, or duration, and [durationUnit](https://ej2.syncfusion.com/documentation/api/gantt#durationunit) for day, hour, or minute units. Working time, set via [dayWorkingTime](https://ej2.syncfusion.com/documentation/api/gantt#dayworkingtime), and non-working periods, like weekends or holidays, ensure realistic calculations. Events like [dataBound](https://ej2.syncfusion.com/documentation/api/gantt#databound) customize scheduling logic on run-time. Taskbars include ARIA labels for accessibility, describing start, end, and duration, and adapt to responsive designs, though narrow screens may require scrolling for long timelines.

## Configure scheduling modes

Scheduling modes control task date validation:

- **Auto** (default): Validates dates based on dependencies, working time, holidays, and weekends. Parent tasks adjust to child tasks' minimum start and maximum end dates.
- **Manual**: Allows custom dates without automatic validation, editable for parent tasks.
- **Custom**: Renders both auto and manual tasks from the data source.

Configure using:

- [taskMode](https://ej2.syncfusion.com/documentation/api/gantt#taskmode): Sets global mode.
- [taskFields.manual](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#manual): Sets per-task mode.

### Automatically scheduled Tasks

The following example configures auto scheduling:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/auto-schedule/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/auto-schedule/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/auto-schedule" %}

### Manually scheduled Tasks

The following example configures manual scheduling:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/manual-schedule/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/manual-schedule/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/manual-schedule" %}

### Custom scheduled

The following example mixes auto and manual tasks:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/custom-schedule/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/custom-schedule/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/custom-schedule" %}

## Configure task types

Task types define how changes to duration, work, or resource units affect other properties:

- **FixedUnit** (default): Adjusts duration when work changes, maintaining unit allocation.
- **FixedWork**: Adjusts duration when units change, maintaining work amount.
- **FixedDuration**: Adjusts units when work changes, maintaining duration.

Configure using:

- [taskType](https://ej2.syncfusion.com/documentation/api/gantt#tasktype): Sets global type.
- [taskFields.type](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#type): Sets per-task type.

The following example configures task types:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-type/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-type/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/task-type" %}

## Configure duration units

Duration units define how task duration values are interpreted and calculated in the Gantt Chart. Duration units can be configured globally for the entire project or individually for each task.

The Gantt Chart control supports the following duration units:

- **Day**: Standard for general planning.
- **Hour**: For detailed task management.
- **Minute**: For short-duration tasks.
- **Week**: Represents a duration calculated using the configured [daysPerWeek](https://ej2.syncfusion.com/documentation/api/gantt#daysperweek) value.
- **Month**: Represents a duration calculated using the configured [daysPerMonth](https://ej2.syncfusion.com/documentation/api/gantt#dayspermonth) value.

Configure using:

- [durationUnit](https://ej2.syncfusion.com/documentation/api/gantt#durationunit): Sets global unit (default: `day`).
- [taskFields.durationUnit](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#durationunit): Maps per-task units.
- [daysPerWeek](https://ej2.syncfusion.com/documentation/api/gantt#daysperweek): Specifies the number of working days that constitute one week duration.
- [daysPerMonth](https://ej2.syncfusion.com/documentation/api/gantt#dayspermonth): Specifies the number of working days that constitute one month duration.
- Duration field values: You can specify the duration unit directly in the duration value (for example, "5 minutes", "2 weeks", or "1 month").

The following example maps duration units:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/duration-unit/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/duration-unit/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/duration-unit" %}

**Defining duration unit with duration value:**

The following example defines units in duration values:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/duration-unit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/duration-unit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/duration-unit-cs1" %}

### Configure days per week and month

The `daysPerWeek` property specifies how many working days constitute one week, directly impacting how week-based durations are calculated. For example, if `daysPerWeek` is 5, then 1 week equals 5 working days.

Similarly, the `daysPerMonth` property specifies how many working days constitute one month, affecting how month-based durations are converted to actual working days for scheduling calculations. For example, if `daysPerMonth` is 20, then 1 month equals 20 working days.

The following example configures `daysPerWeek` and `daysPerMonth` properties:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/duration-unit-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/duration-unit-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/duration-unit-cs2" %}

## Enable unscheduled tasks

Unscheduled tasks lack start date, end date, or duration, visualized as milestones or single-day tasks. Enable with [allowUnscheduledTasks](https://ej2.syncfusion.com/documentation/api/gantt#allowunscheduledtasks) set to **true** (default: **false**), defaulting to a 1-day duration from the project start.

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

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/unscheduledTasks-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/unscheduledTasks-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/unscheduledTasks-cs1" %}

### Convert to milestone using method

You can convert a task into a milestone using the [convertToMilestone](https://ej2.syncfusion.com/documentation/api/gantt#converttomilestone) method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/milestone-convert/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/milestone-convert/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/milestone-convert" %}

## Configure working time range

Working time ranges define productive hours per day, ensuring accurate scheduling calculations. Configure with [dayWorkingTime](https://ej2.syncfusion.com/documentation/api/gantt#dayWorkingTime) sets project-wide working hours.

The following example sets working hours from 9 AM to 6 PM:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/workingtimerange-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/workingtimerange-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/workingtimerange-cs1" %}

## Configure weekends and non-working days

Non-working days represent periods when project work cannot be performed, such as weekends, holidays, or planned maintenance periods. These settings ensure realistic project scheduling by excluding non-productive time from calculations.

### Configure work week

Define which days of the week are considered working days using the [workWeek](https://ej2.syncfusion.com/documentation/api/gantt#workweek) property.

The following example excludes Monday and Tuesday:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/how-to-changeworkweek-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/how-to-changeworkweek-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/how-to-changeworkweek-cs1" %}

### Weekend configuration

Configure weekends with:

- Default behavior: Saturday and Sunday are non-working.
- Timeline display: [timelineSettings.showWeekend](https://ej2.syncfusion.com/documentation/api/gantt/timelineSettings#showweekend) controls visibility.
- Working weekends: [includeWeekend](https://ej2.syncfusion.com/documentation/api/gantt#includeweekend) set to **true** includes weekends.

## Customize scheduling with events

Customize scheduling with:

- [dataBound](https://ej2.syncfusion.com/documentation/api/gantt#databound): Adjusts task scheduling after data binding, e.g., switching auto-scheduled tasks to manual mode if their start date precedes the project start date.

The following example uses `dataBound` to switch auto-scheduled tasks to manual mode if their start date is before the project start date (04/01/2025):

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/scheduling-events/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/scheduling-events/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/scheduling-events" %}

## See also

- [How to configure task dependencies?](https://ej2.syncfusion.com/documentation/gantt/task-dependency)
- [How to manage resources?](https://ej2.syncfusion.com/documentation/gantt/resources)
- [How to configure holidays?](https://ej2.syncfusion.com/documentation/gantt/holidays)
