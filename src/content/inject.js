const id = 'wxcc-sfdc-screenpop-' + document.currentScript.getAttribute('data-id');

/**
 * A wrapper around {@link https://developer.salesforce.com/docs/atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_screenpop_lex.htm|Salesforce Lightning ScreenPop} API.
 *
 * @param url The Url to pop within Salesforce Lightning
 */
function openSalesforceScreenpop(url) {
  const callback = ({ success, errors }) => {
    if (success === false) {
      console.error(id, 'Failed to use Salesforce Screenpop API.', errors);
    }
  };

  // eslint-disable-next-line no-undef
  sforce.opencti.screenPop({ type: sforce.opencti.SCREENPOP_TYPE.URL, params: { url }, callback });
}

if (document.URL.toLowerCase().match(/^https:\/\/desktop\.wxcc.*\.cisco\.com/)) {
  /**
   * The Webex Contact Center Connector node
   * @type {ShadowRoot}
   */
  const app = document.querySelector('body > agentx-app').shadowRoot;

  /**
   * Observer which invokes our logic on each DOM tree change
   * @type {MutationObserver}
   */
  const mutationObserver = new MutationObserver((e) => {
    const alert = app
      .querySelector('md-theme > div > uuip-wc-notifications-host')
      ?.shadowRoot.querySelector('uuip-wc-toaster-notifications-host')
      ?.shadowRoot.querySelector('div > uuip-wc-toaster-notification')
      ?.shadowRoot.querySelector('div > uuip-wc-toaster-notification-item-content')
      ?.shadowRoot.querySelector('md-alert > div > md-tooltip');
    const text = alert?.querySelector('div')?.innerText;
    const link = alert?.querySelector('md-link')?.shadowRoot.querySelector('a');

    try {
      const host = link != null ? new URL(link).host : undefined;

      // Continue only if the URL belongs to Salesforce Lightning and the text matches StagePop
      if (host?.endsWith('lightning.force.com') && text?.toLowerCase() === 'stagepop') {
        // Open the StagePop on the current Salesforce Lightning page in a new tab
        openSalesforceScreenpop(link.href);
        // Register a click event listener on the notification link to do the same
        link.addEventListener('click', (event) => {
          event.stopPropagation();
          event.preventDefault();
          openSalesforceScreenpop(link.href);
        });
      }
    } catch (e) {
      console.error(id, 'An exception occurred while executing DOM tree change logic.', e);
    }
  });

  // Observe the Webex Contact Center Connector node for changes
  mutationObserver.observe(app, {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true
  });
}
