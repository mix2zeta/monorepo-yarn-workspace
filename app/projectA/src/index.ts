// import { getLogger} from "@shared/standard";
import { Sample } from './interface/sample';
// import { getLogger } from "../../../library/standard/logger"
// import { getLogger } from "@library/standard/logger"
import { getLogger, addNum } from 'library';

const aaa: Sample = { name: 'foo' };
const log = getLogger('bar');
log.info(aaa.name);
log.info('hello');
console.log('bar');
console.log(addNum(1, 2));
