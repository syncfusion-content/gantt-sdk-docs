---
layout: post
title: State Persistence in ASP.NET MVC Kanban | Syncfusion
description: Learn how to enable state persistence and save Kanban settings in Syncfusion ASP.NET MVC Kanban component.
keywords: asp-net-mvc kanban persistence, syncfusion kanban, state management, settings
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/kanban/persistence
platform: gantt-sdk
control: Persistence - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# State Persistence in ASP.NET MVC Kanban

State persistence refers to the Kanban state maintained in the browser's [`LocalStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser.

State persistence stores Kanban datasource, column or swimlane expand/collapse state in the local storage when the `EnablePersistence` is defined as true.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/persistence/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/persistence/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/persistence/controller.cs %}
{% endhighlight %}
{% endtabs %}
