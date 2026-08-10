---
layout: post
title: Validation in TypeScript Gantt Chart | Syncfusion
description: Learn to Validate task data in Syncfusion TypeScript Gantt Chart using column validation, custom rules, dependencies, and resource rules for accuracy.
keywords: TypeScript gantt validation, data validation, task validation, validation rules, error handling, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/TypeScript/gantt-chart/managing-tasks/validation
platform: gantt-sdk
control: Validation - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Implementing Data Validation and Error Handling in TypeScript Gantt Chart

Validation in the TypeScript Gantt Chart control ensures accurate task data by enforcing rules during adding or editing, preventing invalid entries before saving. Using the [Form Validator](https://ej2.syncfusion.com/documentation/form-validator) control, apply validation to columns in inline or dialog editing, custom rules for specific fields, or dependency and resource grids in the add/edit dialog. Requires `Edit` and valid [taskFields](https://ej2.syncfusion.com/documentation/api/gantt#taskfields) mappings (e.g., id, name) to ensure data integrity for tasks updated on September 23, 2025, or later, maintaining valid date ranges or dependency formats.

## Validate columns

Define validation rules for columns using [columns.validationRules](https://ej2.syncfusion.com/documentation/api/gantt/column#validationrules), such as `required` or `minLength`, to display error messages for invalid fields like missing task names in inline or dialog editing.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs24/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs24/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs24" %}

## Apply custom validation

Implement custom validation for specific columns, like `TaskName`, using callback functions in [columns.validationRules](https://ej2.syncfusion.com/documentation/api/gantt/column#validationrules) to enforce unique requirements, such as ensuring task names meet specific patterns.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs25/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs25/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs25" %}

## Validate dependency and resource grids

Set validation rules for dependency and resource grids in the add/edit dialog using the [actionBegin](https://ej2.syncfusion.com/documentation/api/gantt#actionbegin) event with `requestType` set to **beforeOpenEditDialog** or **beforeOpenAddDialog**, configuring `validationRules` for fields like predecessor types or resource assignments to ensure valid entries.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs26/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs26/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs26" %}

## See also

- [How to configure task editing?](https://ej2.syncfusion.com/documentation/gantt/managing-tasks/editing-tasks)
- [How to manage task dependencies?](https://ej2.syncfusion.com/documentation/gantt/task-dependency)
- [How to add new tasks?](https://ej2.syncfusion.com/documentation/gantt/managing-tasks/adding-new-tasks)
