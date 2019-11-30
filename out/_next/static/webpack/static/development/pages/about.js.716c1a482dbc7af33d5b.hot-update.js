webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "F:\\practice my skills\\SSR\\Portfolio\\pages\\about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var About = function About(_ref) {
  var data = _ref.data;
  console.log(data);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2587206670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, " Hi I'm mohamed And I'm a web developer "), __jsx("p", {
    className: "jsx-2587206670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " github account : ", __jsx("a", {
    href: data.url,
    className: "jsx-2587206670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Mohamed ")), __jsx("p", {
    className: "jsx-2587206670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, " ", data.bio, " "), __jsx("img", {
    src: data.avatar_url,
    alt: "image",
    className: "jsx-2587206670" + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2587206670",
    __self: this
  }, ".img.jsx-2587206670{width :300px;margin-bottom :2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwcmFjdGljZSBteSBza2lsbHNcXFNTUlxcUG9ydGZvbGlvXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3dCLEFBRzhCLGFBQ08sb0JBQ3hCIiwiZmlsZSI6IkY6XFxwcmFjdGljZSBteSBza2lsbHNcXFNTUlxcUG9ydGZvbGlvXFxwYWdlc1xcYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBBYm91dCA9ICgge2RhdGF9ICkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCB0aXRsZT1cIkFib3V0XCI+XHJcbiAgICAgICAgICAgIDxwPiBIaSBJJ20gbW9oYW1lZCBBbmQgSSdtIGEgd2ViIGRldmVsb3BlciA8L3A+XHJcbiAgICAgICAgICAgIDxwPiBnaXRodWIgYWNjb3VudCA6IDxhIGhyZWY9e2RhdGEudXJsfT5Nb2hhbWVkIDwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPiB7ZGF0YS5iaW99IDwvcD5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdcIiBzcmM9e2RhdGEuYXZhdGFyX3VybH0gYWx0PVwiaW1hZ2VcIi8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5BYm91dC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyhcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYmlzYXN0ZXJib3kzMlwiKTtcclxuXHJcbiAgICByZXR1cm4geyBkYXRhIDogcmVzLmRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dCJdfQ== */\n/*@ sourceURL=F:\\\\practice my skills\\\\SSR\\\\Portfolio\\\\pages\\\\about.js */"));
};

About.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_5___default()("https://api.github.com/users/bisasterboy32");

        case 2:
          res = _context.sent;
          return _context.abrupt("return", {
            data: res.data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.716c1a482dbc7af33d5b.hot-update.js.map