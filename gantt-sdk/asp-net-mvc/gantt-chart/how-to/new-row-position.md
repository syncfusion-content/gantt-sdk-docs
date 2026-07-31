---
layout: post
title: New Row Position in ASP.NET MVC Gantt Component
description: Learn here all about New Row Position in Syncfusion ASP.NET MVC Gantt component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: New Row Position
publishingplatform: gantt-sdk
documentation: ug
---

# Set new row position in Gantt

In Gantt, a new row can be added in one of the following positions: Top, Bottom, Above, Below and Child. This position can be specified through the `newRowPostion` property. We can make use of the toolbarClick event to create a context menu that specifies the position in which the new row is to be added when adding a record through toolbar click.

The following code snippets demonstrate how to achieve this.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/newrowposition/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Newrowposition.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/newrowposition/newrowposition.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/newrowposition/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Newrowposition.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/newrowposition/newrowposition.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
