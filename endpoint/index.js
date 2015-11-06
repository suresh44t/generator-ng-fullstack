'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _yeomanGenerator = require('yeoman-generator');

var _ngSub_generators_endpoint = require('../_ng/sub_generators_endpoint');

var EndpointGenerator = (function (_Base) {
  _inherits(EndpointGenerator, _Base);

  function EndpointGenerator(args, options, config) {
    _classCallCheck(this, EndpointGenerator);

    _get(Object.getPrototypeOf(EndpointGenerator.prototype), 'constructor', this).call(this, args, options, config);

    this.generator = new _ngSub_generators_endpoint.EndpointSubGenerator(this);
  }

  _createClass(EndpointGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.generator.initializing();
    }
  }, {
    key: 'writing',
    value: function writing() {
      this.generator.writing();
    }
  }]);

  return EndpointGenerator;
})(_yeomanGenerator.Base);

exports['default'] = EndpointGenerator;
module.exports = exports['default'];