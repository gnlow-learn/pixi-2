import {
    autoDetectRenderer,
    Sprite,
    Container,
    Assets,
    Ticker,
} from "./deps/pixi.ts"

/**
 * @param {HTMLElement} parent 
 */
export const init = async parent => {
    const renderer = await autoDetectRenderer({
        width: 480,
        height: 270,
        backgroundColor: "#fff",
    })
    parent.appendChild(renderer.canvas)

    const scene = new Container()

    await Assets.load("https://pixijs.com/assets/bunny.png")

    const bunny = Sprite.from("https://pixijs.com/assets/bunny.png")
    scene.addChild(bunny)

    const ticker = Ticker.shared
    ticker.autoStart = false
    ticker.stop()
    ticker.add(
        ({deltaTime}) => {
            console.log("AA", deltaTime)
            bunny.x += deltaTime
            renderer.render({
                container: scene
            })
        }
    )
    ticker.start()

    const bunny2 = Sprite.from("https://pixijs.com/assets/bunny.png")
    scene.addChild(bunny2)

    const ticker2 = new Ticker
    bunny2.y = 100
    ticker2.add(
        ({deltaTime}) => {
            console.log("BB", deltaTime)
            bunny2.x += deltaTime
            renderer.render({
                container: scene
            })
        }
    )
    ticker2.start()
}