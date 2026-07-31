---
layout: post
title: Restrict Collapse Chart Rows in ASP.NET MVC Gantt Component
description: Learn here all about Restrict Collapse Chart Rows in Syncfusion ASP.NET MVC Gantt component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Restrict Collapse Chart Rows
publishingplatform: gantt-sdk
documentation: ug
---

# Open add/edit dialog dynamically

Restriction of collapsing the records when clicking on gantt chart rows can be performed by using the [`collapsing`](../../api/gantt/#collapsing) event.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/restrictcollapsechartrows/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Restrictcollapsechartrows.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/restrictcollapsechartrows/restrictcollapsechartrows.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/restrictcollapsechartrows/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Restrictcollapsechartrows.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/restrictcollapsechartrows/restrictcollapsechartrows.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
