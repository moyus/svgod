(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.svgod = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var BaseElement = function () {
  function BaseElement() {
    classCallCheck(this, BaseElement);
  }

  createClass(BaseElement, [{
    key: 'create',
    value: function create(tag, options) {
      var element = document.createElementNS('http://www.w3.org/2000/svg', tag);

      Object.keys(options).forEach(function (key) {
        switch (key) {
          case 'parent':
            var parent = options.parent;
            if (!parent) return;
            if (typeof parent === 'string') {
              parent = document.querySelector(parent);
              parent.appendChild(element);
            } else if (parent.el.nodeType === Node.ELEMENT_NODE) {
              parent.el.appendChild(element);
            } else if (parent.nodeType === Node.ELEMENT_NODE) {
              parent.appendChild(element);
            }
            break;
          case 'innerHTML':
            element['textContext'] = options.key;
            break;
          case 'className':
            key = 'class';
          default:
            element.setAttribute(key, options[key]);
            break;
        }
      });

      return element;
    }
  }, {
    key: 'fill',
    value: function fill(color) {}
  }, {
    key: 'rotate',
    value: function rotate(deg) {}
  }]);
  return BaseElement;
}();

var SvgElement = function (_BaseElement) {
  inherits(SvgElement, _BaseElement);

  function SvgElement() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref$parent = _ref.parent,
        parent = _ref$parent === undefined ? null : _ref$parent,
        rest = objectWithoutProperties(_ref, ['parent']);
    classCallCheck(this, SvgElement);

    var _this = possibleConstructorReturn(this, (SvgElement.__proto__ || Object.getPrototypeOf(SvgElement)).call(this));

    _this.el = _this.create('svg', _extends({
      parent: parent
    }, rest));
    return _this;
  }

  return SvgElement;
}(BaseElement);

var LineElement = function (_BaseElement) {
  inherits(LineElement, _BaseElement);

  function LineElement(_ref) {
    var _ref$parent = _ref.parent,
        parent = _ref$parent === undefined ? null : _ref$parent,
        rest = objectWithoutProperties(_ref, ['parent']);
    classCallCheck(this, LineElement);

    var _this = possibleConstructorReturn(this, (LineElement.__proto__ || Object.getPrototypeOf(LineElement)).call(this));

    _this.el = _this.create('line', _extends({
      parent: parent
    }, rest));
    return _this;
  }

  return LineElement;
}(BaseElement);

var RectElement = function (_BaseElement) {
  inherits(RectElement, _BaseElement);

  function RectElement(_ref) {
    var _ref$parent = _ref.parent,
        parent = _ref$parent === undefined ? null : _ref$parent,
        rest = objectWithoutProperties(_ref, ['parent']);
    classCallCheck(this, RectElement);

    var _this = possibleConstructorReturn(this, (RectElement.__proto__ || Object.getPrototypeOf(RectElement)).call(this));

    _this.el = _this.create('rect', _extends({
      parent: parent
    }, rest));
    return _this;
  }

  createClass(RectElement, [{
    key: 'fill',
    value: function fill(color) {
      this.el.setAttribute('fill', color);

      return this;
    }
  }, {
    key: 'size',
    value: function size(width, height) {
      this.el.setAttribute('width', width);
      this.el.setAttribute('height', height);

      return this;
    }
  }, {
    key: 'moveTo',
    value: function moveTo(x, y) {
      this.el.setAttribute('x', x);
      this.el.setAttribute('y', y);

      return this;
    }
  }]);
  return RectElement;
}(BaseElement);

var CircleElement = function (_BaseElement) {
  inherits(CircleElement, _BaseElement);

  function CircleElement(_ref) {
    var _ref$parent = _ref.parent,
        parent = _ref$parent === undefined ? null : _ref$parent,
        rest = objectWithoutProperties(_ref, ['parent']);
    classCallCheck(this, CircleElement);

    var _this = possibleConstructorReturn(this, (CircleElement.__proto__ || Object.getPrototypeOf(CircleElement)).call(this));

    _this.el = _this.create('circle', _extends({
      parent: parent
    }, rest));
    return _this;
  }

  createClass(CircleElement, [{
    key: 'fill',
    value: function fill(color) {
      this.el.setAttribute('fill', color);

      return this;
    }
  }, {
    key: 'size',
    value: function size(radius) {
      this.el.setAttribute('r', radius);

      return this;
    }
  }, {
    key: 'moveTo',
    value: function moveTo(x, y) {
      this.el.setAttribute('cx', x);
      this.el.setAttribute('cy', y);

      return this;
    }
  }]);
  return CircleElement;
}(BaseElement);

var EllipseElement = function (_BaseElement) {
  inherits(EllipseElement, _BaseElement);

  function EllipseElement(_ref) {
    var _ref$parent = _ref.parent,
        parent = _ref$parent === undefined ? null : _ref$parent,
        rest = objectWithoutProperties(_ref, ['parent']);
    classCallCheck(this, EllipseElement);

    var _this = possibleConstructorReturn(this, (EllipseElement.__proto__ || Object.getPrototypeOf(EllipseElement)).call(this));

    _this.el = _this.create('ellipse', _extends({
      parent: parent
    }, rest));
    return _this;
  }

  return EllipseElement;
}(BaseElement);

var PathElement = function (_BaseElement) {
  inherits(PathElement, _BaseElement);

  function PathElement(_ref) {
    var _ref$parent = _ref.parent,
        parent = _ref$parent === undefined ? null : _ref$parent,
        rest = objectWithoutProperties(_ref, ['parent']);
    classCallCheck(this, PathElement);

    var _this = possibleConstructorReturn(this, (PathElement.__proto__ || Object.getPrototypeOf(PathElement)).call(this));

    _this.el = _this.create('path', _extends({
      parent: parent
    }, rest));
    return _this;
  }

  createClass(PathElement, [{
    key: 'moveto',
    value: function moveto() {}
  }, {
    key: 'lineto',
    value: function lineto() {}
  }, {
    key: 'xlineto',
    value: function xlineto() {}
  }, {
    key: 'ylineto',
    value: function ylineto() {}
  }, {
    key: 'curveto',
    value: function curveto() {}
  }, {
    key: 'scurveto',
    value: function scurveto() {}
  }, {
    key: 'qcurve',
    value: function qcurve() {}
  }, {
    key: 'tcurveto',
    value: function tcurveto() {}
  }, {
    key: 'arc',
    value: function arc() {}
  }, {
    key: 'close',
    value: function close() {}
  }]);
  return PathElement;
}(BaseElement);

var PolylineElement = function (_BaseElement) {
  inherits(PolylineElement, _BaseElement);

  function PolylineElement(_ref) {
    var _ref$parent = _ref.parent,
        parent = _ref$parent === undefined ? null : _ref$parent,
        rest = objectWithoutProperties(_ref, ['parent']);
    classCallCheck(this, PolylineElement);

    var _this = possibleConstructorReturn(this, (PolylineElement.__proto__ || Object.getPrototypeOf(PolylineElement)).call(this));

    _this.el = _this.create('polyline', _extends({
      parent: parent
    }, rest));
    return _this;
  }

  return PolylineElement;
}(BaseElement);

var PolygonElement = function (_BaseElement) {
  inherits(PolygonElement, _BaseElement);

  function PolygonElement(_ref) {
    var _ref$parent = _ref.parent,
        parent = _ref$parent === undefined ? null : _ref$parent,
        rest = objectWithoutProperties(_ref, ['parent']);
    classCallCheck(this, PolygonElement);

    var _this = possibleConstructorReturn(this, (PolygonElement.__proto__ || Object.getPrototypeOf(PolygonElement)).call(this));

    _this.el = _this.create('polygon', _extends({
      parent: parent
    }, rest));
    return _this;
  }

  return PolygonElement;
}(BaseElement);

var svgod = function () {
  function svgod(width, height) {
    classCallCheck(this, svgod);

    this.vm = new SvgElement({
      width: width,
      height: height,
      viewBox: '0 0 ' + width + ' ' + height
    });
    this.el = this.vm.el;
  }

  createClass(svgod, [{
    key: 'line',
    value: function line() {
      return new LineElement({
        parent: this
      });
    }
  }, {
    key: 'rect',
    value: function rect() {
      return new RectElement({
        parent: this
      });
    }
  }, {
    key: 'circle',
    value: function circle() {
      return new CircleElement({
        parent: this
      });
    }
  }, {
    key: 'ellipse',
    value: function ellipse() {
      return new EllipseElement({
        parent: this
      });
    }
  }, {
    key: 'path',
    value: function path() {
      return new PathElement({
        parent: this
      });
    }
  }, {
    key: 'polyline',
    value: function polyline() {
      return new PolylineElement({
        parent: this
      });
    }
  }, {
    key: 'polygon',
    value: function polygon() {
      return new PolygonElement({
        parent: this
      });
    }
  }]);
  return svgod;
}();

return svgod;

})));
