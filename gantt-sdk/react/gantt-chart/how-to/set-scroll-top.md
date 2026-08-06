---
layout: post
title: Set Scroll Position in React Gantt Chart | Syncfusion
description: Learn how to programmatically set the vertical scroll position in Syncfusion React Gantt Chart for efficient navigation in large project datasets.
keywords: react gantt scroll position, set scroll top, vertical scroll, programmatic scroll, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/react/gantt-chart/how-to/set-scroll-top
platform: gantt-sdk
control: Scroll Position - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Set Vertical Scroll Position in React Gantt Chart

The [setScrollTop](https://ej2.syncfusion.com/react/documentation/api/gantt#setscrolltop) method in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component enables programmatic control of the vertical scroll position, allowing efficient navigation to specific tasks in large project datasets. By specifying a numeric pixel value (e.g., `100` for 100px), you can scroll the grid portion of the Gantt (task rows) to focus on a desired task or area. For example, clicking a button to scroll to a task at row 50 enhances user experience in projects with thousands of tasks. Ensure the Gantt has a defined `dataSource` and `height` (e.g., "600px") to calculate the scrollable content area accurately. Use pixel-based scroll values to position the viewport precisely, with the maximum scroll limited by the total content height, which varies with dataset size or when [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/gantt#enablevirtualization) is enabled for optimized performance. This method integrates seamlessly with virtual scrolling and row selection (via [selectedRowIndex](https://ej2.syncfusion.com/react/documentation/api/gantt#selectedrowindex)), making it ideal for automating navigation, such as scrolling to a newly added task or a selected task, enhancing project management workflows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-setscrolltop-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-setscrolltop-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-setscrolltop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/how-to-setscrolltop-cs1" %}

## See also
- [How to configure virtual scrolling?](https://ej2.syncfusion.com/react/documentation/gantt/virtual-scroll)
- [How to configure row selection?](https://ej2.syncfusion.com/react/documentation/gantt/selection)
- [How to manage task editing?](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/editing-tasks)