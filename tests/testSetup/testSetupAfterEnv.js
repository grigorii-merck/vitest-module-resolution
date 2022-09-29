// breaks here [vite-node] Failed to load ../../src/index.js
import sum from "../../src/index.js"

global.beforeAll(() => {
    global.result = sum(1, 1)
})