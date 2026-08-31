---
layout: post
title: State Persistence in ASP.NET Core Kanban | Syncfusion
description: Learn how to enable state persistence and save Kanban settings in Syncfusion ASP.NET Core Kanban component.
keywords: asp-net-core kanban persistence, syncfusion kanban, state management, settings
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/kanban/persistence
platform: gantt-sdk
control: Persistence - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# State Persistence in ASP.NET Core Kanban

State persistence refers to the Kanban state maintained in the browser's [`LocalStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser.

State persistence stores Kanban datasource, column or swimlane expand/collapse state in the local storage when the `enablePersistence` is defined as true.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/persistence/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/persistence/datasource.cs %}
{% endhighlight %}
{% endtabs %}
