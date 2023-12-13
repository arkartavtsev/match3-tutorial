import { Game } from "./Game";
import { Tools } from "../system/Tools";

export const Config = {
    loader: Tools.massiveRequire(require["context"]('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)),
    scenes: {
        "Game": Game
    },
    board: {
        rows: 6,
        cols: 6
    },
    tilesColors: [
        'blue',
        'green',
        'orange',
        'red',
        'pink',
        'yellow'
    ],
};