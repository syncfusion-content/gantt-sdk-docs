---
layout: post
title: Top tier and bottom tier in React Gantt Chart Component | Syncfusion
description: Learn how to configure top and bottom tiers in the Syncfusion React Gantt Chart Component using timeline settings such as unit, format, count, and formatter.
platform: gantt-sdk
control: Top tier and bottom tier
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Top Tier and Bottom Tier in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component supports a two-tier timeline layout, enabling customization of both the top and bottom tiers through specific configuration options.

- [topTier](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings#toptier) and [bottomTier](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings#bottomtier): Define the structure and visibility of each timeline tier.
- [unit](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#unit): Specifies the time unit for each tier, such as day, week, or month.
- [format](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#format): Determines the date format displayed in timeline cells.
- [count](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#count): Combines multiple time units into a single timeline cell.
- [formatter](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#formatter): Applies a custom method to format the timeline cell values programmatically.

These properties allow precise control over how time intervals are displayed, enhancing the readability and usability of the Gantt chart across various project scales.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/timeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/timeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/timeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/timeline-cs1" %}

## Combining timeline cells

In the React Gantt Chart component, timeline cells in the top and bottom tiers can be merged by grouping multiple time units into a single cell. This behavior is controlled using the `count` property in both `topTier` and `bottomTier` configurations.

- [topTier.count](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#count): Specifies the number of time units to combine in each top-tier cell.
- [bottomTier.count](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#count): Specifies the number of time units to combine in each bottom-tier cell.

By adjusting these values, the timeline can display broader or more granular intervals, improving visibility for long-term or short-term project views.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/combinetimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/combinetimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/combinetimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/combinetimeline-cs1" %}

## Format value of timeline cell

In the React Gantt Chart component, the values displayed in the top and bottom timeline cells can be formatted using either standard date format strings or custom formatter methods.

- [topTier.format](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#format) and [bottomTier.format](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#format): Define the date format for timeline cells using predefined format strings.
- [topTier.formatter](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#formatter) and [bottomTier.formatter](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#formatter): Apply custom logic to format timeline cell values programmatically.

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
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/formattimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/formattimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/formattimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/formattimeline-cs1" %}

## Timeline cell width

In the React Gantt Chart component, the width of timeline cells can be configured using the [timelineSettings.timelineUnitSize](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings#timelineunitsize) property within `timelineSettings`. This value directly sets the width of the bottom tier cells.

The width of the top tier cells is automatically calculated based on the bottom tier's unit and the specified `timelineUnitSize`. This ensures consistent scaling across both tiers while maintaining clarity in the timeline view.

- [timelineSettings.timelineUnitSize](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings#timelineunitsize): Defines the pixel width of each bottom-tier timeline cell.
- [topTier.unit](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#unit): Determines how the top-tier cell width is derived relative to the bottom tier.

This configuration allows precise control over the visual density of the timeline, supporting both detailed and high-level project views.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/timelineWidth-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/timelineWidth-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/timelineWidth-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/timelineWidth-cs1" %}
