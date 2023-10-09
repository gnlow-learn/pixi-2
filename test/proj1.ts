import {
    parseProject,
    objectToExpressions,
} from "https://tsm.deno.dev/https://deno.land/x/enz@0.1.1/mod.ts"

const proj = parseProject(
    await Deno.readTextFile(`test/proj1.json`)
)

console.log(proj)