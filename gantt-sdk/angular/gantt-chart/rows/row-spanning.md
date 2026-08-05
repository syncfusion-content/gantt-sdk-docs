---
layout: post
title: Row Spanning in Angular Gantt Chart | Merge Cells | Syncfusion
description: Learn how to use row spanning in Syncfusion Angular Gantt Chart with custom templates and event handling
platform: gantt-sdk
control: Row Spanning - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Implementing Row Spanning for Multi-Row Cells in Angular Gantt Chart

The [Angular Gantt Chart](https://www.syncfusion.com/angular-components/angular-gantt-chart) component supports row cell spanning, allowing multiple cells in a row to merge into a single cell. This is useful for displaying shared information across rows without duplication.

To enable row spanning, use the [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs#rowspan) attribute inside the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#querycellinfo) event. This event is triggered for each grid cell, where you can define the number of rows a cell should span based on its data.

In the example below, the **Soil test approval** cell spans across two rows in the **TaskName** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/gantt-chart/rows/rowSpanning-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/gantt-chart/rows/rowSpanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/gantt-chart/rows/rowSpanning-cs1" %}

> * You can use both [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs#rowspan) and [colSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs#colspan) together to merge grid cells vertically and horizontally.
