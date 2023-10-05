import {
    autoDetectRenderer,
    Sprite,
    Container,
    Assets,
} from "./deps/pixi.ts"

/**
 * @param {HTMLElement} parent 
 */
export const init = async parent => {
    const renderer = await autoDetectRenderer({
        width: 960,
        height: 540,
        backgroundColor: "#fff",
    })
    parent.appendChild(renderer.canvas)

    const scene = new Container()

    await Assets.load("https://pixijs.com/assets/bunny.png")

    const bunny = Sprite.from("https://pixijs.com/assets/bunny.png")
    scene.addChild(bunny)

    renderer.render({
        container: scene
    })
    setTimeout(() => {
        bunny.x += 100
        renderer.render({
            container: scene
        })
    }, 1000)
}