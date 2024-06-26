# WxCC to SFDC Screenpop

**Chromium browser extension to open Webex Contact Center screen pops in Salesforce (SFDC).**

This is a proof-of-concept extension for Chromium-based web browsers (like Chrome, Edge, etc.) that opens eligible
[Webex Contact Center screen pops][wxcc-screenpop] within the connected Salesforce Lightning CRM, eliminating the
need for a separate browser window or tab. As a result, Salesforce users enjoy an improved user experience by no
longer having to manage two separate SFDC/WxCC tabs and significantly reduced page load time.

<p align="center">
   <a href="https://app.vidcast.io/share/c4aadb87-43c3-441f-82fb-2bdb31631223" target="_blank">
       <img 
          src="https://github.com/wxsd-sales/wxcc-to-sfdc-screenpop/assets/6129517/f76d918c-2a3f-478f-b2f6-3f13b1285fb0" 
          alt="wxcc-to-sfdc-screenpop-demo"
          />
    </a>
</p>

<!-- ⛔️ MD-MAGIC-EXAMPLE:START (TOC:collapse=true&collapseText=Click to expand) -->
<details>
<summary>Table of Contents (click to expand)</summary>

- [Overview](#overview)
- [Setup](#setup)
- [Demo](#demo)
- [Disclaimer](#disclaimer)
- [License](#license)
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
- [Node.js installed](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) on a Windows (via WSL2),
  macOS, or Linux machine.

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

4. Install the extension:
   - You should now see some files in the `dist` directory.
   - Follow your respective [browser's guide][load-unpacked] to install the extension from this directory.

If you are actively making changes to the source code, you may be better off using `npm run dev` in step 3 above. Please
do note that some changes need re-installation of the extension to take effect.

## Demo

A video where we demo this PoC is available on Vidcast — [https://app.vidcast.io/share/c4aadb87-43c3-441f-82fb-2bdb31631223](https://app.vidcast.io/share/c4aadb87-43c3-441f-82fb-2bdb31631223).

## Disclaimer

Everything included in this repository is for demo and Proof of Concept (PoC) purposes only. Use of the PoC is solely
at your own risk. This project may contain links to external content, which we do not warrant, endorse, or assume
liability for. This project is for Cisco Webex use-case, but is not official Cisco Webex branded project.

## License

[MIT](./LICENSE)

## Support

Please reach out to the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?cc=ashessin@cisco.com&subject=WxCC%20to%20SFDC%20Screenpop) or contact me on Webex (ashessin@cisco.com).

[wxcc-screenpop]: https://portal-v2.wxcc-us1.cisco.com/ccone-help-new/index.html#!screen-pop.html

[wxcc-crm-integrations]: https://help.webex.com/en-us/article/utqcm7/Webex-Contact-Center-Architecture#crm-integrations]
[wxcc-sfdc]: https://help.webex.com/en-us/article/nhxw7kfb/Integrate-Webex-Contact-Center-with-Salesforce
[sfdc-cti]: https://developer.salesforce.com/docs/atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro.htm]
[sfdc-cti-screenpop]: https://developer.salesforce.com/docs/atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_screenpop_lex.htm]
[load-unpacked]: https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked
