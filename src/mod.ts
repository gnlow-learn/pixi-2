import {
    autoDetectRenderer,
} from "./deps/pixi.ts"

export const init = async () => {
    // @ts-ignore: IDK, maybe esm.sh bug
    const renderer = await autoDetectRenderer({})
    document.body.appendChild(renderer.canvas)
}