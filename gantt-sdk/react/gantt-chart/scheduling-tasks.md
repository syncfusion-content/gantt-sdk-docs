---
layout: post
title: Scheduling tasks in React Gantt Chart Component | Syncfusion
description: Learn how to configure task scheduling modes, types, duration units, working time, and holidays in the Syncfusion React Gantt Chart component.
platform: gantt-sdk
control: Scheduling tasks
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Scheduling Tasks in React Gantt Chart Component

Task scheduling in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component defines and visualizes task start dates, durations, and end dates as taskbars in a project timeline, enabling precise planning and tracking. Configure scheduling with properties like [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt#taskfields) for mapping task data, [taskMode](https://ej2.syncfusion.com/react/documentation/api/gantt#taskmode) for auto or manual validation, [taskType](https://ej2.syncfusion.com/react/documentation/api/gantt#tasktype) for fixed unit, work, or duration, and [durationUnit](https://ej2.syncfusion.com/react/documentation/api/gantt#durationunit) for day, hour, or minute units. Working time, set via [dayWorkingTime](https://ej2.syncfusion.com/react/documentation/api/gantt#dayworkingtime), and non-working periods, like weekends or holidays, ensure realistic calculations. Events like [dataBound](https://ej2.syncfusion.com/react/documentation/gantt/events#databound) customize scheduling logic on run-time. Taskbars include ARIA labels for accessibility, describing start, end, and duration, and adapt to responsive designs, though narrow screens may require scrolling for long timelines.

## Configure scheduling modes

Scheduling modes control task date validation:

- **Auto** (default): Validates dates based on dependencies, working time, holidays, and weekends. Parent tasks adjust to child tasks' minimum start and maximum end dates.
- **Manual**: Allows custom dates without automatic validation, editable for parent tasks.
- **Custom**: Renders both auto and manual tasks from the data source.

Configure using:

- [taskMode](https://ej2.syncfusion.com/react/documentation/api/gantt#taskmode): Sets global mode.
- [taskFields.manual](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#manual): Sets per-task mode.

### Automatically scheduled Tasks

The following example configures auto scheduling:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/task-scheduling-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/task-scheduling-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/task-scheduling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/task-scheduling-cs1" %}

### Manually scheduled Tasks

The following example configures manual scheduling:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/task-scheduling-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/task-scheduling-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/task-scheduling-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/task-scheduling-cs2" %}

### Custom scheduled

The following example mixes auto and manual tasks:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/task-scheduling-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/task-scheduling-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/task-scheduling-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/task-scheduling-cs3" %}

## Configure task types

Task types define how changes to duration, work, or resource units affect other properties:

- **FixedUnit** (default): Adjusts duration when work changes, maintaining unit allocation.
- **FixedWork**: Adjusts duration when units change, maintaining work amount.
- **FixedDuration**: Adjusts units when work changes, maintaining duration.

Configure using:

- [taskType](https://ej2.syncfusion.com/react/documentation/api/gantt#tasktype): Sets global type.
- [taskFields.type](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#type): Sets per-task type.

The following example configures task types:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tasktype-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tasktype-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/tasktype-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/tasktype-cs1" %}

## Configure duration units

Duration units determine how task length is measured and calculated within the project. The Gantt Chart component supports three duration units that can be applied at both project and individual task levels.

The Gantt Chart component supports the following duration units:

- **Day**: Standard for general planning.
- **Hour**: For detailed task management.
- **Minute**: For short-duration tasks.

Configure using:

- [durationUnit](https://ej2.syncfusion.com/react/documentation/api/gantt#durationunit): Sets global unit (default: `day`).
- [taskFields.durationUnit](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#durationunit): Maps per-task units.
- Duration field values: Includes units directly (e.g., "5 minutes").

The following example maps duration units:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/durationunit-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/durationunit-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/durationunit-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/durationunit-cs3" %}

**Defining duration unit with duration value:**

The following example defines units in duration values:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/durationunit-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/durationunit-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/durationunit-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/durationunit-cs5" %}

## Enable unscheduled tasks

Unscheduled tasks lack start date, end date, or duration, visualized as milestones or single-day tasks. Enable with [allowUnscheduledTasks](https://ej2.syncfusion.com/react/documentation/api/gantt#allowunscheduledtasks) set to **true** (default: **false**), defaulting to a 1-day duration from the project start.

Available unscheduled task types:

- **Start date only**

  Tasks with only a start date defined, allowing for open-ended planning.

  ![Start date only task](images/startDate-only.png)

- **End date only**

  Tasks with only an end date defined, useful for deadline-driven activities.

  ![End date only task](images/endDate-only.png)

- **Duration only**

  Tasks with only duration specified, providing flexibility in scheduling timing.

  ![Duration only task](images/duration-only.png)

- **Milestone**

  Special tasks with zero duration representing key project events or deliverables.

  ![Milestone task](images/milestone.png)

The following example enables unscheduled tasks:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/unscheduledtask-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/unscheduledtask-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/unscheduledtask-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/unscheduledtask-cs1" %}

### Convert to milestone using method

You can convert a task into a milestone using the [ConvertToMilestone](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#converttomilestone) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/unscheduledtasks-method-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/unscheduledtasks-method-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/unscheduledtasks-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/unscheduledtasks-method-cs1" %}

## Configure working time range

Working time ranges define productive hours per day, ensuring accurate scheduling calculations. Configure with [dayWorkingTime](https://ej2.syncfusion.com/react/documentation/api/gantt#dayworkingtime) sets project-wide working hours.

The following example sets working hours from 9 AM to 6 PM:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/workingTimeRange-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/workingTimeRange-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/workingTimeRange-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/workingTimeRange-cs1" %}

Non-working days represent periods when project work cannot be performed, such as weekends, holidays, or planned maintenance periods. These settings ensure realistic project scheduling by excluding non-productive time from calculations.

### Configure work week

Define which days of the week are considered working days using the [workWeek](https://ej2.syncfusion.com/react/documentation/api/gantt#workweek) property.

The following example excludes Monday and Tuesday:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-changeworkweek-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-changeworkweek-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-changeworkweek-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/how-to-changeworkweek-cs1" %}

### Weekend configuration

Configure weekends with:

- Default behavior: Saturday and Sunday are non-working.
- Timeline display: [timelineSettings.showWeekend](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings#showweekend) controls visibility.
- Working weekends: [includeWeekend](https://ej2.syncfusion.com/react/documentation/api/gantt#includeweekend) set to **true** includes weekends.

## Customize scheduling with events

Customize scheduling with:

- [dataBound](https://ej2.syncfusion.com/react/documentation/gantt/events#databound): Adjusts task scheduling after data binding, e.g., switching auto-scheduled tasks to manual mode if their start date precedes the project start date.

The following example uses `dataBound` to switch auto-scheduled tasks to manual mode if their start date is before the project start date (04/01/2025):

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/scheduling-customization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/scheduling-customization-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/scheduling-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/scheduling-customization-cs1" %}

## See also

- [How to configure task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to manage resources?](https://ej2.syncfusion.com/react/documentation/gantt/resources)
- [How to configure holidays?](https://ej2.syncfusion.com/react/documentation/gantt/holidays)
