---
layout: post
title: New Row Position in JavaScript Gantt | Syncfusion
description: Learn how to configure new row position in Syncfusion JavaScript Gantt Chart to control where new tasks are inserted in the project hierarchy.
keywords: javascript gantt new row position, add row position, insert position, task position, row insertion, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/how-to/new-row-position
platform: gantt-sdk
control: New Row Position - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Controlling New Row Position When Adding Tasks in JavaScript Gantt Chart Control

In Gantt, a new row can be added in one of the following positions: Top, Bottom, Above, Below and Child. This position can be specified through the `new RowPosition` property. We can make use of the toolbarClick event to create a context menu that specifies the position in which the new row is to be added when adding a record through toolbar click.

The following code snippets demonstrate how to achieve this.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/newrowposition-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/newrowposition-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/newrowposition-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/newrowposition-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/newrowposition-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/newrowposition-cs1" %}
{% endif %}
