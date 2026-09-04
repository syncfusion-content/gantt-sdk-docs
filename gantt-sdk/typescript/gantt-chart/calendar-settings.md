---
layout: post
title: Calendar Settings in TypeScript Gantt Chart Control | Syncfusion
description: Learn how to configure project and task calendars in the Syncfusion TypeScript Gantt Chart to manage working time, holidays, and scheduling.
keywords: typescript gantt task calendar, project calendar, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/calendar-settings
platform: gantt-sdk
control: Task Calendar - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Calendar Settings in TypeScript Gantt Chart Control

The Gantt Chart control supports advanced calendar configuration through the [calendarSettings](https://ej2.syncfusion.com/typescript/documentation/api/gantt/index-default#calendarsettings) property, enabling management of working hours, holidays, and task-specific scheduling. Calendar settings control how the Gantt Chart calculates task duration, determines working days, and schedules dependencies.

The [calendarSettings](https://ej2.syncfusion.com/typescript/documentation/api/gantt/index-default#calendarsettings) property contains two key configurations:

- **Project Calendar**: Defines working hours and holidays for the entire project, applied to all tasks by default
- **Task Calendars**: Defines custom working hours and holidays for specific tasks, enabling team-specific or shift-based scheduling

## Project calendar

The [calendarSettings.projectCalendar](https://ej2.syncfusion.com/typescript/documentation/api/gantt/calendarSettingsModel#projectcalendar) defines the default working hours and non-working days for the entire project. All tasks follow the project calendar unless assigned a task-specific calendar.

### Configure project working hours and exceptions

Working hours are defined per day using start and end times. The following example configures the project to have working hours from 9:00 AM to 5:00 PM with a lunch break from 12:00 PM to 1:00 PM. Calendar exceptions allow overriding working hours for specific dates, enabling custom scheduling for special working days or non-working days that don't fit the standard holiday definition:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/project-calendar/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/project-calendar/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/project-calendar" %}

### Define project holidays

Holidays are non-working dates that exclude time from task calculations. The following example defines holidays for April 10 and April 17, excluding these dates from task scheduling calculations:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/project-calendar-holiday/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/project-calendar-holiday/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/project-calendar-holiday" %}

## Task calendars

Task calendars enable specific tasks to use custom working hours and holidays instead of the project calendar. This is useful for managing work across different shifts, regions, or external teams with different availability.

### Assign task-specific calendars with exceptions

To assign a custom calendar to a task, first define the calendar in [calendarSettings.taskCalendar](https://ej2.syncfusion.com/typescript/documentation/api/gantt/calendarSettingsModel#taskcalendar), then reference it using the [calendarId](https://ej2.syncfusion.com/typescript/documentation/api/gantt/taskFieldsModel#calendarid) property in the task data. Calendar exceptions allow defining specific dates with custom working hours, enabling team-specific scheduling adjustments such as split shifts or holidays that differ from the main schedule.

When a task is assigned a calendar through `calendarId`, that task follows only the assigned task calendar. The assigned task calendar overrides the project calendar for that task. Working days, holidays, and calendar exceptions defined in the assigned calendar are used when calculating the task schedule and working duration. Other task calendars are not considered when scheduling that task.

The following example defines two task calendars with different working hours, task-specific exceptions, and assigns them to specific tasks:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar" %}

### Define task calendar holidays

Task calendars can include holidays that override project calendar holidays for the assigned task. These holidays are considered when calculating the task schedule and working duration. The following example configures a task calendar with specific holidays:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar-holiday/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar-holiday/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar-holiday" %}

## Configure hours per day for task durations

The [hoursPerDay](https://ej2.syncfusion.com/typescript/documentation/api/gantt/index-default#hoursperday) property defines the number of hours used to represent one day when calculating task durations. Changing `hoursPerDay` recalculates day-based duration values using the existing working duration of the task. This affects how duration is displayed and calculated in days, but does not modify the task's start date, end date, or underlying working duration.

For example, a task with 32 hours of working duration is displayed as 4 days when `hoursPerDay` is set to 8. If `hoursPerDay` is changed to 16, the same task is displayed as 2 days. The task schedule remains unchanged because the underlying working duration is not modified.

The following example demonstrates how changing `hoursPerDay` affects duration calculations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/hoursperday/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/hoursperday/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/hoursperday" %}

## Impact on task scheduling

Calendar settings directly affect how task duration is calculated and when tasks are scheduled:

- **Working hours**: Task durations are calculated using the configured working hours. Non-working hours are excluded from duration calculations.
- **Holidays**: Tasks skip over holiday dates, extending the end date accordingly to maintain the required working duration.
- **Weekends**: By default, weekends are treated as non-working days when [includeWeekend](https://ej2.syncfusion.com/typescript/documentation/api/gantt/index-default#includeweekend) is set to **false**.
- **Task dependencies**: Dependency calculations use the predecessor task's calendar to determine when the successor task can start.
- **Task calendars**: Tasks without an assigned task calendar follow the project calendar. Tasks with an assigned task calendar use the working hours, holidays, and exceptions defined in that calendar for scheduling and duration calculations.
- **Duration calculations**: Changing `hoursPerDay` recalculates day-based duration values without changing the scheduled start and end dates.

## See also

- [How to configure holidays?](https://help.syncfusion.com/gantt-sdk/typescript/GANTT_CHART/holidays)
- [How to include weekends in scheduling?](https://help.syncfusion.com/gantt-sdk/typescript/GANTT_CHART/task-scheduling#include-weekends)
- [How to work with task fields?](https://help.syncfusion.com/gantt-sdk/typescript/GANTT_CHART/task-scheduling#task-fields)
