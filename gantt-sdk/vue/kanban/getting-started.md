---
layout: post
title: Getting Started with Vue Kanban Component | Syncfusion
description: Checkout and learn about Getting started with Vue Kanban component of Syncfusion Essential JS 2 and more details.
platform: gantt-sdk
control: Getting started
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Getting Started with the Vue Kanban Component

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a TypeScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Kanban component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) or [Options API](https://vuejs.org/guide/introduction.html#options-api).

By the end of this guide, you will have a working Kanban board with four columns — **To Do**, **In Progress**, **Testing**, and **Done** — populated with sample cards.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

Before you begin, make sure the following are installed on your development machine:

* [Node.js](https://nodejs.org/en) version 18 or higher (required by Vite 7)
* [npm](https://www.npmjs.com/) (bundled with Node.js) or [yarn](https://yarnpkg.com/)
* A code editor such as Visual Studio Code

## Create the Vue Application

Run the following commands in the terminal to scaffold a new Vue 3 + TypeScript project using [Vite](https://vitejs.dev/):

```bash
npm create vite@7 my-vue-app -- --template vue-ts
cd my-vue-app
npm install
```

> You can also use `npm create vite@latest` to scaffold with the most recent Vite version. Replace `my-vue-app` with the name of your project.

After the install completes, start the dev server to verify the scaffolded app works before adding Syncfusion packages:

```bash
npm run dev
```

Vite serves the default app at `http://localhost:5173`. Stop the server with **Ctrl + C** before moving on to the next steps.

## Install Syncfusion Vue Kanban Package

All available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. The `@syncfusion/ej2-vue-kanban` package depends on **Vue 3**.

Install the Kanban component with the following command:

```bash
npm install @syncfusion/ej2-vue-kanban --save
```

## Adding CSS Reference


Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Kanban component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.

Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme

{% endhighlight %}
{% endtabs %}

Add these imports to the `<style>` section of the **src/App.vue** file, or include them in a global CSS file:

{% tabs %}
{% highlight css tabtitle="App.vue" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/kanban/index.css";

{% endhighlight %}
{% endtabs %}


## Adding Kanban Component

The Kanban component is registered automatically when you import it into **src/App.vue**. The following snippet shows the complete `App.vue` file using both the Composition API and the Options API.

### Key Properties Used

| Property / Directive | Description |
| --- | --- |
| `keyField` | Maps each card to a column based on a field in the data source (for example, `Status`). |
| `dataSource` | An array of objects that populates the Kanban cards. |
| `cardSettings` | Configures card appearance. `contentField` sets the card body and `headerField` sets the card header. |
| `<e-columns>` / `<e-column>` | Directives that define the Kanban columns. Each `e-column` requires `headerText` and `keyField`. |

The data source used in this example exposes the following fields: `Id`, `Status`, `Summary`, `Type`, `Priority`, `Tags`, `Estimate`, `Assignee`, and `RankId`. The value of each card's `Status` field must match one of the `keyField` values defined on the columns.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/getting-started-key-field-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/getting-started-key-field-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/kanban/getting-started-key-field-cs2" %}

## Run the Application

To run the Vue application, use the following command in the terminal from the project root directory:

```bash
npm run dev
```

This command starts the Vite development server. By default, the app is served at `http://localhost:5173/`. Once the application is running, a Kanban board will be displayed with the configured **To Do**, **In Progress**, **Testing**, and **Done** columns, populated with the sample cards from `kanbanData`.

> `npm run dev` does not produce a production build. To generate an optimized production bundle, run `npm run build` and preview it with `npm run preview`.

## Troubleshooting

| Issue | Likely Cause | Resolution |
| --- | --- | --- |
| Kanban board renders without styles | CSS imports are missing or out of order. | Verify all CSS files listed above are imported and that `ej2-base` is imported first. |
| Cards do not appear in columns | `keyField` on the component does not match any `e-column` `keyField`. | Make sure each card's `Status` value matches one of the column `keyField` values. |
| Console error: "Failed to resolve component ej-kanban" | Import statement is missing or the package is not installed. | Re-run `npm install @syncfusion/ej2-vue-kanban --save` and confirm the import is present in `App.vue`. |

## Next Steps

* [Configure Kanban columns](./columns.md)
* [Bind data from a remote service](./data-binding.md)
* [Customize Kanban cards](./cards.md)
* [Enable dialog editing](./dialog.md)