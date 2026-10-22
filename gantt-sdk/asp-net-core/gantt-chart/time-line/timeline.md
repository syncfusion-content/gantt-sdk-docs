---
layout: post
title: Timeline in ASP.NET Core Gantt Chart | View Modes | Syncfusion
description: Learn how to configure timeline in Syncfusion ASP.NET Core Gantt Chart with view modes, zooming, weekend highlighting, and templates to visualize project schedules.
keywords: asp.net core gantt timeline, timeline view modes, timelinesettings, weekend highlight, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/time-line/timeline
platform: gantt-sdk
control: Timeline - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Configuring Timeline Settings in ASP.NET Core Gantt Chart

## Configure timeline view modes

Set the timeline view mode using the [timelineViewMode](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.TimelineViewMode.html) property, with top tier displaying broader units (e.g., weeks) and bottom tier finer ones (e.g., days), ideal for project schedules.

### Week timeline mode

In Week mode, the top tier shows weeks and the bottom tier days, suitable for short-term project tracking.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/week-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/week-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Week timeline mode](images/timeline-week-cs1-placeholder.png)

### Month timeline mode

In Month mode, the top tier shows months and the bottom tier weeks, ideal for medium-term planning.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/month-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/month-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Month timeline mode](images/timeline-month-cs1-placeholder.png)

### Year timeline mode

In Year mode, the top tier shows years and the bottom tier months, suitable for long-term projects.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/year-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/year-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Year timeline mode](images/timeline-year-cs1-placeholder.png)

### Day timeline mode

In Day mode, the top tier shows days and the bottom tier hours, ideal for detailed daily scheduling.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/day-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/day-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Day timeline mode](images/timeline-day-cs1-placeholder.png)

### Hour timeline mode

In Hour mode, the top tier shows hours and the bottom tier minutes, perfect for minute-level task tracking.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/hour-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/hour-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Hour timeline mode](images/timeline-hour-cs1-placeholder.png)

### Minutes timeline mode

In Minutes timeline mode, the tier displays minute-level intervals, ideal for tracking short-duration tasks with high precision.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/minutes-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/minutes-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Minutes timeline mode](images/timeline-minutes-cs1-placeholder.png)

## Timeline view dates

The Gantt Chart control supports rendering a fixed timeline range using the [viewStartDate](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttTimelineSettings.html#Syncfusion_EJ2_Gantt_GanttTimelineSettings_ViewStartDate) and [viewEndDate](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttTimelineSettings.html#Syncfusion_EJ2_Gantt_GanttTimelineSettings_ViewEndDate) properties. These properties allow the visible portion of the timeline to be explicitly defined and locked within the Gantt chart UI, independent of the project's overall scheduling boundaries defined by [projectStartDate](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ProjectStartDate) and [projectEndDate](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ProjectEndDate). The `projectStartDate` and `projectEndDate` values represent the full scheduling window for the project and are used for baseline processing, critical-path calculations, and project-level reporting. By default, both `viewStartDate` and `viewEndDate` are set to **auto**. The following example demonstrates how to configure a custom timeline view range.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/view-dates-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/view-dates-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Timeline view dates](images/timeline-view-dates-cs1-placeholder.png)

**Key behaviors**

When `viewStartDate` and `viewEndDate` are set to concrete Date values, the timeline rendering is restricted to the inclusive range [viewStartDate, viewEndDate].

- When `viewStartDate` is set to **auto**:
  - If `projectStartDate` is defined, the timeline begins at `projectStartDate`.
  - If `projectStartDate` is not defined, the earliest task start date is used as the beginning of the visible range.

- When `viewEndDate` is set to **auto**:
  - If `projectEndDate` is defined, the timeline ends at `projectEndDate`.
  - If `projectEndDate` is not defined, the maximum task end date is used. If this end date leaves visible white-space in the timeline area, the end date is automatically extended to fill the chart width.

> Note: The `ZoomToFit` feature uses `projectStartDate` and `projectEndDate` to fit the entire project within the available timeline viewport.

## Customize week start day

In the Gantt Chart component, you can customize the week start day using the [weekStartDay](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttTimelineSettings.html#Syncfusion_EJ2_Gantt_GanttTimelineSettings_WeekStartDay) property. By default, the [weekStartDay](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttTimelineSettings.html#Syncfusion_EJ2_Gantt_GanttTimelineSettings_WeekStartDay) is set to **0**, which specifies the **Sunday** as a start day of the week. But, you can customize the week start day by using the following code example.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/week-startday-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/week-startday-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Customize week start day](images/timeline-week-startday-cs1-placeholder.png)

## Customize automatic timescale update action

In the Gantt Chart component, the schedule timeline will be automatically updated when the tasks date values are updated beyond the project start date and end date ranges. This can be enabled or disabled using the [updateTimescaleView](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttTimelineSettings.html#Syncfusion_EJ2_Gantt_GanttTimelineSettings_UpdateTimescaleView) property.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/timescale-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/timescale-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Customize automatic timescale update action](images/timeline-timescale-cs1-placeholder.png)

## Dynamically change timeline mode

You can dynamically change the timeline mode in the Gantt Chart by updating the [timelineSettings.timelineViewMode](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.TimelineViewMode.html) property using the [change](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DropDowns.DropDownList.html#Syncfusion_EJ2_DropDowns_DropDownList_Change) event of the [DropDownList](https://ej2.syncfusion.com/aspnetcore/documentation/drop-down-list/getting-started) component.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/change-timeline-mode/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/change-timeline-mode/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Dynamically change timeline mode](images/timeline-change-timeline-mode-placeholder.png)

## Timeline cells tooltip

In the Gantt Chart component, you can enable or disable the mouse hover tooltip of timeline cells using the [timelineSettings.showTooltip](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttTimelineSettings.html#Syncfusion_EJ2_Gantt_GanttTimelineSettings_ShowTooltip) property. The default value of this property is **true**.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/tooltip/timelinecell-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/tooltip/timelinecell-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Timeline cells tooltip](images/tooltip-timelinecell-cs1-placeholder.png)

## Highlight weekends

Highlight weekends by setting [showWeekend](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttTimelineSettings.html#Syncfusion_EJ2_Gantt_GanttTimelineSettings_ShowWeekend) to **true** and [workWeek](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_WorkWeek) to define weekdays, aiding in identifying non-working days in a project schedule.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/show-weekend-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/show-weekend-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Highlight weekends](images/timeline-show-weekend-cs1-placeholder.png)

**Limitations:**

- The `showWeekend` feature does not support baselines and not compatible with the manual task mode.
- Non-working hours cannot be excluded when `showWeekend` is set to **false**.
- Holidays are not excluded from the timeline if `showWeekend` is set to **false**.

## Navigating Gantt Timeline

You can adjust the Gantt chart view by shifting the timeline forward or backward by one unit using the following methods:

- [previousTimeSpan](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_PreviousTimeSpan): Moves the timeline backward by one unit from the current start point.

- [nextTimeSpan](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_NextTimeSpan): Moves the timeline forward by one unit from the current end point.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/span-time-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/span-time-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Navigating Gantt Timeline](images/timeline-span-time-cs1-placeholder.png)

## Timeline template

In the Gantt Chart component, you can customize timeline cells using the [timelineTemplate](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttTimelineSettings.html#Syncfusion_EJ2_Gantt_GanttTimelineSettings_TimelineTemplate) property, allowing for the customization of HTML content within timeline cells. This feature enhances the visual appeal and enables personalized functionality.

When designing the timeline cells, you can utilize the following context properties within the template:

- `date`: Defines the date of the timeline cells.
- `value`: Defines the formatted date value that will be displayed in the timeline cells.
- `tier`: Defines whether the cell is part of the top or bottom tier.

The following code example how to customize the top tier to display the week's weather details and the bottom tier to highlight working and non-working days, with formatted text for holidays.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/tooltip/timelinecell-cs2/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/tooltip/timelinecell-cs2/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Timeline template](images/tooltip-timelinecell-cs2-placeholder.png)

## Infinite timeline scrolling

The [enableInfiniteTimelineScroll](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_EnableInfiniteTimelineScroll) property enables infinite horizontal scrolling by dynamically extending the visible timeline range as the user navigates. Set `enableInfiniteTimelineScroll` to **true** to enable this behavior.

**Key behaviors**

- When `enableInfiniteTimelineScroll` is enabled, the timeline automatically extends in the forward direction as the user scrolls using the horizontal scrollbar or clicks the forward scroll arrow.
- In the backward direction, the timeline extends only when the user clicks the backward scroll arrow. Scrolling or dragging the scrollbar backward does not trigger timeline extension.
- Infinite scrolling extends only the visible timeline range and does not modify the project dates.

This feature enables exploration of long project schedules without manually updating the timeline range.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/infinite-timeline-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/timeline/infinite-timeline-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Infinite timeline scrolling](images/timeline-infinite-timeline-cs1-placeholder.png)

## See also

- [How to configure taskbars?](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/taskbar/taskbar)
- [How to zoom the timeline?](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/time-line/zooming)
- [How to configure non-working days?](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/scheduling-tasks#weekend--non-working-days)
- [How to configure non-working days?](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/scheduling-tasks#weekend--non-working-days)