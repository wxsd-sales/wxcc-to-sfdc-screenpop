console.info('[INJECTED SCRIPT]', document.URL)

const screenpopUrlPrefix = ''

function openScalesforceScreenpop(url) {
    return sforce.opencti.screenPop({
        type: sforce.opencti.SCREENPOP_TYPE.URL,
        params: {url},
        callback: () => console.info('[INJECTED SCRIPT] Opened Salesforce Screenpop')
    })
}

if (document.URL.toLowerCase().match(/^https:\/\/desktop\.wxcc.*\.cisco\.com/)) {
    const app = document.querySelector("body > agentx-app").shadowRoot
    const mutationObserver = new MutationObserver((e) => {
        const link = app.querySelector("md-theme > div > uuip-wc-notifications-host")
            ?.shadowRoot.querySelector("uuip-wc-toaster-notifications-host")
            ?.shadowRoot.querySelector("div > uuip-wc-toaster-notification")
            ?.shadowRoot.querySelector("div > uuip-wc-toaster-notification-item-content")
            ?.shadowRoot.querySelector("md-alert > div > md-tooltip > md-link")
            ?.shadowRoot.querySelector("a")

        if (link != null && link.href.startsWith(screenpopUrlPrefix)) {
            openScalesforceScreenpop(link.href)
            link.addEventListener("click",  (event) => {
                event.stopPropagation();
                event.preventDefault();
                openScalesforceScreenpop(link.href)
            });
        }
    });

    mutationObserver.observe(app, {attributes: true, childList: true, subtree: true, characterData: true});
}