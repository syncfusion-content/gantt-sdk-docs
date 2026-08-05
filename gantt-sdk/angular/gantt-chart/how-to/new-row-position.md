---
layout: post
title: New Row Position in Angular Gantt Chart | Add Positions | Syncfusion
description: Learn how to add new rows in Syncfusion Angular Gantt Chart at Top, Bottom, Above, Below, or Child positions using newRowPosition property and toolbarClick events.
keywords: angular gantt new row position, newrowposition, toolbarclick, add row, child row, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/angular/gantt-chart/how-to/new-row-position
platform: gantt-sdk
control: New Row Position - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Controlling New Row Position When Adding Tasks in Angular Gantt Chart

In Gantt, a new row can be added in one of the following positions: Top, Bottom, Above, Below and Child. This position can be specified through the `newRowPostion` property. We can make use of the toolbarClick event to create a context menu that specifies the position in which the new row is to be added when adding a record through toolbar click.

The following code snippets demonstrate how to achieve this.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/gantt-chart/how-to/newrow-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/gantt-chart/how-to/newrow-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/gantt-chart/how-to/newrow-cs1" %}