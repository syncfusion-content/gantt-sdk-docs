---
layout: post
title: Syncfusion Gantt SDK Licensing Overview | Syncfusion
description: Learn about Syncfusion Gantt SDK licensing requirements, license key validation, and registration.
keywords: syncfusion gantt sdk licensing, license key validation, license key registration, unlock key vs license key, build server license registration
canonical: https://help.syncfusion.com/gantt-sdk/licensing/overview
platform: gantt-sdk
control: Overview
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt SDK Licensing Overview

Syncfusion<sup style="font-size:70%">&reg;</sup> introduced license key validation for Essential<sup style="font-size:70%">&reg;</sup> JS2 platforms with the 2022 Volume 1 release. This requirement applies to applications using Syncfusion<sup style="font-size:70%">&reg;</sup> components through the latest JavaScript packages, whether obtained from npm, CDN, or build sources.

Generate a license key from the [License and Downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion<sup style="font-size:70%">&reg;</sup> website. An active trial, commercial, or community license is required to obtain a license key. See the [license key generation guide](./license-key-generation) for the complete process across Essential JS 2 platforms.

Before using any Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls, register the license key in the application code. Otherwise, a license validation error message will be displayed as follows:

> This application was built using a trial version of Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup>. Please include a valid license to permanently remove this license validation message. You can also obtain a free 30 day evaluation license to temporarily remove this message during the evaluation period. Please refer to this [help topic](./licensing-errors#license-key-not-registeredtrial-expired) for more information.

## Privacy Assurance

The Syncfusion<sup style="font-size:70%">&reg;</sup> license does not store user-specific information or details related to the user's company. The license key contains only the encrypted values required for Syncfusion<sup style="font-size:70%">&reg;</sup> component validation.

License validation occurs entirely on the client side and does not require network connections or HTTP requests. Syncfusion<sup style="font-size:70%">&reg;</sup> does not access personal data or collect information about users or devices during validation. This process is the same on local development machines and in CI/CD systems.

## Difference between unlock key and license key

The license key is different from the installer unlock key and must be generated separately from the Syncfusion<sup style="font-size:70%">&reg;</sup> website.

- **Unlock Key** - The Syncfusion<sup style="font-size:70%">&reg;</sup> Unlock Key is used to unlock Syncfusion<sup style="font-size:70%">&reg;</sup> installers only.

- **License Key** - The Syncfusion<sup style="font-size:70%">&reg;</sup> License Key is a string that must be registered in your script to avoid licensing warnings.

> For more information, refer to the [unlock key versus license key KB article](https://www.syncfusion.com/kb/8950/difference-between-the-unlock-key-and-licensing-key).

## Registering Syncfusion<sup style="font-size:70%">&reg;</sup> license keys in Build server

| Source of Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                | License Key needs to be registered? | Where to get license key from                                                                                                                            |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **npm or NuGet package**                                              | If the Syncfusion<sup style="font-size:70%">&reg;</sup> packages used in the Build Server are from npm ([npmjs.com](https://www.npmjs.com/~syncfusionorg)) or NuGet ([nuget.org](https://www.nuget.org/)), no Syncfusion<sup style="font-size:70%">&reg;</sup> installer is required. When using packages from npm or NuGet, register the Syncfusion<sup style="font-size:70%">&reg;</sup> license key in the application.                             | Yes                                 | Use any developer license to [generate](./license-key-generation) keys for Build Environments as well.       |
| **Trial installer**                                                   | If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used in the Build Server are from the Trial Installer, register the license key in the application for the corresponding version and platform to avoid trial license warnings.                                                                                                                                                                                                      | Yes                                 | Use any developer trial license to [generate](./license-key-generation) keys for Build Environments as well. |
| **Licensed installer**                                                | If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used in the Build Server are from the Licensed Installer, there is no need to register license keys. You can [download](https://##DomainURL##/documentation/installation/web-installer/download#download-the-license-version) and [install](https://##DomainURL##/documentation/installation/web-installer/installation-using-web-installer) the licensed version of the installer. | No                                  | Not applicable                                                                                                                                           |

> The license verification process is designed to integrate with your application without adversely affecting performance. Although license keys can be included in application source code or bundles, do not promote, publish, or distribute them. Sharing license key information to circumvent licensing requirements is strongly discouraged.

## See Also

- [How to generate a Syncfusion<sup style="font-size:70%">&reg;</sup> license key](./license-key-generation)
- [How to register a Syncfusion<sup style="font-size:70%">&reg;</sup> license key](./license-key-registration)
- [Licensing troubleshooting FAQ](./licensing-troubleshoot)
- [Licensing errors reference](./licensing-error)
