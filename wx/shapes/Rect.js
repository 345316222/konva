import { Factory } from '../Factory';
import { Shape } from '../Shape';
import { _registerNode } from '../Global';
import { Util } from '../Util';
import { getNumberOrArrayOfNumbersValidator } from '../Validators';
export class Rect extends Shape {
    _sceneFunc(context) {
        const cornerRadius = this.cornerRadius(), width = this.width(), height = this.height();
        context.beginPath();
        if (!cornerRadius) {
            context.rect(0, 0, width, height);
        }
        else {
            Util.drawRoundedRectPath(context, width, height, cornerRadius);
        }
        context.closePath();
        context.fillStrokeShape(this);
    }
}
Rect.prototype.className = 'Rect';
_registerNode(Rect);
Factory.addGetterSetter(Rect, 'cornerRadius', 0, getNumberOrArrayOfNumbersValidator(4));
