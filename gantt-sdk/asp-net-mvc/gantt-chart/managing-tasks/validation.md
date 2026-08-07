---
layout: post
title: Validation in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to implement task validation in Syncfusion ASP.NET MVC Gantt Chart to enforce data validation rules and constraints.
keywords: asp.net mvc gantt validation, task validation, validation rules, data validation, validation constraints, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/managing-tasks/validation
platform: gantt-sdk
control: Managing Tasks - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Implementing Data Validation and Error Handling in ASP.NET MVC Gantt Chart

## Column validation

Column validation validates the editing and adding data and it display errors for invalid fields before saving data. This is effective in both inline and dialog editing.
Gantt uses [`Form Validator`](https://ej2.syncfusion.com/documentation/form-validator) component for column validation. You can set [`validation rules`](https://ej2.syncfusion.com/documentation/form-validator/validation-rules) by defining the [`validationRules`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_ValidationRules) in [`Columns`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Columns). The value cannot be saved unless the validation rule get satisfied.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/validating/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="validating.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/validating/validating.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/validating/razor %}
{% endhighlight %}
{% highlight c# tabtitle="validating.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/validating/validating.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## Custom validation

You can define your own custom validation rules for the specific columns by using callback function to it's [`validation rule`](https://ej2.syncfusion.com/documentation/form-validator/validation-rules#defining-custom-rules).

In the below demo, custom validation applied for **TaskName** column.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/customValidation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="customValidation.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/customValidation/customValidation.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/customValidation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="customValidation.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/customValidation/customValidation.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## Dependency and resource grid validation

Validation rules can also be implemented for the dependency and resource grid in the add or edit dialog by employing the event [`ActionBegin`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ActionBegin).
Within the actionBegin event, validationRules can be configured for columns in the grid of the dependency and resource tabs using the requestType **beforeOpenEditDialog** or **beforeOpenAddDialog**.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/validating/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="validating.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/validating/validating.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/validating/razor %}
{% endhighlight %}
{% highlight c# tabtitle="validating.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/validating/validating.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
