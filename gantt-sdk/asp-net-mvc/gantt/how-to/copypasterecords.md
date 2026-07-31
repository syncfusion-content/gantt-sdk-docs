---
layout: post
title: Copypasterecords in ASP.NET MVC Gantt Component
description: Learn here all about Copypasterecords in Syncfusion ASP.NET MVC Gantt component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Copypasterecords
publishingplatform: gantt-sdk
documentation: ug
---

# Copy and Paste records in Gantt

You can copy and paste a record in the Gantt chart by using the `addRecord` method and `custom context menu`. It is also possible to copy and paste the parent record with multiple hierarchical child records on the required position.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/copypasterecords/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Copypasterecords.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/copypasterecords/copypasterecords.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/copypasterecords/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Copypasterecords.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/copypasterecords/copypasterecords.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
