---
layout: post
title: Zooming functionality in TypeScript Gantt Chart Control | Syncfusion
description: Explore zooming options in the Syncfusion TypeScript Gantt Chart control, including Zoom In, Zoom Out, Zoom To Fit, and custom zooming levels.
platform: gantt-sdk
control: Zooming
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Zooming Functionality in TypeScript Gantt Chart Control

The [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control provides zooming support to adjust the timeline view dynamically. This includes increasing or decreasing the width of timeline cells and changing the timeline units to view tasks across various timespan from minutes to decades.

To enable zooming features, add `ZoomIn`, `ZoomOut`, and `ZoomToFit` to the toolbar items collection. These actions can also be triggered externally using the built-in methods like [zoomIn](../../api/gantt#zoomin), [zoomOut](../../api/gantt#zoomout), and [fitToProject](../../api/gantt#fittoproject).

**Zoom in**

This support is used to increase the timeline width and timeline unit from years to minutes timespan. When the `ZoomIn` icon was clicked, the timeline cell width is increased when the cell size exceeds the specified range and the timeline unit is changed based on the current zoom levels.

**Zoom out**

This support is used to increase the timeline width and timeline unit from minutes to years timespan. When the `ZoomOut` icon was clicked, the timeline cell width is decreased when the cell size falls behind the specified range and the timeline view mode is changed based on the current zooming levels.

**Zoom to fit**

This support is used to view all the tasks available in a project within available area on the chart part of Gantt. When users click the `ZoomToFit` icon, then all the tasks are rendered within the available chart container width.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zooming-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zooming-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/zooming-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zooming-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zooming-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/zooming-cs1" %}
{% endif %}

## Customizing zooming levels

Zoom actions are governed by predefined zooming levels specified in the [zoomingLevels](../../api/gantt#zoominglevels) property. These levels can be customized by assigning a collection of zoom configurations to the `zoomingLevels` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zooming-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zooming-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/zooming-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zooming-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zooming-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/zooming-cs2" %}
{% endif %}

## Zoom actions via methods

Zooming actions can be triggered dynamically or through external controls using the following methods:

- **Zoom In** - Use [zoomIn](../../api/gantt#zoomin) when `ZoomIn` external button was clicked, the timeline cell width is increased when the cell size exceeds the specified range and the timeline unit is changed based on the current zoom levels.
- **Zoom Out** - Use [zoomOut](../../api/gantt#zoomout) when the `ZoomOut` external button was clicked, the timeline cell width is decreased when the cell size falls behind the specified range and the timeline view mode is changed based on the current zooming levels.
- **Zoom To Fit** - Use [fitToProject](../../api/gantt#fittoproject) When `ZoomToFit` external button was clicked then all the tasks are rendered within the available chart container width.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zoomingMethods-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zoomingMethods-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/zoomingMethods-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zoomingMethods-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/zoomingMethods-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/zoomingMethods-cs1" %}
{% endif %}
