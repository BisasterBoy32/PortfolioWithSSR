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

  if (status !== 200) {
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
  }, ".img.jsx-2587206670{width :300px;margin-bottom :2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwcmFjdGljZSBteSBza2lsbHNcXFNTUlxcUG9ydGZvbGlvXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ3QixBQUc4QixhQUNPLG9CQUN4QiIsImZpbGUiOiJGOlxccHJhY3RpY2UgbXkgc2tpbGxzXFxTU1JcXFBvcnRmb2xpb1xccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vX2Vycm9yXCI7XHJcblxyXG5jb25zdCBBYm91dCA9ICgge2RhdGEgLCBzdGF0dXN9ICkgPT4ge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0YXR1cylcclxuXHJcbiAgICBpZiAoc3RhdHVzICE9PSAyMDAgKXtcclxuICAgICAgICByZXR1cm4gPEVycm9yIC8+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdGl0bGU9XCJBYm91dFwiPlxyXG4gICAgICAgICAgICA8cD4gSGkgSSdtIG1vaGFtZWQgQW5kIEknbSBhIHdlYiBkZXZlbG9wZXIgPC9wPlxyXG4gICAgICAgICAgICA8cD4gZ2l0aHViIGFjY291bnQgOiA8YSBocmVmPXtkYXRhLnVybH0+TW9oYW1lZCA8L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD4ge2RhdGEuYmlvfSA8L3A+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nXCIgc3JjPXtkYXRhLmF2YXRhcl91cmx9IGFsdD1cImltYWdlXCIvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuQWJvdXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2Jpc2FzdGVyYm95MzJcIik7XHJcblxyXG4gICAgcmV0dXJuIHsgZGF0YSA6IHJlcy5kYXRhICwgc3RhdHVzIDogcmVzLnN0YXR1cyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0Il19 */\n/*@ sourceURL=F:\\\\practice my skills\\\\SSR\\\\Portfolio\\\\pages\\\\about.js */"));
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
//# sourceMappingURL=about.js.0548a95658ae6d00de33.hot-update.js.map