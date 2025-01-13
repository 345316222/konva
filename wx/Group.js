import { Util } from './Util';
import { Container } from './Container';
import { _registerNode } from './Global';
export class Group extends Container {
    _validateAdd(child) {
        const type = child.getType();
        if (type !== 'Group' && type !== 'Shape') {
            Util.throw('You may only add groups and shapes to groups.');
        }
    }
}
Group.prototype.nodeType = 'Group';
_registerNode(Group);
