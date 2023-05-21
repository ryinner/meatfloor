(self["webpackChunkmeatfloor"] = self["webpackChunkmeatfloor"] || []).push([["privacy"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Components/BaseHeading/BaseHeading.vue */ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'Privacy',
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=template&id=61c37249":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=template&id=61c37249 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "privacy"
};
const _hoisted_2 = {
  class: "privacy__text"
};
const _hoisted_3 = {
  class: "privacy__main"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", {
  class: "privacy__list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " Сайт – любой из сайтов компании, размешенных в сети Интернет. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Клиент – физическое лицо, использующее сайт Компании."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Персональные данные - информация, относящаяся к определенному Клиенту, указанная в п. 3.1 настоящего Положения."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Обработка персональных данных – любые операции, совершаемые с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Cookies - фрагменты данных, отправляемых веб-сервером браузеру при посещении сайта Клиентом. Компания автоматически получает некоторые виды информации, получаемой в процессе взаимодействия пользователей с Cайтом. Речь идет о технологиях и сервисах, таких как веб-протоколы, куки, веб-отметки, а также приложения и инструменты указанных третьей стороны. Куки – это часть данных, автоматически располагающаяся на жестком диске компьютера при каждом посещении веб-сайта. Таким образом, куки – это уникальный идентификатор браузера для веб-сайта. Куки дают возможность хранить информацию на сервере и помогают легче ориентироваться в веб-пространстве, а также позволяют осуществлять анализ сайта, оценку результатов и таргетирование поведенческой рекламы. Большинство веб-браузеров разрешают использование куки, однако можно изменить настройки для отказа от работы с куки или отслеживания пути их рассылки. При этом некоторые ресурсы могут работать некорректно, если работа куки в браузере будет запрещена.")], -1 /* HOISTED */);
const _hoisted_5 = {
  class: "privacy__targets"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Клиент предоставляет свои персональные данные с целью:", -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  class: "privacy__list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "создания учетной записи;"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "оформление бронирования столов;"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "получения новостей, рекламных акций;"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "использования иных имеющихся на сайте сервисов, включая форум, персональные блоги, сервис обмена личными сообщениями между зарегистрированными участниками, персонализированные комментарии и отзывы, но не ограничиваясь ими.")], -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Предоставленные данные могут быть использованы в целях продвижения товаров от имени Компании или от имени партнеров Компании.", -1 /* HOISTED */);
const _hoisted_9 = {
  class: "privacy__information"
};
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Клиентом путём заполнения регистрационной формы на сайте Компании и включают в себя следующую информацию:", -1 /* HOISTED */);
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  class: "privacy__list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "ФИО Клиента;"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "контактный телефон Клиента;"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "адрес электронной почты (e-mail);"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "историю бронирования;"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Компания также получает данные, которые автоматически передаются в процессе просмотра при посещении сайта.")], -1 /* HOISTED */);
const _hoisted_12 = {
  class: "privacy__cookies"
};
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Политика использования cookie - файлов применяется в дополнение к общей Политике конфиденциальности и описывает типы файлов cookie, цели их использования и способы, с помощью которых можно от них отказаться. ", -1 /* HOISTED */);
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Что такое cookie – файлы: ", -1 /* HOISTED */);
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Во время просмотра любых сайтов в сети Интернет на ваш компьютер загружается сама страница, а также небольшой текстовый файл под названием «cookie». С их помощью сайт запоминает информацию о ваших посещениях. Это упрощает взаимодействие с сайтом и делает его полезнее для вас. В этих целях также используются другие технологии, включая уникальные идентификаторы (они нужны, чтобы различать браузеры, приложения или устройства), пиксели и локальное хранилище. Сookie автоматически располагаются на жестком диске компьютера при каждом посещении веб-сайта. ", -1 /* HOISTED */);
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "ВАЖНО: Вы можете отказаться от использования cookie, выбрав соответствующие настройки в браузере.", -1 /* HOISTED */);
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Используя Сайт, вы соглашаетесь с настоящей Политикой и подтверждаете свое согласие на использование cookie – файлов в установленном порядке. ", -1 /* HOISTED */);
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " В случае несогласия с порядком использования cookie – файлов указанным образом Вы можете ограничить использование cookie – файлов в настройках вашего браузера или не использовать Сайт. ", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    class: "privacy__heading"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Политика приватности")]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    level: 2,
    class: "privacy__section-heading"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Определение и термины ")]),
    _: 1 /* STABLE */
  }), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    level: 2,
    class: "privacy__section-heading"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Цели и принципы")]),
    _: 1 /* STABLE */
  }), _hoisted_6, _hoisted_7, _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    level: 2,
    class: "privacy__section-heading"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Информация, подлежащая обработке")]),
    _: 1 /* STABLE */
  }), _hoisted_10, _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    level: 2,
    class: "privacy__section-heading"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Политика использования cookie-файлов ")]),
    _: 1 /* STABLE */
  }), _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16, _hoisted_17, _hoisted_18])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".privacy {\n  margin: 0 auto;\n  max-width: 1440px;\n}\n.privacy__heading {\n  text-align: center;\n  color: #fff;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 48px;\n  font-size: 40px;\n}\n.privacy__text {\n  text-indent: 20px;\n  margin-top: 20px;\n  color: #fff;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 22px;\n  font-size: 14px;\n}\n.privacy__list {\n  text-indent: 0;\n  margin-left: 40px;\n}\n.privacy__list li::before {\n  color: #fff;\n}\n.privacy__section-heading {\n  margin: 12px 0;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 32px;\n  font-size: 24px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue":
/*!********************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Privacy_vue_vue_type_template_id_61c37249__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Privacy.vue?vue&type=template&id=61c37249 */ "./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=template&id=61c37249");
/* harmony import */ var _Privacy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Privacy.vue?vue&type=script&setup=true&lang=js */ "./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Privacy_vue_vue_type_style_index_0_id_61c37249_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss */ "./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Privacy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Privacy_vue_vue_type_template_id_61c37249__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue"]])
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

/***/ "./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Privacy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Privacy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Privacy.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=template&id=61c37249":
/*!**************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=template&id=61c37249 ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_Privacy_vue_vue_type_template_id_61c37249__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_Privacy_vue_vue_type_template_id_61c37249__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Privacy.vue?vue&type=template&id=61c37249 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=template&id=61c37249");


/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Privacy_vue_vue_type_style_index_0_id_61c37249_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Privacy_vue_vue_type_style_index_0_id_61c37249_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Privacy_vue_vue_type_style_index_0_id_61c37249_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Privacy_vue_vue_type_style_index_0_id_61c37249_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Privacy_vue_vue_type_style_index_0_id_61c37249_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/Privacy/Privacy.vue?vue&type=style&index=0&id=61c37249&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("15b5e7bf", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);