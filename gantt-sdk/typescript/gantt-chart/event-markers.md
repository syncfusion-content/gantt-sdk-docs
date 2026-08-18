---
layout: post
title: Event Markers in TypeScript Gantt Chart | Syncfusion
description: Configure event markers in Syncfusion TypeScript Gantt Chart to highlight project events, and important dates across the timeline for better tracking.
keywords: typescript gantt event markers, timeline markers, project milestones, event indicators, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/event-markers
platform: gantt-sdk
control: Event Markers - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Project-Wide Timeline Markers in TypeScript Gantt Chart

Event markers highlight significant project events by displaying vertical timeline indicators that span across the entire Gantt chart. These markers identify critical dates, milestones, deadlines, or important project events that affect multiple tasks or the overall project timeline, providing visual reference points for project-wide activities.

Understanding event markers implementation enables effective visualization of project-critical dates and enhances timeline awareness across all project phases.

Event markers utilize specific properties to define their positioning, appearance, and identification within the project timeline:

**Date positioning**: The [day](https://ej2.syncfusion.com/documentation/api/gantt/eventMarker#day) property establishes the exact timeline date where the marker appears. This date value determines marker placement across the entire vertical timeline, ensuring accurate project event representation.

**Descriptive labeling**: The [label](https://ej2.syncfusion.com/documentation/api/gantt/eventMarker#label) property provides descriptive text that identifies the marker's purpose or significance. Labels enhance user understanding by clearly indicating what project event the marker represents.

**Visual customization**: The [cssClass](https://ej2.syncfusion.com/documentation/api/gantt/eventMarker#cssclass) property enables custom styling through CSS class applications. This property allows distinctive visual treatment for different marker types, supporting color coding, styling variations, and brand consistency.

**Vertical adjustment**: The [top](https://ej2.syncfusion.com/documentation/api/gantt/eventMarker#top) property specifies the vertical offset (in pixels) of the marker from the top of the chart pane's content area. This property helps prevent visual overlap when multiple markers share the same date, ensuring clear and organized marker placement.

## Event marker configuration

Event markers render as vertical lines positioned at specific dates across the entire Gantt chart timeline, distinguishing them from data markers which appear within individual task rows. This project-wide visibility ensures critical dates remain prominent regardless of the current view or task focus.

**Timeline integration**: Event markers integrate seamlessly with the Gantt chart timeline, appearing as vertical indicators that extend from the top to the bottom of the chart area. This comprehensive visibility ensures important dates remain visible during scrolling, zooming, or filtering operations.

**Configuration requirements**: Event markers require the `DayMarkers` injection in the AppModule providers section to enable rendering functionality. This service manages marker positioning, styling, and timeline integration logic.

**Multiple marker support**: The control supports multiple event markers simultaneously, allowing comprehensive tracking of various project-critical dates within the same timeline view. Each marker maintains independent configuration while sharing the common timeline space.

**Service integration**: Event marker functionality requires the [eventMarkers](https://ej2.syncfusion.com/documentation/api/gantt#eventmarkers) property initialization combined with `DayMarkers` injection to enable proper rendering and timeline integration.

The following implementation demonstrates event marker integration within a Gantt chart, showcasing timeline-wide event highlighting:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/event-markers-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/event-markers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/event-markers-cs1" %}

## Programmatically show and hide event markers

You can programmatically show or hide event markers in the Gantt chart by updating the [eventMarkers](https://ej2.syncfusion.com/documentation/api/gantt#eventmarkers) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/event-markers-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/event-markers-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/event-markers-cs3" %}

## See Also

- [How to bind data to the Gantt chart?](https://ej2.syncfusion.com/documentation/gantt/data-binding)
- [How to enable context menu in Gantt chart?](https://ej2.syncfusion.com/documentation/gantt/context-menu)
- [How to compare planned vs. actual schedules?](https://ej2.syncfusion.com/documentation/gantt/baseline)
- [How to visualize critical tasks in Gantt chart?](https://ej2.syncfusion.com/documentation/gantt/critical-path)
- [How to highlight task-specific events?](https://ej2.syncfusion.com/documentation/gantt/data-markers)
