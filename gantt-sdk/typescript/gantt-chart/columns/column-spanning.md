---
layout: post
title: Column Spanning in TypeScript Gantt Chart | Syncfusion
description: Learn how to merge and span adjacent columns in Syncfusion TypeScript Gantt Chart to organize related task data and improve layout presentation.
keywords: TypeScript gantt column spanning, gantt column span, merge columns, colspan, cell spanning, gantt layout customization, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/TypeScript/gantt-chart/columns/column-spanning
platform: gantt-sdk
control: Column Spanning - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Spanning with Cell Merge Support in TypeScript Gantt Chart

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt Chart control supports **column spanning**, allowing adjacent cells to merge horizontally for improved layout clarity. This feature is useful for grouping related data or enhancing visual structure.

To enable column spanning, use the [queryCellInfo](https://ej2.syncfusion.com/documentation/gantt/events#querycellinfo) event and set the [colSpan](https://ej2.syncfusion.com/documentation/api/gantt/queryCellInfoEventArgs#colspan) property to define how many columns a cell should span.

In the following example, **Work** cells are spanned to improve visual clarity:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs1" %}

## Customize border color of spanned columns

You can customize the border color of spanned cells using the [queryCellInfo](https://ej2.syncfusion.com/documentation/gantt/events#querycellinfo) event. This event triggers before the cell is rendered, allowing you to apply custom styles dynamically.

The following example demonstrates how to change the border color of spanned cells:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs2" %}

## Limitations

Column spanning is not compatible with the following features:

1. Virtual scrolling
2. Infinite scrolling

Ensure these features are disabled when using column spanning to avoid rendering issues.
