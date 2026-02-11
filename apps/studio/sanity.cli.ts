import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  server: {
    port: 3334,
  },
  api: {
    projectId: 'w89kacau',
    dataset: 'production',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    appId: 'ohrv9jfuzz003dxr524af7i7',
    autoUpdates: true,
  },
})
