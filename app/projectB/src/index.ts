// import { getLogger} from "@shared/standard";
import { Sample } from '@interface/sample';
import { addNum, getLogger } from "../../../library";
// import { getLogger, addNum } from '@library/standard';

const aaa: Sample = { name: 'foo' };
const log = getLogger('bar');
log.info(aaa.name);
log.info('hello');
console.log('bar');
console.log(addNum(2, 3));
