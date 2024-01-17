# WxCC to SFDC Screenpop

**Chromium browser extension to open Webex Contact Center screen pops in Salesforce (SFDC).**

This is a proof-of-concept extension for Chromium-based web browsers (like Chrome, Edge, etc.) that opens eligible
[Webex Contact Center screen pops][wxcc-screenpop] within the connected Salesforce Lightning CRM, eliminating the
need for a separate browser window or tab. As a result, Salesforce users enjoy an improved user experience by no
longer having to manage two separate SFDC/WxCC tabs and significantly reduced page load time.

<p align="center">
   <a href="" target="_blank">
       <img 
          src="https://github.com/wxsd-sales/wxcc-to-sfdc-screenpop/assets/6129517/f71b9888-9c78-4fce-9e95-49ec1e51f45c" 
          alt="salesforce-screenpop-helper"
          />
    </a>
</p>

<!-- ⛔️ MD-MAGIC-EXAMPLE:START (TOC:collapse=true&collapseText=Click to expand) -->
<details>
<summary>Table of Contents (click to expand)</summary>

- [Overview](#overview)
- [Setup](#setup)
- [Demo](#demo)
- [Support](#support)

</details>
<!-- ⛔️ MD-MAGIC-EXAMPLE:END -->

## Overview

This Chromium extension enhances the browser's behavior on [Webex Contact Center (WxCC)][wxcc-crm-integrations] setup
with [Salesforce connector][wxcc-sfdc] as the primary interface. By utilizing the underlying
[Open CTI Javascript API][sfdc-cti], or more specifically, the [`sforce.opencti.screenPop`][sfdc-cti-screenpop]
function, it enables the display of [WxCC ScreenPop][wxcc-screenpop] directly within Salesforce.

## Setup

These instructions assume that you have:

- Administrator access to a Chromium based browser where you can install the extension, locally in Developer Mode.
- [Node.js installed](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) and running on a Windows
  (via WSL2), macOS, or Linux machine.

Open a new terminal window and follow the instructions below to setup the project locally for development/demo.

1. Clone this repository and change directory:

   ```
   git clone https://github.com/wxsd-sales/wxcc-to-sfdc-screenpop && cd wxcc-to-sfdc-screenpop
   ```

2. Install Node.js dependencies:

   ```
   npm install
   ```

3. Build the extension from source:

   ```
   npm run build
   ```

4. Install the Extension.
   - You should now see some files in the `dist` directory.
   - Follow your respective [browser's guide][load-unpacked] to install the extension from this directory.

If you are actively making changes to the source code, you may be better off using `npm run dev` in step 3 above. Please
do note that some changes need re-installation of the extension to take effect.

## Demo

A video where we demo this PoC is available on Vidcast — TODO.

## Support

Please reach out to the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?cc=ashessin@cisco.com&subject=Azure%20Group%20Sync) or contact me on Webex (ashessin@cisco.com).

[wxcc-screenpop]: https://portal-v2.wxcc-us1.cisco.com/ccone-help-new/index.html#!screen-pop.html

[wxcc-crm-integrations]: https://help.webex.com/en-us/article/utqcm7/Webex-Contact-Center-Architecture#crm-integrations]
[wxcc-sfdc]: https://help.webex.com/en-us/article/nhxw7kfb/Integrate-Webex-Contact-Center-with-Salesforce
[sfdc-cti]: https://developer.salesforce.com/docs/atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro.htm]
[sfdc-cti-screenpop]: https://developer.salesforce.com/docs/atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_screenpop_lex.htm]
[load-unpacked]: https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked
