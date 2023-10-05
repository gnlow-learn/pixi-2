import { init } from "./src/mod.ts"

(async () => {
    await init()
    console.log("hello, world")
})()