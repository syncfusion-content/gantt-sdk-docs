---
layout: post
title: Splitter in TypeScript Gantt Chart Control | Syncfusion
description: Learn here all about splitter in Syncfusion TypeScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Splitter
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Splitter in TypeScript Gantt Chart Control

The splitter in the [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control divides the TreeGrid pane and Chart pane, enabling flexible width allocation for project visualization. Configured via the [splitterSettings](../api/gantt/splitterSettings) property, the splitter supports pixel or percentage-based positioning, column-based alignment, and predefined view modes. The [setSplitterPosition](../api/gantt#setsplitterposition) method adjusts positioning dynamically, while the [splitterResizeStart](../api/gantt/splitterresizestart), [splitterResizing](../api/gantt/splitterresizing), and [splitterResized](../api/gantt/splitterresized) events handle resize interactions. The splitter includes ARIA labels for accessibility, ensuring screen reader compatibility, and adapts to responsive designs, though narrow screens may limit visible columns or timeline segments. By default, both panels are visible with equal width.

## Configure splitter position

Set the splitter position using [splitterSettings.position](../api/gantt/splitterSettings#position) with pixel (e.g., "300px") or percentage (e.g., "30%") values to define the TreeGrid pane width, or align to a column edge with [splitterSettings.columnIndex](../api/gantt/splitterSettings#columnindex).

The following example sets a percentage-based splitter position. This configuration allocates 50% width to the TreeGrid panel.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-splitter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-splitter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/how-to-splitter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-splitter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-splitter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/how-to-splitter-cs1" %}
{% endif %}

> If both [position](../api/gantt/splitterSettings#position) and [columnIndex](../api/gantt/splitterSettings#columnindex) are defined in [splitterSettings](../api/gantt/splitterSettings), only `position` is applied because it takes precedence over `columnIndex`.

## Configure view modes

Set predefined view modes with [splitterSettings.view](../api/gantt/splitterSettings#view):

- **Default**: Displays both TreeGrid and Chart panels.
- **Grid**: Shows only the TreeGrid panel for data-focused views.
- **Chart**: Shows only the Chart panel for timeline visualization.

The following example configures the Grid view mode. This configuration prioritizes the TreeGrid for detailed task analysis.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/splitter-view/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/splitter-view/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/splitter-view" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/splitter-view/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/splitter-view/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/splitter-view" %}
{% endif %}

## Adjust splitter position dynamically

Change the splitter position using the [setSplitterPosition](../api/gantt#setsplitterposition) method with pixel, percentage, or column index values, triggered by events like window resizing or button clicks.

The following example adjusts the splitter dynamically:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/changeSplitterDynamically-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/changeSplitterDynamically-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/changeSplitterDynamically-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/changeSplitterDynamically-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/changeSplitterDynamically-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/changeSplitterDynamically-cs1" %}
{% endif %}

## Customize splitter appearance

Customize the splitter’s appearance in the Gantt Chart control by handling the [dataBound](../api/gantt#databound), [splitterResizing](../api/gantt#splitterresizing) and [splitterResized](../api/gantt#splitterresized) events to dynamically adjust styles, such as the background color or visibility of the resize handler. This enhances visual feedback during splitter interactions, improving usability for resizing the TreeGrid and Chart panels. The splitter retains ARIA labels for accessibility, ensuring screen reader compatibility.

The following example customizes the splitter’s background and hides the resize handler during resizing:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/splitter-events/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/splitter-events/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/splitter-events" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/splitter-events/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/splitter-events/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/splitter-events" %}
{% endif %}
