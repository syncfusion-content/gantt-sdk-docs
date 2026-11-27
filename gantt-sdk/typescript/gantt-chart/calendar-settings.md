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
appliesto: UI Component Suite, Gantt SDK
---

# Calendar Settings in TypeScript Gantt Chart Control

The Gantt Chart control supports advanced calendar configuration through the [calendarSettings](../api/gantt#calendarsettings) property, enabling management of working hours, holidays, and task-specific scheduling. Calendar settings control how the Gantt Chart calculates task duration, determines working days, and schedules dependencies.

The [calendarSettings](../api/gantt#calendarsettings) property contains two key configurations:

- **Project Calendar**: Defines working hours and holidays for the entire project, applied to all tasks by default
- **Task Calendars**: Defines custom working days and holidays for specific tasks, enabling team-specific or shift-based scheduling

## Project calendar

The [calendarSettings.projectCalendar](../api/gantt/calendarSettingsModel#projectcalendar) defines the default working hours and non-working days for the entire project. All tasks follow the project calendar unless assigned a task-specific calendar.

### Configure project working hours and exceptions

Set the default daily working hours in [calendarSettings.projectCalendar.workingTime](../api/gantt/calendarSettingsModel#projectcalendar). Each range uses numeric `from` and `to` hours; use multiple ranges to represent breaks, such as `[{ from: 9, to: 12 }, { from: 13, to: 17 }]`. Tasks without an assigned task calendar use the project calendar's working hours.

Calendar exceptions override the normal project schedule on specific dates. Use them to define custom working hours for an otherwise non-working date or to change the hours for a particular date. The following example defines the project's standard working hours and a date-specific exception:

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

Task calendars enable specific tasks to use custom working days and holidays instead of the project calendar. This is useful for managing work across different shifts, regions, or external teams with different availability.

### Configure working days and hours for task calendars

Use a task calendar when a team follows a schedule that differs from the project calendar. Configure the schedule on an entry in [calendarSettings.taskCalendars](../api/gantt/calendarSettingsModel#taskcalendars):

- [workWeek](../api/gantt/taskCalendarModel#workweek) lists the calendar's working weekdays, using names from Sunday through Saturday.
- [workingTime](../api/gantt/taskCalendarModel#workingtime) sets the standard daily hours with numeric `from` and `to` values.
- [weekWorkingTime](../api/gantt/taskCalendarModel#weekworkingtime) sets different hours for specific weekdays using `dayOfWeek` and `timeRange`. Each entry replaces the complete schedule for that weekday.

In this example, both tasks use the `day-shift` calendar. It works Monday through Friday, uses a split schedule on Monday, and has shorter hours on Friday:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/calendar-working-schedule/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/calendar-working-schedule/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/calendar-working-schedule" %}

### Assign task-specific calendars with exceptions

To assign a custom calendar to a task, define it in [calendarSettings.taskCalendars](../api/gantt/calendarSettingsModel#taskcalendars), then reference it using the [calendarId](../api/gantt/taskFieldsModel#calendarid) property in the task data. Task calendars can define their own working weekdays, hours, holidays, and date-specific exceptions.

The following example defines two task calendars with different working days, task-specific exceptions, and assigns them to specific tasks:

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

Task calendars can define holidays that affect the assigned task's schedule. The following example configures a task calendar with specific holidays:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar-holiday/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar-holiday/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar-holiday" %}

## Inherit schedules and date rules from a parent task calendar

To avoid repeating the same rules, set [`parentId`](../api/gantt/taskCalendarModel) on a child calendar to the parent's `calendarId`. Assign a task to the child using the mapped `calendarId` field.

The Gantt checks the assigned calendar first, then its parents from nearest to farthest. A value set on the child takes precedence; if it is not set, the nearest parent definition applies. This inheritance applies to `workWeek`, `workingTime`, `weekWorkingTime`, holidays, and exceptions.

Each `weekWorkingTime` entry replaces the complete schedule for that weekday. A weekday omitted by the child inherits the nearest parent's entry, or uses the calendar's `workingTime` if no parent defines it. An explicit `workWeek: []` does not inherit a parent's work week; it falls back to the project work week.

For dates, the Gantt checks each calendar from nearest to farthest. An exception takes precedence over a holiday in the same calendar. A recurring project-calendar holiday applies only when no calendar in the chain claims the date; fixed project holidays and project exceptions are not task-calendar fallback. An empty `exceptionWorkingTime: []` uses the effective working schedule instead of making the date non-working.

Missing parent references, self-references, and parent cycles are ignored.

The following sample demonstrates a regional task calendar inheriting its schedule and date rules from a company calendar:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/calendar-inheritance/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/calendar-inheritance/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/calendar-inheritance" %}

## Configure recurring holidays and exceptions

The `recurrence` property defaults to `null`. Set it on a [holiday](../api/gantt/holidayModel) or [calendar exception](../api/gantt/calendarExceptionModel) to repeat the record from the anchor `from` date. The `to` date defines the inclusive span repeated for every occurrence. If `to` is omitted, only the anchor date is repeated. The recurrence options below supplement these record properties.

Use `count` to limit the number of occurrence starts or `until` to set an inclusive termination date. Do not use `count` and `until` together.

### Recurrence properties

| Property | Type | Default | Purpose |
|---|---|---|---|
| `frequency` | `daily` \| `weekly` \| `monthly` \| `yearly` | `null` | Required recurrence pattern. |
| `interval` | `number` | `1` | Positive number of frequency periods between starts. |
| `daysOfWeek` | `DayOfWeek[]` | `null` | Unique weekday names from Sunday through Saturday for weekly or ordinal recurrence. |
| `dayOfMonth` | `number` \| `"last"` | `null` | Day for monthly or yearly recurrence. |
| `weekOfMonth` | `number` \| `"last"` | `null` | Ordinal week used with exactly one weekday. |
| `month` | `number` | `null` | Month number from `1` to `12` for yearly recurrence. |
| `count` | `number` | `null` | Positive number of occurrence starts, including the anchor. |
| `until` | `Date` \| `string` | `null` | Inclusive termination date for occurrence starts. |

Valid recurrence selectors include:

- **Daily:** repeat every positive `interval` days.
- **Weekly:** repeat on `daysOfWeek`; if omitted, use the anchor weekday.
- **Monthly:** use `dayOfMonth`, an ordinal weekday and `weekOfMonth`, or the anchor day.
- **Yearly:** use `month` and a day or ordinal weekday, or repeat from the anchor month and day.

Selectors must match their frequency: `daysOfWeek` contains unique, case-sensitive weekday names from Sunday through Saturday; monthly or yearly ordinal rules use exactly one weekday with `weekOfMonth` set to `1`-`4` or `"last"`; `dayOfMonth` is `1`-`31` or `"last"`; and yearly `month` is `1`-`12`. Do not combine `dayOfMonth` with `daysOfWeek` or `weekOfMonth`. When recurrence is configured, `from` is required and must match any specified weekday, day, ordinal, or yearly month. If supplied, `to` must be the same as or later than `from`. `interval` and `count` must be positive integers; use either `count` or a valid `until` date not before `from`.

Recurrence dates are parsed as dates and normalized using local date interpretation. Date-only values can behave differently across environment time zones, so provide dates consistently when working across time zones.

For monthly rules on day 29-31, months without the selected day are skipped; a yearly February 29 rule skips non-leap years. Skipped dates do not consume `count`. Recurrence is evaluated only as needed for the scheduling window and repeats the source `from`-`to` span. On initialization, an invalid recurrence with valid source dates is reported through the [actionFailure event](../api/gantt#actionfailure) and treated as a one-time fixed-date rule; a record with invalid dates is skipped. If an invalid recurrence is introduced by a calendar update, `actionFailure` reports the error and the previous calendar configuration is retained.

The following sample demonstrates a holiday repeated three times using `count` and a partial working-day exception repeated through June 17, 2026 using `until`:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/calendar-recurrence/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/calendar-recurrence/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/calendar-recurrence" %}

## Calendar limitations

- A task calendar cannot represent zero working weekdays with `workWeek: []`.
- Recurrence expansion extends up to 100 years after the scheduling evaluation window ends; occurrences beyond that period are not generated.
- No resource-specific calendar lookup is available.

## Configure hours per day for task durations

The [hoursPerDay](../api/gantt#hoursperday) property defines the number of hours used to represent one day when calculating task durations. Changing `hoursPerDay` recalculates day-based duration values using the existing working duration of the task. This affects how duration is displayed and calculated in days, but does not modify the task's start date, end date, or underlying working duration.

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

> **Note:** The default `hoursPerDay` value is **8 hours**. When a task has 4 days duration with the `hoursPerDay` value of 6, the total working hours = 4 days × 6 hours = **24 hours**. If the calendar's working time is configured as 24 hours (0:00 to 24:00), these 24 hours fit within a single calendar day, so the task displays as **1 calendar day** on the chart, even though the duration specification is 4 days.

## Impact on task scheduling

Calendar settings directly affect how task duration is calculated and when tasks are scheduled. Changes recalculate task schedules, durations, dependencies, and chart rendering.

- **Working hours**: Task durations are calculated using the configured working hours. Non-working hours are excluded from duration calculations.
- **Holidays**: Tasks skip over holiday dates, extending the end date accordingly to maintain the required working duration.
- **Weekends**: By default, weekends are treated as non-working days when [includeWeekend](../api/gantt#includeweekend) is set to **false**.
- **Task dependencies**: Dependency calculations use the predecessor task's calendar to determine when the successor task can start.
- **Task calendars**: Tasks without an assigned task calendar follow the project calendar. Tasks with an assigned task calendar use the selected and inherited calendar rules, with project working-time fallback where applicable. Recurring project holidays apply only to dates not claimed by those task calendars; fixed project holidays and project exceptions are not fallback.
- **Duration calculations**: Changing `hoursPerDay` recalculates day-based duration values without changing the scheduled start and end dates.

## See also

- [How to configure holidays?](https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/holidays)
- [How to include weekends in scheduling?](https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/scheduling-tasks#weekend-configuration)
