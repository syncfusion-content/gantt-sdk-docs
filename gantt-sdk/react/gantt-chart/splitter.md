---
layout: post
title: Splitter in React Gantt Chart Component | Syncfusion
description: Learn how to configure the splitter in the Syncfusion React Gantt Chart component for flexible TreeGrid and Chart panel sizing.
control: Splitter
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Splitter in React Gantt Chart Component

The splitter in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component divides the TreeGrid pane and Chart pane, enabling flexible width allocation for project visualization. Configured via the [splitterSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings) property, the splitter supports pixel or percentage-based positioning, column-based alignment, and predefined view modes. The [setSplitterPosition](https://ej2.syncfusion.com/react/documentation/api/gantt#setsplitterposition) method adjusts positioning dynamically, while the [splitterResizeStart](https://ej2.syncfusion.com/react/documentation/gantt/events#splitterresizestart), [splitterResizing](https://ej2.syncfusion.com/react/documentation/gantt/events#splitterresizing), and [splitterResized](https://ej2.syncfusion.com/react/documentation/gantt/events#splitterresized) events handle resize interactions. The splitter includes ARIA labels for accessibility, ensuring screen reader compatibility, and adapts to responsive designs, though narrow screens may limit visible columns or timeline segments. By default, both panels are visible with equal width.

## Configure splitter position

Set the splitter position using [splitterSettings.position](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings#position) with pixel (e.g., "300px") or percentage (e.g., "30%") values to define the TreeGrid pane width, or align to a column edge with [splitterSettings.columnIndex](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings#columnindex).

The following example sets a percentage-based splitter position. This configuration allocates 50% width to the TreeGrid panel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/splitter-cs1" %}

> If both [position](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings#position) and [columnIndex](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings#columnindex) are defined in [splitterSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings), only `position` is applied because it takes precedence over `columnIndex`.

## Configure view modes

Set predefined view modes with [splitterSettings.view](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings#view):

- **Default**: Displays both TreeGrid and Chart panels.
- **Grid**: Shows only the TreeGrid panel for data-focused views.
- **Chart**: Shows only the Chart panel for timeline visualization.

The following example configures the Grid view mode. This configuration prioritizes the TreeGrid for detailed task analysis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

![Splitter view](./images/splitter-view.gif)

## Adjust splitter position dynamically

Change the splitter position using the [setSplitterPosition](https://ej2.syncfusion.com/react/documentation/api/gantt#setsplitterposition) method with pixel, percentage, or column index values, triggered by events like window resizing or button clicks.

The following example adjusts the splitter dynamically:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/splitter-cs3" %}

## Customize splitter appearance

Customize the splitter’s appearance in the Gantt Chart component by handling the [dataBound](https://ej2.syncfusion.com/react/documentation/gantt/events#databound), [splitterResizing](https://ej2.syncfusion.com/react/documentation/gantt/events#splitterresizing) and [splitterResized](https://ej2.syncfusion.com/react/documentation/gantt/events#splitterresized) events to dynamically adjust styles, such as the background color or visibility of the resize handler. This enhances visual feedback during splitter interactions, improving usability for resizing the TreeGrid and Chart panels. The splitter retains ARIA labels for accessibility, ensuring screen reader compatibility.

The following example customizes the splitter’s background and hides the resize handler during resizing:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/splitter-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/splitter-cs4" %}

## See also
- [How to configure Gantt Chart columns?](https://ej2.syncfusion.com/react/documentation/gantt/columns/columns)
- [How to customize the timeline?](https://ej2.syncfusion.com/react/documentation/gantt/timeline/timeline)
- [How to handle scrolling?](https://ej2.syncfusion.com/react/documentation/gantt/scrolling)