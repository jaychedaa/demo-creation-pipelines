/// <reference types="@wdio/globals/types" />
import {config as sharedConfig} from "./wdio.shared.conf.ts";

// Shared BrowserStack options for the baseline build
const baseBstackOptions = {
  buildName: "Percy Mobile Visual - Demo App (Baseline)",
  appiumVersion: "2.0.0",
  debug: true,
  networkLogs: true,
  idleTimeout: 300,
};

export const config: WebdriverIO.Config = {
  ...sharedConfig,

  capabilities: [
    /* =========================================================
       ANDROID CAPABILITY — original app
       ========================================================= */
    {
      platformName: "android",
      "appium:app": "bs-demo-android",
      "appium:automationName": "UiAutomator2",
      "appium:allowInvisibleElements": true,

      specs: ["../test/specs/percy-mobile/percy-android.spec.ts"],

      "bstack:options": {
        ...baseBstackOptions,
        sessionName: "Android Percy Visual Journey (Baseline)",
        deviceName: "Samsung Galaxy S23",
        osVersion: "13.0",
      },
    },

    /* =========================================================
       IOS CAPABILITY — original app
       ========================================================= */
    {
      platformName: "ios",
      "appium:app": "bs-demo-ios",
      "appium:automationName": "XCUITest",

      specs: ["../test/specs/percy-mobile/percy-ios.spec.ts"],

      "bstack:options": {
        ...baseBstackOptions,
        sessionName: "iOS Percy Visual Journey (Baseline)",
        deviceName: "iPhone 15",
        osVersion: "17",
      },
    },
  ] as any,
};