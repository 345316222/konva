import { Factory } from '../Factory';
import { Node } from '../Node';
import { getNumberValidator } from '../Validators';
export const Brighten = function (imageData) {
    const brightness = this.brightness() * 255, data = imageData.data, len = data.length;
    for (let i = 0; i < len; i += 4) {
        data[i] += brightness;
        data[i + 1] += brightness;
        data[i + 2] += brightness;
    }
};
Factory.addGetterSetter(Node, 'brightness', 0, getNumberValidator(), Factory.afterSetFilter);
