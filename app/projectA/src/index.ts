// import { getLogger} from "@shared/standard";
import { Sample }from "@interface/sample";
import { getLogger } from "../../../shared/standard/logger"

const aaa : Sample = {name : "foo"};
const log = getLogger('bar');
log.info(aaa.name);
log.info('hello');
console.log('bar');