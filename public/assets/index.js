(self["webpackChunkmeatfloor"] = self["webpackChunkmeatfloor"] || []).push([["index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Components/BaseHeading/BaseHeading.vue */ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'IndexAboutFood',
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Components/BaseHeading/BaseHeading.vue */ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue");
/* harmony import */ var _Shared_Components_BaseButton_BaseButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Components/BaseButton/BaseButton.vue */ "./src/Frontend/Shared/Components/BaseButton/BaseButton.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'IndexAboutUs',
  setup(__props, {
    expose
  }) {
    expose();
    const __returned__ = {
      BaseHeading: _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      BaseButton: _Shared_Components_BaseButton_BaseButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Containers_Index_Functional_Api_index_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Containers/Index/Functional/Api/index.api */ "./src/Frontend/Containers/Index/Functional/Api/index.api.js");
/* harmony import */ var _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Components/BaseHeading/BaseHeading.vue */ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue");
/* harmony import */ var _Shared_Components_BaseLoading_BaseLoading_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Components/BaseLoading/BaseLoading.vue */ "./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'IndexChooseAndPick',
  setup(__props, {
    expose
  }) {
    expose();
    const loading = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(true);
    const categories = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)([]);
    const selectedCategory = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)({});
    const getMenu = async () => await (0,_Containers_Index_Functional_Api_index_api__WEBPACK_IMPORTED_MODULE_0__.getIndexMenu)().then(response => {
      categories.value = response.data;
      selectedCategory.value = categories.value[0];
      loading.value = false;
    });
    const changeSelectedCategory = category => {
      selectedCategory.value = category;
    };
    const __returned__ = {
      loading,
      categories,
      selectedCategory,
      getMenu,
      changeSelectedCategory,
      get getIndexMenu() {
        return _Containers_Index_Functional_Api_index_api__WEBPACK_IMPORTED_MODULE_0__.getIndexMenu;
      },
      BaseHeading: _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      BaseLoading: _Shared_Components_BaseLoading_BaseLoading_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      ref: vue__WEBPACK_IMPORTED_MODULE_3__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Components/BaseHeading/BaseHeading.vue */ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'IndexWhyChooseUs',
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_IndexHero_IndexHero_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/IndexHero/IndexHero.vue */ "./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue");
/* harmony import */ var _Components_IndexAboutUs_IndexAboutUs_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/IndexAboutUs/IndexAboutUs.vue */ "./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue");
/* harmony import */ var _Components_IndexAboutFood_IndexAboutFood_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/IndexAboutFood/IndexAboutFood.vue */ "./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue");
/* harmony import */ var _Components_IndexWhyChooseUs_IndexWhyChooseUs_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/IndexWhyChooseUs/IndexWhyChooseUs.vue */ "./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue");
/* harmony import */ var _Components_IndexClients_IndexClients_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/IndexClients/IndexClients.vue */ "./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue");
/* harmony import */ var _Components_IndexChooseAndPick_IndexChooseAndPick_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/IndexChooseAndPick/IndexChooseAndPick.vue */ "./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue");






/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'IndexView',
  setup(__props, {
    expose
  }) {
    expose();
    const __returned__ = {
      IndexHero: _Components_IndexHero_IndexHero_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      IndexAboutUs: _Components_IndexAboutUs_IndexAboutUs_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      IndexAboutFood: _Components_IndexAboutFood_IndexAboutFood_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      IndexWhyChooseUs: _Components_IndexWhyChooseUs_IndexWhyChooseUs_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      IndexClients: _Components_IndexClients_IndexClients_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      IndexChooseAndPick: _Components_IndexChooseAndPick_IndexChooseAndPick_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=template&id=122a6b0b":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=template&id=122a6b0b ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _Containers_Index_UI_Assets_Images_index_background_grass_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/index-background-grass.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/index-background-grass.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_index_aboutfood_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/index-aboutfood-1.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-1.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_index_aboutfood_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/index-aboutfood-2.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-2.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_index_aboutfood_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/index-aboutfood-3.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-3.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_index_aboutfood_4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/index-aboutfood-4.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-4.png");






const _hoisted_1 = {
  class: "index-about-food"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "index-about-food__background"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("picture", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _Containers_Index_UI_Assets_Images_index_background_grass_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "Красивая еда",
  loading: "lazy"
})])], -1 /* HOISTED */);
const _hoisted_3 = {
  class: "index-about-food__container"
};
const _hoisted_4 = {
  class: "index-about-food__header"
};
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "index-about-food__heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "index-about-food__heading--primary"
}, "Вы"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("бери еду для себя ")], -1 /* HOISTED */);
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"index-about-food__food\"><picture class=\"index-about-food__food-item\"><img src=\"" + _Containers_Index_UI_Assets_Images_index_aboutfood_1_png__WEBPACK_IMPORTED_MODULE_2__ + "\" alt=\"Красивая еда\" loading=\"lazy\"></picture><picture class=\"index-about-food__food-item\"><img src=\"" + _Containers_Index_UI_Assets_Images_index_aboutfood_2_png__WEBPACK_IMPORTED_MODULE_3__ + "\" alt=\"Красивая еда\" loading=\"lazy\"></picture><picture class=\"index-about-food__food-item\"><img src=\"" + _Containers_Index_UI_Assets_Images_index_aboutfood_3_png__WEBPACK_IMPORTED_MODULE_4__ + "\" alt=\"Красивая еда\" loading=\"lazy\"></picture><picture class=\"index-about-food__food-item\"><img src=\"" + _Containers_Index_UI_Assets_Images_index_aboutfood_4_png__WEBPACK_IMPORTED_MODULE_5__ + "\" alt=\"Красивая еда\" loading=\"lazy\"></picture></div>", 1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    class: "index-about-food__slogan"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Категории еды")]),
    _: 1 /* STABLE */
  }), _hoisted_5]), _hoisted_6])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=template&id=81920aea":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=template&id=81920aea ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _Containers_Index_UI_Assets_Images_index_aboutus_food_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/index-aboutus-food-1.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutus-food-1.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_index_aboutus_food_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/index-aboutus-food-2.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutus-food-2.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_index_aboutus_food_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/index-aboutus-food-3.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutus-food-3.png");




const _hoisted_1 = {
  class: "index-about-us"
};
const _hoisted_2 = {
  class: "index-about-us__container"
};
const _hoisted_3 = {
  class: "index-about-us__info"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"index-about-us__heading\"><span class=\"index-about-us__heading--primary\">Мы</span> создаем еду </div><div class=\"index-about-us__description\"> Наша еда готовится из самых свежих продуктов с лучших Российских ферм. Мы ценим наших клиентов и выдаем для них пищу премиального качества. Наши повара профессионалы в кулинарном искусстве, каждый из них подходит с любовью к своей работе </div><ul class=\"index-about-us__strengths\"><li class=\"index-about-us__strengths-item\">Забота о каждом клиенте</li><li class=\"index-about-us__strengths-item\">Профессиональная команда</li><li class=\"index-about-us__strengths-item\">Премиальное качество</li></ul>", 3);
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"index-about-us__food\"><picture class=\"index-about-us__food-main\"><img src=\"" + _Containers_Index_UI_Assets_Images_index_aboutus_food_1_png__WEBPACK_IMPORTED_MODULE_1__ + "\" alt=\"Красивая тарелка с яйцом\" loading=\"lazy\"></picture><picture class=\"index-about-us__food-secondary\"><img src=\"" + _Containers_Index_UI_Assets_Images_index_aboutus_food_2_png__WEBPACK_IMPORTED_MODULE_2__ + "\" alt=\"Красивая тарелка с мясом\" loading=\"lazy\"></picture><picture class=\"index-about-us__food-secondary\"><img src=\"" + _Containers_Index_UI_Assets_Images_index_aboutus_food_3_png__WEBPACK_IMPORTED_MODULE_3__ + "\" alt=\"Красивая тарелка с тостами\" loading=\"lazy\"></picture></div>", 1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    class: "index-about-us__slogan"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("О нас")]),
    _: 1 /* STABLE */
  }), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseButton"], {
    class: "index-about-us__button"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Узнать больше")]),
    _: 1 /* STABLE */
  })]), _hoisted_7])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=template&id=063f2c4b":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=template&id=063f2c4b ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "index-choose-and-pick"
};
const _hoisted_2 = {
  class: "index-choose-and-pick__container"
};
const _hoisted_3 = {
  class: "index-choose-and-pick__info"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "index-choose-and-pick__heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "index-choose-and-pick__heading--primary"
}, "Из"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" нашего меню ")], -1 /* HOISTED */);
const _hoisted_5 = {
  class: "index-choose-and-pick__menu index-menu"
};
const _hoisted_6 = {
  class: "index-menu__categories"
};
const _hoisted_7 = {
  key: 0,
  class: "index-menu__categories-list"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = {
  class: "index-menu__food"
};
const _hoisted_10 = {
  class: "index-menu__selected-category"
};
const _hoisted_11 = {
  key: 0
};
const _hoisted_12 = ["src", "alt"];
const _hoisted_13 = {
  key: 0,
  class: "index-menu__selected-category-food"
};
const _hoisted_14 = {
  class: "index-menu__dish-image"
};
const _hoisted_15 = ["src", "alt"];
const _hoisted_16 = {
  class: "index-menu__dish-info"
};
const _hoisted_17 = ["title"];
const _hoisted_18 = ["title"];
const _hoisted_19 = {
  class: "index-menu__dish-price"
};
const _hoisted_20 = {
  key: 1,
  class: "index-menu__selected-category-food"
};
const _hoisted_21 = {
  class: "index-menu__dish-info"
};
const _hoisted_22 = {
  class: "index-menu__dish-loading-text"
};
const _hoisted_23 = {
  class: "index-menu__dish-loading-text"
};
const _hoisted_24 = {
  class: "index-menu__dish-loading-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_scroll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    class: "index-choose-and-pick__slogan"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Выберите и закажите")]),
    _: 1 /* STABLE */
  }), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [!$setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.categories, category => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: category.id,
      onClick: $event => $setup.changeSelectedCategory(category),
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["index-menu__categories-item", {
        'index-menu__categories-item--primary': $setup.selectedCategory === category
      }])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 11 /* TEXT, CLASS, PROPS */, _hoisted_8);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [!$setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("picture", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.selectedCategory.image,
    alt: $setup.selectedCategory.name
  }, null, 8 /* PROPS */, _hoisted_12)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["BaseLoading"], {
    key: 1
  }))]), !$setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.selectedCategory.dishes, dish => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "index-menu__dish",
      key: dish.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("picture", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: dish.image,
      alt: dish.name
    }, null, 8 /* PROPS */, _hoisted_15)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "index-menu__dish-name",
      title: dish.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dish.name), 9 /* TEXT, PROPS */, _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "index-menu__dish-description",
      title: dish.description
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dish.description), 9 /* TEXT, PROPS */, _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dish.price) + " руб.", 1 /* TEXT */)])]);
  }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(4, n => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "index-menu__dish",
      key: n
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseLoading"], {
      class: "index-menu__dish-image"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseLoading"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseLoading"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseLoading"])])])]);
  }), 64 /* STABLE_FRAGMENT */))]))])])])), [[_directive_scroll, $setup.getMenu]])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=template&id=4a6b24aa":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=template&id=4a6b24aa ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _Containers_Index_UI_Assets_Images_index_clients_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/index-clients.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/index-clients.png");


const _hoisted_1 = {
  class: "index-clients"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"index-clients__background\"><picture><img src=\"" + _Containers_Index_UI_Assets_Images_index_clients_png__WEBPACK_IMPORTED_MODULE_1__ + "\" alt=\"Очень вкусная рыба\"></picture></div><div class=\"index-clients__container\"><div class=\"index-clients__statistic-item\"><picture class=\"index-clients__statistic-icon\"><svg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M113.789 81.4836C110.895 83.506 107.57 84.8207 104.079 85.3223C100.588 85.824 97.0282 85.4987 93.685 84.3725C93.3821 84.2642 93.0577 84.2308 92.7392 84.2752C92.4207 84.3196 92.1176 84.4403 91.8555 84.6272L82.8582 91.0289L85.1735 94.3009L93.3371 88.4831C97.1526 89.6014 101.169 89.8515 105.093 89.2154C109.017 88.5793 112.75 87.0728 116.02 84.8058C117.199 84.007 118.316 83.1205 119.362 82.1537L116.65 79.2046C115.755 80.0358 114.799 80.7977 113.789 81.4836Z\" fill=\"#CA006D\"></path><path d=\"M93.6548 51.5438C90.7931 53.3784 88.5006 55.9806 87.0373 59.0554C85.574 62.1302 84.9982 65.5548 85.3752 68.9412L60.0286 85.2432L34.678 68.9512C35.0632 65.5638 34.4901 62.1359 33.0245 59.0599C31.5589 55.984 29.2598 53.3841 26.3904 51.5579C22.5815 48.9237 17.9498 47.7648 13.3542 48.2959C11.1864 48.5088 9.09226 49.1993 7.22121 50.3181C5.35016 51.437 3.74837 52.9565 2.53023 54.7682C1.31208 56.5799 0.507622 58.6391 0.174288 60.7989C-0.159046 62.9586 -0.0130305 65.1655 0.601907 67.262C1.83378 71.7341 4.64061 75.6061 8.5016 78.1594C11.2661 80.1479 14.5333 81.3142 17.9283 81.5246C21.3232 81.735 24.7086 80.981 27.696 79.3491L47.3723 93.3661L28.6477 105.413C27.7627 105.977 26.9995 106.714 26.4034 107.58C25.8073 108.445 25.3904 109.422 25.1775 110.452C24.9646 111.483 24.9599 112.545 25.1638 113.577C25.3677 114.609 25.7759 115.59 26.3644 116.461C26.9506 117.33 27.7039 118.073 28.5802 118.645C29.4565 119.218 30.438 119.61 31.467 119.796C32.4961 119.983 33.5521 119.962 34.5728 119.734C35.5936 119.505 36.5586 119.075 37.4112 118.467L60.0286 102.374L82.646 118.479C83.4995 119.106 84.4703 119.553 85.5002 119.794C86.5301 120.035 87.5978 120.065 88.6396 119.882C89.6813 119.699 90.6755 119.307 91.5626 118.73C92.4497 118.152 93.2115 117.401 93.8024 116.521C94.3932 115.641 94.8009 114.65 95.0011 113.608C95.2012 112.566 95.1897 111.494 94.9672 110.457C94.7447 109.42 94.3158 108.438 93.7062 107.571C93.0965 106.704 92.3188 105.969 91.4194 105.411L72.6729 93.3741L92.3632 79.3511C95.3502 80.9836 98.7354 81.7383 102.13 81.5286C105.525 81.3188 108.793 80.1533 111.558 78.1655C119.775 72.6004 122.458 62.1002 117.534 54.7577C112.609 47.4152 101.89 45.9788 93.6548 51.5438ZM35.0959 115.203C34.2416 115.78 33.1963 115.999 32.1833 115.814C31.1702 115.628 30.2695 115.053 29.6734 114.21C29.3849 113.783 29.1848 113.302 29.0849 112.796C28.9851 112.29 28.9875 111.769 29.0921 111.264C29.1967 110.758 29.4014 110.279 29.6939 109.855C29.9864 109.431 30.3609 109.07 30.7951 108.793L50.8872 95.8657L56.5636 99.9061L35.0959 115.203ZM90.9596 111.265C91.1162 112.026 91.0409 112.817 90.7435 113.535C90.446 114.252 89.9402 114.864 89.2918 115.289C88.6434 115.714 87.8825 115.934 87.108 115.919C86.3335 115.905 85.5814 115.656 84.9493 115.207L28.8877 75.2846C28.5458 75.0414 28.1365 74.9121 27.7174 74.915C27.2984 74.9179 26.8908 75.0528 26.5523 75.3007C24.1837 76.8517 21.3988 77.6383 18.5716 77.5547C15.7444 77.4711 13.0105 76.5215 10.737 74.8332C7.67804 72.82 5.45033 69.7623 4.46678 66.2269C3.99615 64.6825 3.8756 63.0521 4.11396 61.4549C4.35232 59.8577 4.94355 58.3343 5.8444 56.9959C6.74525 55.6576 7.93291 54.5383 9.32049 53.7199C10.7081 52.9016 12.2605 52.4048 13.864 52.266C17.4991 51.8567 21.1588 52.7832 24.165 54.874C26.575 56.3582 28.4746 58.5465 29.609 61.1454C30.7435 63.7442 31.0583 66.6291 30.5112 69.4126C30.4084 69.8207 30.4361 70.2508 30.5904 70.6421C30.7447 71.0335 31.0178 71.3663 31.3709 71.5933L89.2621 108.791C89.6963 109.068 90.0704 109.43 90.3621 109.855C90.6538 110.28 90.857 110.759 90.9596 111.265ZM109.314 74.8292C107.04 76.517 104.305 77.4661 101.478 77.5489C98.6504 77.6318 95.8653 76.8444 93.4968 75.2927C93.1583 75.0448 92.7508 74.9099 92.3317 74.907C91.9127 74.9041 91.5033 75.0334 91.1615 75.2766L69.042 91.0329L63.7395 87.6225L88.6802 71.5732C89.0326 71.3464 89.3052 71.0143 89.4594 70.6238C89.6137 70.2333 89.6418 69.804 89.54 69.3966C89.0038 66.6125 89.3245 63.7307 90.4594 61.1339C91.5944 58.5371 93.4899 56.3482 95.8941 54.858C102.292 50.5307 110.518 51.4857 114.215 56.9805C117.912 62.4754 115.71 70.502 109.314 74.8292Z\" fill=\"#CA006D\"></path><path d=\"M21.8938 3.67709L19.6805 0.334839C14.8507 3.5459 11.2286 8.28405 9.38943 13.7968C7.5503 19.3095 7.59957 25.2807 9.52942 30.7621L13.2983 29.422C11.6665 24.7832 11.6262 19.7303 13.1839 15.0658C14.7415 10.4014 17.8079 6.39291 21.8958 3.67709H21.8938Z\" fill=\"#CA006D\"></path><path d=\"M17.5412 36.6482C16.5785 35.5524 15.7253 34.3644 14.994 33.1013L11.533 35.1075C12.3965 36.6008 13.4044 38.0051 14.5421 39.3003L17.5412 36.6482Z\" fill=\"#CA006D\"></path><path d=\"M81.9825 68.6102L87.6748 40.0546C92.3028 39.6506 96.5957 37.4664 99.6554 33.9591C102.715 30.4518 104.304 25.8932 104.091 21.237C103.877 16.5808 101.877 12.188 98.5093 8.97752C95.1414 5.76709 90.6667 3.98785 86.0213 4.01211C81.9783 3.99774 78.0513 5.36706 74.8886 7.89401C73.2412 5.46198 71.0259 3.47121 68.4359 2.09527C65.8458 0.719328 62.9596 0 60.0289 0C57.0982 0 54.212 0.719328 51.6219 2.09527C49.0319 3.47121 46.8166 5.46198 45.1692 7.89401C42.0065 5.36706 38.0794 3.99774 34.0365 4.01211C29.407 4.01168 24.9554 5.80153 21.6073 9.00953C18.2591 12.2175 16.272 16.5969 16.0591 21.2371C15.8462 25.8772 17.4238 30.4213 20.464 33.9244C23.5042 37.4275 27.773 39.6202 32.383 40.0466L38.0753 68.6102L41.9942 67.8238L40.8745 62.1905H79.1833L78.0636 67.8077L81.9825 68.6102ZM72.3313 58.1782L74.0048 46.4262L70.046 45.8564L68.2925 58.1782H62.0283V36.1105H58.0295V58.1782H51.7653L50.0118 45.8564L46.053 46.4262L47.7265 58.1782H40.0747L35.9959 37.7155C35.9037 37.2623 35.6583 36.8551 35.3013 36.5626C34.9442 36.2701 34.4974 36.1104 34.0365 36.1105C30.3245 36.1105 26.7646 34.631 24.1399 31.9974C21.5151 29.3638 20.0406 25.7919 20.0406 22.0675C20.0406 18.343 21.5151 14.7711 24.1399 12.1375C26.7646 9.50395 30.3245 8.02441 34.0365 8.02441C35.9419 8.01951 37.8278 8.40892 39.5765 9.16832C41.3251 9.92771 42.8989 11.0408 44.1995 12.4379C44.4217 12.6737 44.6977 12.8519 45.0036 12.9572C45.3096 13.0625 45.6364 13.0917 45.9561 13.0424C46.2758 12.9931 46.5788 12.8667 46.8391 12.6741C47.0994 12.4814 47.3092 12.2283 47.4506 11.9364C48.5928 9.56299 50.3788 7.56082 52.6037 6.15975C54.8286 4.75868 57.4021 4.01548 60.0289 4.01548C62.6557 4.01548 65.2292 4.75868 67.4541 6.15975C69.679 7.56082 71.465 9.56299 72.6072 11.9364C72.7486 12.2283 72.9584 12.4814 73.2187 12.6741C73.479 12.8667 73.782 12.9931 74.1017 13.0424C74.4214 13.0917 74.7482 13.0625 75.0542 12.9572C75.3601 12.8519 75.6361 12.6737 75.8583 12.4379C77.1589 11.0408 78.7327 9.92771 80.4813 9.16832C82.23 8.40892 84.1159 8.01951 86.0213 8.02441C89.7333 8.02441 93.2932 9.50395 95.9179 12.1375C98.5427 14.7711 100.017 18.343 100.017 22.0675C100.017 25.7919 98.5427 29.3638 95.9179 31.9974C93.2932 34.631 89.7333 36.1105 86.0213 36.1105C85.5604 36.1104 85.1136 36.2701 84.7565 36.5626C84.3995 36.8551 84.1541 37.2623 84.0619 37.7155L79.9831 58.1782H72.3313Z\" fill=\"#CA006D\"></path></svg></picture><div class=\"index-clients__statistic-name\"> Профессиональных поваров </div><div class=\"index-clients__statistic-description\"> 420 </div></div><div class=\"index-clients__statistic-item\"><picture class=\"index-clients__statistic-icon\"><svg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.001 65.9528C21.1065 65.9528 22.0026 65.0574 22.0026 63.9528C22.0026 62.8482 21.1065 61.9528 20.001 61.9528C18.8956 61.9528 17.9995 62.8482 17.9995 63.9528C17.9995 65.0574 18.8956 65.9528 20.001 65.9528Z\" fill=\"#CA006D\"></path><path d=\"M28.001 59.957C29.1065 59.957 30.0026 59.0616 30.0026 57.957C30.0026 56.8524 29.1065 55.957 28.001 55.957C26.8956 55.957 25.9995 56.8524 25.9995 57.957C25.9995 59.0616 26.8956 59.957 28.001 59.957Z\" fill=\"#CA006D\"></path><path d=\"M48.0015 57.9586C49.107 57.9586 50.0031 57.0632 50.0031 55.9586C50.0031 54.854 49.107 53.9586 48.0015 53.9586C46.8961 53.9586 46 54.854 46 55.9586C46 57.0632 46.8961 57.9586 48.0015 57.9586Z\" fill=\"#CA006D\"></path><path d=\"M14.0025 75.9449C15.1079 75.9449 16.004 75.0495 16.004 73.9449C16.004 72.8403 15.1079 71.9449 14.0025 71.9449C12.8971 71.9449 12.001 72.8403 12.001 73.9449C12.001 75.0495 12.8971 75.9449 14.0025 75.9449Z\" fill=\"#CA006D\"></path><path d=\"M24.0018 73.9465C25.1072 73.9465 26.0033 73.0511 26.0033 71.9465C26.0033 70.8419 25.1072 69.9465 24.0018 69.9465C22.8964 69.9465 22.0002 70.8419 22.0002 71.9465C22.0002 73.0511 22.8964 73.9465 24.0018 73.9465Z\" fill=\"#CA006D\"></path><path d=\"M32.0013 67.9509C33.1067 67.9509 34.0028 67.0555 34.0028 65.951C34.0028 64.8464 33.1067 63.951 32.0013 63.951C30.8959 63.951 29.9998 64.8464 29.9998 65.951C29.9998 67.0555 30.8959 67.9509 32.0013 67.9509Z\" fill=\"#CA006D\"></path><path d=\"M114 21.9831H86V13.9893C86 12.8856 86.8954 11.9908 88 11.9908H104C107.314 11.9908 110 9.30657 110 5.9954C110 2.68423 107.314 0 104 0H86C79.3753 0.00660969 74.0066 5.37121 74 11.9908V21.9831H46C42.6863 21.9831 40 24.6674 40 27.9785V29.977C40.0085 32.5524 41.6659 34.8333 44.114 35.6387L44.86 46.0787C43.912 46.0227 42.966 45.9648 42 45.9648C39.1032 45.9709 36.2131 46.2425 33.366 46.7761L28.514 40.481C33.16 35.8845 33.418 30.4666 31.028 27.369C28.638 24.2714 23.312 23.1443 17.698 26.4537L16.4 24.761C15.9713 24.1749 15.2582 23.8671 14.5373 23.9571C13.8163 24.0471 13.2009 24.5207 12.9297 25.1943C12.6586 25.8678 12.7743 26.6353 13.232 27.1991L14.536 28.8938C9.874 33.4903 9.646 38.9202 12.022 42.0058C14.44 45.1414 19.786 46.2026 25.352 42.9211L29.1 47.7834C14.484 51.9602 4 62.9917 4 75.9418C3.99526 76.8214 4.04603 77.7005 4.152 78.5738C4.39272 80.824 5.88099 82.7471 8 83.5459V87.9326C3.97646 87.9276 0.577869 90.915 0.0699343 94.9033C-0.438 98.8916 2.10345 102.634 6 103.637V107.917C6.00077 110.914 7.13112 113.801 9.166 116.003H2C0.89543 116.003 0 116.898 0 118.002C0 119.105 0.89543 120 2 120H118C119.105 120 120 119.105 120 118.002C120 116.898 119.105 116.003 118 116.003H107.514C109.349 114.019 110.456 111.472 110.656 108.779L115.886 35.6347C118.333 34.8303 119.99 32.5512 120 29.977V27.9785C120 24.6674 117.314 21.9831 114 21.9831ZM15.184 39.5697C13.584 37.4873 15.052 34.2018 17 32.0994L18.108 33.5363C18.5367 34.1225 19.2498 34.4302 19.9707 34.3402C20.6917 34.2502 21.3071 33.7766 21.5783 33.103C21.8494 32.4295 21.7337 31.662 21.276 31.0982L20.168 29.6613C22.586 28.3762 26.216 27.6808 27.86 29.8131C29.848 32.3912 27.196 36.6299 24.574 38.6484C21.952 40.6668 17.174 42.1477 15.184 39.5697ZM78 11.9908C78 7.57591 81.5817 3.99694 86 3.99694H104C105.105 3.99694 106 4.89168 106 5.9954C106 7.09913 105.105 7.99387 104 7.99387H88C84.6863 7.99387 82 10.6781 82 13.9893V21.9831H78V11.9908ZM111.136 45.9648H48.862L48.148 35.9724H111.852L111.136 45.9648ZM107.42 97.9249H83.716C83.8961 97.2737 83.9916 96.602 84 95.9265C84 91.5116 80.4183 87.9326 76 87.9326V83.5359C78.112 82.7464 79.5988 80.8356 79.844 78.5957C79.952 77.7153 80.0041 76.8288 80 75.9418C80 75.1864 79.926 74.4449 79.856 73.7035C83.8008 72.7677 86.4184 69.0274 85.9442 65.0039C85.47 60.9804 82.0544 57.95 78 57.9556C76.4297 57.9644 74.8978 58.4411 73.6 59.3245C70.0997 55.3061 65.7551 52.1091 60.876 49.9617H110.852L107.42 97.9249ZM76 91.9295C78.2091 91.9295 80 93.719 80 95.9265C80 98.1339 78.2091 99.9234 76 99.9234H38.828L46.828 91.9295H76ZM78 107.917V103.637C79.1975 103.324 80.3055 102.737 81.236 101.922H107.134L106.666 108.491C106.346 112.666 102.87 115.895 98.68 115.911H74.92C76.9017 113.719 77.9992 110.871 78 107.917ZM75.946 62.552C76.5622 62.1668 77.2731 61.9593 78 61.9525C79.9758 61.9437 81.6585 63.3853 81.9516 65.3377C82.2447 67.2901 81.0594 69.1616 79.168 69.7325C78.467 67.1888 77.3804 64.7672 75.946 62.552ZM31.716 51.1828L36.416 57.2801C37.0923 58.1477 38.3431 58.3062 39.2148 57.6348C40.0865 56.9634 40.2515 55.7144 39.584 54.84L36.142 50.3754C38.0833 50.108 40.0403 49.9698 42 49.9617C60.748 49.9617 76 61.6168 76 75.9418C76.0024 76.6765 75.9597 77.4106 75.872 78.1401C75.7689 79.1651 74.903 79.9439 73.872 79.9387H10.12C9.08146 79.9369 8.21497 79.1455 8.12 78.1121C8.03576 77.3918 7.99568 76.667 8 75.9418C8 64.3507 17.982 54.5222 31.716 51.1828ZM12 83.9356H72V87.9326H46C45.4696 87.9327 44.961 88.1433 44.586 88.5181L30.096 102.995L17.496 88.6061C17.1167 88.1781 16.5721 87.9329 16 87.9326H12V83.9356ZM4 95.9265C4 93.719 5.79086 91.9295 8 91.9295H15.092L22.092 99.9234H8C5.79086 99.9234 4 98.1339 4 95.9265ZM18 115.911C13.5817 115.911 10 112.332 10 107.917V103.92H25.6L27.096 105.629C27.8264 106.46 28.8679 106.952 29.974 106.99H30.104C31.1652 106.989 32.1828 106.568 32.934 105.819L34.828 103.92H74V107.917C74 112.332 70.4183 115.911 66 115.911H18ZM116 29.977C116 31.0807 115.105 31.9755 114 31.9755H46C44.8954 31.9755 44 31.0807 44 29.977V27.9785C44 26.8748 44.8954 25.9801 46 25.9801H114C115.105 25.9801 116 26.8748 116 27.9785V29.977Z\" fill=\"#CA006D\"></path><path d=\"M98.0003 53.9586C93.582 53.9586 90.0002 57.5376 90.0002 61.9525C90.0002 66.3674 93.582 69.9464 98.0003 69.9464C102.419 69.9464 106 66.3674 106 61.9525C106 57.5376 102.419 53.9586 98.0003 53.9586ZM98.0003 65.9494C95.7911 65.9494 94.0002 64.1599 94.0002 61.9525C94.0002 59.745 95.7911 57.9556 98.0003 57.9556C100.209 57.9556 102 59.745 102 61.9525C102 64.1599 100.209 65.9494 98.0003 65.9494Z\" fill=\"#CA006D\"></path><path d=\"M91.9998 79.9386C88.686 79.9386 85.9998 82.6229 85.9998 85.934C85.9998 89.2452 88.686 91.9294 91.9998 91.9294C95.3135 91.9294 97.9998 89.2452 97.9998 85.934C97.9998 82.6229 95.3135 79.9386 91.9998 79.9386ZM91.9998 87.9325C90.8952 87.9325 89.9998 87.0378 89.9998 85.934C89.9998 84.8303 90.8952 83.9356 91.9998 83.9356C93.1043 83.9356 93.9998 84.8303 93.9998 85.934C93.9998 87.0378 93.1043 87.9325 91.9998 87.9325Z\" fill=\"#CA006D\"></path></svg></picture><div class=\"index-clients__statistic-name\"> Блюд </div><div class=\"index-clients__statistic-description\"> 320 </div></div><div class=\"index-clients__statistic-item\"><picture class=\"index-clients__statistic-icon\"><svg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M89.2009 47.9741L96.2514 47.5248C96.2633 47.5238 96.2761 47.5229 96.289 47.522C101.313 47.0957 105.823 44.4487 108.663 40.2577L114.237 32.0341C119.088 24.8747 120.968 16.2275 119.528 7.68623C119.245 6.00872 118.392 4.46288 117.126 3.33502C115.86 2.20625 114.232 1.53966 112.542 1.45864C103.935 1.04433 95.6261 3.95833 89.1405 9.66021L81.6899 16.211C77.8932 19.5485 75.8205 24.3683 76.0017 29.4368C76.0026 29.4487 76.0026 29.4616 76.0036 29.4745L76.4055 36.5666C76.562 39.3315 75.554 42.0595 73.6452 44.0464L15.4376 104.181C13.8793 105.815 13.0746 108.057 13.1725 110.494C13.2806 113.177 14.5046 115.812 16.4474 117.544C18.2025 119.108 20.6149 119.999 23.0264 119.999C23.2846 119.999 23.5428 119.989 23.8 119.968C26.2179 119.774 28.3356 118.702 29.7693 116.94L82.144 51.6311C83.8808 49.4822 86.4534 48.149 89.2009 47.9741ZM79.348 49.3551L26.9778 114.658C26.1777 115.642 24.9472 116.247 23.5135 116.362C21.8078 116.5 20.0592 115.929 18.8342 114.837C17.6092 113.744 16.8365 112.067 16.7678 110.348C16.7092 108.903 17.1588 107.602 18.0249 106.694L76.2279 46.5645C78.8371 43.8493 80.2104 40.1307 79.998 36.3613L79.5961 29.2876C79.4597 25.3203 81.0848 21.5482 84.0575 18.9344L91.5081 12.3836C97.2906 7.30046 104.701 4.70502 112.371 5.07146C113.245 5.11381 114.085 5.45815 114.74 6.04187C115.394 6.62467 115.835 7.42384 115.981 8.29021C117.265 15.9053 115.589 23.6134 111.264 29.9956L105.691 38.2202C103.467 41.5016 99.9374 43.5759 96.0042 43.9156L88.973 44.3631C85.2266 44.6025 81.7201 46.4199 79.348 49.3551Z\" fill=\"#CA006D\"></path><path d=\"M116.677 103.724L77.6489 67.9762C76.9147 67.3031 75.7776 67.3565 75.1074 68.0949C74.4391 68.8333 74.4922 69.9778 75.2264 70.6508L114.244 106.39C115.173 107.253 115.699 108.524 115.728 109.97C115.761 111.69 115.09 113.411 113.932 114.575C112.775 115.739 111.067 116.416 109.353 116.381C107.915 116.352 106.651 115.823 105.802 114.899L71.0251 76.5027C70.3558 75.7634 69.2178 75.7109 68.4836 76.383C67.7493 77.0561 67.6962 78.2005 68.3655 78.9389L103.151 117.345C104.68 119.007 106.857 119.95 109.282 119.998C109.345 119.999 109.408 120 109.471 120C112.077 120 114.684 118.937 116.476 117.134C118.312 115.287 119.377 112.583 119.324 109.899C119.276 107.46 118.34 105.271 116.677 103.724Z\" fill=\"#CA006D\"></path><path d=\"M21.7052 47.6314C24.6825 50.3898 28.5506 51.9624 32.5972 52.06C32.6101 52.0609 32.6229 52.0609 32.6348 52.0609L39.699 52.083C42.4529 52.0913 45.0997 53.267 46.9573 55.3026L50.0692 58.7378C50.4244 59.13 50.9105 59.3288 51.3994 59.3288C51.8316 59.3288 52.2655 59.1732 52.6098 58.8574C53.3449 58.1844 53.398 57.04 52.7288 56.3016L49.6123 52.8619C47.0745 50.0795 43.4655 48.4775 39.7109 48.4646L32.6659 48.4426C29.5357 48.3624 26.5428 47.1573 24.2238 45.0461L3.75169 20.5722C3.54295 20.3218 3.55852 19.959 3.78832 19.7279C3.94579 19.5687 4.13072 19.5456 4.22685 19.5456C4.32298 19.5456 4.50792 19.5687 4.66631 19.7279L23.301 38.4687C25.143 40.3211 28.1404 40.3211 29.9825 38.4678L32.1724 36.2664V36.2654L36.0607 32.3553C36.0607 32.3553 36.0616 32.3553 36.0616 32.3543L36.0625 32.3534L38.2515 30.152C40.0936 28.2996 40.0936 25.2853 38.2515 23.4328L19.6169 4.693C19.3752 4.44994 19.3752 4.05312 19.6169 3.81006C19.8467 3.57896 20.2074 3.56331 20.4564 3.77323L44.793 24.3618C46.8932 26.693 48.0916 29.7037 48.1713 32.8506L48.1923 39.9363C48.2052 43.7111 49.7991 47.3405 52.5695 49.8982L55.9038 52.9521C56.639 53.6251 57.7761 53.5717 58.4453 52.8333C59.1137 52.094 59.0606 50.9505 58.3263 50.2775L54.9975 47.2282C52.9677 45.3555 51.7995 42.6928 51.7904 39.9243L51.7684 32.8202C51.7684 32.8073 51.7684 32.7944 51.7675 32.7815C51.6704 28.7121 50.1067 24.8221 47.3638 21.828C47.3125 21.7719 47.2576 21.7185 47.199 21.6688L22.7718 1.0047C21.0836 -0.424216 18.6336 -0.317415 17.0735 1.25145C15.4283 2.90594 15.4283 5.59712 17.0735 7.25069L35.7082 25.9914C36.1477 26.4334 36.1477 27.1524 35.7082 27.5944L34.7899 28.5169L14.0212 7.63186C13.319 6.92477 12.18 6.92477 11.4778 7.63186C10.7756 8.33803 10.7756 9.48337 11.4778 10.1895L32.2466 31.0755L30.9008 32.428L10.132 11.543C9.4298 10.8368 8.29088 10.8368 7.58867 11.543C6.88555 12.2491 6.88555 13.3945 7.58867 14.1007L28.3565 34.9866L27.4391 35.9101C26.9997 36.352 26.2847 36.352 25.8452 35.9101L7.20964 17.1703C6.41313 16.3692 5.35387 15.9273 4.22685 15.9273C3.09984 15.9273 2.04057 16.3692 1.24406 17.1703C-0.315996 18.7391 -0.421282 21.2029 0.998702 22.9016L21.5477 47.4657C21.5963 47.5246 21.6494 47.5799 21.7052 47.6314Z\" fill=\"#CA006D\"></path></svg></picture><div class=\"index-clients__statistic-name\"> Годы работы </div><div class=\"index-clients__statistic-description\"> 30+ </div></div><div class=\"index-clients__statistic-item\"><picture class=\"index-clients__statistic-icon\"><svg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M119.303 0.676178C118.663 0.0443041 117.716 -0.166633 116.869 0.136648L19.5206 34.8468C16.1386 32.7787 11.8488 32.2945 7.91437 33.9236C1.38351 36.629 -1.72923 44.1433 0.975926 50.6746C7.35539 66.0749 16.5661 79.8601 28.3531 91.647C40.14 103.434 53.9251 112.645 69.3256 119.024C70.925 119.686 72.5827 120 74.2149 120C79.2481 120 84.0339 117.017 86.0764 112.085C87.4508 108.767 87.321 105.196 86.0064 102.129L119.874 3.10266C120.165 2.25141 119.943 1.30829 119.303 0.676178ZM34.2605 34.5677L44.5777 30.8894C45.789 32.1799 46.3794 33.9564 46.1429 35.7531C45.9343 37.3352 45.1224 38.7416 43.8565 39.7131C42.5907 40.6846 41.0232 41.1044 39.44 40.8965C37.8582 40.6881 36.4519 39.8765 35.4804 38.6104C34.5854 37.4439 34.1595 36.0208 34.2605 34.5677ZM81.7457 110.291C80.0296 114.435 75.2619 116.409 71.1195 114.693C41.1101 102.263 17.7375 78.8898 5.30695 48.8805C4.47562 46.8735 4.47562 44.6631 5.30695 42.6559C6.13828 40.649 7.70133 39.0859 9.70828 38.2546C11.7152 37.4233 13.9259 37.4233 15.9328 38.2546C17.9398 39.0859 19.5028 40.649 20.3342 42.6559C25.6547 55.5013 33.3375 66.9992 43.1691 76.8308C53.0007 86.6623 64.4987 94.3449 77.3441 99.6657C81.4874 101.382 83.462 106.148 81.7457 110.291ZM102.568 39.2177C102.356 39.2125 102.144 39.2003 101.932 39.1727C100.35 38.9643 98.9439 38.1524 97.9726 36.8866C97.0011 35.6207 96.5809 34.052 96.789 32.4703C97.2191 29.2045 100.225 26.8978 103.492 27.3271C104.5 27.4598 105.446 27.8507 106.253 28.4453L102.568 39.2177ZM107.811 23.8882C106.669 23.2664 105.414 22.8522 104.104 22.6797C98.2745 21.9103 92.909 26.0299 92.1416 31.8585C91.7699 34.6818 92.5199 37.4809 94.2536 39.7403C95.9235 41.9165 98.3141 43.3382 101.011 43.7718L96.3524 57.3934L90.995 53.2825C89.9682 52.495 88.4966 52.6881 87.7089 53.7151C86.9209 54.7422 87.1147 56.2133 88.1415 57.0013L94.7521 62.0736L82.6363 97.5005C81.62 96.6169 80.4498 95.8777 79.1389 95.3347C54.2998 85.0458 34.9545 65.7006 24.6661 40.862C24.3085 39.9981 23.8641 39.1961 23.3515 38.4574L29.6278 36.2195C29.847 38.1105 30.5728 39.9142 31.7618 41.4637C33.4953 43.723 36.0052 45.1719 38.8285 45.5434C39.3015 45.6058 39.773 45.6367 40.2422 45.6367C42.5738 45.6367 44.8294 44.875 46.7103 43.4319C48.9699 41.698 50.4186 39.1886 50.7905 36.3649C51.124 33.8301 50.5325 31.3195 49.2043 29.2396L78.3388 18.8517L79.4429 21.5175C79.817 22.42 80.6896 22.965 81.6092 22.965C81.9081 22.965 82.2118 22.9073 82.5053 22.7859C83.701 22.2907 84.2689 20.9193 83.7737 19.7236L82.7598 17.2755L113.866 6.18445L107.811 23.8882Z\" fill=\"#CA006D\"></path><path d=\"M25.6822 63.1682C25.6752 63.1571 25.6556 63.1272 25.6481 63.1164C24.9272 62.0349 23.4681 61.7446 22.3862 62.4648C21.3062 63.1839 21.0133 64.6436 21.7282 65.7255C22.179 66.4182 22.9334 66.7961 23.704 66.7961C24.1401 66.7961 24.5811 66.6751 24.9747 66.422C26.0686 65.7187 26.3853 64.2619 25.6822 63.1682Z\" fill=\"#CA006D\"></path><path d=\"M22.1018 57.3187C19.8073 53.2957 17.7448 49.0852 15.9717 44.8047C15.4742 43.6029 14.0961 43.0331 12.8956 43.5307C11.6941 44.0282 11.1239 45.4056 11.6216 46.6069C13.4698 51.0691 15.6199 55.4581 18.0116 59.6517C18.446 60.4131 19.2409 60.8403 20.0588 60.8403C20.4543 60.8403 20.8553 60.7404 21.2231 60.5306C22.3525 59.8862 22.7462 58.4482 22.1018 57.3187Z\" fill=\"#CA006D\"></path><path d=\"M73.9331 30.1358C73.4664 30.0741 72.9925 30.043 72.5244 30.043C67.1758 30.043 62.6152 34.047 61.9164 39.3566C61.1456 45.212 65.2816 50.6031 71.1367 51.374C71.6034 51.4357 72.0773 51.4668 72.5454 51.4668C77.8938 51.4668 82.4544 47.4628 83.1534 42.1527C83.924 36.2975 79.7879 30.9067 73.9331 30.1358ZM78.485 41.5382C78.0932 44.5137 75.5398 46.7574 72.5454 46.7574C72.2822 46.7574 72.0149 46.7399 71.7515 46.7051C68.4705 46.273 66.1533 43.2523 66.5851 39.9712C66.9768 36.9959 69.53 34.7524 72.5244 34.7524C72.7877 34.7524 73.0549 34.7699 73.3183 34.8047C76.5991 35.237 78.9168 38.2575 78.485 41.5382Z\" fill=\"#CA006D\"></path><path d=\"M73.3202 59.4239C72.8533 59.3622 72.3796 59.3311 71.9115 59.3311C66.5629 59.3311 62.0023 63.3351 61.3035 68.6449C60.9299 71.4815 61.6833 74.2934 63.4249 76.5635C65.1662 78.8333 67.6874 80.2889 70.5238 80.6626C70.9902 80.724 71.4639 80.7549 71.9318 80.7549C77.2804 80.7549 81.8412 76.7509 82.5403 71.4408C83.3114 65.5858 79.175 60.1952 73.3202 59.4239ZM77.8721 70.8265C77.4803 73.802 74.9267 76.0457 71.9322 76.0457C71.6693 76.0457 71.402 76.028 71.1388 75.9934C69.5495 75.7839 68.1369 74.9682 67.1609 73.6965C66.185 72.4248 65.7629 70.8491 65.9722 69.2595C66.364 66.2842 68.9174 64.0405 71.9115 64.0405C72.1748 64.0405 72.442 64.0579 72.7055 64.0928C75.9859 64.5249 78.3037 67.5456 77.8721 70.8265Z\" fill=\"#CA006D\"></path><path d=\"M57.7914 49.6693L50.5547 48.7164C49.2662 48.5452 48.0828 49.4541 47.913 50.7432C47.7431 52.0326 48.6507 53.2153 49.9398 53.3851L57.1764 54.338C57.2807 54.3519 57.3843 54.3584 57.4867 54.3584C58.6501 54.3584 59.662 53.496 59.8179 52.3111C59.9881 51.022 59.0807 49.839 57.7914 49.6693Z\" fill=\"#CA006D\"></path><path d=\"M54.1218 67.0455L53.4828 62.1893C53.313 60.9 52.1306 59.992 50.8413 60.1623C49.552 60.332 48.6446 61.5145 48.8144 62.8039L49.4536 67.66C49.6095 68.8451 50.6212 69.7076 51.7847 69.7076C51.8872 69.7076 51.9908 69.701 52.0948 69.6871C53.3841 69.5173 54.2915 68.3349 54.1218 67.0455Z\" fill=\"#CA006D\"></path></svg></picture><div class=\"index-clients__statistic-name\"> Счастливых клиентов </div><div class=\"index-clients__statistic-description\"> ∞ </div></div></div>", 2);
const _hoisted_4 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=template&id=64e270f6":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=template&id=64e270f6 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _Containers_Index_UI_Assets_Images_index_hero_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/index-hero.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/index-hero.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_index_hero_food_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/index-hero-food.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/index-hero-food.png");



const _hoisted_1 = {
  class: "index-hero"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "index-hero__background"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("picture", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  class: "index-hero__background-image",
  src: _Containers_Index_UI_Assets_Images_index_hero_png__WEBPACK_IMPORTED_MODULE_1__
})])], -1 /* HOISTED */);
const _hoisted_3 = {
  class: "index-hero__container"
};
const _hoisted_4 = {
  class: "index-hero__info"
};
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "index-hero__slogan"
}, "Это вкусно и восхитительно!", -1 /* HOISTED */);
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "index-hero__heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "index-hero__heading--primary"
}, "Ис"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("кусство приготовления пищи")])], -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "index-hero__description"
}, "Лучшие блюда премиального качества от профессионалов", -1 /* HOISTED */);
const _hoisted_8 = {
  class: "index-hero__button"
};
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "index-hero__food"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("picture", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _Containers_Index_UI_Assets_Images_index_hero_food_png__WEBPACK_IMPORTED_MODULE_2__,
  alt: "Ну очень красивое блюдо"
})])], -1 /* HOISTED */);

function render(_ctx, _cache) {
  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RouterLink");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, _hoisted_6, _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {
    to: {
      name: 'menu'
    },
    class: "button button--lg"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Посмотреть меню")]),
    _: 1 /* STABLE */
  })])]), _hoisted_9])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=template&id=50e09dcb":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=template&id=50e09dcb ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _Containers_Index_UI_Assets_Images_why_choose_us_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/why-choose-us-1.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-1.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_why_choose_us_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/why-choose-us-2.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-2.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_why_choose_us_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/why-choose-us-3.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-3.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_why_choose_us_4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/why-choose-us-4.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-4.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_why_choose_us_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/why-choose-us-5.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-5.png");
/* harmony import */ var _Containers_Index_UI_Assets_Images_why_choose_us_6_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Containers/Index/UI/Assets/Images/why-choose-us-6.png */ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-6.png");







const _hoisted_1 = {
  class: "index-why-choose-us"
};
const _hoisted_2 = {
  class: "index-why-choose-us__container"
};
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"index-why-choose-us__food\"><picture class=\"index-why-choose-us__food-item index-why-choose-us__food-item--first\"><img src=\"" + _Containers_Index_UI_Assets_Images_why_choose_us_1_png__WEBPACK_IMPORTED_MODULE_1__ + "\" alt=\"Красивая еда\" loading=\"lazy\"></picture><picture class=\"index-why-choose-us__food-item index-why-choose-us__food-item--second\"><img src=\"" + _Containers_Index_UI_Assets_Images_why_choose_us_2_png__WEBPACK_IMPORTED_MODULE_2__ + "\" alt=\"Красивая еда\" loading=\"lazy\"></picture><picture class=\"index-why-choose-us__food-item index-why-choose-us__food-item--third\"><img src=\"" + _Containers_Index_UI_Assets_Images_why_choose_us_3_png__WEBPACK_IMPORTED_MODULE_3__ + "\" alt=\"Красивая еда\" loading=\"lazy\"></picture><picture class=\"index-why-choose-us__food-item index-why-choose-us__food-item--four\"><img src=\"" + _Containers_Index_UI_Assets_Images_why_choose_us_4_png__WEBPACK_IMPORTED_MODULE_4__ + "\" alt=\"Красивая еда\" loading=\"lazy\"></picture><div class=\"index-why-choose-us__food-item index-why-choose-us__food-item--fives\"><picture class=\"index-why-choose-us__food-item index-why-choose-us__food-item--sixes\"><img src=\"" + _Containers_Index_UI_Assets_Images_why_choose_us_5_png__WEBPACK_IMPORTED_MODULE_5__ + "\" alt=\"Красивая еда\" loading=\"lazy\"></picture><picture class=\"index-why-choose-us__food-item index-why-choose-us__food-item--sevens\"><img src=\"" + _Containers_Index_UI_Assets_Images_why_choose_us_6_png__WEBPACK_IMPORTED_MODULE_6__ + "\" alt=\"Красивая еда\" loading=\"lazy\"></picture></div></div>", 1);
const _hoisted_4 = {
  class: "index-why-choose-us__info"
};
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"index-why-choose-us__heading\"><span class=\"index-why-choose-us__heading--primary\">Эк</span>страординарный вкус и опыт </div><div class=\"index-why-choose-us__description\"> Только у нас вы сможете попробовать произведения высокой кухни, это невероятное ни с чем не сравнимое ощущение. Лучшие повара готовы познакомить вас с мировой кухней, что запомнится вам на всю жизнь. </div><div class=\"index-why-choose-us__icons\"><div class=\"index-why-choose-us__icon-container\"><div class=\"index-why-choose-us__icon\"><div class=\"index-why-choose-us__food-icon\"><svg width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.6751 21C10.414 20.9994 10.1563 20.9405 9.92103 20.8274C9.68571 20.7144 9.47866 20.5501 9.31506 20.3466C9.15146 20.1432 9.03545 19.9057 8.97554 19.6516C8.91563 19.3975 8.91332 19.1332 8.9688 18.8781C10.3688 12.1406 18.3532 7 28.0001 7C37.6469 7 45.6313 12.1406 47.0313 18.8781C47.0868 19.1332 47.0845 19.3975 47.0246 19.6516C46.9646 19.9057 46.8486 20.1432 46.685 20.3466C46.5214 20.5501 46.3144 20.7144 46.0791 20.8274C45.8438 20.9405 45.5861 20.9994 45.325 21H10.6751Z\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M45.5 36.75V40.25C45.5 42.1065 44.7625 43.887 43.4497 45.1997C42.137 46.5125 40.3565 47.25 38.5 47.25H17.5C15.6435 47.25 13.863 46.5125 12.5503 45.1997C11.2375 43.887 10.5 42.1065 10.5 40.25V36.75\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M6.125 38.5L14.875 35L23.625 38.5L32.375 35L41.125 38.5L49.875 35\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M5.25 28H50.75\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div class=\"index-why-choose-us__icon-heading\">Вкус</div></div></div><div class=\"index-why-choose-us__icon-container\"><div class=\"index-why-choose-us__icon\"><div class=\"index-why-choose-us__food-icon\"><svg width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M49 27.8687C49.0203 30.6512 48.4852 33.4097 47.426 35.9827C46.3667 38.5557 44.8046 40.8914 42.8312 42.8531C34.7594 50.925 21.5469 51.0125 13.3656 43.05C10.3641 40.1292 8.30448 36.3778 7.45134 32.2775C6.59819 28.1773 6.99051 23.9156 8.57789 20.0401C10.1653 16.1645 12.8752 12.8521 16.3595 10.5284C19.8438 8.20478 23.9433 6.976 28.1312 6.99998C28.3933 7.00384 28.6512 7.06578 28.8864 7.18134C29.1216 7.29689 29.3283 7.46319 29.4915 7.66823C29.6547 7.87328 29.7704 8.11198 29.8302 8.36712C29.89 8.62226 29.8925 8.8875 29.8375 9.14373C29.6096 10.16 29.6113 11.2144 29.8426 12.2299C30.0738 13.2455 30.5288 14.1966 31.1744 15.014C31.8199 15.8314 32.6397 16.4944 33.574 16.9548C34.5083 17.4151 35.5335 17.6612 36.575 17.675C37.0391 17.675 37.4842 17.8594 37.8124 18.1875C38.1406 18.5157 38.325 18.9609 38.325 19.425C38.3388 20.4664 38.5848 21.4917 39.0452 22.426C39.5055 23.3603 40.1686 24.1801 40.986 24.8256C41.8033 25.4711 42.7545 25.9261 43.77 26.1574C44.7856 26.3887 45.8399 26.3904 46.8562 26.1625C47.1125 26.1074 47.3777 26.1099 47.6329 26.1698C47.888 26.2296 48.1267 26.3453 48.3317 26.5085C48.5368 26.6717 48.7031 26.8783 48.8186 27.1136C48.9342 27.3488 48.9961 27.6067 49 27.8687V27.8687Z\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M34.125 40.25C35.5747 40.25 36.75 39.0747 36.75 37.625C36.75 36.1753 35.5747 35 34.125 35C32.6753 35 31.5 36.1753 31.5 37.625C31.5 39.0747 32.6753 40.25 34.125 40.25Z\" fill=\"white\"></path><path d=\"M20.125 38.5C21.5747 38.5 22.75 37.3247 22.75 35.875C22.75 34.4253 21.5747 33.25 20.125 33.25C18.6753 33.25 17.5 34.4253 17.5 35.875C17.5 37.3247 18.6753 38.5 20.125 38.5Z\" fill=\"white\"></path><path d=\"M18.375 26.25C19.8247 26.25 21 25.0747 21 23.625C21 22.1753 19.8247 21 18.375 21C16.9253 21 15.75 22.1753 15.75 23.625C15.75 25.0747 16.9253 26.25 18.375 26.25Z\" fill=\"white\"></path><path d=\"M29.75 29.75C31.1997 29.75 32.375 28.5747 32.375 27.125C32.375 25.6753 31.1997 24.5 29.75 24.5C28.3003 24.5 27.125 25.6753 27.125 27.125C27.125 28.5747 28.3003 29.75 29.75 29.75Z\" fill=\"white\"></path></svg></div><div class=\"index-why-choose-us__icon-heading\">Ланч</div></div></div><div class=\"index-why-choose-us__icon-container\"><div class=\"index-why-choose-us__icon\"><div class=\"index-why-choose-us__food-icon\"><svg width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28 38.5V50.75\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M19.25 50.75H36.75\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M17.5001 5.25H38.5001L44.2094 24.5656C44.5613 25.7756 44.4682 27.0715 43.9469 28.2187C42.5604 31.2864 40.3185 33.8891 37.49 35.7147C34.6616 37.5403 31.3665 38.5113 28.0001 38.5113C24.6336 38.5113 21.3386 37.5403 18.5101 35.7147C15.6816 33.8891 13.4397 31.2864 12.0532 28.2187C11.5319 27.0715 11.4388 25.7756 11.7907 24.5656L17.5001 5.25Z\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M12.5781 21.9406C14.8969 20.6938 20.2781 18.9 28 22.75C36.225 26.8625 41.8031 24.5438 43.8375 23.3406\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div class=\"index-why-choose-us__icon-heading\">Обед</div></div></div></div>", 3);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    class: "index-why-choose-us__slogan"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Почему выбирают нас")]),
    _: 1 /* STABLE */
  }), _hoisted_5])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=template&id=39e244e5":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=template&id=39e244e5 ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "index"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["IndexHero"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["IndexAboutUs"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["IndexAboutFood"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["IndexWhyChooseUs"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["IndexClients"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["IndexChooseAndPick"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=template&id=3aa76274":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=template&id=3aa76274 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "loading"
};
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1);
}

/***/ }),

/***/ "./src/Frontend/Containers/Index/Functional/Api/index.api.js":
/*!*******************************************************************!*\
  !*** ./src/Frontend/Containers/Index/Functional/Api/index.api.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIndexMenu": function() { return /* binding */ getIndexMenu; }
/* harmony export */ });
/* harmony import */ var _Plugins_Axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Plugins/Axios */ "./src/Frontend/Plugins/Axios.js");

const prefix = "/Api/Index";

/**
 * @returns {Promise}
 */
function getIndexMenu() {
  return _Plugins_Axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${prefix}/Menu`);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".index-about-food {\n  position: relative;\n}\n.index-about-food__container {\n  padding-top: 120px;\n  margin: 0 auto;\n  max-width: 1440px;\n}\n.index-about-food__background {\n  position: absolute;\n  right: 0;\n  bottom: -400px;\n}\n.index-about-food__header {\n  text-align: center;\n}\n.index-about-food__slogan {\n  color: #CA006D;\n  font-family: \"GreatVibes\";\n  font-weight: 400;\n  line-height: 40px;\n  font-size: 32px;\n}\n.index-about-food__heading {\n  color: #fff;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 98px;\n  font-size: 60px;\n  padding: 20px 0;\n}\n.index-about-food__heading--primary {\n  color: #CA006D;\n}\n.index-about-food__food {\n  gap: 30px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.index-about-food__food-item {\n  position: relative;\n  grid-column: 3 span;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! @/Shared/Assets/Images/Icons/check.svg */ "./src/Frontend/Shared/Assets/Images/Icons/check.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".index-about-us__container {\n  padding-top: 120px;\n  gap: 50px;\n  margin: 0 auto;\n  max-width: 1440px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.index-about-us__info {\n  grid-column: 6 span;\n}\n.index-about-us__strengths {\n  list-style-position: inside;\n  list-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  color: #fff;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 26px;\n  font-size: 18px;\n}\n.index-about-us__strengths-item {\n  margin: 20px 0;\n}\n.index-about-us__button {\n  margin: 20px 0;\n}\n.index-about-us__food {\n  grid-column: 6 span;\n  gap: 20px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  user-select: none;\n  pointer-events: none;\n}\n.index-about-us__food-main {\n  grid-column: 2 span;\n}\n.index-about-us__food-secondary {\n  grid-column: 1 span;\n}\n.index-about-us__slogan {\n  color: #CA006D;\n  font-family: \"GreatVibes\";\n  font-weight: 400;\n  line-height: 40px;\n  font-size: 32px;\n}\n.index-about-us__heading {\n  color: #fff;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 98px;\n  font-size: 60px;\n  padding: 20px 0;\n}\n.index-about-us__heading--primary {\n  color: #CA006D;\n}\n.index-about-us__description {\n  color: #fff;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 24px;\n  font-size: 16px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".index-choose-and-pick__container {\n  padding-top: 120px;\n  margin: 0 auto;\n  max-width: 1440px;\n}\n.index-choose-and-pick__slogan {\n  text-align: center;\n  color: #CA006D;\n  font-family: \"GreatVibes\";\n  font-weight: 400;\n  line-height: 40px;\n  font-size: 32px;\n}\n.index-choose-and-pick__heading {\n  text-align: center;\n  color: #fff;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 98px;\n  font-size: 60px;\n  padding: 20px 0;\n}\n.index-choose-and-pick__heading--primary {\n  color: #CA006D;\n}\n.index-menu__categories-list {\n  gap: 70px;\n  display: grid;\n  list-style-type: none;\n  margin-bottom: 50px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.index-menu__categories-item {\n  color: #fff;\n  cursor: pointer;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 26px;\n  font-size: 18px;\n  transition: 300ms all ease-out;\n}\n.index-menu__categories-item:hover, .index-menu__categories-item--primary {\n  color: #CA006D;\n  transition: 300ms all ease-in;\n}\n.index-menu__selected-category-food, .index-menu__food {\n  gap: 20px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.index-menu__selected-category {\n  height: 300px;\n  display: flex;\n  grid-column: 4 span;\n}\n.index-menu__selected-category-food {\n  grid-column: 8 span;\n}\n.index-menu__dish {\n  gap: 10px;\n  height: 110px;\n  grid-column: 6 span;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n}\n.index-menu__dish-image {\n  height: 100%;\n  grid-column: 1 span;\n  border-radius: 4px;\n}\n.index-menu__dish-info {\n  grid-column: 5 span;\n}\n.index-menu__dish-loading-text {\n  height: 14px;\n  width: 100%;\n}\n.index-menu__dish-loading-text:not(:last-child) {\n  margin-bottom: 12px;\n}\n.index-menu__dish-name {\n  color: #fff;\n  hyphens: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  font-family: \"Inter\";\n  font-weight: 700;\n  line-height: 26px;\n  font-size: 28px;\n}\n.index-menu__dish-description {\n  color: #fff;\n  hyphens: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 22px;\n  font-size: 14px;\n}\n.index-menu__dish-price {\n  color: #CA006D;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".index-clients {\n  position: relative;\n  padding-bottom: 120px;\n}\n.index-clients__background {\n  filter: brightness(0.2);\n  position: absolute;\n  z-index: 0;\n  width: 100%;\n  left: 0;\n  top: 0;\n}\n.index-clients__container {\n  position: relative;\n  z-index: 1;\n  gap: 100px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  padding-top: 120px;\n  margin: 0 auto;\n  max-width: 1440px;\n}\n.index-clients__statistic-item {\n  text-align: center;\n  display: grid;\n  grid-column: 3 span;\n}\n.index-clients__statistic-icon {\n  justify-content: center;\n}\n.index-clients__statistic-name {\n  color: #fff;\n  margin: 12px 0;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 32px;\n  font-size: 24px;\n}\n.index-clients__statistic-description {\n  color: #fff;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 48px;\n  font-size: 40px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".index-hero {\n  position: relative;\n}\n.index-hero__background {\n  top: -10%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  position: absolute;\n  filter: brightness(0.1);\n  user-select: none;\n  pointer-events: none;\n}\n.index-hero__container {\n  z-index: 1;\n  min-height: 850px;\n  position: relative;\n  padding-top: 120px;\n  gap: 50px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  margin: 0 auto;\n  max-width: 1440px;\n}\n.index-hero__info {\n  grid-column: 6 span;\n}\n.index-hero__food {\n  grid-column: 6 span;\n  user-select: none;\n  pointer-events: none;\n}\n.index-hero__slogan {\n  color: #CA006D;\n  font-family: \"GreatVibes\";\n  font-weight: 400;\n  line-height: 40px;\n  font-size: 32px;\n}\n.index-hero__heading {\n  color: #fff;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 98px;\n  font-size: 60px;\n  padding: 20px 0;\n}\n.index-hero__heading--primary {\n  color: #CA006D;\n}\n.index-hero__description {\n  color: #fff;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 24px;\n  font-size: 16px;\n}\n.index-hero__button {\n  margin: 40px 0;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".index-why-choose-us__container {\n  gap: 50px;\n  padding-bottom: 120px;\n  padding-top: 120px;\n  margin: 0 auto;\n  max-width: 1440px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.index-why-choose-us__food {\n  gap: 20px;\n  grid-column: 6 span;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.index-why-choose-us__food-item--first, .index-why-choose-us__food-item--second, .index-why-choose-us__food-item--third, .index-why-choose-us__food-item--four, .index-why-choose-us__food-item--sixes, .index-why-choose-us__food-item--sevens {\n  display: block;\n}\n.index-why-choose-us__food-item--first img, .index-why-choose-us__food-item--second img, .index-why-choose-us__food-item--third img, .index-why-choose-us__food-item--four img, .index-why-choose-us__food-item--sixes img, .index-why-choose-us__food-item--sevens img {\n  width: 100%;\n  height: auto;\n}\n.index-why-choose-us__food-item--first, .index-why-choose-us__food-item--second {\n  grid-column: 6 span;\n}\n.index-why-choose-us__food-item--second {\n  display: flex;\n  align-items: flex-end;\n}\n.index-why-choose-us__food-item--third, .index-why-choose-us__food-item--four, .index-why-choose-us__food-item--fives {\n  grid-column: 4 span;\n}\n.index-why-choose-us__food-item--fives {\n  gap: 20px;\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n}\n.index-why-choose-us__food-item--sixes, .index-why-choose-us__food-item--sevens {\n  grid-row: 1 span;\n}\n.index-why-choose-us__info {\n  grid-column: 6 span;\n}\n.index-why-choose-us__icons {\n  gap: 10px;\n  margin: 30px 0;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.index-why-choose-us__icon-container {\n  display: flex;\n  grid-column: 3 span;\n}\n.index-why-choose-us__food-icon {\n  padding: 10px;\n  border-radius: 6px;\n  background-color: #CA006D;\n}\n.index-why-choose-us__icon-heading {\n  color: #fff;\n  text-align: center;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 26px;\n  font-size: 18px;\n  margin: 10px 0;\n}\n.index-why-choose-us__slogan {\n  color: #CA006D;\n  font-family: \"GreatVibes\";\n  font-weight: 400;\n  line-height: 40px;\n  font-size: 32px;\n}\n.index-why-choose-us__heading {\n  color: #fff;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 98px;\n  font-size: 60px;\n  padding: 20px 0;\n}\n.index-why-choose-us__heading--primary {\n  color: #CA006D;\n}\n.index-why-choose-us__description {\n  color: #fff;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 24px;\n  font-size: 16px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".index {\n  background: #0D0D0D;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loading {\n  width: 100%;\n  height: 100%;\n  animation: loading-pulse 1.8s ease-in-out infinite alternate;\n}\n@keyframes loading-pulse {\n0% {\n    background: #9b9b9b;\n}\n50% {\n    background: #b8b8b8;\n}\n100% {\n    background: #9b9b9b;\n}\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue":
/*!***************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexAboutFood_vue_vue_type_template_id_122a6b0b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexAboutFood.vue?vue&type=template&id=122a6b0b */ "./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=template&id=122a6b0b");
/* harmony import */ var _IndexAboutFood_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexAboutFood.vue?vue&type=script&setup=true&lang=js */ "./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _IndexAboutFood_vue_vue_type_style_index_0_id_122a6b0b_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss */ "./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexAboutFood_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexAboutFood_vue_vue_type_template_id_122a6b0b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue":
/*!***********************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexAboutUs_vue_vue_type_template_id_81920aea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexAboutUs.vue?vue&type=template&id=81920aea */ "./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=template&id=81920aea");
/* harmony import */ var _IndexAboutUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexAboutUs.vue?vue&type=script&setup=true&lang=js */ "./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _IndexAboutUs_vue_vue_type_style_index_0_id_81920aea_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss */ "./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexAboutUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexAboutUs_vue_vue_type_template_id_81920aea__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue":
/*!***********************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexChooseAndPick_vue_vue_type_template_id_063f2c4b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexChooseAndPick.vue?vue&type=template&id=063f2c4b */ "./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=template&id=063f2c4b");
/* harmony import */ var _IndexChooseAndPick_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexChooseAndPick.vue?vue&type=script&setup=true&lang=js */ "./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _IndexChooseAndPick_vue_vue_type_style_index_0_id_063f2c4b_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss */ "./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexChooseAndPick_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexChooseAndPick_vue_vue_type_template_id_063f2c4b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue":
/*!***********************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexClients_vue_vue_type_template_id_4a6b24aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexClients.vue?vue&type=template&id=4a6b24aa */ "./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=template&id=4a6b24aa");
/* harmony import */ var _IndexClients_vue_vue_type_style_index_0_id_4a6b24aa_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss */ "./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(script, [['render',_IndexClients_vue_vue_type_template_id_4a6b24aa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue":
/*!*****************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexHero_vue_vue_type_template_id_64e270f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexHero.vue?vue&type=template&id=64e270f6 */ "./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=template&id=64e270f6");
/* harmony import */ var _IndexHero_vue_vue_type_style_index_0_id_64e270f6_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss */ "./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(script, [['render',_IndexHero_vue_vue_type_template_id_64e270f6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue":
/*!*******************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexWhyChooseUs_vue_vue_type_template_id_50e09dcb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexWhyChooseUs.vue?vue&type=template&id=50e09dcb */ "./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=template&id=50e09dcb");
/* harmony import */ var _IndexWhyChooseUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexWhyChooseUs.vue?vue&type=script&setup=true&lang=js */ "./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _IndexWhyChooseUs_vue_vue_type_style_index_0_id_50e09dcb_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss */ "./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexWhyChooseUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexWhyChooseUs_vue_vue_type_template_id_50e09dcb__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue":
/*!*******************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexView_vue_vue_type_template_id_39e244e5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexView.vue?vue&type=template&id=39e244e5 */ "./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=template&id=39e244e5");
/* harmony import */ var _IndexView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexView.vue?vue&type=script&setup=true&lang=js */ "./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _IndexView_vue_vue_type_style_index_0_id_39e244e5_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss */ "./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexView_vue_vue_type_template_id_39e244e5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Index/UI/View/Index/IndexView.vue"]])
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

/***/ "./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue":
/*!********************************************************************!*\
  !*** ./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLoading_vue_vue_type_template_id_3aa76274__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseLoading.vue?vue&type=template&id=3aa76274 */ "./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=template&id=3aa76274");
/* harmony import */ var _BaseLoading_vue_vue_type_style_index_0_id_3aa76274_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss */ "./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(script, [['render',_BaseLoading_vue_vue_type_template_id_3aa76274__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutFood_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutFood_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexAboutFood.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexAboutUs.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexChooseAndPick_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexChooseAndPick_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexChooseAndPick.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexWhyChooseUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexWhyChooseUs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexWhyChooseUs.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexView.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=template&id=122a6b0b":
/*!*********************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=template&id=122a6b0b ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutFood_vue_vue_type_template_id_122a6b0b__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutFood_vue_vue_type_template_id_122a6b0b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexAboutFood.vue?vue&type=template&id=122a6b0b */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=template&id=122a6b0b");


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=template&id=81920aea":
/*!*****************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=template&id=81920aea ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutUs_vue_vue_type_template_id_81920aea__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutUs_vue_vue_type_template_id_81920aea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexAboutUs.vue?vue&type=template&id=81920aea */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=template&id=81920aea");


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=template&id=063f2c4b":
/*!*****************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=template&id=063f2c4b ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexChooseAndPick_vue_vue_type_template_id_063f2c4b__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexChooseAndPick_vue_vue_type_template_id_063f2c4b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexChooseAndPick.vue?vue&type=template&id=063f2c4b */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=template&id=063f2c4b");


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=template&id=4a6b24aa":
/*!*****************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=template&id=4a6b24aa ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexClients_vue_vue_type_template_id_4a6b24aa__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexClients_vue_vue_type_template_id_4a6b24aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexClients.vue?vue&type=template&id=4a6b24aa */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=template&id=4a6b24aa");


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=template&id=64e270f6":
/*!***********************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=template&id=64e270f6 ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexHero_vue_vue_type_template_id_64e270f6__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexHero_vue_vue_type_template_id_64e270f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexHero.vue?vue&type=template&id=64e270f6 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=template&id=64e270f6");


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=template&id=50e09dcb":
/*!*************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=template&id=50e09dcb ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexWhyChooseUs_vue_vue_type_template_id_50e09dcb__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexWhyChooseUs_vue_vue_type_template_id_50e09dcb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexWhyChooseUs.vue?vue&type=template&id=50e09dcb */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=template&id=50e09dcb");


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=template&id=39e244e5":
/*!*************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=template&id=39e244e5 ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexView_vue_vue_type_template_id_39e244e5__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexView_vue_vue_type_template_id_39e244e5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexView.vue?vue&type=template&id=39e244e5 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=template&id=39e244e5");


/***/ }),

/***/ "./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=template&id=3aa76274":
/*!**************************************************************************************************!*\
  !*** ./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=template&id=3aa76274 ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BaseLoading_vue_vue_type_template_id_3aa76274__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BaseLoading_vue_vue_type_template_id_3aa76274__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BaseLoading.vue?vue&type=template&id=3aa76274 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=template&id=3aa76274");


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutFood_vue_vue_type_style_index_0_id_122a6b0b_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutFood_vue_vue_type_style_index_0_id_122a6b0b_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutFood_vue_vue_type_style_index_0_id_122a6b0b_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutFood_vue_vue_type_style_index_0_id_122a6b0b_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutFood_vue_vue_type_style_index_0_id_122a6b0b_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutUs_vue_vue_type_style_index_0_id_81920aea_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutUs_vue_vue_type_style_index_0_id_81920aea_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutUs_vue_vue_type_style_index_0_id_81920aea_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutUs_vue_vue_type_style_index_0_id_81920aea_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexAboutUs_vue_vue_type_style_index_0_id_81920aea_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexChooseAndPick_vue_vue_type_style_index_0_id_063f2c4b_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexChooseAndPick_vue_vue_type_style_index_0_id_063f2c4b_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexChooseAndPick_vue_vue_type_style_index_0_id_063f2c4b_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexChooseAndPick_vue_vue_type_style_index_0_id_063f2c4b_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexChooseAndPick_vue_vue_type_style_index_0_id_063f2c4b_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexClients_vue_vue_type_style_index_0_id_4a6b24aa_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexClients_vue_vue_type_style_index_0_id_4a6b24aa_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexClients_vue_vue_type_style_index_0_id_4a6b24aa_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexClients_vue_vue_type_style_index_0_id_4a6b24aa_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexClients_vue_vue_type_style_index_0_id_4a6b24aa_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexHero_vue_vue_type_style_index_0_id_64e270f6_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexHero_vue_vue_type_style_index_0_id_64e270f6_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexHero_vue_vue_type_style_index_0_id_64e270f6_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexHero_vue_vue_type_style_index_0_id_64e270f6_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexHero_vue_vue_type_style_index_0_id_64e270f6_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexWhyChooseUs_vue_vue_type_style_index_0_id_50e09dcb_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexWhyChooseUs_vue_vue_type_style_index_0_id_50e09dcb_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexWhyChooseUs_vue_vue_type_style_index_0_id_50e09dcb_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexWhyChooseUs_vue_vue_type_style_index_0_id_50e09dcb_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexWhyChooseUs_vue_vue_type_style_index_0_id_50e09dcb_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss":
/*!****************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexView_vue_vue_type_style_index_0_id_39e244e5_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexView_vue_vue_type_style_index_0_id_39e244e5_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexView_vue_vue_type_style_index_0_id_39e244e5_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexView_vue_vue_type_style_index_0_id_39e244e5_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IndexView_vue_vue_type_style_index_0_id_39e244e5_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BaseLoading_vue_vue_type_style_index_0_id_3aa76274_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BaseLoading_vue_vue_type_style_index_0_id_3aa76274_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BaseLoading_vue_vue_type_style_index_0_id_3aa76274_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BaseLoading_vue_vue_type_style_index_0_id_3aa76274_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BaseLoading_vue_vue_type_style_index_0_id_3aa76274_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutFood/IndexAboutFood.vue?vue&type=style&index=0&id=122a6b0b&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("4ee2b3b3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexAboutUs/IndexAboutUs.vue?vue&type=style&index=0&id=81920aea&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("e51b3138", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexChooseAndPick/IndexChooseAndPick.vue?vue&type=style&index=0&id=063f2c4b&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("39f13347", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexClients/IndexClients.vue?vue&type=style&index=0&id=4a6b24aa&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("9e7aa2fa", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexHero/IndexHero.vue?vue&type=style&index=0&id=64e270f6&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("616f80f4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/Components/IndexWhyChooseUs/IndexWhyChooseUs.vue?vue&type=style&index=0&id=50e09dcb&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("7e4e6e83", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Index/UI/View/Index/IndexView.vue?vue&type=style&index=0&id=39e244e5&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("7497ee78", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Shared/Components/BaseLoading/BaseLoading.vue?vue&type=style&index=0&id=3aa76274&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("10ea6cbb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-1.png":
/*!******************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-1.png ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "8de5040ec905d141b99a.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-2.png":
/*!******************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-2.png ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "acd53ab8ff76171a3282.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-3.png":
/*!******************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-3.png ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "87b3b56dda5271db0ae3.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-4.png":
/*!******************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutfood-4.png ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "422e6708e4cc0d426f2d.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutus-food-1.png":
/*!*********************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutus-food-1.png ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a88e53450aa15452b7a1.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutus-food-2.png":
/*!*********************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutus-food-2.png ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "f6345d1a072ac6427d4b.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutus-food-3.png":
/*!*********************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/index-aboutus-food-3.png ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "eafd34b0c1a416229acd.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/index-background-grass.png":
/*!***********************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/index-background-grass.png ***!
  \***********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "b3ad13da6307b79f21a0.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/index-clients.png":
/*!**************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/index-clients.png ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "cc5b5989baf655e68cc4.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/index-hero-food.png":
/*!****************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/index-hero-food.png ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "cceeaed985edb1c3009b.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/index-hero.png":
/*!***********************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/index-hero.png ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "c6c87bc17df16092938a.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-1.png":
/*!****************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-1.png ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "889c2b434ad7190e673c.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-2.png":
/*!****************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-2.png ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d6c9de015a60c116c0e0.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-3.png":
/*!****************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-3.png ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "77e3b513da0df985f465.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-4.png":
/*!****************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-4.png ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "b0e0e96f4d9d51de07c5.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-5.png":
/*!****************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-5.png ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "69da109768db5a7feef5.png";

/***/ }),

/***/ "./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-6.png":
/*!****************************************************************************!*\
  !*** ./src/Frontend/Containers/Index/UI/Assets/Images/why-choose-us-6.png ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d021340a5e163ff63dce.png";

/***/ }),

/***/ "./src/Frontend/Shared/Assets/Images/Icons/check.svg":
/*!***********************************************************!*\
  !*** ./src/Frontend/Shared/Assets/Images/Icons/check.svg ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "e4936846aa7561723687.svg";

/***/ })

}]);