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

Recurring project-calendar holidays can act as date-rule fallback for tasks assigned a task calendar, but only when the selected calendar and its valid parent chain do not claim the date. Fixed project holidays and project exceptions are not task-calendar fallback.

## Task calendars

Task calendars enable specific tasks to use custom working days and holidays instead of the project calendar. This is useful for managing work across different shifts, regions, or external teams with different availability.

### Assign task-specific calendars with exceptions

To assign a custom calendar to a task, first define it in [calendarSettings.taskCalendars](../api/gantt/calendarSettingsModel#taskcalendars), then reference it using the [calendarId](../api/gantt/taskFieldsModel#calendarid) property in the task data. Calendar exceptions allow defining specific dates with custom working days, enabling team-specific scheduling adjustments such as split shifts or holidays that differ from the main schedule.

When a task is assigned a calendar through the `calendarId` property mapped to the `CalendarId` task data field, the Gantt selects the matching task calendar and resolves its parent chain. Calendar rules are checked from the selected calendar through its nearest ancestors. A recurring project-calendar holiday is a fallback only for a date not claimed by that chain; fixed project holidays and project exceptions are not task-calendar fallback.

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

Task calendars can define holidays that affect the assigned task's schedule. A recurring project-calendar holiday can apply only when no rule in the selected calendar or its parent chain claims the date; fixed project holidays and project exceptions do not apply as task-calendar fallback. The following example configures a task calendar with specific holidays:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar-holiday/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar-holiday/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/task-calendar-holiday" %}

## Configure inherited task calendars

Use [`parentId`](../api/gantt/taskCalendarModel) to reuse working-time and date rules from another task calendar. The Gantt Chart resolves the selected task calendar first, then checks its valid parent chain from the nearest parent to higher ancestors.

Map the `calendarId` property to the `CalendarId` task data field and set its value to `"regional"` to assign the task to the regional calendar. The task inherits the company calendar's Monday-Friday work week, working time, fixed holiday, and partial working-day exception.

### Inheritance rules

| Rule | Behavior |
|---|---|
| Task calendar match | Uses the first calendar whose `calendarId` equals the value in the mapped `CalendarId` task data field. |
| Missing or unmatched ID | Uses the project calendar for working-week or working-time fallback. |
| Parent chain | Checks the selected calendar, then nearest valid parent, then higher valid ancestors. |
| [`parentId`](../api/gantt/taskCalendarModel) | References a task calendar by its `calendarId`; defaults to `null`. An empty string means no parent. |
| `workWeek` | Accepts weekday names Sunday through Saturday; defaults to `null`. An undefined value can inherit from a parent. An explicit `[]` does not: it falls back to the Gantt `workWeek`, then Monday-Friday. |
| [`workingTime`](../api/gantt/dayWorkingTimeModel) | Accepts time ranges with numeric `from` and `to` hours; defaults to `[]`. The nearest non-empty task-calendar value applies, then the project schedule. |
| [`weekWorkingTime`](../api/gantt/dayWorkingTimeModel) | Defaults to `[]`; each entry specifies a `dayOfWeek` (Sunday through Saturday) and `timeRange` of numeric `from`/`to` hours. A non-empty matching range applies first. An empty `timeRange: []` continues to an ancestor rule or normal `workingTime` resolution. |
| Date rules | Checks each calendar from nearest to farthest. At each calendar, an exception takes precedence over that calendar's holiday. A recurring project holiday applies only if no task-calendar or ancestor rule claims the date; fixed project holidays and project exceptions are not fallback. |

Across calendar levels, a nearer calendar rule takes precedence regardless of whether it is an exception or holiday; for example, a nearer ancestor holiday can take precedence over a farther ancestor exception. An empty `exceptionWorkingTime: []` does not make a date non-working; the effective calendar schedule, then the project fallback schedule, is used.

If a parent calendar does not exist, `parentId` is empty, the parent points to itself, or the parent chain contains a cycle, the invalid link is ignored. The Gantt uses valid local and inherited rules and does not continue through a cycle.

> **Note:** An empty `workWeek` does not create a calendar with zero working weekdays and does not inherit a parent's work week. The Gantt resolves it through the Gantt-level [workWeek](../api/gantt#workweek), then the Monday-Friday default.

The following sample demonstrates a regional task calendar inheriting its work week, working hours, fixed holiday, and fixed partial working-day exception from its parent company calendar:

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

The following sample demonstrates a recurring holiday and a recurring partial working-day exception on an independently assigned task calendar:

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
