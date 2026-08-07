---
layout: post
title: Row Spanning in React Gantt Chart | Syncfusion
description: Learn how to configure row spanning in Syncfusion React Gantt Chart to merge cells across multiple rows for improved task data presentation.
keywords: react gantt row spanning, row merge, cell spanning, merged rows, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/react/gantt-chart/rows/row-spanning
platform: gantt-sdk
control: Row Spanning - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Merging Cells Across Rows with Row Spanning in React Gantt Chart

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component supports row cell spanning, allowing multiple cells in a row to merge into a single cell. This is useful for displaying shared information across rows without duplication.

To enable row spanning, use the [rowSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs#rowspan) attribute inside the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querycellinfo) event. This event is triggered for each grid cell, where you can define the number of rows a cell should span based on its data.

In the example below, the **Soil test approval** cell spans across two rows in the **TaskName** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/row-span-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/row-span-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/row-span-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/row-span-cs1" %}

> * You can use both [rowSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs#rowspan) and [colSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs#colspan) together to merge grid cells vertically and horizontally.
