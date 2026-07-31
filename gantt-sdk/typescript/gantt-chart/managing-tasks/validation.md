---
layout: post
title: Validation in TypeScript Gantt Chart Control | Syncfusion
description: Learn how to validate task data in the Syncfusion TypeScript Gantt Chart control using column, custom, dependency, and resource grid rules for accurate project management.
platform: gantt-sdk
control: Validating Tasks
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Validation in TypeScript Gantt Chart Control

Validation in the TypeScript Gantt Chart control ensures accurate task data by enforcing rules during adding or editing, preventing invalid entries before saving. Using the [Form Validator](https://ej2.syncfusion.com/documentation/form-validator) control, apply validation to columns in inline or dialog editing, custom rules for specific fields, or dependency and resource grids in the add/edit dialog. Requires `Edit` and valid [taskFields](../../api/gantt#taskfields) mappings (e.g., id, name) to ensure data integrity for tasks updated on September 23, 2025, or later, maintaining valid date ranges or dependency formats.

## Validate columns

Define validation rules for columns using [columns.validationRules](../../api/gantt/column#validationrules), such as `required` or `minLength`, to display error messages for invalid fields like missing task names in inline or dialog editing.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs24/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs24/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/getting-started-cs24" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs24/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/getting-started-cs24" %}
{% endif %}

## Apply custom validation

Implement custom validation for specific columns, like `TaskName`, using callback functions in [columns.validationRules](../../api/gantt/column#validationrules) to enforce unique requirements, such as ensuring task names meet specific patterns.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs25/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs25/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/getting-started-cs25" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs25/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs25/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/getting-started-cs25" %}
{% endif %}

## Validate dependency and resource grids

Set validation rules for dependency and resource grids in the add/edit dialog using the [actionBegin](../../api/gantt#actionbegin) event with `requestType` set to **beforeOpenEditDialog** or **beforeOpenAddDialog**, configuring `validationRules` for fields like predecessor types or resource assignments to ensure valid entries.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs26/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs26/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/getting-started-cs26" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs26/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs26/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/getting-started-cs26" %}
{% endif %}

## See also

- [How to configure task editing?](../../gantt/managing-tasks/editing-tasks)
- [How to manage task dependencies?](../../gantt/task-dependency)
- [How to add new tasks?](../../gantt/managing-tasks/adding-new-tasks)
