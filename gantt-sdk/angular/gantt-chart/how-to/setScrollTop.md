---
layout: post
title: Set Vertical Scroll Position in Angular Gantt Chart | Syncfusion
description: Learn how to set vertical scroll position in Syncfusion Angular Gantt Chart using setScrollTop method.
keywords: angular gantt setscrolltop, vertical scroll, scroll position, navigation, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/angular/gantt-chart/how-to/setScrollTop
platform: gantt-sdk
control: Set Scroll Position - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Controlling Vertical Scroll Position in Angular Gantt Chart

The [setScrollTop](https://ej2.syncfusion.com/angular/documentation/api/gantt#setscrolltop) method in the [Angular Gantt Chart](https://www.syncfusion.com/angular-components/angular-gantt-chart) component enables programmatic control of the vertical scroll position, allowing efficient navigation to specific tasks in large project datasets. By specifying a numeric pixel value (e.g., `100` for 100px), you can scroll the grid portion of the Gantt (task rows) to focus on a desired task or area. For example, clicking a button to scroll to a task at row 50 enhances user experience in projects with thousands of tasks. Ensure the Gantt has a defined `dataSource` and `height` (e.g., "600px") to calculate the scrollable content area accurately. Use pixel-based scroll values to position the viewport precisely, with the maximum scroll limited by the total content height, which varies with dataset size or when [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/gantt#enablevirtualization) is enabled for optimized performance. This method integrates seamlessly with virtual scrolling and row selection (via [selectedRowIndex](https://ej2.syncfusion.com/angular/documentation/api/gantt#selectedrowindex)), making it ideal for automating navigation, such as scrolling to a newly added task or a selected task, enhancing project management workflows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/gantt-chart/how-to/setscrolltop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/gantt-chart/how-to/setscrolltop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/gantt-chart/how-to/setscrolltop-cs1" %}

## See also
- [How to configure virtual scrolling?](https://ej2.syncfusion.com/angular/documentation/gantt/scrolling/virtual-scrolling)
- [How to configure row selection?](https://ej2.syncfusion.com/angular/documentation/gantt/selection)
- [How to manage task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks)