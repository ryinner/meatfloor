(self["webpackChunkmeatfloor"] = self["webpackChunkmeatfloor"] || []).push([["about-us"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Components/BaseHeading/BaseHeading.vue */ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'AboutUsMainSection',
  setup(__props, {
    expose
  }) {
    expose();
    const __returned__ = {
      BaseHeading: _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Components/BaseHeading/BaseHeading.vue */ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'AboutUsWhyChooseUs',
  setup(__props, {
    expose
  }) {
    expose();
    const __returned__ = {
      BaseHeading: _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Components/BaseHeading/BaseHeading.vue */ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue");
/* harmony import */ var _Components_AboutUs_AboutUsMainSection_AboutUsMainSection_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue */ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue");
/* harmony import */ var _Components_AboutUs_AboutUsWhyChooseUs_AboutUsWhyChooseUs_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue */ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'AboutUs',
  setup(__props, {
    expose
  }) {
    expose();
    const __returned__ = {
      BaseHeading: _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      AboutUsMainSection: _Components_AboutUs_AboutUsMainSection_AboutUsMainSection_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      AboutUsWhyChooseUs: _Components_AboutUs_AboutUsWhyChooseUs_AboutUsWhyChooseUs_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  setup(props, context) {
    const headingId = getChildrenTextContent(context.slots.default()).toLowerCase().replace(/[^а-яА-Яa-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    function getChildrenTextContent(children) {
      return children.map(node => typeof node.children === 'string' ? node.children : Array.isArray(node.children) ? getChildrenTextContent(node.children) : '').join('');
    }
    return () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(`h${props.level}`, {
      id: headingId
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('RouterLink'), {
      name: headingId,
      to: {
        hash: `#${headingId}`
      },
      class: context.attrs.class
    }, () => context.slots.default())]);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=template&id=3779184e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=template&id=3779184e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _Assets_Images_AboutUs_taco_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Assets/Images/AboutUs/taco.png */ "./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/taco.png");
/* harmony import */ var _Assets_Images_AboutUs_chiken_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Assets/Images/AboutUs/chiken.png */ "./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/chiken.png");
/* harmony import */ var _Assets_Images_AboutUs_salat_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Assets/Images/AboutUs/salat.png */ "./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/salat.png");




const _hoisted_1 = {
  class: "about-us-main"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"about-us-main__food\"><div class=\"about-us-main__food--left\"><picture><img src=\"" + _Assets_Images_AboutUs_taco_png__WEBPACK_IMPORTED_MODULE_1__ + "\" alt=\"Ну очень красивая еда\" loading=\"lazy\" decoding=\"async\"></picture></div><div class=\"about-us-main__food--right\"><picture><img src=\"" + _Assets_Images_AboutUs_chiken_png__WEBPACK_IMPORTED_MODULE_2__ + "\" alt=\"Ну очень красивая еда 2\" loading=\"lazy\" decoding=\"async\"></picture><picture><img src=\"" + _Assets_Images_AboutUs_salat_png__WEBPACK_IMPORTED_MODULE_3__ + "\" alt=\"Ну очень красивая еда 3\" loading=\"lazy\" decoding=\"async\"></picture></div></div>", 1);
const _hoisted_3 = {
  class: "about-us-main__information"
};
const _hoisted_4 = {
  class: "about-us-main__text-content"
};
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  class: "about-us-main__heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "about-us-main__heading--primary"
}, "Еда"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" это важная часть здоровой жизни")], -1 /* HOISTED */);
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "about-us-main__description"
}, " Мы поставили перед собой задачу - помогать людям правильно и вкусно питаться. Без этого невозможно наслаждаться жизнью, ведь весь наш день зависит от качества потребляемой пищи. У нас можно отведать завтрак, который задаст правильный старт дню, прийти и отобедать с коллегами, и, конечно же, провести семейный ужин. ", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    class: "about-us-main__slogan",
    level: 2
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("О нас")]),
    _: 1 /* STABLE */
  }), _hoisted_5, _hoisted_6])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=template&id=f3dcff8e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=template&id=f3dcff8e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _Assets_Images_AboutUs_fish_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Assets/Images/AboutUs/fish.png */ "./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/fish.png");


const _hoisted_1 = {
  class: "about-us-why-choose-us"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"about-us-why-choose-us__description\">Самая лучшая еда премиального качества</div><div class=\"about-us-why-choose-us__food\"><picture><img src=\"" + _Assets_Images_AboutUs_fish_png__WEBPACK_IMPORTED_MODULE_1__ + "\" alt=\"Ну очень красивая еда\" loading=\"lazy\" decoding=\"async\"></picture></div><div class=\"about-us-why-choose-us__icons-list\"><div class=\"about-us-why-choose-us__icon-item\"><picture class=\"about-us-why-choose-us__icon-picture\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 20V45\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M16.9375 67.5001C19.4389 63.6634 22.8581 60.5114 26.8851 58.3296C30.9122 56.1478 35.4199 55.0051 40 55.0051C44.5801 55.0051 49.0879 56.1478 53.1149 58.3296C57.142 60.5114 60.5611 63.6634 63.0625 67.5001\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M70 20L40 30L10 20L40 10L70 20Z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M52.9063 25.6875C55.1995 28.1918 56.7147 31.3092 57.267 34.6597C57.8193 38.0101 57.3849 41.4489 56.0168 44.5568C54.6487 47.6647 52.4059 50.3074 49.562 52.1628C46.718 54.0182 43.3957 55.0061 40 55.0061C36.6043 55.0061 33.282 54.0182 30.438 52.1628C27.5941 50.3074 25.3513 47.6647 23.9832 44.5568C22.6151 41.4489 22.1807 38.0101 22.733 34.6597C23.2854 31.3092 24.8005 28.1918 27.0938 25.6875\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></picture><div class=\"about-us-why-choose-us__icon-name\">Лучшие повара</div><div class=\"about-us-why-choose-us__icon-description\">Здесь вас будут обслуживать только профессионалы и мастера кулинарного искусства</div></div><div class=\"about-us-why-choose-us__icon-item\"><picture class=\"about-us-why-choose-us__icon-picture\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M27.5 7.5V17.5\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M37.5 7.5V17.5\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M47.5 7.5V17.5\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M10 67.5H65\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M26.0313 67.5C21.2465 65.3045 17.1924 61.7817 14.3507 57.3501C11.5089 52.9186 9.99892 47.7644 10 42.5V27.5H65V42.5C65.0011 47.7644 63.4911 52.9186 60.6493 57.3501C57.8076 61.7817 53.7535 65.3045 48.9687 67.5\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M65 27.5C67.6522 27.5 70.1957 28.5536 72.0711 30.4289C73.9464 32.3043 75 34.8478 75 37.5V40C75 42.6522 73.9464 45.1957 72.0711 47.0711C70.1957 48.9464 67.6522 50 65 50H63.9375\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></picture><div class=\"about-us-why-choose-us__icon-name\">Вкусная еда</div><div class=\"about-us-why-choose-us__icon-description\">Большой ассортимент разнообразной кухни</div></div><div class=\"about-us-why-choose-us__icon-item\"><picture class=\"about-us-why-choose-us__icon-picture\"><svg width=\"80\" height=\"78\" viewBox=\"0 0 80 78\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M39.9688 20.5C44.8012 20.5 48.7188 16.5825 48.7188 11.75C48.7188 6.91751 44.8012 3 39.9688 3C35.1363 3 31.2188 6.91751 31.2188 11.75C31.2188 16.5825 35.1363 20.5 39.9688 20.5Z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M48.0928 40.0937L58.9678 48.5312C59.6867 49.1297 60.6034 49.4378 61.5378 49.3952C62.4723 49.3525 63.3571 48.9622 64.0185 48.3007C64.6799 47.6393 65.0703 46.7545 65.1129 45.8201C65.1556 44.8856 64.8475 43.969 64.249 43.25L51.874 27.3438C51.2973 26.7612 50.6112 26.2984 49.855 25.982C49.0988 25.6655 48.2875 25.5018 47.4678 25.5H32.4678C30.8041 25.5089 29.2104 26.171 28.0303 27.3438L15.6553 43.25C15.0109 43.9652 14.6663 44.9009 14.6928 45.8632C14.7193 46.8255 15.1149 47.7407 15.7976 48.4194C16.4803 49.0981 17.3979 49.4883 18.3603 49.5091C19.3228 49.5299 20.2564 49.1798 20.9678 48.5312L31.8428 40.0937L23.1553 67.4688C22.946 67.9161 22.8268 68.4002 22.8047 68.8936C22.7825 69.3869 22.8577 69.8798 23.026 70.3441C23.1943 70.8084 23.4524 71.235 23.7856 71.5996C24.1188 71.9641 24.5205 72.2595 24.9678 72.4688C25.4151 72.678 25.8993 72.7972 26.3926 72.8194C26.886 72.8415 27.3789 72.7663 27.8432 72.598C28.3075 72.4297 28.7341 72.1716 29.0986 71.8384C29.4631 71.5053 29.7585 71.1036 29.9678 70.6562L39.9678 54.9063L49.9678 70.6562C50.1631 71.1231 50.4509 71.5456 50.8139 71.8982C51.1768 72.2509 51.6074 72.5265 52.0797 72.7083C52.5519 72.8902 53.0561 72.9745 53.5618 72.9564C54.0676 72.9382 54.5644 72.8178 55.0224 72.6026C55.4804 72.3873 55.8901 72.0815 56.2268 71.7037C56.5634 71.3259 56.8202 70.8839 56.9815 70.4042C57.1428 69.9245 57.2054 69.4172 57.1655 68.9127C57.1255 68.4082 56.9838 67.917 56.749 67.4688L48.0928 40.0937Z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></picture><div class=\"about-us-why-choose-us__icon-name\">Отличное обслуживание</div><div class=\"about-us-why-choose-us__icon-description\">Все наши официанты отвечают стандартам мирового качества обслуживания</div></div></div>", 3);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    class: "about-us-why-choose-us__heading",
    level: 2
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Почему именно мы ")]),
    _: 1 /* STABLE */
  }), _hoisted_2]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=template&id=9e7af962":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=template&id=9e7af962 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "about-us"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    class: "about-us__heading"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Кто мы?")]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AboutUsMainSection"], {
    class: "about-us__section"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AboutUsWhyChooseUs"], {
    class: "about-us__section"
  })]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about-us-main {\n  gap: 20px;\n  display: grid;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.about-us-main__food {\n  gap: 20px;\n  display: flex;\n  grid-column: 6 span;\n}\n.about-us-main__food--right {\n  gap: 20px;\n  display: flex;\n  padding-top: 40px;\n  flex-direction: column;\n}\n.about-us-main__information {\n  display: flex;\n  align-items: center;\n  grid-column: 6 span;\n}\n.about-us-main__slogan {\n  color: #CA006D;\n  font-family: \"GreatVibes\";\n  font-weight: 400;\n  line-height: 40px;\n  font-size: 32px;\n}\n.about-us-main__heading {\n  color: #fff;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 98px;\n  font-size: 60px;\n  padding: 20px 0;\n}\n.about-us-main__heading--primary {\n  color: #CA006D;\n}\n.about-us-main__description {\n  color: #fff;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 24px;\n  font-size: 16px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about-us-why-choose-us__heading {\n  color: #fff;\n  text-align: center;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 98px;\n  font-size: 60px;\n}\n.about-us-why-choose-us__description {\n  color: #fff;\n  text-align: center;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 24px;\n  font-size: 16px;\n}\n.about-us-why-choose-us__food {\n  padding: 40px 0;\n}\n.about-us-why-choose-us__icons-list {\n  display: flex;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.about-us-why-choose-us__icon-item {\n  display: grid;\n  grid-column: 4 span;\n  text-align: center;\n}\n.about-us-why-choose-us__icon-picture {\n  justify-content: center;\n}\n.about-us-why-choose-us__icon-name {\n  color: #fff;\n  margin: 12px 0;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 32px;\n  font-size: 24px;\n}\n.about-us-why-choose-us__icon-description {\n  color: #fff;\n  align-self: end;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 22px;\n  font-size: 14px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about-us {\n  margin: 0 auto;\n  max-width: 1440px;\n}\n.about-us__heading {\n  text-align: center;\n  color: #fff;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 98px;\n  font-size: 60px;\n}\n.about-us__section {\n  padding: 40px 0;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue":
/*!*******************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUsMainSection_vue_vue_type_template_id_3779184e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUsMainSection.vue?vue&type=template&id=3779184e */ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=template&id=3779184e");
/* harmony import */ var _AboutUsMainSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUsMainSection.vue?vue&type=script&setup=true&lang=js */ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _AboutUsMainSection_vue_vue_type_style_index_0_id_3779184e_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss */ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AboutUsMainSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AboutUsMainSection_vue_vue_type_template_id_3779184e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue":
/*!*******************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUsWhyChooseUs_vue_vue_type_template_id_f3dcff8e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUsWhyChooseUs.vue?vue&type=template&id=f3dcff8e */ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=template&id=f3dcff8e");
/* harmony import */ var _AboutUsWhyChooseUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUsWhyChooseUs.vue?vue&type=script&setup=true&lang=js */ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _AboutUsWhyChooseUs_vue_vue_type_style_index_0_id_f3dcff8e_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss */ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AboutUsWhyChooseUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AboutUsWhyChooseUs_vue_vue_type_template_id_f3dcff8e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue":
/*!********************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUs_vue_vue_type_template_id_9e7af962__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=template&id=9e7af962 */ "./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=template&id=9e7af962");
/* harmony import */ var _AboutUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=script&setup=true&lang=js */ "./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _AboutUs_vue_vue_type_style_index_0_id_9e7af962_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss */ "./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AboutUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AboutUs_vue_vue_type_template_id_9e7af962__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue":
/*!********************************************************************!*\
  !*** ./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseHeading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseHeading.vue?vue&type=script&lang=js */ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue?vue&type=script&lang=js");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");



;
const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_BaseHeading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"], [['__file',"src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsMainSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsMainSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUsMainSection.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsWhyChooseUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsWhyChooseUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUsWhyChooseUs.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUs.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BaseHeading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BaseHeading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BaseHeading.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=template&id=3779184e":
/*!*************************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=template&id=3779184e ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsMainSection_vue_vue_type_template_id_3779184e__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsMainSection_vue_vue_type_template_id_3779184e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUsMainSection.vue?vue&type=template&id=3779184e */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=template&id=3779184e");


/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=template&id=f3dcff8e":
/*!*************************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=template&id=f3dcff8e ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsWhyChooseUs_vue_vue_type_template_id_f3dcff8e__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsWhyChooseUs_vue_vue_type_template_id_f3dcff8e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUsWhyChooseUs.vue?vue&type=template&id=f3dcff8e */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=template&id=f3dcff8e");


/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=template&id=9e7af962":
/*!**************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=template&id=9e7af962 ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUs_vue_vue_type_template_id_9e7af962__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUs_vue_vue_type_template_id_9e7af962__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUs.vue?vue&type=template&id=9e7af962 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=template&id=9e7af962");


/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsMainSection_vue_vue_type_style_index_0_id_3779184e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsMainSection_vue_vue_type_style_index_0_id_3779184e_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsMainSection_vue_vue_type_style_index_0_id_3779184e_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsMainSection_vue_vue_type_style_index_0_id_3779184e_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsMainSection_vue_vue_type_style_index_0_id_3779184e_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsWhyChooseUs_vue_vue_type_style_index_0_id_f3dcff8e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsWhyChooseUs_vue_vue_type_style_index_0_id_f3dcff8e_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsWhyChooseUs_vue_vue_type_style_index_0_id_f3dcff8e_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsWhyChooseUs_vue_vue_type_style_index_0_id_f3dcff8e_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUsWhyChooseUs_vue_vue_type_style_index_0_id_f3dcff8e_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUs_vue_vue_type_style_index_0_id_9e7af962_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUs_vue_vue_type_style_index_0_id_9e7af962_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUs_vue_vue_type_style_index_0_id_9e7af962_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUs_vue_vue_type_style_index_0_id_9e7af962_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AboutUs_vue_vue_type_style_index_0_id_9e7af962_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue?vue&type=style&index=0&id=3779184e&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("23d2b99d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue?vue&type=style&index=0&id=f3dcff8e&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("62a0dab2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/AboutUs/AboutUs.vue?vue&type=style&index=0&id=9e7af962&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("8c4348a4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/chiken.png":
/*!***************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/chiken.png ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "c0571b3855d8b29be88c.png";

/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/fish.png":
/*!*************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/fish.png ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "3138133de6bc4e639b4c.png";

/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/salat.png":
/*!**************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/salat.png ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d5a1db659b99557b0c9b.png";

/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/taco.png":
/*!*************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Assets/Images/AboutUs/taco.png ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "818e6440435b33acd136.png";

/***/ })

}]);