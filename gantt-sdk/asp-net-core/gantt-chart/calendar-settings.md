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

- **Project Calendar**: Defines the default daily working hours, holidays, and exceptions.
- **Task Calendars**: Define working days, hours, holidays, and exceptions for tasks with a matching `CalendarId`.

## Project calendar

The `CalendarSettings.ProjectCalendar` defines default daily working hours and date rules for tasks without a matching task calendar. Configure the default weekdays with the global `WorkWeek` property, and use `IncludeWeekend` to include or exclude weekend days from task-duration calculations. These are Gantt properties, not members of `ProjectCalendar`.

### Configure project working hours and exceptions

Set the default daily working hours in the project calendar's `WorkingTime` collection. Each range uses numeric `from` and `to` hour values; use multiple ranges to represent breaks. Tasks without an assigned task calendar use the project calendar's working hours.

Project calendar exceptions override the project calendar's standard working hours or non-working status on specific dates. Use them to define custom working hours for an otherwise non-working date or to change the hours for a particular date. The following example sets the Gantt work week and weekend behavior, then defines project working hours and a date-specific exception:

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

## Task calendars

Task calendars define working days, hours, holidays, and exceptions for tasks assigned to them. Use them when a team follows a different schedule from the project calendar; the project calendar's working-time settings may still provide fallback for working-time settings the task calendar does not define.

A task uses a task calendar only when its mapped `CalendarId` matches an entry in `CalendarSettings.TaskCalendars`. Without a match, the Gantt-level `WorkWeek` and `IncludeWeekend` settings and project `WorkingTime` determine its working schedule, and project-calendar holidays and exceptions apply. A matching task calendar uses its own date rules; fixed project holidays and exceptions are not copied to that task.

| Task calendar selection | Working days and hours | Holidays and exceptions |
|---|---|---|
| No matching task calendar | Uses Gantt-level `WorkWeek` and `IncludeWeekend` with project `WorkingTime`. | Project-calendar holidays and exceptions apply. |
| Matching task calendar | Uses the selected task calendar's schedule. Unset values first follow the inheritance rules below; values still unresolved use Gantt-level `WorkWeek` or project `WorkingTime`. Listed `WeekWorkingTime` days override normal working-time ranges. | Uses date rules defined for the selected task calendar. Fixed project holidays and project exceptions do not apply. |

The task-calendar holiday sample demonstrates this distinction using its actual records. **Project Calendar Work** has no matching task calendar, so the project calendar's fixed **Regional Holiday** on April 10 and **Project extended hours** exception on April 17 apply to it. **Local Team Work** uses `local-team`, which defines **Local Holiday** on April 6. **Offshore Team Work** uses `offshore-team`, which defines **Offshore Holiday** on April 8. Both assigned tasks span April 10 and 17, but the project holiday and exception do not apply to them; they use date rules defined for their selected calendars. Project working-time settings may still provide schedule fallback. Recurring project holidays have a separate fallback rule described in the inheritance section.

### Configure working days and hours for task calendars

Use a task calendar when a team follows a schedule that differs from the project calendar. Configure the schedule on an entry in `CalendarSettings.TaskCalendars`:

- `WorkWeek` lists the calendar's working weekdays, using names from Sunday through Saturday.
- `WorkingTime` sets the standard daily hours with numeric `from` and `to` values.
- `WeekWorkingTime` sets different hours for specific weekdays using `DayOfWeek` and `TimeRange`. Each entry replaces the complete schedule for that weekday.

In this example, both tasks use the `day-shift` calendar. It works Monday through Friday, uses a split schedule on Monday, and has shorter hours on Friday:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/calendar-working-schedule/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TaskCalendarWorkingSchedule.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/calendar-working-schedule/taskCalendarWorkingSchedule.cs %}
{% endhighlight %}
{% endtabs %}

### Assign task-specific calendars with exceptions

To assign a custom calendar to a task, define it in `CalendarSettings.TaskCalendars`, then reference it using the `CalendarId` property in the task data. Task calendars can define their own working weekdays, hours, holidays, and date-specific exceptions.

An exception without `ExceptionWorkingTime`, or with `ExceptionWorkingTime: []`, keeps the effective calendar schedule for the date. For example, the **Team Meeting Day** record below adds a label but does not close the day. To make the full date non-working, define a holiday instead.

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

Task calendars can define holidays that affect the assigned task's schedule. The following example sets a project-calendar holiday and exception, then defines separate holidays for two task calendars to show how the rules apply to tasks with and without a matching task calendar:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/task-calendar-holiday/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TaskCalendarHoliday.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/task-calendar-holiday/taskCalendarHoliday.cs %}
{% endhighlight %}
{% endtabs %}

## Configure task calendar inheritance

The task's mapped `CalendarId` selects the task calendar used for scheduling. To reuse settings, set `ParentId` on that calendar to another task calendar's `CalendarId`. The parent supplies settings that the selected calendar does not define; it does not make project-calendar holidays or exceptions apply to the task.

The Gantt checks the assigned calendar first, then its parents from nearest to farthest. A value set on the child takes precedence; if it is not set, the nearest parent definition applies. This inheritance applies to `WorkWeek`, `WorkingTime`, `WeekWorkingTime`, `Holidays`, and `Exceptions`.

| Setting | Resolution for the selected task calendar |
|---|---|
| `WorkWeek` | An undefined value can inherit the nearest defined value in the task-calendar chain. An explicit `WorkWeek: []` does not inherit; it falls back to the global `WorkWeek`, then the Monday-Friday default. |
| `WorkingTime` | An empty or undefined value uses the nearest non-empty task-calendar value, then `CalendarSettings.ProjectCalendar.WorkingTime`. |
| `WeekWorkingTime` | A non-empty entry replaces the full schedule for its `DayOfWeek`. If that weekday is omitted, the nearest ancestor entry is used; otherwise, normal `WorkingTime` resolution applies. An entry with `TimeRange: []` continues to the nearest ancestor entry, then normal `WorkingTime` resolution. |
| Date rules | The nearest calendar's rule wins across the chain. Within the same calendar, an exception takes precedence over a holiday. Therefore, a nearer calendar's holiday can take precedence over a farther ancestor's exception. |

An exception with omitted or empty `ExceptionWorkingTime` uses the effective schedule rather than making the date non-working. When a working-time setting is still unresolved after checking the task-calendar chain, `CalendarSettings.ProjectCalendar.WorkingTime` supplies the fallback. Global `WorkWeek` supplies the weekday fallback.

A recurring project-calendar holiday is considered only when neither the assigned task calendar nor any calendar it inherits from defines a holiday or exception for that date. Fixed project-calendar holidays and project-calendar exceptions are not used as task-calendar fallback.

Missing parent references, self-references, and parent cycles are ignored.

The following sample assigns **Regional Inherited Schedule** to the `regional` task calendar, which inherits its schedule and date rules from the `company` calendar:

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

Use `Count` to limit the number of occurrence starts or `Until` to set an inclusive termination date. Do not use `Count` and `Until` together.

### Recurrence properties

| Property | Type | Default | Purpose |
|---|---|---|---|
| `Frequency` | `daily` \| `weekly` \| `monthly` \| `yearly` | `null` | Required recurrence pattern. |
| `Interval` | `number` | `1` | Positive number of frequency periods between starts. |
| `DaysOfWeek` | `DayOfWeek[]` | `null` | Unique weekday names from Sunday through Saturday for weekly or ordinal recurrence. |
| `DayOfMonth` | `number` \| `"last"` | `null` | Day for monthly or yearly recurrence. |
| `WeekOfMonth` | `number` \| `"last"` | `null` | Ordinal week used with exactly one weekday. |
| `Month` | `number` | `null` | Month number from `1` to `12` for yearly recurrence. |
| `Count` | `number` | `null` | Positive number of occurrence starts, including the anchor. |
| `Until` | `Date` \| `string` | `null` | Inclusive termination date for occurrence starts. |

### Recurrence pattern examples

The examples below show the recurrence object configured in the Tag Helper; set the record's `from` date to match the selected weekday, day, ordinal, or month.

| Pattern | Example |
|---|---|
| Daily | `{ frequency: "daily", interval: 1 }` |
| Weekly on Monday and Wednesday | `{ frequency: "weekly", daysOfWeek: ["Monday", "Wednesday"] }` |
| Second Monday of each month | `{ frequency: "monthly", daysOfWeek: ["Monday"], weekOfMonth: 2 }` |
| April 10 each year | `{ frequency: "yearly", month: 4, dayOfMonth: 10 }` |
| February 29 each year | `{ frequency: "yearly", month: 2, dayOfMonth: 29 }` — occurrences are skipped in non-leap years. |

For a weekly recurrence, use `{ frequency: "weekly", daysOfWeek: ["Monday"], count: 8 }` or `{ frequency: "weekly", daysOfWeek: ["Monday"], until: new Date(2026, 5, 30) }` as the end condition.

Use `Count` or `Until`, but not both. Selectors must match their frequency: `DaysOfWeek` contains unique, case-sensitive weekday names from Sunday through Saturday; monthly or yearly ordinal rules use exactly one weekday with `WeekOfMonth` set to `1`-`4` or `"last"`; `DayOfMonth` is `1`-`31` or `"last"`; and yearly `Month` is `1`-`12`. Do not combine `DayOfMonth` with `DaysOfWeek` or `WeekOfMonth`. When recurrence is configured, `From` is required and must match any specified weekday, day, ordinal, or yearly month. If supplied, `To` must be the same as or later than `From`. `Interval` and `Count` must be positive integers; `Until` must be a valid date not before `From`.

Recurrence dates are parsed as dates and normalized using local date interpretation. Date-only values can behave differently across environment time zones, so provide dates consistently when working across time zones.

Recurrence is evaluated only as needed for the scheduling window and repeats the source `From`-`To` span.

For monthly rules on day 29-31, months without the selected day are skipped; a yearly February 29 rule skips non-leap years. Skipped dates do not consume `Count`. On initialization, an invalid recurrence with valid source dates is reported through [`actionFailure`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ActionFailure) and treated as a one-time fixed-date rule; a record with invalid dates is skipped. If an invalid recurrence is introduced by a calendar update, `actionFailure` reports the error and the previous calendar configuration is retained.

The following sample demonstrates a holiday repeated three times using `Count` and a partial working-day exception repeated through June 17 using `Until`:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/calendar-recurrence/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TaskCalendar.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/calendar-settings/calendar-recurrence/taskCalendar.cs %}
{% endhighlight %}
{% endtabs %}

## Calendar limitations

- A task calendar cannot represent zero working weekdays with `WorkWeek: []`.
- Recurrence expansion extends up to 100 years after the scheduling evaluation window ends; occurrences beyond that period are not generated.
- No resource-specific calendar lookup is available.

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

- **Working hours**: Task durations are calculated using the configured working hours. Non-working hours are excluded from duration calculations.
- **Holidays**: Tasks skip over holiday dates, extending the end date accordingly to maintain the required working duration
- **Weekends**: By default, weekends are treated as non-working days when `includeWeekend` is set to **false**
- **Task dependencies**: Dependency calculations use the predecessor task's calendar to determine when the successor task can start
- **Task calendars**: If no task calendar matches the task's `CalendarId`, the project calendar's configured working days, working hours, holidays, and exceptions apply. If one matches, Gantt applies that task calendar to the task. Settings it does not define may come from task-calendar inheritance or project working-time fallback. Fixed project holidays and exceptions do not apply to that task; a recurring project holiday can apply only when no rule in its task-calendar chain covers the date.
- **Duration calculations**: Changing `hoursPerDay` recalculates day-based duration values without changing the scheduled start and end dates.

## See also

- [How to configure holidays?](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/holidays)
- [How to include weekends in scheduling?](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/scheduling-tasks#weekendnon-working-days)
