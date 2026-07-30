---
layout: post
title: Validation in Vue Gantt Chart Component | Syncfusion
description: Learn here all about validation rule in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Validating Task
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Validation in Vue Gantt Chart Component

## Column validation

Column validation validates the editing and adding data and it displays errors for invalid fields before saving data. This is effective in both inline and dialog editing. Gantt uses the [Form Validator](https://ej2.syncfusion.com/vue/documentation/form-validator) component for column validation. You can set [validation rules](https://ej2.syncfusion.com/vue/documentation/form-validator/validation-rules) by defining the [columns.validationRules](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#validationrules). The value cannot be saved unless the validation rule gets satisfied.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs22/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs22" %}

## Custom validation

You can define your own custom validation rules for specific columns by using a callback function in its [validation rule](https://ej2.syncfusion.com/vue/documentation/form-validator/validation-rules#defining-custom-rules).

In the below demo, custom validation is applied for the `TaskName` column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs23/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs23" %}

## Dependency and resource grid validation

Validation rules can also be implemented for the dependency and resource grid in the add or edit dialog by employing the [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/gantt#actionbegin) event.  
Within the `actionBegin` event, `validationRules` can be configured for columns in the dependency and resource grids using the `requestType` values `beforeOpenEditDialog` or `beforeOpenAddDialog`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs24/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs24" %}