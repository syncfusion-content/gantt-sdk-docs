---
layout: post
title: Holidays in Vue Gantt Chart component | Syncfusion
description: Learn how to display and customize holidays in the Vue Gantt Chart using the holidays property to highlight non-working days effectively.
control: Holidays
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Holidays in Vue Gantt Chart component

Non-working days in a project can be displayed in the Gantt Chart component using the [holidays](https://ej2.syncfusion.com/vue/documentation/api/gantt#holidays) property. Each holiday can be defined with the following properties:

- [from](https://ej2.syncfusion.com/vue/documentation/api/gantt/holiday#from): Defines start date of the holiday(s).
- [to](https://ej2.syncfusion.com/vue/documentation/api/gantt/holiday#to): Defines end date of the holiday(s).
- [label](https://ej2.syncfusion.com/vue/documentation/api/gantt/holiday#label): Defines the description or label for the holiday.
- [cssClass](https://ej2.syncfusion.com/vue/documentation/api/gantt/holiday#cssclass): Formats the holidays label in the Gantt chart.

To highlight the days, inject the [DayMarkers](https://ej2.syncfusion.com/vue/documentation/api/gantt#daymarkersmodule) module in the `provide` section.

The following code example shows how to display the non-working days in the Gantt Chart component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/holidays-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/holidays-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/holidays-cs1" %}
