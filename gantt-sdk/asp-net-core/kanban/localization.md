---
layout: post
title: Localization in ASP.NET Core Kanban | Syncfusion
description: Learn how to implement localization and internationalization in Syncfusion ASP.NET Core Kanban for multi-language support.
keywords: asp-net-core kanban localization, syncfusion kanban, internationalization, i18n
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/kanban/localization
platform: gantt-sdk
control: Localization - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Globalization and Localization Support in ASP.NET Core Kanban

The localization library allows you to localize the default text content of the Kanban to different cultures using the `locale` property.

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
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/localization/localization/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/localization/localization/datasource.cs %}
{% endhighlight %}
{% endtabs %}
Output be like the below.

![kanban](./images/localization.PNG)

## Right to left (RTL)

The Kanban provides an option to switch its text direction and layout from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable right-to-left mode in Kanban, set the `enableRtl` to true.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/localization/rtl/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/localization/rtl/datasource.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/rtl.PNG)