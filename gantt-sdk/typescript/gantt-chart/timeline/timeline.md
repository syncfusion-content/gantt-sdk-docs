---
layout: post
title: Timeline in TypeScript Gantt Chart | Syncfusion
description: Configure timelines in Syncfusion TypeScript Gantt Chart with view modes, zooming, tier customization, and weekend highlighting for projects.
keywords: TypeScript gantt timeline, timeline view, timeline modes, timeline tiers, zoom timeline, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/TypeScript/gantt-chart/timeline/timeline
platform: gantt-sdk
control: Timeline - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Configuring Timeline Settings in TypeScript Gantt Chart

The timeline in the TypeScript Gantt Chart control represents project durations as cells with defined units and formats. It supports in-built view modes including Hour-Minute, Day-Hour, Week-Day, Month-Week, Year-Month, and Minutes for flexible visualization.

Configure timeline modes using the [timelineViewMode](https://ej2.syncfusion.com/documentation/api/gantt/timelineViewMode) property. Customize the top and bottom tiers via [topTier.unit](https://ej2.syncfusion.com/documentation/api/gantt/timelineTierSettings#unit) and [bottomTier.unit](https://ej2.syncfusion.com/documentation/api/gantt/timelineTierSettings#unit) in [timelineSettings](https://ej2.syncfusion.com/documentation/api/gantt/timelineSettings). This enables detailed views, such as weekly overviews with daily breakdowns for projects, ensuring accurate timeline representation.

## Configure timeline view modes

Set the timeline view mode using the [timelineViewMode](https://ej2.syncfusion.com/documentation/api/gantt/timelineViewMode) property. This property allows you to switch the timeline between different units such as **Day**, **Week**, **Month**, and **Year**, where the top tier displays a broader unit and the bottom tier displays a finer one.

When both the `topTier` and `bottomTier` settings are defined, they take precedence over the `timelineViewMode` property. In this case, the `timelineViewMode` value will be ignored. To apply the `timelineViewMode` setting, ensure that `topTier` and `bottomTier` are assigned a null value or not configured.

### Week timeline mode

In Week mode, the top tier shows weeks and the bottom tier days, suitable for short-term project tracking.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs1" %}

### Month timeline mode

In Month mode, the top tier shows months and the bottom tier weeks, ideal for medium-term planning.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs2" %}

### Year timeline mode

In Year mode, the top tier shows years and the bottom tier months, suitable for long-term projects.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs3" %}

### Day timeline mode

In Day mode, the top tier shows days and the bottom tier hours, ideal for detailed daily scheduling.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs4" %}

### Hour timeline mode

In Hour mode, the top tier shows hours and the bottom tier minutes, perfect for minute-level task tracking.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs5" %}

### Minutes timeline mode

In Minutes timeline mode, the tier displays minute-level intervals, ideal for tracking short-duration tasks with high precision.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs13" %}

## Timeline view dates

The Gantt Chart control supports rendering a fixed timeline range using the [viewStartDate](https://ej2.syncfusion.com/documentation/api/gantt/timelineSettings#viewStartDate) and [viewEndDate](https://ej2.syncfusion.com/documentation/api/gantt/timelineSettings#viewEndDate) properties. These properties allow the visible portion of the timeline to be explicitly defined and locked within the Gantt chart UI, independent of the project's overall scheduling boundaries defined by [projectStartDate](https://ej2.syncfusion.com/documentation/api/gantt/index-default#projectstartdate) and [projectEndDate](https://ej2.syncfusion.com/documentation/api/gantt/index-default#projectenddate). The `projectStartDate` and `projectEndDate` values represent the full scheduling window for the project and are used for baseline processing, critical-path calculations, and project-level reporting. By default, both `viewStartDate` and `viewEndDate` are set to **auto**. The following example demonstrates how to configure a custom timeline view range.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs12" %}

**Key behaviors**

When `viewStartDate` and `viewEndDate` are set to concrete Date values, the timeline rendering is restricted to the inclusive range [viewStartDate, viewEndDate].

- When `viewStartDate` is set to **auto**:
  - If `projectStartDate` is defined, the timeline begins at `projectStartDate`.
  - If `projectStartDate` is not defined, the earliest task start date is used as the beginning of the visible range.

- When `viewEndDate` is set to **auto**:
  - If `projectEndDate` is defined, the timeline ends at `projectEndDate`.
  - If `projectEndDate` is not defined, the maximum task end date is used. If this end date leaves visible white-space in the timeline area, the end date is automatically extended to fill the chart width.

> **Note:** The `ZoomToFit` feature uses `projectStartDate` and `projectEndDate` to fit the entire project within the available timeline viewport.

## Customize week start day

In the Gantt Chart control, you can customize the starting day of the week using the [weekStartDay](https://ej2.syncfusion.com/documentation/api/gantt/timelineSettings#weekstartday) property. By default, the `weekStartDay` value is set to **0**, which specifies **Sunday** as the first day of the week. You can change this value to any number from **0 to 6** to set a different start day.

The `weekStartDay` property will take effect only when the timeline displays weeks. To enable this, set the [timelineViewMode](https://ej2.syncfusion.com/documentation/api/gantt/timelineviewmode) to **Week**, or configure `topTier.unit` as **Week** and `bottomTier.unit` as **Day**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs6" %}

## Customize automatic timescale update action

In the Gantt Chart control, the schedule timeline will be automatically updated when the tasks date values are updated beyond the project start date and end date ranges. This can be enabled or disabled using the [updateTimescaleView](https://ej2.syncfusion.com/documentation/api/gantt/timelineSettings#updatetimescaleview) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs7" %}

## Dynamically change timeline mode

You can dynamically change the timeline mode in the Gantt Chart by updating the [timelineSettings.timelineViewMode](https://ej2.syncfusion.com/documentation/api/gantt/timelineViewMode) property using the [change](https://ej2.syncfusion.com/documentation/api/combo-box/index-default#change) event of the [ComboBox](https://ej2.syncfusion.com/documentation/combo-box/getting-started) control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs14" %}

## Timeline cells tooltip

In the Gantt Chart control, you can enable or disable the mouse hover tooltip of timeline cells using the [timelineSettings.showTooltip](https://ej2.syncfusion.com/documentation/api/gantt/timelineSettings#showtooltip) property. The default value of this property is **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/gantt-tooltip-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/gantt-tooltip-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/gantt-tooltip-cs2" %}

## Highlight weekends

Highlight weekends by setting [showWeekend](https://ej2.syncfusion.com/documentation/api/gantt/timelineSettings#showweekend) to **true** and [workWeek](https://ej2.syncfusion.com/documentation/api/gantt#workweek) to define weekdays, aiding in identifying non-working days in a project schedule.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-showweekend-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-showweekend-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-showweekend-cs1" %}

**Limitations:**

- The `showWeekend` feature does not support baselines and not compatible with the manual task mode.
- Non-working hours cannot be excluded when `showWeekend` is set to **false**.
- Holidays are not excluded from the timeline if `showWeekend` is set to **false**.

## Navigating Gantt Chart timeline

You can adjust the Gantt Chart view by shifting the timeline forward or backward by one unit using the following methods:

- [previousTimeSpan](https://ej2.syncfusion.com/documentation/api/gantt/index-default#previoustimespan): Moves the timeline backward by one unit from the current start point.

- [nextTimeSpan](https://ej2.syncfusion.com/documentation/api/gantt/index-default#nexttimespan): Moves the timeline forward by one unit from the current end point.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/timeline-cs15" %}

## Timeline template

In the Gantt Chart control, you can customize timeline cells using the [timelineTemplate](https://ej2.syncfusion.com/documentation/api/gantt#timelineTemplate) property, allowing for the customization of HTML content within timeline cells. This feature enhances the visual appeal and enables personalized functionality.

When designing the timeline cells, you can utilize the following context properties within the template:

- `date`: Defines the date of the timeline cells.
- `value`: Defines the formatted date value that will be displayed in the timeline cells.
- `tier`: Defines whether the cell is part of the top or bottom tier.

The following code example how to customize the top tier to display the week's weather details and the bottom tier to highlight working and non-working days, with formatted text for holidays.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/gantt-tooltip-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/gantt-tooltip-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/gantt-tooltip-cs4" %}

## Infinite timeline scrolling

The [enableInfiniteTimelineScroll](https://ej2.syncfusion.com/documentation/api/gantt#enableinfinitetimelinescroll) property enables infinite horizontal scrolling in the Gantt Chart timeline by dynamically extending the visible timeline range as the user navigates. Set `enableInfiniteTimelineScroll` to **true** to enable this feature.

**Key behaviors**

- When `enableInfiniteTimelineScroll` is enabled, the timeline automatically extends in the forward direction as the user scrolls using the horizontal scrollbar or clicks the forward scroll arrow.
- In the backward direction, the timeline extends only when the user clicks the backward scroll arrow. Scrolling or dragging the scrollbar backward does not trigger timeline extension.
- Infinite scrolling extends only the visible timeline range and does not modify the project dates.

This feature enables exploration of long project schedules without manually updating the timeline range.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/gantt-infinite-cs/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/gantt-infinite-cs/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/gantt-infinite-cs" %}

## See also

- [How to configure taskbars?](https://ej2.syncfusion.com/documentation/gantt/taskbar)
- [How to zoom the timeline?](https://ej2.syncfusion.com/documentation/gantt/timeline/zooming)
- [How to configure non-working days?](https://ej2.syncfusion.com/documentation/gantt/scheduling-tasks#weekendnon-working-days)
