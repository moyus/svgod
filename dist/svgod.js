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











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var BaseElement = function () {
  function BaseElement(tag, options) {
    classCallCheck(this, BaseElement);

    this.el = this.create(tag, options);
  }

  createClass(BaseElement, [{
    key: 'create',
    value: function create(tag, options) {
      var element = document.createElementNS('http://www.w3.org/2000/svg', tag);

      Object.keys(options).forEach(function (key) {
        switch (key) {
          case 'parent':
            var parent = options.parent;
            if (parent) {
              parent.el.appendChild(element);
            }
            break;
          case 'innerHTML':
            element['textContent'] = options.key;
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
    value: function fill(color) {
      this.el.setAttribute('fill', color);

      return this;
    }
  }, {
    key: 'stroke',
    value: function stroke(color) {
      this.el.setAttribute('stroke', color);

      return this;
    }
  }, {
    key: 'strokeWidth',
    value: function strokeWidth(width) {
      this.el.setAttribute('stroke-width', width);

      return this;
    }
  }, {
    key: 'rotate',
    value: function rotate(deg) {
      this.style('transform-origin', 'center');
      this.style('transform', 'rotate(' + deg + 'deg)');

      return this;
    }
  }, {
    key: 'style',
    value: function style(prop, value) {
      this.el.style[prop] = value;
      return this;
    }
  }, {
    key: 'forward',
    value: function forward() {
      var parent = this.el.parentElement;
      var index = Array.prototype.indexOf.call(parent.children, this.el);
      var reference = parent.children[index + 2] || null;

      parent.insertBefore(this.el, reference);

      return this;
    }
  }, {
    key: 'backward',
    value: function backward() {
      var parent = this.el.parentElement;
      var index = Array.prototype.indexOf.call(parent.children, this.el);
      var reference = parent.children[index - 1] || null;

      parent.insertBefore(this.el, reference);

      return this;
    }
  }]);
  return BaseElement;
}();

var LineElement = function (_BaseElement) {
  inherits(LineElement, _BaseElement);

  function LineElement(options) {
    classCallCheck(this, LineElement);
    return possibleConstructorReturn(this, (LineElement.__proto__ || Object.getPrototypeOf(LineElement)).call(this, 'line', options));
  }

  createClass(LineElement, [{
    key: 'from',
    value: function from(x, y) {
      this.el.setAttribute('x1', x);
      this.el.setAttribute('y1', y);

      return this;
    }
  }, {
    key: 'to',
    value: function to(x, y) {
      this.el.setAttribute('x2', x);
      this.el.setAttribute('y2', y);

      return this;
    }
  }]);
  return LineElement;
}(BaseElement);

var RectElement = function (_BaseElement) {
  inherits(RectElement, _BaseElement);

  function RectElement(options) {
    classCallCheck(this, RectElement);
    return possibleConstructorReturn(this, (RectElement.__proto__ || Object.getPrototypeOf(RectElement)).call(this, 'rect', options));
  }

  createClass(RectElement, [{
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

  function CircleElement(options) {
    classCallCheck(this, CircleElement);
    return possibleConstructorReturn(this, (CircleElement.__proto__ || Object.getPrototypeOf(CircleElement)).call(this, 'circle', options));
  }

  createClass(CircleElement, [{
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

  function EllipseElement(options) {
    classCallCheck(this, EllipseElement);
    return possibleConstructorReturn(this, (EllipseElement.__proto__ || Object.getPrototypeOf(EllipseElement)).call(this, 'ellipse', options));
  }

  createClass(EllipseElement, [{
    key: 'size',
    value: function size(rx, ry) {
      this.el.setAttribute('rx', rx);
      this.el.setAttribute('ry', ry);

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
  return EllipseElement;
}(BaseElement);

var PathElement = function (_BaseElement) {
  inherits(PathElement, _BaseElement);

  function PathElement(options) {
    classCallCheck(this, PathElement);

    var _this = possibleConstructorReturn(this, (PathElement.__proto__ || Object.getPrototypeOf(PathElement)).call(this, 'path', options));

    _this.points = [];
    return _this;
  }

  createClass(PathElement, [{
    key: 'draw',
    value: function draw(command) {
      for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      var points = data.map(function (point) {
        return point.join(',');
      });
      this.points.push('' + command + points.join(' '));

      this.el.setAttribute('d', this.points.join(' '));
    }

    /**
     * Set next drawing point start position
     * @param {number} x 
     * @param {number} y 
     * @param {boolean} [relative=false]
     */

  }, {
    key: 'moveto',
    value: function moveto(x, y) {
      var relative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var command = relative ? 'm' : 'M';
      this.draw(command, [x, y]);

      return this;
    }

    /**
     * Draw a straight line
     * @param {number} x 
     * @param {number} y 
     * @param {boolean} [relative=false]
     */

  }, {
    key: 'lineto',
    value: function lineto(x, y) {
      var relative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var command = void 0;
      if (x === null) {
        command = relative ? 'v' : 'V';
      } else if (y === null) {
        command = relative ? 'h' : 'H';
      } else {
        command = relative ? 'l' : 'L';
      }
      this.draw(command, [x, y]);

      return this;
    }

    /**
     * Draw a bezier curve
     * @param {string} command 
     * @param {array} points 
     */

  }, {
    key: 'curveto',
    value: function curveto(command) {
      var data = [];

      for (var i = 0, len = arguments.length <= 1 ? 0 : arguments.length - 1; i < len; i += 2) {
        data.push([arguments.length <= i + 1 ? undefined : arguments[i + 1], arguments.length <= i + 1 + 1 ? undefined : arguments[i + 1 + 1]]);
      }

      this.draw.apply(this, [command].concat(data));

      return this;
    }

    /**
     * Draw an elliptical curve
     * @param {number} rx 
     * @param {number} ry 
     * @param {number} largeArcFlag 
     * @param {number} sweepFlag 
     * @param {number} x 
     * @param {number} y 
     * @param {boolean} [relative=false]
     */

  }, {
    key: 'arcto',
    value: function arcto(rx, ry, largeArcFlag, sweepFlag, x, y) {
      var relative = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      var command = relative ? 'a' : 'A';

      this.draw(command, [rx, ry], [1], [largeArcFlag, sweepFlag], [x, y]);

      return this;
    }

    /**
     * Draw a straight line from the current
     * position to the first point in the path
     */

  }, {
    key: 'close',
    value: function close() {
      this.draw('Z');

      return this;
    }
  }]);
  return PathElement;
}(BaseElement);

var PolylineElement = function (_BaseElement) {
  inherits(PolylineElement, _BaseElement);

  function PolylineElement(options) {
    classCallCheck(this, PolylineElement);

    var _this = possibleConstructorReturn(this, (PolylineElement.__proto__ || Object.getPrototypeOf(PolylineElement)).call(this, 'polyline', options));

    _this.points = [];
    return _this;
  }

  /**
   * Draw next point
   * @param {*} x 
   * @param {*} y 
   */


  createClass(PolylineElement, [{
    key: 'point',
    value: function point(x, y) {
      this.points.push(x + ',' + y);

      this.el.setAttribute('points', this.points.join(' '));

      return this;
    }
  }]);
  return PolylineElement;
}(BaseElement);

var PolygonElement = function (_BaseElement) {
  inherits(PolygonElement, _BaseElement);

  function PolygonElement(options) {
    classCallCheck(this, PolygonElement);

    var _this = possibleConstructorReturn(this, (PolygonElement.__proto__ || Object.getPrototypeOf(PolygonElement)).call(this, 'polygon', options));

    _this.points = [];
    return _this;
  }

  /**
   * Draw next point
   * @param {*} x 
   * @param {*} y 
   */


  createClass(PolygonElement, [{
    key: 'point',
    value: function point(x, y) {
      this.points.push(x + ',' + y);

      this.el.setAttribute('points', this.points.join(' '));

      return this;
    }
  }]);
  return PolygonElement;
}(BaseElement);

var TextElement = function (_BaseElement) {
  inherits(TextElement, _BaseElement);

  function TextElement(options) {
    classCallCheck(this, TextElement);
    return possibleConstructorReturn(this, (TextElement.__proto__ || Object.getPrototypeOf(TextElement)).call(this, 'text', options));
  }

  createClass(TextElement, [{
    key: 'text',
    value: function text(t) {
      this.el['textContent'] = t;
    }
  }]);
  return TextElement;
}(BaseElement);

var ContainerElement = function (_BaseElement) {
  inherits(ContainerElement, _BaseElement);

  function ContainerElement(tag, options) {
    classCallCheck(this, ContainerElement);
    return possibleConstructorReturn(this, (ContainerElement.__proto__ || Object.getPrototypeOf(ContainerElement)).call(this, tag, options));
  }

  createClass(ContainerElement, [{
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
    value: function polygon(points) {
      return new PolygonElement({
        parent: this
      });
    }
  }, {
    key: 'text',
    value: function text() {
      return new TextElement({
        parent: this
      });
    }
  }]);
  return ContainerElement;
}(BaseElement);

var GroupElement = function (_ContainerElement) {
  inherits(GroupElement, _ContainerElement);

  function GroupElement(options) {
    classCallCheck(this, GroupElement);
    return possibleConstructorReturn(this, (GroupElement.__proto__ || Object.getPrototypeOf(GroupElement)).call(this, 'g', options));
  }

  createClass(GroupElement, [{
    key: 'group',
    value: function group(options) {
      return new GroupElement(_extends({
        parent: this
      }, options));
    }
  }]);
  return GroupElement;
}(ContainerElement);

var SvgElement = function (_ContainerElement) {
  inherits(SvgElement, _ContainerElement);

  function SvgElement(options) {
    classCallCheck(this, SvgElement);
    return possibleConstructorReturn(this, (SvgElement.__proto__ || Object.getPrototypeOf(SvgElement)).call(this, 'svg', options));
  }

  createClass(SvgElement, [{
    key: 'group',
    value: function group(options) {
      return new GroupElement(_extends({
        parent: this
      }, options));
    }
  }]);
  return SvgElement;
}(ContainerElement);

var svgod = function svgod(width, height) {
  return new SvgElement({
    width: width,
    height: height,
    viewBox: '0 0 ' + width + ' ' + height
  });
};

return svgod;

})));
