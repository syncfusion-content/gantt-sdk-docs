---
layout: post
title: Localization in Angular Kanban | Syncfusion
description: Learn how to localize labels, formats, and culture settings in Syncfusion Angular Kanban to support global users and multilingual apps.
keywords: angular kanban localization, syncfusion kanban, culture settings, global users
canonical: https://help.syncfusion.com/gantt-sdk/angular/kanban/localization
platform: gantt-sdk
control: Localization - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Globalization and Localization Support in Angular Kanban

The localization library allows you to localize the default text content of the Kanban to different cultures using the [locale](https://ej2.syncfusion.com/angular/documentation/api/kanban/#locale) property.

In Kanban, total count and min or max count text alone will be localized based on culture.

| Locale key | en-US (default)  |
|------|------|
| items |  items |
| min |  Min |
| max |  Max |
| cardsSelected | Cards Selected |
| addTitle | Add New Card |
| editTitle | Edit Card Details |
| deleteTitle | Delete Card |
| deleteContent | Are you sure you want to delete this card? |
| save | Save |
| delete | Delete |
| cancel | Cancel |
| yes | Yes |
| no | No |
| close | Close |
| noCard | No cards to display |
| unassigned | Unassigned |

## Loading translations

To load translation object in an application, use `load` function of `L10n` class.

The following example demonstrates the Kanban in `Deutsch` culture.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/locale-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/locale-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/kanban/locale-cs1" %}

## Right to left (RTL)

The Kanban provides an option to switch its text direction and layout from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable right-to-left mode in Kanban, set the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/kanban/#enablertl) to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/kanban/rtl-cs1" %}
