---
layout: post
title: Validation in React Gantt Chart component | Syncfusion
description: Learn how to validate task data in the Syncfusion React Gantt Chart component using column, custom, dependency, and resource grid rules for accurate project management.
platform: gantt-sdk
control: Validating Tasks
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Validation in React Gantt Chart component

Validation in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component ensures accurate task data by enforcing rules during adding or editing, preventing invalid entries before saving. Using the [Form Validator](https://ej2.syncfusion.com/documentation/form-validator) component, apply validation to columns in inline or dialog editing, custom rules for specific fields, or dependency and resource grids in the add/edit dialog. Requires `Edit` and valid [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt#taskfields) mappings (e.g., id, name) to ensure data integrity for tasks updated on September 23, 2025, or later, maintaining valid date ranges or dependency formats.

## Validate columns

Define validation rules for columns using [columns.validationRules](https://ej2.syncfusion.com/react/documentation/api/gantt/column#validationrules), such as `required` or `minLength`, to display error messages for invalid fields like missing task names in inline or dialog editing.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/celledit-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/celledit-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/celledit-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/celledit-cs4" %}

## Apply custom validation

Implement custom validation for specific columns, like `TaskName`, using callback functions in [columns.validationRules](https://ej2.syncfusion.com/react/documentation/api/gantt/column#validationrules) to enforce unique requirements, such as ensuring task names meet specific patterns.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/celledit-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/celledit-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/celledit-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/celledit-cs5" %}

## Validate dependency and resource grids

Set validation rules for dependency and resource grids in the add/edit dialog using the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/gantt#actionbegin) event with `requestType` set to **beforeOpenEditDialog** or **beforeOpenAddDialog**, configuring `validationRules` for fields like predecessor types or resource assignments to ensure valid entries.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/celledit-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/celledit-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/celledit-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/celledit-cs6" %}

## See also

- [How to configure task editing?](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/editing-tasks)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to add new tasks?](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/adding-new-tasks)
