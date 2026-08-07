---
layout: post
title: Dynamically Change Columns in Angular Kanban | Syncfusion
description: Learn how to dynamically change columns in Syncfusion Angular Kanban with practical examples and configuration guidance.
keywords: angular kanban dynamic columns, syncfusion kanban, update columns, dynamic configuration
canonical: https://help.syncfusion.com/gantt-sdk/angular/kanban/how-to/dynamically-change-columns
platform: gantt-sdk
control: Dynamically Change Columns - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Modify Columns Programmatically in Angular Kanban

You can dynamically change the Kanban columns by using the [columns](https://ej2.syncfusion.com/angular/documentation/api/kanban/#columns) property.

In the below sample, you can dynamically change the [allowToggle](https://ej2.syncfusion.com/angular/documentation/api/kanban/columnsModel/#allowtoggle) property at the particular column when you click on the button. You can also change the initially created columns to the new Kanban columns by using the [columns](https://ej2.syncfusion.com/angular/documentation/api/kanban/#columns) property when you click on the button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/dynamic-columns-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/dynamic-columns-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/kanban/dynamic-columns-cs1" %}