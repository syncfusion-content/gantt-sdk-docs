---
layout: post
title: Timeline Tiers in JavaScript Gantt Chart | Syncfusion
description: Configure top and bottom tiers in Syncfusion JavaScript Gantt Chart timeline with custom units, formats, and formatting for detailed scheduling views.
keywords: javascript gantt timeline tiers, top tier, bottom tier, tier format, timeline format, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/timeline/top-tier-and-bottom-tier
platform: gantt-sdk
control: Timeline Tiers - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Customizing Timeline Top and Bottom Tiers in JavaScript Gantt Chart

The [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control supports a two-tier timeline layout, enabling customization of both the top and bottom tiers through specific configuration options.

- [topTier](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineSettings#toptier) and [bottomTier](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineSettings#bottomtier): Define the structure and visibility of each timeline tier.
- [unit](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#unit): Specifies the time unit for each tier, such as day, week, or month.
- [format](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#format): Determines the date format displayed in timeline cells.
- [count](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#count): Combines multiple time units into a single timeline cell.
- [formatter](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#formatter): Applies a custom method to format the timeline cell values programmatically.

These properties allow precise control over how time intervals are displayed, enhancing the readability and usability of the Gantt chart across various project scales.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs8" %}

## Combining timeline cells

In the JavaScript Gantt Chart control, timeline cells in the top and bottom tiers can be merged by grouping multiple time units into a single cell. This behavior is controlled using the `count` property in both `topTier` and `bottomTier` configurations.

- [topTier.count](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#count): Specifies the number of time units to combine in each top-tier cell.
- [bottomTier.count](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#count): Specifies the number of time units to combine in each bottom-tier cell.

By adjusting these values, the timeline can display broader or more granular intervals, improving visibility for long-term or short-term project views.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs9" %}

## Format value of timeline cell

In the JavaScript Gantt Chart control, the values displayed in the top and bottom timeline cells can be formatted using either standard date format strings or custom formatter methods.

- [topTier.format](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#format) and [bottomTier.format](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#format): Define the date format for timeline cells using predefined format strings.
- [topTier.formatter](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#formatter) and [bottomTier.formatter](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#formatter): Apply custom logic to format timeline cell values programmatically.

**Formatter Function Parameters:**

The [formatter](https://ej2.syncfusion.com/documentation/api/gantt/itimelineformatter) function supports the following parameters:

| Parameter | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| date      | The current date value for the cell.                             |
| format    | The date format string applied to the cell.                      |
| tier      | Indicates whether the cell belongs to the topTier or bottomTier. |
| mode      | Specifies the rendering mode (Year, Month, Week, or Day).        |

The following example shows how to use the `formatter` function with all four parameters `date`, `format`, `tier`, and `mode`:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs10" %}

## Show week number in timeline cell

The Gantt Chart allows week numbers to be displayed in timeline cells using the [formatter](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#formatter) property of the [timelineSettings.topTier](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelinesettingsmodel#toptier) configuration. The formatter function customizes the default timeline header text and displays values such as `Week 13`.

The following example demonstrates how to display week numbers in the top-tier timeline cells while displaying individual days in the bottom-tier timeline.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs16" %}

## Timeline cell width

In the JavaScript Gantt Chart control, the width of timeline cells can be configured using the [timelineSettings.timelineUnitSize](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineSettings#timelineunitsize) property within `timelineSettings`. This value directly sets the width of the bottom tier cells.

The width of the top tier cells is automatically calculated based on the bottom tier's unit and the specified `timelineUnitSize`. This ensures consistent scaling across both tiers while maintaining clarity in the timeline view.

- [timelineSettings.timelineUnitSize](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineSettings#timelineunitsize): Defines the pixel width of each bottom-tier timeline cell.
- [topTier.unit](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#unit): Determines how the top-tier cell width is derived relative to the bottom tier.

This configuration allows precise control over the visual density of the timeline, supporting both detailed and high-level project views.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/timeline-cs11" %}

