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
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");


var _jsxFileName = "F:\\practice my skills\\SSR\\Portfolio\\pages\\about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var About = function About(_ref) {
  var data = _ref.data,
      status = _ref.status;
  console.log(status);

  if (status >= 200 && status <= 300) {
    return __jsx(_error__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  }

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2587206670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " Hi I'm mohamed And I'm a web developer "), __jsx("p", {
    className: "jsx-2587206670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " github account : ", __jsx("a", {
    href: data.url,
    className: "jsx-2587206670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Mohamed ")), __jsx("p", {
    className: "jsx-2587206670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " ", data.bio, " "), __jsx("img", {
    src: data.avatar_url,
    alt: "image",
    className: "jsx-2587206670" + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2587206670",
    __self: this
  }, ".img.jsx-2587206670{width :300px;margin-bottom :2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwcmFjdGljZSBteSBza2lsbHNcXFNTUlxcUG9ydGZvbGlvXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ3QixBQUc4QixhQUNPLG9CQUN4QiIsImZpbGUiOiJGOlxccHJhY3RpY2UgbXkgc2tpbGxzXFxTU1JcXFBvcnRmb2xpb1xccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vX2Vycm9yXCI7XHJcblxyXG5jb25zdCBBYm91dCA9ICgge2RhdGEgLCBzdGF0dXN9ICkgPT4ge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0YXR1cylcclxuXHJcbiAgICBpZiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPD0gMzAwICl7XHJcbiAgICAgICAgcmV0dXJuIDxFcnJvciAvPlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiQWJvdXRcIj5cclxuICAgICAgICAgICAgPHA+IEhpIEknbSBtb2hhbWVkIEFuZCBJJ20gYSB3ZWIgZGV2ZWxvcGVyIDwvcD5cclxuICAgICAgICAgICAgPHA+IGdpdGh1YiBhY2NvdW50IDogPGEgaHJlZj17ZGF0YS51cmx9Pk1vaGFtZWQgPC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+IHtkYXRhLmJpb30gPC9wPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ1wiIHNyYz17ZGF0YS5hdmF0YXJfdXJsfSBhbHQ9XCJpbWFnZVwiLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoIDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkFib3V0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9ic2FzdGVyYm95MzJcIik7XHJcblxyXG4gICAgcmV0dXJuIHsgZGF0YSA6IHJlcy5kYXRhICwgc3RhdHVzIDogcmVzLnN0YXR1cyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0Il19 */\n/*@ sourceURL=F:\\\\practice my skills\\\\SSR\\\\Portfolio\\\\pages\\\\about.js */"));
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
          return axios__WEBPACK_IMPORTED_MODULE_5___default()("https://api.github.com/users/bsasterboy32");

        case 2:
          res = _context.sent;
          return _context.abrupt("return", {
            data: res.data,
            status: res.status
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
//# sourceMappingURL=about.js.924ae5139ce1f1a2466c.hot-update.js.map