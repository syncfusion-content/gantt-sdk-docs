---
layout: post
title: Row Spanning in JavaScript Gantt Chart | Syncfusion
description: Learn how to configure row spanning in Syncfusion JavaScript Gantt Chart to merge cells vertically for displaying shared information across rows.
keywords: javascript gantt row spanning, cell spanning, row span, merge cells, cell merging, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/rows/row-spanning
platform: gantt-sdk
control: Row Spanning - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Implementing Row Spanning for Multi-Row Cells in JavaScript Gantt Chart

The [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control supports row cell spanning, allowing multiple cells in a row to merge into a single cell. This is useful for displaying shared information across rows without duplication.

To enable row spanning, use the [rowSpan](../api/gantt/queryCellInfoEventArgs#rowspan) attribute inside the [queryCellInfo](../api/gantt#querycellinfo) event. This event is triggered for each grid cell, where you can define the number of rows a cell should span based on its data.

In the example below, the **Soil test approval** cell spans across two rows in the **TaskName** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-span/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-span/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/rows-span" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-span/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-span/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/rows-span" %}
{% endif %}

> * You can use both [rowSpan](../api/gantt/queryCellInfoEventArgs#rowspan) and [colSpan](../api/gantt/queryCellInfoEventArgs#colspan) together to merge grid cells vertically and horizontally.
