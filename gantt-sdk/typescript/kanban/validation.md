---
layout: post
title: Validation in TypeScript Kanban | Syncfusion
description: Learn how to implement data validation and constraints in Syncfusion TypeScript Kanban for data integrity.
keywords: typescript kanban validation, syncfusion kanban, data validation, constraints
canonical: https://help.syncfusion.com/gantt-sdk/typescript/kanban/validation
platform: gantt-sdk
control: WIP Validation - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# WIP Validation and Work-in-Progress Limits in TypeScript Kanban

Validate particular column using the `minCount` or `maxCount` properties. The corresponding columns gets different appearance when validation fails. In default layout, `constraintType` property accept only `Column` type. In swimlane layout, accept both `Column` and `Swimlane` constraint type.

There are two types of constraints:
1. Column
2. Swimlane

> By default, the column count validation is performed based on Kanban **columns**.

## Minimum card limit

The `minCount` property is used to specify the minimum cards hold on particular column or swimlane cell. If the column or swimlane total card count falls short of the minimum count value, it shows the column or cell background color with validation fails.

## Maximum card limit

The `maxCount` property is used to specify the maximum cards hold on particular column or swimlane cell. If the column or swimlane cell total card count exceeds the maximum count value, it shows the column or cell background color with validation fails.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/column-validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/column-validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/column-validation-cs1" %}
