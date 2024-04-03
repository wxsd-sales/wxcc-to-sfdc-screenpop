import { defineManifest } from '@crxjs/vite-plugin';
import packageJson from './package.json';

const manifest = defineManifest(async (env) => {
  const { version, description } = packageJson;
  const [major, minor, patch, label = '0'] = version.replace(/[^\d.-]+/g, '').split(/[.-]/);

  return {
    manifest_version: 3,
    name:
      env.mode === 'production' ? 'WxCC to SFDC Screenpop' : `WxCC to SFDC Screenpop (${env.mode})`,
    version: `${major}.${minor}.${patch}.${label}`,
    version_name: version,
    description,
    icons: {
      16: 'favicon-16.png',
      24: 'favicon-24.png',
      32: 'favicon-32.png',
      48: 'favicon-48.png',
      128: 'favicon-128.png'
    },
    content_scripts: [
      {
        js: ['src/content/index.js'],
        // We only target Webex CC Desktop domains, as listed here on
        // https://help.webex.com/en-us/article/nhxw7kfb/Integrate-Webex-Contact-Center-with-Salesforce
        matches: [
          'https://desktop.wxcc-us1.cisco.com/*',
          'https://desktop.wxcc-eu1.cisco.com/*',
          'https://desktop.wxcc-eu2.cisco.com/*',
          'https://desktop.wxcc-anz1.cisco.com/*'
        ],
        // With Salesforce connector, WXCC runs in an Iframe, so we need this
        all_frames: true
      }
    ],
    web_accessible_resources: [
      {
        resources: ['src/content/inject.js'],
        // We only target Webex CC Desktop domains, as listed here on
        // https://help.webex.com/en-us/article/nhxw7kfb/Integrate-Webex-Contact-Center-with-Salesforce
        matches: [
          'https://desktop.wxcc-us1.cisco.com/*',
          'https://desktop.wxcc-eu1.cisco.com/*',
          'https://desktop.wxcc-eu2.cisco.com/*',
          'https://desktop.wxcc-anz1.cisco.com/*'
        ]
      }
    ],
    // This is required to load the `src/content/inject.js` file as a script source within the WXCC frame
    permissions: ['webNavigation']
  };
});

export default manifest;
