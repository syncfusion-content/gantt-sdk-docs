---
layout: post
title: Scrolling in JavaScript Gantt Chart | Syncfusion
description: Learn how to configure scrolling behavior in JavaScript Gantt Chart including grid scrolling, timeline scrolling, and scroll synchronization.
keywords: javascript gantt scrolling, horizontal scroll, vertical scroll, scroll sync, scroll bars, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/scrolling/scrolling
platform: gantt-sdk
control: Scrolling - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Scrolling Behavior and Positioning in JavaScript Gantt Chart

Scrolling in the JavaScript Gantt Chart control enables smooth navigation across extensive project datasets and long timelines. It ensures taskbars, grid rows, and timeline cells remain visible within the viewport. Scrollbars automatically appear when content exceeds the control's defined [height](https://ej2.syncfusion.com/javascript/documentation/api/gantt#height) and [width](https://ej2.syncfusion.com/javascript/documentation/api/gantt#width), supporting vertical scrolling for rows, horizontal scrolling for columns, and timeline scrolling for extended chart areas.

Virtual scrolling enhances performance by rendering only the visible portion of the dataset. Scrollbars are equipped with ARIA labels for accessibility, making them compatible with screen readers. They also adapt to responsive layouts, although horizontal scrolling may be required on narrow screens with wide timelines.

> By default, both `height` and `width` are set to **auto**.

## Configure scrollbar display

Scrollbars appear based on content size:

- **Vertical scrollbar:** Triggers when task row height exceeds the control's height.
- **Horizontal scrollbar:** Triggers when column width exceeds the tree grid pane.
- **Timeline scrollbar:** Triggers when the timeline exceeds the chart area.

For precise layout control, set fixed dimensions using pixel values for both [width](https://ej2.syncfusion.com/javascript/documentation/api/gantt#width) and [height](https://ej2.syncfusion.com/javascript/documentation/api/gantt#height).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs1" %}

## Configure responsive scrolling

You can make the Gantt Chart control responsive by setting its [width](https://ej2.syncfusion.com/javascript/documentation/api/gantt#width) and [height](https://ej2.syncfusion.com/javascript/documentation/api/gantt#height) to **100%**, allowing it to fully occupy the parent container. When height is set to **100%**, the parent element must have a defined `height` to support proper layout rendering. The Gantt will automatically adjust when the container is resized.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs2" %}

## Scroll to task row and timeline

The JavaScript Gantt Chart control provides built-in support for automatically scrolling to specific tasks and timeline positions, which is especially useful when working with large datasets.

To scroll vertically to a specific task row, use the [selectRow](https://ej2.syncfusion.com/javascript/documentation/api/gantt#selectrow) method to select the desired task and apply [setScrollTop](https://ej2.syncfusion.com/javascript/documentation/api/gantt#setscrolltop) to bring the selected row into view.

To scroll horizontally to a specific timeline date, use the [scrollToDate](https://ej2.syncfusion.com/javascript/documentation/api/gantt#scrolltodate) method. This helps focus the timeline on a particular point in time.

To scroll directly to a specific task within the timeline, use the [scrollToTask](https://ej2.syncfusion.com/javascript/documentation/api/gantt#scrolltotask) method with the task ID. This ensures the task is visible within the timeline view.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs3" %}

## Synchronize horizontal scroll between Gantt charts

To synchronize horizontal scrolling across multiple Gantt Chart controls, handle the [actionComplete](https://ej2.syncfusion.com/javascript/documentation/gantt/events#actioncomplete) event with the **HorizontalScroll** action. This captures the scroll position of the first Gantt chart and applies it to the second Gantt using the `scrollLeft` property. This approach ensures aligned timeline navigation, which is especially useful for comparing related project data side-by-side, such as parallel schedules.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/scrolling-cs4" %}

