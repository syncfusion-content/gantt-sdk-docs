---
layout: post
title: Holidays in TypeScript Gantt Control | Syncfusion
description: Learn here all about Holidays in Syncfusion TypeScript Gantt control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Holidays
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Holidays in TypeScript Gantt Control

The [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control supports holidays to define non-working days, such as national holidays or company closures, that impact task scheduling and project timelines. Holidays override regular working time settings like [workWeek](../../api/gantt#workweek) or [includeWeekend](../../api/gantt#includeweekend), ensuring tasks do not progress during these periods. In the timeline, holidays appear as highlighted backgrounds with descriptive labels, creating visible gaps in taskbars to reflect scheduling adjustments. Custom CSS classes allow distinct styling for different holiday types (e.g., national vs. company holidays), enhancing visual clarity. Properly configured holidays ensure accurate duration calculations, dependency adjustments, and critical path analysis, aligning project timelines with resource availability and regional requirements.

## Understanding holiday effects on tasks

Holidays adjust task scheduling to reflect non-working periods:

- **Duration adjustments**: Task durations exclude holidays, extending end dates. For example, a task starting December 20, 2024, skips a December 25-26 holiday, adjusting its completion to account for these days.
- **Dependency management**: Successor tasks shift to maintain relationships (e.g., FS), ensuring no work occurs during holidays.
- **Critical path integration**: Holidays impact slack calculations when using [enableCriticalPath](../../api/gantt#enablecriticalpath), as tasks delayed by holidays may become critical.
- **Resource allocation**: Holidays reduce resource availability, pausing task progress during these periods.

The [projectStartDate](../../api/gantt#projectstartdate) and [projectEndDate](../../api/gantt#projectenddate) properties provide context for scheduling, ensuring holidays align with the project timeline.

## Configure holidays

Holidays are defined using the [holidays](../../api/gantt#holidays) property, which accepts an array of holiday objects specifying dates, labels, and styling. The `DayMarkersService` must be injected to render holidays as visual markers in the timeline and adjust task scheduling calculations. Holidays take precedence over settings like `workWeek` or `includeWeekend`, ensuring tasks do not progress during these periods.

**Holiday configuration properties**

- `from`: Sets the start date of the holiday (e.g., `new Date('2024-12-25')`).
- `to`: Defines the end date for multi-day holidays (optional for single-day holidays).
- `label`: Provides a descriptive name (e.g., “Christmas Day”) displayed in the timeline.
- `cssClass`: Applies custom CSS classes for styling holiday appearances.

The following example configures single and multi-day holidays:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/holidays-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/holidays-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/holidays-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/holidays-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/holidays-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/holidays-cs1" %}
{% endif %}

The code defines holidays like Christmas (December 25) and a multi-day New Year break, rendering them as highlighted periods in the timeline.

## Customize holiday appearance

Customize holiday visuals using the `cssClass` property to apply distinct styles for different holiday types, such as national or company-specific closures:

```css
.national-holiday {
  background-color: #ffebee;
  border-left: 3px solid #f44336;
}
.national-holiday .e-gantt-holiday-label {
  color: #d32f2f;
  font-weight: bold;
  background-color: #ffcdd2;
  padding: 2px 6px;
  border-radius: 4px;
}

.company-holiday {
  background-color: #e3f2fd;
  border-left: 3px solid #2196f3;
}
.company-holiday .e-gantt-holiday-label {
  color: #1976d2;
  font-style: italic;
  background-color: #bbdefb;
  padding: 2px 6px;
  border-radius: 4px;
}
```

For multi-day holidays, specify both `from` and `to` dates:

```typescript
holidays: [
  {
    from: new Date("2024-12-24"),
    to: new Date("2024-12-26"),
    label: "Christmas Break",
    cssClass: "national-holiday",
  },
  {
    from: new Date("2024-01-01"),
    to: new Date("2024-01-02"),
    label: "New Year Holiday",
    cssClass: "company-holiday",
  },
];
```

This code styles holidays with distinct colors and labels, enhancing timeline readability.

## See Also

- [How to configure event markers?](../../gantt/event-markers)
- [How to manage task dependencies?](../../gantt/task-dependency)
- [How to enable critical path analysis?](../../gantt/critical-path)
