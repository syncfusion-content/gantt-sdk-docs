---
layout: post
title: Header Double-Click in TypeScript Kanban | Syncfusion
description: Learn how to handle column header double-click events in Syncfusion TypeScript Kanban with practical examples and configuration guidance.
keywords: typescript kanban header double click, syncfusion kanban, header event, column header
canonical: https://help.syncfusion.com/gantt-sdk/typescript/kanban/how-to/header-double-click
platform: gantt-sdk
control: Header Double Click - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Handle Header Double-Click in TypeScript Kanban

You can bind the header double click event by using the [`dataBound`](https://ej2.syncfusion.com/documentation/api/kanban#dataBound) event at the initial rendering. You can get the column header text when you double click on the headers.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/how-to-cs1" %}

