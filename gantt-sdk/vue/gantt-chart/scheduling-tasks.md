---
layout: post
title: Scheduling Tasks in Vue Gantt Chart component | Syncfusion
description: Learn here all about Scheduling tasks in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Scheduling tasks 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Scheduling Tasks in Vue Gantt Chart component

## Duration units

In the Gantt Chart component, the tasks’ duration value can be measured by the following duration units:

* Day
* Hour
* Minute

In the Gantt Chart component, you can define the duration unit for whole project by using the [durationUnit](https://ej2.syncfusion.com/vue/documentation/api/gantt#durationunit) property. When you define a value for this property, the duration unit will be applied for all tasks that do not have duration unit value.

Each task in the project can be defined with different duration units and the duration unit of a task can be defined by the following ways:
* Using the [taskFields.durationUnit](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields#durationunit) property, you can map the duration unit of data source field.
* Defining the duration unit value along with duration field in the data source.

### Mapping the duration unit field

The following code snippet explains mapping the data source field of the duration unit to the Gantt Chart component using the [taskFields.durationUnit](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields#durationunit) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs3" %}

> NOTE
The default value of the [durationUnit](https://ej2.syncfusion.com/vue/documentation/api/gantt#durationunit) property is `day`.

### Defining duration unit along with duration field

A duration unit for a task can be defined along with duration value, the following code snippet explains the duration unit for a task along with duration value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs4" %}

>NOTE:
The edit type of the duration column in Gantt is string to edit the duration field along with duration units.

## Unscheduled tasks

Unscheduled tasks are planned for a project without any definite schedule dates. The Gantt Chart component supports rendering the unscheduled tasks. You can create or update the tasks with anyone of start date, end date, and duration values or none. You can enable or disable the unscheduled tasks by using the [allowUnscheduledTasks](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowunscheduledtasks) property.

## Unscheduled task types

The following images represent the various types of unscheduled tasks in Gantt.

### Start date only

![Alt text](images/startDate-only.png)

### End date only

![Alt text](images/endDate-only.png)

### Duration only

![Alt text](images/duration-only.png)

### Milestone

A milestone is a task that has no start and end dates, but it has a duration value of zero. It is represented as follows.

![Alt text](images/milestone.png)

### Define unscheduled tasks in data source

You can define the various types of unscheduled tasks in the data source as follows.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs5" %}

> NOTE
> If the [allowUnscheduledTasks](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowunscheduledtasks) property is set to false, then the Gantt control automatically calculates the scheduled date values with a default value of duration 1 and the project start date is considered as the start date for the task.

## Working time range

In the Gantt Chart component, working hours in a day for a project can be defined by using the [dayWorkingTime](https://ej2.syncfusion.com/vue/documentation/api/gantt#dayworkingtime) property. Based on the working hours, automatic date scheduling and duration validations for a task are performed.

The following code snippet explains how to define the working time range for the project in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs6" %}

> NOTE
>* Individual tasks can lie between any time within the defined working time range of the project.
>* The [dayWorkingTime](https://ej2.syncfusion.com/vue/documentation/api/gantt#dayworkingtime) property is used to define the working time for the whole project.

## Weekend / Non-working days

Non-working days/weekend are used to represent the non-productive days in a project. You can define the non-working days in a week using the [workWeek](https://ej2.syncfusion.com/vue/documentation/api/gantt#workweek) property in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/scheduling-tasks-cs7" %}

> By default, Saturdays and Sundays are considered as non-working days/weekend in a project.
> To show or hide weekend in timeline, use [timelineSettings.showWeekend](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings#showweekend) property in `timelineSettings`. To know more about `showWeekend`, refer [here](https://ej2.syncfusion.com/vue/documentation/gantt/time-line/time-line#showhide-weekends).
> In the Gantt Chart component, you can make weekend as working day by setting the [includeWeekend](https://ej2.syncfusion.com/vue/documentation/api/gantt#includeweekend) property to `true`.