---
layout: post
title: Check box Columns in Syncfusion ASP.NET Core Gantt Component
description: Learn here all about Check box Columns in Syncfusion ASP.NET Core Gantt component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Columns
publishingplatform: gantt-sdk
documentation: ug
---

# Checkbox Column in gantt control

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](../api/gantt/column/#displayascheckbox) property as **true**.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt/columns/checkbox/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Checkbox.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt/columns/checkbox/checkbox.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt/columns/checkbox/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Checkbox.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt/columns/checkbox/checkbox.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

![Alt text](images/checkbox.png)
