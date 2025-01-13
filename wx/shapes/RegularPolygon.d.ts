import { Shape, ShapeConfig } from '../Shape';
import { GetSet, Vector2d } from '../types';
import { Context } from '../Context';
export interface RegularPolygonConfig extends ShapeConfig {
    sides: number;
    radius: number;
}
export declare class RegularPolygon extends Shape<RegularPolygonConfig> {
    _sceneFunc(context: Context): void;
    _getPoints(): Vector2d[];
    getSelfRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    getWidth(): number;
    getHeight(): number;
    setWidth(width: number): void;
    setHeight(height: number): void;
    radius: GetSet<number, this>;
    sides: GetSet<number, this>;
}
