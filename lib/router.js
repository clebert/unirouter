'use strict';

exports.__esModule = true;
exports.configureRouter = configureRouter;
exports.default = getRouter;

var _unilocClebertFork = require('uniloc-clebert-fork');

var _unilocClebertFork2 = _interopRequireDefault(_unilocClebertFork);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _unilocClebertFork2.default)();

function configureRouter(routes, aliases) {
  router = (0, _unilocClebertFork2.default)(routes, aliases);
}

function getRouter() {
  return router;
}
//# sourceMappingURL=router.js.map