import { Util } from './Util';
import { Layer } from './Layer';
import { _registerNode } from './Global';
export class FastLayer extends Layer {
    constructor(attrs) {
        super(attrs);
        this.listening(false);
        Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
}
FastLayer.prototype.nodeType = 'FastLayer';
_registerNode(FastLayer);
