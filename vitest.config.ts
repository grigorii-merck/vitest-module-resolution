import { defineConfig } from 'vitest/config'
import { join } from "path"
import * as url from "url"
const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

export default defineConfig({
    test: {
        globals: true,
        environment: "node",
        cache: {
            dir: join(__dirname, "node_modules/.cache/@testModuleResolution/.vitestCache"),
        },
        testTimeout: 100000,
        logHeapUsage: true,
        clearMocks: true,
        // tried both enabling and disabling these options
        deps: {
            fallbackCJS: true,
            registerNodeLoader: true,
        },
        setupFiles: [
            "tests/testSetup/testSetupAfterEnv.js"
        ],
    },
})
