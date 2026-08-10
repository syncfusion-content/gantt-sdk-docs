---
layout: post
title: Header Double-Click in Angular Kanban | Syncfusion
description: Learn how to handle column header double-click events in Syncfusion Angular Kanban with practical examples and configuration guidance.
keywords: angular kanban header double click, syncfusion kanban, header events, column header
canonical: https://help.syncfusion.com/gantt-sdk/angular/kanban/how-to/header-double-click
platform: gantt-sdk
control: Header Double Click - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Handle Header Double-Click in Angular Kanban

The Kanban component does not provide a built-in event for handling column header double-clicks. You can bind the header double click event using [dataBound](https://ej2.syncfusion.com/angular/documentation/api/kanban#dataBound) event at initial rendering. You can get the column header text when double click the headers.

The following sample demonstrates how to handle a double-click action on a column header:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/auto-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/auto-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/kanban/auto-cs2" %}
