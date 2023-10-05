import {
    autoDetectRenderer,
} from "./deps/pixi.ts"

export const init = async () => {
    const renderer = await autoDetectRenderer({})
    document.body.appendChild(renderer.canvas)
}