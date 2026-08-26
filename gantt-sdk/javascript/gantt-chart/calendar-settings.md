---
layout: post
title: Calendar Settings in JavaScript Gantt Chart Control | Syncfusion
description: Learn how to configure project and task calendars in the Syncfusion JavaScript Gantt Chart to manage working time, holidays, and scheduling.
keywords: javascript gantt task calendar, project calendar, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/calendar-settings
platform: gantt-sdk
control: Task Calendar - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Calendar Settings in JavaScript Gantt Chart Control

The Gantt Chart control supports advanced calendar configuration through the [calendarSettings](../api/gantt#calendarsettings) property, enabling management of working hours, holidays, and task-specific scheduling. Calendar settings control how the system calculates task duration, determines working days, and schedules dependencies.

The [calendarSettings](../api/gantt#calendarsettings) property contains two key configurations:

- **Project Calendar**: Defines working hours and holidays for the entire project, applied to all tasks by default
- **Task Calendars**: Defines custom working hours and holidays for specific tasks, enabling team-specific or shift-based scheduling

## Project calendar

The project calendar defines the default working hours and non-working days for the entire project. All tasks follow the project calendar unless assigned a task-specific calendar.

### Configure project working hours and exceptions

Working hours are defined per day using start and end times. The following example configures the project to have working hours from 9:00 AM to 5:00 PM with a lunch break from 12:00 PM to 1:00 PM. Calendar exceptions allow overriding working hours for specific dates, enabling custom scheduling for special working days or non-working days that don't fit the standard holiday definition:

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/project-calendar/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/project-calendar/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/project-calendar" %}

### Define project holidays

Holidays are non-working dates that exclude time from task calculations. The following example defines holidays for April 10 and April 17, excluding these dates from task scheduling calculations:

{% if page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/project-calendar-holiday/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/project-calendar-holiday/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/project-calendar-holiday" %}

## Task calendars

Task calendars enable specific tasks to use custom working hours and holidays, distinct from the project calendar. This is useful for managing work across different shifts, regions, or external teams with different availability.

### Assign task-specific calendars with exceptions

To assign a custom calendar to a task, first define the calendar in [calendarSettings.taskCalendars](../api/gantt/calendarSettingsModel#taskcalendars), then reference it using the [calendarId](../api/gantt/taskFieldsModel#calendarid) property in the task data. Calendar exceptions allow defining specific dates with custom working hours, enabling team-specific scheduling adjustments such as split shifts or holidays that differ from the main schedule.

The following example defines two task calendars with different working hours, task-specific exceptions, and assigns them to specific tasks:

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/task-calendar/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/task-calendar/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/task-calendar" %}

### Define task calendar holidays

Task calendars can include holidays that supersede project holidays for that specific task. The following example configures a task calendar with specific holidays:

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/task-calendar-holiday/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/task-calendar-holiday/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/task-calendar-holiday" %}

## Impact on task scheduling

Calendar settings directly affect how task duration is calculated and when tasks are scheduled:

- **Working hours**: Task durations ignore non-working hours. A 2-day task completed during 9 AM-5 PM working hours uses the same elapsed time as a 2-day task across multiple days with shorter working hours
- **Holidays**: Tasks skip over holiday dates, extending the end date accordingly to maintain the required working duration
- **Weekends**: By default, weekends are treated as non-working days when [includeWeekend](../api/gantt#includeweekend) is set to **false**
- **Task dependencies**: Dependency calculations use the predecessor task's calendar to determine when the successor task can start

## See also

- [How to configure holidays?](../gantt/holidays)
- [How to include weekends in scheduling?](../gantt/task-scheduling#include-weekends)
- [How to work with task fields?](../gantt/task-scheduling#task-fields)
