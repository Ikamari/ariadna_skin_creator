/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//TODO: UI, 2D skin preview, check skin-preview

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            skin: {
                head: "head1",
                headArmor: "",
                body: "body1",
                bodyArmor: "",
                leftHand: "hand1",
                leftHandArmor: "",
                rightHand: "hand1",
                rightHandArmor: "",
                leftLeg: "leg1",
                leftLegArmor: "",
                rightLeg: "leg1",
                rightLegArmor: ""
            },
            headTextures: [],
            bodyTextures: [],
            handTextures: [],
            legTextures: [],
            currentLoadedTextures: [],
            currentSelectedPart: "none",
            newVersion: false
        };
        return _this;
    }

    _createClass(App, [{
        key: "changeSelectedPart",
        value: function changeSelectedPart(partName) {
            var needeedTextures = void 0;
            switch (partName) {
                case "head":
                    {
                        needeedTextures = this.state.headTextures;break;
                    }
                case "body":
                    {
                        needeedTextures = this.state.bodyTextures;break;
                    }
                case "leftHand":
                    {
                        needeedTextures = this.state.handTextures;break;
                    }
                case "rightHand":
                    {
                        needeedTextures = this.state.handTextures;break;
                    }
                case "leftLeg":
                    {
                        needeedTextures = this.state.legTextures;break;
                    }
                case "rightLeg":
                    {
                        needeedTextures = this.state.legTextures;break;
                    }
            }
            this.setState({
                currentSelectedPart: partName,
                currentLoadedTextures: needeedTextures
            });
        }
    }, {
        key: "changeSkinVersion",
        value: function changeSkinVersion() {
            if (this.state.newVersion) {
                this.setState({ newVersion: false });
            } else {
                this.setState({ newVersion: true });
            }
        }
    }, {
        key: "changePartTexture",
        value: function changePartTexture(name) {
            var currentSkin = this.state.skin;
            currentSkin[this.state.currentSelectedPart] = name;
            this.setState({
                skin: currentSkin
            });
        }
    }, {
        key: "distributeTextureNames",
        value: function distributeTextureNames(textures) {
            this.setState({
                headTextures: textures.head,
                bodyTextures: textures.body,
                handTextures: textures.hands,
                legTextures: textures.legs
            });
        }
    }, {
        key: "skinElement",
        value: function skinElement(elementName, key) {
            var _this2 = this;

            return React.createElement(
                "div",
                { key: key, className: "skin-elements-element", onClick: function onClick() {
                        return _this2.changePartTexture(elementName);
                    } },
                React.createElement("img", { className: "skin-elements-element-icon", src: "./img/" + elementName + ".png" })
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            //Trying to do everything without server
            this.distributeTextureNames(getLocalTextures());
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    " Selected part: ",
                    this.state.currentSelectedPart
                ),
                React.createElement(
                    "p",
                    null,
                    " Selected version: ",
                    this.state.newVersion ? "new" : "old"
                ),
                React.createElement(
                    "button",
                    { onClick: function onClick() {
                            return _this3.changeSkinVersion();
                        } },
                    "Change version"
                ),
                React.createElement(
                    "div",
                    { id: "skin-preview" },
                    React.createElement(
                        "div",
                        { id: "skin-head", onClick: function onClick() {
                                return _this3.changeSelectedPart("head");
                            } },
                        React.createElement("img", { className: "skin-part-texture", src: "./img/" + this.state.skin.head + ".png" })
                    ),
                    React.createElement(
                        "div",
                        { id: "skin-middle" },
                        React.createElement(
                            "div",
                            { id: "skin-left-hand", onClick: function onClick() {
                                    return _this3.changeSelectedPart("leftHand");
                                } },
                            React.createElement("img", { className: "skin-part-texture", src: "./img/" + this.state.skin.leftHand + ".png" })
                        ),
                        React.createElement(
                            "div",
                            { id: "skin-body", onClick: function onClick() {
                                    return _this3.changeSelectedPart("body");
                                } },
                            React.createElement("img", { className: "skin-part-texture", src: "./img/" + this.state.skin.body + ".png" })
                        ),
                        React.createElement(
                            "div",
                            { id: "skin-right-hand", onClick: function onClick() {
                                    return _this3.changeSelectedPart(_this3.state.newVersion ? "rightHand" : "leftHand");
                                } },
                            React.createElement("img", { className: "skin-part-texture texture-mirrored", src: "./img/" + (this.state.newVersion ? this.state.skin.rightHand : this.state.skin.leftHand) + ".png" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { id: "skin-bottom" },
                        React.createElement(
                            "div",
                            { id: "skin-left-leg", onClick: function onClick() {
                                    return _this3.changeSelectedPart("leftLeg");
                                } },
                            React.createElement("img", { className: "skin-part-texture", src: "./img/" + this.state.skin.leftLeg + ".png" })
                        ),
                        React.createElement(
                            "div",
                            { id: "skin-right-leg", onClick: function onClick() {
                                    return _this3.changeSelectedPart(_this3.state.newVersion ? "rightLeg" : "leftLeg");
                                } },
                            React.createElement("img", { className: "skin-part-texture texture-mirrored", src: "./img/" + (this.state.newVersion ? this.state.skin.rightLeg : this.state.skin.leftLeg) + ".png" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { id: "skin-elements" },
                    this.state.currentLoadedTextures.map(function (element, key) {
                        return _this3.skinElement(element, key);
                    })
                )
            );
        }
    }]);

    return App;
}(React.Component);

// const getTextures = () => {
//
// };

var getLocalTextures = function getLocalTextures() {
    return {
        head: ["head1", "head2", "head3", "head4", "head5"],
        body: ["body1", "body2", "body3", "body4", "body5"],
        hands: ["hand1", "hand2", "hand3", "hand4", "hand5"],
        legs: ["leg1", "leg2", "leg3", "leg4", "leg5"]
    };
};

ReactDOM.render(React.createElement(App, null), document.getElementById('content'));

/***/ })
/******/ ]);