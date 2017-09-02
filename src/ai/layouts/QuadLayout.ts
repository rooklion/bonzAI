import {Layout} from "./Layout";
import {BuildingPlannerData} from "../../interfaces";

export class QuadLayout extends Layout {
    public fixedMap: BuildingPlannerData = {
        name: "quad",
        pivot: {x: 8, y: 30},
        radius: 6,
        taper: 1,
        buildings: {
            "road": {"pos": [{x: 14, y: 27}, {x: 13, y: 28}, {x: 12, y: 29}, {x: 11, y: 30}, {x: 10, y: 29},
                {x: 10, y: 31}, {x: 9, y: 28}, {x: 8, y: 27}, {x: 7, y: 28}, {x: 7, y: 32}, {x: 9, y: 32},
                {x: 6, y: 29}, {x: 6, y: 31}, {x: 8, y: 33}, {x: 5, y: 30}, {x: 7, y: 26}, {x: 12, y: 27},
                {x: 11, y: 26}, {x: 9, y: 26}, {x: 10, y: 25}, {x: 6, y: 25}, {x: 5, y: 26}, {x: 4, y: 27},
                {x: 4, y: 29}, {x: 3, y: 28}, {x: 4, y: 31}, {x: 3, y: 32}, {x: 4, y: 33}, {x: 5, y: 34},
                {x: 7, y: 34}, {x: 6, y: 35}, {x: 9, y: 34}, {x: 12, y: 33}, {x: 12, y: 31}, {x: 13, y: 32},
                {x: 14, y: 26}, {x: 14, y: 25}, {x: 11, y: 34}, {x: 10, y: 35}, {x: 14, y: 31}, {x: 14, y: 30},
                {x: 14, y: 29}, {x: 14, y: 33}, {x: 14, y: 34}, {x: 4, y: 36}, {x: 2, y: 25}, {x: 2, y: 26},
                {x: 14, y: 35}, {x: 11, y: 36}, {x: 12, y: 36}, {x: 13, y: 36}, {x: 2, y: 29}, {x: 2, y: 31},
                {x: 2, y: 30}, {x: 2, y: 27}, {x: 2, y: 33}, {x: 2, y: 34}, {x: 2, y: 35}, {x: 3, y: 36},
                {x: 5, y: 36}, {x: 13, y: 24}, {x: 12, y: 24}, {x: 11, y: 24}, {x: 9, y: 24}, {x: 8, y: 24},
                {x: 7, y: 24}, {x: 5, y: 24}, {x: 4, y: 24}, {x: 3, y: 24}]},
            "spawn": {"pos": [{x: 10, y: 30}, {x: 8, y: 28}, {x: 6, y: 30}]},
            "extension": {"pos": [{x: 11, y: 29}, {x: 10, y: 28}, {x: 9, y: 27}, {x: 11, y: 28}, {x: 10, y: 27},
                {x: 7, y: 27}, {x: 6, y: 28}, {x: 6, y: 27}, {x: 5, y: 29}, {x: 5, y: 28}, {x: 7, y: 31},
                {x: 11, y: 31}, {x: 8, y: 26}, {x: 12, y: 30}, {x: 12, y: 28}, {x: 11, y: 27}, {x: 6, y: 26},
                {x: 10, y: 26}, {x: 5, y: 31}, {x: 4, y: 30}, {x: 4, y: 28}, {x: 5, y: 27}, {x: 3, y: 27},
                {x: 4, y: 26}, {x: 5, y: 25}, {x: 11, y: 25}, {x: 12, y: 26}, {x: 13, y: 27}, {x: 11, y: 32},
                {x: 11, y: 33}, {x: 12, y: 32}, {x: 13, y: 31}, {x: 12, y: 25}, {x: 13, y: 26}, {x: 13, y: 30},
                {x: 13, y: 29}, {x: 13, y: 33}, {x: 12, y: 34}, {x: 11, y: 35}, {x: 13, y: 25}, {x: 3, y: 30},
                {x: 3, y: 31}, {x: 3, y: 29}, {x: 3, y: 26}, {x: 4, y: 25}, {x: 7, y: 25}, {x: 8, y: 25},
                {x: 9, y: 25}, {x: 3, y: 25}, {x: 12, y: 35}, {x: 14, y: 32},
                {x: 13, y: 34}, {x: 13, y: 35}, {x: 14, y: 28}, {x: 10, y: 24}, {x: 6, y: 24}, {x: 2, y: 28},
                {x: 2, y: 32}, {x: 10, y: 33}, {x: 10, y: 34}]},
            "tower": {"pos": [{x: 9, y: 29}, {x: 7, y: 29}, {x: 8, y: 31}, {x: 9, y: 30}, {x: 7, y: 30},
                {x: 8, y: 29}]},
            "storage": {"pos": [{x: 8, y: 34}]},
            "link": {"pos": [{x: 10, y: 32}]},
            "rampart": {"pos": [{x: 8, y: 24}, {x: 7, y: 24}, {x: 6, y: 24}, {x: 5, y: 24}, {x: 2, y: 30},
                {x: 2, y: 31}, {x: 2, y: 32}, {x: 2, y: 33}, {x: 2, y: 29}, {x: 2, y: 28}, {x: 14, y: 30},
                {x: 14, y: 29}, {x: 14, y: 28}, {x: 14, y: 31}, {x: 14, y: 32}, {x: 8, y: 36}, {x: 7, y: 36},
                {x: 9, y: 36}, {x: 6, y: 36}, {x: 5, y: 36}, {x: 4, y: 36}, {x: 3, y: 36}, {x: 3, y: 35},
                {x: 2, y: 35}, {x: 2, y: 34}, {x: 2, y: 27}, {x: 2, y: 26}, {x: 2, y: 25}, {x: 3, y: 25},
                {x: 3, y: 24}, {x: 4, y: 24}, {x: 9, y: 24}, {x: 10, y: 24}, {x: 11, y: 24}, {x: 12, y: 24},
                {x: 13, y: 24}, {x: 14, y: 26}, {x: 14, y: 25}, {x: 13, y: 25}, {x: 14, y: 27}, {x: 14, y: 33},
                {x: 14, y: 34}, {x: 14, y: 35}, {x: 13, y: 35}, {x: 13, y: 36}, {x: 12, y: 36}, {x: 11, y: 36},
                {x: 10, y: 36}, {x: 6, y: 34}, {x: 5, y: 33}, {x: 4, y: 32}, {x: 5, y: 35}, {x: 4, y: 34},
                {x: 3, y: 33}, {x: 3, y: 34}, {x: 4, y: 35}, {x: 8, y: 34} ]},
            "lab": {"pos": [{x: 6, y: 34}, {x: 5, y: 33}, {x: 4, y: 32}, {x: 5, y: 35}, {x: 4, y: 34},
                {x: 3, y: 33}, {x: 5, y: 32}, {x: 6, y: 33}, {x: 3, y: 34}, {x: 4, y: 35}]},
            "terminal": {"pos": [{x: 6, y: 32}]},
            "powerSpawn": {"pos": [{x: 8, y: 32}]},
            "nuker": {"pos": [{x: 8, y: 36}]},
            "observer": {"pos": [{x: 3, y: 35}]},
            "turtle": {"pos": [{x: 12, y: 35}, {x: 12, y: 34}, {x: 13, y: 34}, {x: 11, y: 35}, {x: 11, y: 34},
                {x: 11, y: 33}, {x: 12, y: 33}, {x: 13, y: 33}, {x: 12, y: 26}, {x: 13, y: 26}, {x: 12, y: 25},
                {x: 11, y: 25}, {x: 11, y: 26}, {x: 11, y: 27}, {x: 12, y: 27}, {x: 13, y: 27}, {x: 3, y: 26},
                {x: 4, y: 26}, {x: 4, y: 25}, {x: 3, y: 27}, {x: 4, y: 27}, {x: 5, y: 27}, {x: 5, y: 26},
                {x: 5, y: 25}, {x: 4, y: 33},
                {x: 5, y: 34}, {x: 6, y: 35}, {x: 7, y: 35}, {x: 8, y: 35},
                {x: 9, y: 35}, {x: 10, y: 35}, {x: 10, y: 34}, {x: 9, y: 34}, {x: 7, y: 34},
                {x: 3, y: 32}, {x: 3, y: 31}, {x: 3, y: 30}, {x: 3, y: 29}, {x: 3, y: 28},
                {x: 4, y: 28}, {x: 4, y: 29}, {x: 4, y: 30}, {x: 4, y: 31}, {x: 6, y: 25},
                {x: 7, y: 25}, {x: 8, y: 25}, {x: 9, y: 25}, {x: 10, y: 25}, {x: 6, y: 26}, {x: 7, y: 26},
                {x: 8, y: 26}, {x: 9, y: 26}, {x: 10, y: 26}, {x: 12, y: 28}, {x: 12, y: 29}, {x: 12, y: 30},
                {x: 12, y: 31}, {x: 12, y: 32}, {x: 13, y: 32}, {x: 13, y: 31}, {x: 13, y: 30}, {x: 13, y: 29},
                {x: 13, y: 28}]},
        },
    };
    protected tempMap = {
        [6]: {
            [STRUCTURE_LINK]: [ {x: 10, y: 33 } ],
        },
        [7]: {
            [STRUCTURE_LINK]: [ {x: 10, y: 33 }, {x: 10, y: 34 } ],
        },
    };
}
