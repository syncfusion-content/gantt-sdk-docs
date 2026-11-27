---
layout: post
title: Calendar Settings in React Gantt Chart Component | Syncfusion
description: Learn how to configure project and task calendars in the Syncfusion React Gantt Chart to manage working time, holidays, and scheduling.
keywords: react gantt task calendar, project calendar, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/react/gantt-chart/calendar-settings
platform: gantt-sdk
control: Task Calendar - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Calendar Settings in React Gantt Chart Component

The Gantt Chart component supports advanced calendar configuration through the [calendarSettings](https://ej2.syncfusion.com/react/documentation/api/gantt#calendarsettings) property, enabling management of working hours, holidays, and task-specific scheduling. Calendar settings control how the Gantt Chart calculates task duration, determines working days, and schedules dependencies.

The [calendarSettings](https://ej2.syncfusion.com/react/documentation/api/gantt#calendarsettings) property contains two key configurations:

- **Project Calendar**: Defines the default daily working hours, holidays, and exceptions.
- **Task Calendars**: Define working days, hours, holidays, and exceptions for tasks with a matching `calendarId`.

## Project calendar

The [calendarSettings.projectCalendar](https://ej2.syncfusion.com/react/documentation/api/gantt/calendarSettingsModel#projectcalendar) defines default daily working hours and date rules for tasks without a matching task calendar. Configure the default weekdays with the global [workWeek](https://ej2.syncfusion.com/react/documentation/api/gantt#workweek) property, and use [includeWeekend](https://ej2.syncfusion.com/react/documentation/api/gantt#includeweekend) to include or exclude weekend days from task-duration calculations. These are Gantt properties, not members of `projectCalendar`.

### Configure project working hours and exceptions

Set the default daily working hours in [calendarSettings.projectCalendar.workingTime](https://ej2.syncfusion.com/react/documentation/api/gantt/calendarSettingsModel#projectcalendar). Each range uses numeric `from` and `to` hours; use multiple ranges to represent breaks, such as `[{ from: 9, to: 12 }, { from: 13, to: 17 }]`. Tasks without an assigned task calendar use the project calendar's working hours.

Project calendar exceptions override the project calendar's standard working hours or non-working status on specific dates. Use them to define custom working hours for an otherwise non-working date or to change the hours for a particular date. The following example sets the Gantt work week and weekend behavior, then defines project working hours and a date-specific exception:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/project-calendar/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/project-calendar/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/project-calendar/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/project-calendar" %}

### Define project holidays

Holidays are non-working dates that exclude time from task calculations. The following example defines holidays for April 10 and April 17, excluding these dates from task scheduling calculations:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/project-calendar-holiday/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/project-calendar-holiday/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/project-calendar-holiday/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/project-calendar-holiday" %}

## Task calendars

Task calendars define working days, hours, holidays, and exceptions for tasks assigned to them. Use them when a team follows a different schedule from the project calendar; the project calendar's working-time settings may still provide fallback for working-time settings the task calendar does not define.

A task uses a task calendar only when its mapped `calendarId` matches an entry in [calendarSettings.taskCalendars](https://ej2.syncfusion.com/react/documentation/api/gantt/calendarSettingsModel#taskcalendars). Without a match, the global `workWeek` and `includeWeekend` settings and `projectCalendar.workingTime` determine its working schedule, and project-calendar holidays and exceptions apply. A matching task calendar uses its own date rules; fixed project holidays and exceptions are not copied to that task.

| Task calendar selection | Working days and hours | Holidays and exceptions |
|---|---|---|
| No matching task calendar | Uses global `workWeek` and `includeWeekend` with `projectCalendar.workingTime`. | Project-calendar holidays and exceptions apply. |
| Matching task calendar | Uses the selected task calendar's schedule. Unset values first follow the inheritance rules below; values still unresolved use global `workWeek` or `projectCalendar.workingTime`. Listed `weekWorkingTime` days override the normal working-time ranges. | Uses date rules defined for the selected task calendar. Fixed project holidays and project exceptions do not apply. |

The task-calendar holiday sample demonstrates this distinction using its actual records. **Project Calendar Work** has no matching task calendar, so the project calendar's fixed **Regional Holiday** on April 10 and **Project extended hours** exception on April 17 apply to it. **Local Team Work** uses `local-team`, which defines **Local Holiday** on April 6. **Offshore Team Work** uses `offshore-team`, which defines **Offshore Holiday** on April 8. Both assigned tasks span April 10 and 17, but the project holiday and exception do not apply to them; they use date rules defined for their selected calendars. Project working-time settings may still provide schedule fallback. Recurring project holidays have a separate fallback rule described in the inheritance section.

### Configure working days and hours for task calendars

Use a task calendar when a team follows a schedule that differs from the project calendar. Configure the schedule on an entry in [calendarSettings.taskCalendars](https://ej2.syncfusion.com/react/documentation/api/gantt/calendarSettingsModel#taskcalendars):

- [workWeek](https://ej2.syncfusion.com/react/documentation/api/gantt/taskCalendarModel#workweek) lists the calendar's working weekdays, using names from Sunday through Saturday.
- [workingTime](https://ej2.syncfusion.com/react/documentation/api/gantt/taskCalendarModel#workingtime) sets the standard daily hours with numeric `from` and `to` values.
- [weekWorkingTime](https://ej2.syncfusion.com/react/documentation/api/gantt/taskCalendarModel#weekworkingtime) sets different hours for specific weekdays using `dayOfWeek` and `timeRange`. Each entry replaces the complete schedule for that weekday.

In this example, both tasks use the `day-shift` calendar. It works Monday through Friday, uses a split schedule on Monday, and has shorter hours on Friday:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/calendar-working-schedule/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/calendar-working-schedule/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/calendar-working-schedule/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/calendar-working-schedule" %}

### Assign task-specific calendars with exceptions

To assign a custom calendar to a task, define it in [calendarSettings.taskCalendars](https://ej2.syncfusion.com/react/documentation/api/gantt/calendarSettingsModel#taskcalendars), then reference it using the [calendarId](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFieldsModel#calendarid) property in the task data. Task calendars can define their own working weekdays, hours, holidays, and date-specific exceptions.

An exception without `exceptionWorkingTime`, or with `exceptionWorkingTime: []`, keeps the effective calendar schedule for the date. For example, the **Team Meeting Day** record below adds a label but does not close the day. To make the full date non-working, define a holiday instead.

The following example defines two task calendars with different working days, task-specific exceptions, and assigns them to specific tasks:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/task-calendar/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/task-calendar/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/task-calendar/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/task-calendar" %}

### Define task calendar holidays

Task calendars can define holidays that affect the assigned task's schedule. The following example sets a project-calendar holiday and exception, then defines separate holidays for two task calendars to show how the rules apply to tasks with and without a matching task calendar:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/task-calendar-holiday/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/task-calendar-holiday/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/task-calendar-holiday/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/task-calendar-holiday" %}

## Configure task calendar inheritance

The task's mapped `calendarId` selects the task calendar used for scheduling. To reuse settings, set [`parentId`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskCalendarModel) on that calendar to another task calendar's `calendarId`. The parent supplies settings that the selected calendar does not define; it does not make project-calendar holidays or exceptions apply to the task.

The Gantt checks the assigned calendar first, then its parents from nearest to farthest. A value set on the child takes precedence; if it is not set, the nearest parent definition applies. This inheritance applies to `workWeek`, `workingTime`, `weekWorkingTime`, `holidays`, and `exceptions`.

| Setting | Resolution for the selected task calendar |
|---|---|
| `workWeek` | An undefined value can inherit the nearest defined value in the task-calendar chain. An explicit `workWeek: []` does not inherit; it falls back to the global `workWeek`, then the Monday-Friday default. |
| `workingTime` | An empty or undefined value uses the nearest non-empty task-calendar value, then `projectCalendar.workingTime`. |
| `weekWorkingTime` | A non-empty entry replaces the full schedule for its `dayOfWeek`. If that weekday is omitted, the nearest ancestor entry is used; otherwise, normal `workingTime` resolution applies. An entry with `timeRange: []` continues to the nearest ancestor entry, then normal `workingTime` resolution. |
| Date rules | The nearest calendar's rule wins across the chain. Within the same calendar, an exception takes precedence over a holiday. Therefore, a nearer calendar's holiday can take precedence over a farther ancestor's exception. |

An exception with omitted or empty `exceptionWorkingTime` uses the effective schedule rather than making the date non-working. When a working-time setting is still unresolved after checking the task-calendar chain, `projectCalendar.workingTime` supplies the fallback. global `workWeek` supplies the weekday fallback.

A recurring project-calendar holiday is considered only when neither the assigned task calendar nor any calendar it inherits from defines a holiday or exception for that date. Fixed project-calendar holidays and project-calendar exceptions are not used as task-calendar fallback.

Missing parent references, self-references, and parent cycles are ignored.

The following sample assigns **Regional Inherited Schedule** to the `regional` task calendar, which inherits its schedule and date rules from the `company` calendar:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/calendar-inheritance/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/calendar-inheritance/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/calendar-inheritance/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/calendar-inheritance" %}

## Configure recurring holidays and exceptions

The `recurrence` property defaults to `null`. Set it on a [holiday](https://ej2.syncfusion.com/react/documentation/api/gantt/holidayModel) or [calendar exception](https://ej2.syncfusion.com/react/documentation/api/gantt/calendarExceptionModel) to repeat the record from the anchor `from` date. The `to` date defines the inclusive span repeated for every occurrence. If `to` is omitted, only the anchor date is repeated. The recurrence options below supplement these record properties.

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

### Recurrence pattern examples

The examples below show the `recurrence` value; set the record's `from` date to match the selected weekday, day, ordinal, or month.

| Pattern | Example |
|---|---|
| Daily | `{ frequency: 'daily', interval: 1 }` |
| Weekly on Monday and Wednesday | `{ frequency: 'weekly', daysOfWeek: ['Monday', 'Wednesday'] }` |
| Second Monday of each month | `{ frequency: 'monthly', daysOfWeek: ['Monday'], weekOfMonth: 2 }` |
| April 10 each year | `{ frequency: 'yearly', month: 4, dayOfMonth: 10 }` |
| February 29 each year | `{ frequency: 'yearly', month: 2, dayOfMonth: 29 }` — occurrences are skipped in non-leap years. |

For a weekly recurrence, use `{ frequency: 'weekly', daysOfWeek: ['Monday'], count: 8 }` or `{ frequency: 'weekly', daysOfWeek: ['Monday'], until: new Date(2026, 5, 30) }` as the end condition.

Use `count` or `until`, but not both. Selectors must match their frequency: `daysOfWeek` contains unique, case-sensitive weekday names from Sunday through Saturday; monthly or yearly ordinal rules use exactly one weekday with `weekOfMonth` set to `1`-`4` or `"last"`; `dayOfMonth` is `1`-`31` or `"last"`; and yearly `month` is `1`-`12`. Do not combine `dayOfMonth` with `daysOfWeek` or `weekOfMonth`. When recurrence is configured, `from` is required and must match any specified weekday, day, ordinal, or yearly month. If supplied, `to` must be the same as or later than `from`. `interval` and `count` must be positive integers; use either `count` or a valid `until` date not before `from`.

Recurrence dates are parsed as dates and normalized using local date interpretation. Date-only values can behave differently across environment time zones, so provide dates consistently when working across time zones.

Recurrence is evaluated only as needed for the scheduling window and repeats the source `from`-`to` span.

For monthly rules on day 29-31, months without the selected day are skipped; a yearly February 29 rule skips non-leap years. Skipped dates do not consume `count`. On initialization, an invalid recurrence with valid source dates is reported through the [actionFailure event](https://ej2.syncfusion.com/react/documentation/api/gantt#actionfailure) and treated as a one-time fixed-date rule; a record with invalid dates is skipped. If an invalid recurrence is introduced by a calendar update, `actionFailure` reports the error and the previous calendar configuration is retained.

The following sample demonstrates a holiday repeated three times using `count` and a partial working-day exception repeated through June 17 using `until`:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/calendar-recurrence/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/calendar-recurrence/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/calendar-recurrence/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/calendar-recurrence" %}

## Calendar limitations

- A task calendar cannot represent zero working weekdays with `workWeek: []`.
- Recurrence expansion extends up to 100 years after the scheduling evaluation window ends; occurrences beyond that period are not generated.
- No resource-specific calendar lookup is available.

## Configure hours per day for task durations

The [hoursPerDay](https://ej2.syncfusion.com/react/documentation/api/gantt#hoursperday) property defines the number of hours used to represent one day when calculating task durations. Changing `hoursPerDay` recalculates day-based duration values using the existing working duration of the task. This affects how duration is displayed and calculated in days, but does not modify the task's start date, end date, or underlying working duration.

For example, a task with 32 hours of working duration is displayed as 4 days when `hoursPerDay` is set to 8. If `hoursPerDay` is changed to 16, the same task is displayed as 2 days. The task schedule remains unchanged because the underlying working duration is not modified.

The following example demonstrates how changing `hoursPerDay` affects duration calculations.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/hoursperday/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/hoursperday/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/hoursperday/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/hoursperday" %}

> **Note:** The default `hoursPerDay` value is **8 hours**. When a task has 4 days duration with the `hoursPerDay` value of 6, the total working hours = 4 days × 6 hours = **24 hours**. If the calendar's working time is configured as 24 hours (0:00 to 24:00), these 24 hours fit within a single calendar day, so the task displays as **1 calendar day** on the chart, even though the duration specification is 4 days.

## Impact on task scheduling

Calendar settings directly affect how task duration is calculated and when tasks are scheduled. Changes recalculate task schedules, durations, dependencies, and chart rendering.

- **Working hours**: Task durations are calculated using the configured working hours. Non-working hours are excluded from duration calculations.
- **Holidays**: Tasks skip over holiday dates, extending the end date accordingly to maintain the required working duration
- **Weekends**: By default, weekends are treated as non-working days when [includeWeekend](https://ej2.syncfusion.com/react/documentation/api/gantt#includeweekend) is set to **false**
- **Task dependencies**: Dependency calculations use the predecessor task's calendar to determine when the successor task can start
- **Task calendars**: If no task calendar matches the task's `calendarId`, the project calendar's configured working days, working hours, holidays, and exceptions apply. If one matches, Gantt applies that task calendar to the task. Settings it does not define may come from task-calendar inheritance or project working-time fallback. Fixed project holidays and exceptions do not apply to that task; a recurring project holiday can apply only when no rule in its task-calendar chain covers the date.
- **Duration calculations**: Changing `hoursPerDay` recalculates day-based duration values without changing the scheduled start and end dates.

## See also

- [How to configure holidays?](https://help.syncfusion.com/gantt-sdk/react/gantt-chart/holidays)
- [How to include weekends in scheduling?](https://help.syncfusion.com/gantt-sdk/react/gantt-chart/scheduling-tasks#weekend-configuration)
