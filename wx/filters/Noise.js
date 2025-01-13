import { Factory } from '../Factory';
import { Node } from '../Node';
import { getNumberValidator } from '../Validators';
export const Noise = function (imageData) {
    const amount = this.noise() * 255, data = imageData.data, nPixels = data.length, half = amount / 2;
    for (let i = 0; i < nPixels; i += 4) {
        data[i + 0] += half - 2 * half * Math.random();
        data[i + 1] += half - 2 * half * Math.random();
        data[i + 2] += half - 2 * half * Math.random();
    }
};
Factory.addGetterSetter(Node, 'noise', 0.2, getNumberValidator(), Factory.afterSetFilter);
