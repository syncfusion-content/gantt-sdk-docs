---
layout: post
title: Change Schedule Dates in Vue Gantt Chart | Syncfusion
description: Learn how to programmatically change project start and end dates in the Syncfusion Vue Gantt Chart using updateProjectDates and timeline configuration.
keywords: vue gantt change schedule dates, project dates, schedule start end date, update project dates, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/how-to/change-schedule-dates
platform: gantt-sdk
control: Change Schedule Dates - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Updating Schedule Dates Programmatically in Vue Gantt Chart

In the Gantt Chart component, you can change the schedule start and end dates programmatically using the [updateProjectDates](https://ej2.syncfusion.com/vue/documentation/api/gantt#updateprojectdates) method. Pass the **start date** and **end date** as arguments to the  
`updateProjectDates` method. You can also pass a **Boolean value** as the third parameter to **round off** the schedule start and end dates displayed in the Gantt Chart timeline.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/changescheduledates-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/changescheduledates-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/how-to/changescheduledates-cs1" %}
