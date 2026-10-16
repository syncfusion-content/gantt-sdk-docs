---
layout: post
title: Accessibility in Blazor Kanban | WCAG, ARIA | Syncfusion
description: Learn how to implement accessibility in Syncfusion Blazor Kanban with WCAG 2.2, ARIA labels, keyboard navigation, and Section 508 compliance.
keywords: blazor kanban accessibility, wcag, aria, section 508, keyboard navigation, screen reader, syncfusion kanban
canonical: https://help.syncfusion.com/gantt-sdk/blazor/kanban/accessibility
platform: gantt-sdk
control: Accessibility - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Accessibility and ARIA Compliance in Blazor Kanban

The [Blazor Kanban](https://www.syncfusion.com/gantt-sdk/blazor-kanban-board) component is built in accordance with [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) specifications, incorporating appropriate roles, states, and properties. It offers full accessibility support for users relying on assistive technologies (AT) or keyboard navigation.

It adheres to key accessibility standards including [ADA](https://www.ada.gov), [Section 508](https://www.section508.gov), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) , ensuring inclusive design and usability.

The following table summarizes the accessibility compliance of the Blazor Kanban component:

| Accessibility Criteria                                                                                              | Compatibility                                                                                      |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support                                                                    | AA                                                                                                 |
| [Section 508 Support](https://blazor.syncfusion.com/documentation/common/accessibility#section-508)                 | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes">             |
| Screen Reader Support                                                                                               | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes">             |
| Right-To-Left Support                                                                                               | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes">             |
| Color Contrast                                                                                                      | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Mobile Device Support                                                                                               | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes">             |
| [Keyboard Navigation](https://blazor.syncfusion.com/documentation/common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes">             |
| [Axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) Accessibility Validation                        | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes">             |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The Blazor Kanban component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) patterns to meet the accessibility. The following `WAI-ARIA` attributes are used in the Kanban component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.e-kanban` | `role="application"`, `aria-label`, `aria-roledescription` | Identifies the Kanban board as an interactive application, provides its accessible name, and supplies an alternative description. |
| `.e-kanban .e-header-table` | `role="table"`, `aria-label` | Identifies the header table and provides its accessible name. |
| `.e-kanban .e-content-table` | `role="presentation"` | Removes the content table's native table semantics; its body exposes the grid role. |
| `.e-kanban .e-content-table tbody` | `role="treegrid"` | Identifies the Kanban content as an interactive grid of rows and cards. |
| `.e-kanban .e-content-row` | `role="row"`, `aria-expanded` | Identifies a content or swimlane row and indicates its expanded state. |
| `.e-kanban .e-header-cells` | `aria-expanded` | Indicates whether a Kanban column is expanded or collapsed. |
| `.e-kanban .e-card-container` | `role="listbox"`, `aria-label` | Identifies the selectable card list for a column and provides its accessible name. |
| `.e-kanban .e-card` | `role="option"`, `aria-selected`, `aria-grabbed`, `aria-roledescription` | Identifies a card as an option, reports its selection and drag state, and provides an alternative description. |
| `.e-kanban .e-empty-card` | `role="option"` | Identifies the empty-card placeholder as an option in the card list. |
| `.e-kanban .e-content-cells[data-role="kanban-column"]` | `aria-label`, `aria-describedby` | Provides the column cell's accessible name and associates the column body with its header. |
| `.e-kanban .e-header-icon`, `.e-kanban .e-swimlane-header .e-icons` | `role="button"`, `aria-label` | Identifies the column and swimlane expand/collapse controls as buttons and provides their accessible names. |

## Keyboard interaction

The Blazor Kanban component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Kanban component.

| Windows                            | Mac                             | Actions                                                         |
| ---------------------------------- | ------------------------------- | --------------------------------------------------------------- |
| <kbd>Home</kbd>                    | <kbd>Home</kbd>                 | To select the first card in the kanban                          |
| <kbd>End</kbd>                     | <kbd>End</kbd>                  | To select the last card in the kanban                           |
| <kbd>↑</kbd>                       | <kbd>↑</kbd>                    | Select the card through the up arrow                            |
| <kbd>↓</kbd>                       | <kbd>↓</kbd>                    | Select the card through the down arrow                          |
| <kbd>→</kbd>                       | <kbd>→</kbd>                    | Move the column selection to the right                          |
| <kbd>←</kbd>                       | <kbd>←</kbd>                    | Move the column selection to the left                           |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | <kbd>⌘</kbd> + <kbd>Enter</kbd> | Used to select the multi cards                                  |
| <kbd>Ctrl</kbd> + <kbd>Space</kbd> | <kbd>⌘</kbd> + <kbd>Space</kbd> | Used to select the multi cards                                  |
| <kbd>Shift</kbd> + <kbd>↑</kbd>    | <kbd>⇧</kbd> + <kbd>↑</kbd>     | Used to select the multiple cards towards up                    |
| <kbd>Shift</kbd> + <kbd>↓</kbd>    | <kbd>⇧</kbd> + <kbd>↓</kbd>     | Used to select the multiple cards towards down                  |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>  | <kbd>⇧</kbd> + <kbd>Tab</kbd>   | Reverse order of the tab action                                 |
| <kbd>Enter</kbd>                   | <kbd>Enter</kbd>                | Open the selected cards                                         |
| <kbd>Tab</kbd>                     | <kbd>Tab</kbd>                  | To navigate the Kanban column                                   |
| <kbd>Delete</kbd>                  | <kbd>Delete</kbd>               | To delete the selected cards                                    |
| <kbd>ESC</kbd>                     | <kbd>Esc</kbd>                  | Escape from the modified details                                |
| <kbd>Space</kbd>                   | <kbd>Space</kbd>                | Used to open the card edit dialog based on the column selection |

## Disable keyboard interaction

To disable all keyboard-based interactions in the Kanban board, set the `allowKeyboard` property to `false`. This may impact accessibility for users relying on keyboard navigation or assistive technologies.

## Ensuring accessibility

The Blazor Kanban component's accessibility levels are ensured through an [axe-core](https://www.npmjs.com/package/axe-core) software tool during automated testing.

The accessibility compliance of the Kanban component is shown in the following sample. Open the [sample](https://blazor.syncfusion.com/accessibility/kanban) in a new window to evaluate the accessibility of the Kanban component with accessibility tools.

## See also

- [Accessibility in Blazor components](https://blazor.syncfusion.com/documentation/common/accessibility)
