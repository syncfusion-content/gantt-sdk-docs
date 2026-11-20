---
layout: post
title: Calendar Settings in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to configure project and task calendars in the Syncfusion ASP.NET Core Gantt Chart to manage working time, holidays, and scheduling.
keywords: asp.net core gantt task calendar, project calendar, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/calendar-settings
platform: gantt-sdk
control: Task Calendar - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Calendar Settings in ASP.NET Core Gantt Chart Control

The Gantt Chart control supports advanced calendar configuration through the `calendarSettings` property, enabling management of working hours, holidays, and task-specific scheduling. Calendar settings control how the Gantt Chart calculates task duration, determines working days, and schedules dependencies.

The `calendarSettings` property contains two key configurations:

- **Project Calendar**: Defines working hours and holidays for the entire project, applied to all tasks by default
- **Task Calendars**: Defines custom working days and holidays for specific tasks, enabling team-specific or shift-based scheduling

## Project calendar

The `calendarSettings.projectCalendar` defines the default working hours and non-working days for the entire project. All tasks follow the project calendar unless assigned a task-specific calendar.

### Configure project working hours and exceptions

Working hours are defined per day using start and end times. The following example configures the project to have working hours from 9:00 AM to 5:00 PM with a lunch break from 12:00 PM to 1:00 PM. Calendar exceptions allow overriding working hours for specific dates, enabling custom scheduling for special working days or non-working days that don't fit the standard holiday definition:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/project-calendar/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ProjectCalendar.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/project-calendar/projectCalendar.cs %}
{% endhighlight %}
{% endtabs %}

### Define project holidays

Holidays are non-working dates that exclude time from task calculations. The following example defines holidays for April 10 and April 17, excluding these dates from task scheduling calculations:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/project-calendar-holiday/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ProjectCalendarHoliday.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/project-calendar-holiday/projectCalendarHoliday.cs %}
{% endhighlight %}
{% endtabs %}

Recurring project-calendar holidays can act as date-rule fallbacks for tasks assigned a task calendar, but only when the selected calendar and its valid parent chain do not claim the date. Fixed project holidays and project exceptions are not task-calendar fallbacks.

## Task calendars

Task calendars enable specific tasks to use custom working days and holidays instead of the project calendar. This is useful for managing work across different shifts, regions, or external teams with different availability.

### Assign task-specific calendars with exceptions

To assign a custom calendar to a task, first define it in `CalendarSettings.TaskCalendars`, then reference it using the `CalendarId` property in the task data. Calendar exceptions allow defining specific dates with custom working days, enabling team-specific scheduling adjustments such as split shifts or holidays that differ from the main schedule.

When the `calendarId` property is mapped to the `CalendarId` task data field, the Gantt selects the matching task calendar and resolves its parent chain. Calendar rules are checked from the selected calendar through its nearest ancestors. A recurring project-calendar holiday is a fallback only for a date not claimed by that chain; fixed project holidays and project exceptions are not task-calendar fallbacks.

The following example defines two task calendars with different working days, task-specific exceptions, and assigns them to specific tasks:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/task-calendar/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TaskCalendar.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/task-calendar/taskCalendar.cs %}
{% endhighlight %}
{% endtabs %}

### Define task calendar holidays

Task calendars can define holidays that affect the assigned task's schedule. A recurring project-calendar holiday can apply only when no rule in the selected calendar or its parent chain claims the date; fixed project holidays and project exceptions do not apply as task-calendar fallbacks. The following example configures a task calendar with specific holidays:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/task-calendar-holiday/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TaskCalendarHoliday.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/task-calendar-holiday/taskCalendarHoliday.cs %}
{% endhighlight %}
{% endtabs %}

## Configure inherited task calendars

Use `ParentId` to inherit working-time and date rules from another task calendar. It references another calendar by its `CalendarId` and defaults to `null`. The Gantt resolves the selected task calendar first, then checks the nearest valid parent and higher ancestors.

For the component-level calendar API, see [CalendarSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_CalendarSettings). The task-calendar properties and recurrence options are described below.

Map the `calendarId` property (C# `CalendarId`) to the task data field that contains `"company"` or `"regional"`. A missing, empty, or unmatched task calendar ID uses the project calendar for working-week or working-time fallback.

### Inheritance rules

| Rule | Behavior |
|---|---|
| Task calendar match | Uses the first calendar whose `CalendarId` equals the value in the mapped `CalendarId` task data field. |
| Missing or unmatched ID | Uses the project calendar for working-week or working-time fallback. |
| Parent chain | Checks the selected calendar, nearest valid parent, then higher valid ancestors. |
| `WorkWeek` | Accepts weekday names Sunday through Saturday; defaults to `null`. An undefined value can inherit from a parent. An explicit `[]` does not: it falls back to the Gantt `workWeek`, then Monday-Friday. |
| `WorkingTime` | Accepts time ranges with numeric `from` and `to` hours; defaults to `[]`. The nearest non-empty task-calendar value applies, then the project schedule. |
| `WeekWorkingTime` | Defaults to `[]`; each entry specifies a `DayOfWeek` (Sunday through Saturday) and `TimeRange` of numeric `from`/`to` hours. A non-empty matching range applies first. An empty `TimeRange: []` continues to an ancestor rule or normal `WorkingTime` resolution. |
| Date rules | Checks each calendar from nearest to farthest. At each calendar, an exception takes precedence over that calendar's holiday. A recurring project holiday applies only if no task-calendar or ancestor rule claims the date; fixed project holidays and project exceptions are not fallbacks. |

Across calendar levels, a nearer calendar rule takes precedence regardless of whether it is an exception or holiday; for example, a nearer ancestor holiday can take precedence over a farther ancestor exception. An empty `ExceptionWorkingTime: []` does not make a date non-working; the effective calendar schedule, then the project fallback schedule, is used.

If a parent calendar does not exist, `ParentId` is empty, the parent points to itself, or the parent chain contains a cycle, the invalid link is ignored. The Gantt uses valid local and inherited rules and does not continue through a cycle.

> **Note:** An empty `WorkWeek` does not create a calendar with zero working weekdays and does not inherit a parent's work week. The Gantt resolves it through the Gantt-level `workWeek`, then the Monday-Friday default.

The following sample demonstrates a regional task calendar inheriting its work week, working hours, fixed holiday, and fixed partial working-day exception from its parent company calendar:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/calendar-inheritance/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TaskCalendar.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/calendar-inheritance/taskCalendar.cs %}
{% endhighlight %}
{% endtabs %}

## Configure recurring holidays and exceptions

The `Recurrence` property defaults to `null`. Set it on a holiday or calendar exception to repeat the record from the anchor `From` date. `To` defines the inclusive source span repeated for every occurrence. If `To` is omitted, only the anchor date is repeated. These options are configured through the Gantt [CalendarSettings API](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_CalendarSettings).

### Recurrence properties

| Property | Type | Default | Purpose |
|---|---|---|---|
| `Frequency` | `daily` \| `weekly` \| `monthly` \| `yearly` | `null` | Required recurrence pattern. |
| `Interval` | `number` | `1` | Positive number of frequency periods between starts. |
| `DaysOfWeek` | `DayOfWeek[]` | `null` | Unique weekday names from Sunday through Saturday for weekly or ordinal recurrence. |
| `DayOfMonth` | `number` \| `"last"` | `null` | Day for monthly or yearly recurrence. |
| `WeekOfMonth` | `number` \| `"last"` | `null` | Ordinal week used with one weekday. |
| `Month` | `number` | `null` | Month number from `1` to `12` for yearly recurrence. |
| `Count` | `number` | `null` | Positive number of occurrence starts, including the anchor. |
| `Until` | `Date` \| `string` | `null` | Inclusive termination date for occurrence starts. |

> **Note:** The Type column lists the underlying JavaScript API types used by the ASP.NET Core wrapper.

By default, weekly recurrence uses the anchor weekday when `DaysOfWeek` is omitted; monthly recurrence uses the anchor day when no selector is specified; yearly recurrence uses the anchor month and day when no selector is specified.

Use `Count` or `Until`, but not both. Selectors must match their frequency: `DaysOfWeek` contains unique, case-sensitive weekday names from Sunday through Saturday; monthly or yearly ordinal rules use exactly one weekday with `WeekOfMonth` set to `1`-`4` or `"last"`; `DayOfMonth` is `1`-`31` or `"last"`; and yearly `Month` is `1`-`12`. Do not combine `DayOfMonth` with `DaysOfWeek` or `WeekOfMonth`. When recurrence is configured, `From` is required and must match any specified weekday, day, ordinal, or yearly month. If supplied, `To` must be the same as or later than `From`. `Interval` and `Count` must be positive integers; `Until` must be a valid date not before `From`.

Recurrence dates are parsed as dates and normalized using local date interpretation. Date-only values can behave differently across environment time zones, so provide dates consistently when working across time zones.

Recurrence is evaluated only as needed for the scheduling window and repeats the source `From`-`To` span.

For monthly rules on day 29-31, months without the selected day are skipped; a yearly February 29 rule skips non-leap years. Skipped dates do not consume `Count`. On initialization, an invalid recurrence with valid source dates is reported through [`actionFailure`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ActionFailure) and treated as a one-time fixed-date rule; a record with invalid dates is skipped. If an invalid recurrence is introduced by a calendar update, `actionFailure` reports the error and the previous calendar configuration is retained.

The following sample demonstrates a recurring holiday and a recurring partial working-day exception on an independently assigned task calendar:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/calendar-recurrence/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TaskCalendar.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/calendar-recurrence/taskCalendar.cs %}
{% endhighlight %}
{% endtabs %}

## Calendar limitations

- `WorkWeek: []` cannot represent zero working weekdays.
- Recurrence expansion extends up to 100 years after the scheduling evaluation window ends; occurrences beyond that period are not generated.
- No per-resource calendar lookup is available.

## Configure hours per day for task durations

The `hoursPerDay` property defines the number of hours used to represent one day when calculating task durations. Changing `hoursPerDay` recalculates day-based duration values using the existing working duration of the task. This affects how duration is displayed and calculated in days, but does not modify the task's start date, end date, or underlying working duration.

For example, a task with 32 hours of working duration is displayed as 4 days when `hoursPerDay` is set to 8. If `hoursPerDay` is changed to 16, the same task is displayed as 2 days. The task schedule remains unchanged because the underlying working duration is not modified.

The following example demonstrates how changing `hoursPerDay` affects duration calculations.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/hoursperday/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="HoursPerDay.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/hoursperday/hoursperday.cs %}
{% endhighlight %}
{% endtabs %}

> **Note:** The default `hoursPerDay` value is **8 hours**. When a task has 4 days duration with the `hoursPerDay` value of 6, the total working hours = 4 days × 6 hours = **24 hours**. If the calendar's working time is configured as 24 hours (0:00 to 24:00), these 24 hours fit within a single calendar day, so the task displays as **1 calendar day** on the chart, even though the duration specification is 4 days.

## Impact on task scheduling

Calendar settings directly affect how task duration is calculated and when tasks are scheduled. Changes recalculate task schedules, durations, dependencies, and chart rendering.

- **Working hours**: Task durations ignore non-working hours. A 2-day task completed during 9 AM-5 PM working hours uses the same elapsed time as a 2-day task across multiple days with shorter working hours
- **Holidays**: Tasks skip over holiday dates, extending the end date accordingly to maintain the required working duration
- **Weekends**: By default, weekends are treated as non-working days when `includeWeekend` is set to **false**
- **Task dependencies**: Dependency calculations use the predecessor task's calendar to determine when the successor task can start
- **Task calendars**: Tasks without an assigned task calendar follow the project calendar. Tasks with an assigned task calendar use the selected and inherited calendar rules, with project working-time fallback where applicable. Recurring project holidays apply only to dates not claimed by those task calendars; fixed project holidays and project exceptions are not fallbacks.
- **Duration calculations**: Changing `hoursPerDay` recalculates day-based duration values without changing the scheduled start and end dates.

## See also

- [How to configure holidays?](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/holidays)
- [How to include weekends in scheduling?](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/scheduling-tasks#weekendnon-working-days)
