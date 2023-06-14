import { map, filter, reduce, concat, every, some } from "./core/index.js";
import ArrayUtils from "./utils/index.js";
Array.prototype._map = map;
Array.prototype._filter = filter;
Array.prototype._reduce = reduce;
Array.prototype._concat = concat;
Array.prototype._every = every;
Array.prototype._some = some;
