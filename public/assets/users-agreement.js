(self["webpackChunkmeatfloor"] = self["webpackChunkmeatfloor"] || []).push([["users-agreement"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Components_BaseHeading_BaseHeading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Components/BaseHeading/BaseHeading.vue */ "./src/Frontend/Shared/Components/BaseHeading/BaseHeading.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'UsersAgreement',
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=template&id=63e09937":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=template&id=63e09937 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "users-agreement"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"users-agreement__text\"><section class=\"users-agreement__main\"><h2 class=\"users-agreement__section-heading\">Введение</h2><p> Обеспечение конфиденциальности и безопасности обработки персональных данных в Компании является одной из приоритетных задач организации. В Компании для этих целей введен в действие комплект организационно-распорядительной документации, обязательный к исполнению всеми сотрудниками, допущенными к обработке персональных данных. Обработка, хранение и обеспечение конфиденциальности и безопасности персональных данных осуществляется в соответствии с действующим законодательством РФ в сфере защиты персональных данных, и в соответствии с локальными актами Компании. Настоящая Политика определяет принципы, порядок и условия обработки персональных данных работников Компании и потребителей услуг Компании, чьи персональные данные обрабатываются организацией, с целью обеспечения защиты прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну, а также устанавливает ответственность должностных лиц Компании, имеющих доступ к персональным данным, за невыполнение требований норм, регулирующих обработку и защиту персональных данных. Настоящая Политика в отношении обработки персональных данных в Компании (далее - Политика) разработана в соответствии с Федеральным законом от 27 июля 2006 г. № 152-ФЗ «О персональных данных». </p><p>Компания осуществляет обработку персональных данных в следующих целях:</p><ul class=\"users-agreement__list\"><li> организации кадрового учета компании; </li><li> обеспечения соблюдения законов и иных нормативно-правовых актов; </li><li> ведения кадрового делопроизводства; </li><li> исполнения требований налогового законодательства в связи с исчислением и уплатой налога на доходы физических лиц, а также единого социального налога, пенсионного законодательства при формировании и представлении персонифицированных данных о каждом получателе доходов, учитываемых при начислении страховых взносов на обязательное пенсионное страхование и обеспечение; </li><li> заполнения первичной статистической документации, в соответствии с Трудовым кодексом РФ, Налоговым кодексом РФ, федеральными законами, в частности: «Об индивидуальном (персонифицированном) учете в системе обязательного пенсионного страхования», «О персональных данных» и других нормативно-правовых актов; </li><li> исполнения договорных обязательств, в том числе гарантийного обслуживания потребителей услуг Компании; </li><li> иной деятельности в соответствии с Уставом Компании, действующим законодательством Российской федерации. </li></ul></section><section><h2 class=\"users-agreement__section-heading\">Сроки обработки персональных данных</h2><p> Сроки обработки персональных данных определяются в соответствие со сроком действия договора (соглашением) с субъектом персональных данных, сроком исковой давности, достижением целей обработки, а также иными требованиями законодательства РФ. В Компании создаются и хранятся документы, содержащие сведения о субъектах персональных данных. Требования к использованию в Компании данных типовых форм документов установлены Постановлением Правительства РФ от 15.09.2008 № 687 «Об утверждении Положения об особенностях обработки персональных данных, осуществляемой без использования средств автоматизации». </p></section><section><h2 class=\"users-agreement__section-heading\">Права и обязанности</h2><p>Компания как оператор персональных данных в праве:</p><ul><li>отстаивать свои интересы в суде;</li><li>предоставлять персональные данные субъектов третьим лицам, если это предусмотрено действующим законодательством (налоговые, правоохранительные органы и др.) или соглашением субъекта персональных данных;</li><li>отказывать в предоставлении персональных данных в случаях предусмотренных действующим законодательством;</li><li>использовать персональные данные субъекта без его согласия, в случаях предусмотренных законодательством.</li></ul><p>Субъект персональных данных имеет право:</p><ul><li>требовать уточнения своих персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, недостоверными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;</li><li>требовать перечень своих персональных данных, обрабатываемых Компанией и источник их получения;</li><li>получать информацию о сроках обработки своих персональных данных, в том числе о сроках их хранения;</li><li>требовать извещения всех лиц, которым ранее были сообщены неверные или неполные его персональные данные, обо всех произведенных в них исключениях, исправлениях или дополнениях;</li><li>обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействия при обработке его персональных данных.</li></ul></section></div>", 1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BaseHeading"], {
    class: "users-agreement__heading"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Пользовательское соглашение")]),
    _: 1 /* STABLE */
  }), _hoisted_2]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".users-agreement {\n  margin: 0 auto;\n  max-width: 1440px;\n}\n.users-agreement__heading {\n  text-align: center;\n  color: #fff;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 48px;\n  font-size: 40px;\n}\n.users-agreement__text {\n  text-indent: 20px;\n  margin-top: 20px;\n  color: #fff;\n  font-family: \"Inter\";\n  font-weight: 400;\n  line-height: 22px;\n  font-size: 14px;\n}\n.users-agreement__list {\n  text-indent: 0;\n  margin-left: 40px;\n}\n.users-agreement__list li::before {\n  color: #fff;\n}\n.users-agreement__section-heading {\n  margin: 12px 0;\n  font-family: \"Helvetica\";\n  font-weight: 700;\n  line-height: 32px;\n  font-size: 24px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue":
/*!**********************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersAgreement_vue_vue_type_template_id_63e09937__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersAgreement.vue?vue&type=template&id=63e09937 */ "./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=template&id=63e09937");
/* harmony import */ var _UsersAgreement_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersAgreement.vue?vue&type=script&setup=true&lang=js */ "./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _UsersAgreement_vue_vue_type_style_index_0_id_63e09937_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss */ "./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss");
/* harmony import */ var D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programs_OpenServer2_domains_meatfloor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_UsersAgreement_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UsersAgreement_vue_vue_type_template_id_63e09937__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue"]])
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

/***/ "./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_UsersAgreement_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_UsersAgreement_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./UsersAgreement.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=template&id=63e09937":
/*!****************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=template&id=63e09937 ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_UsersAgreement_vue_vue_type_template_id_63e09937__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_UsersAgreement_vue_vue_type_template_id_63e09937__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./UsersAgreement.vue?vue&type=template&id=63e09937 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=template&id=63e09937");


/***/ }),

/***/ "./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_UsersAgreement_vue_vue_type_style_index_0_id_63e09937_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_UsersAgreement_vue_vue_type_style_index_0_id_63e09937_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_UsersAgreement_vue_vue_type_style_index_0_id_63e09937_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_UsersAgreement_vue_vue_type_style_index_0_id_63e09937_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_UsersAgreement_vue_vue_type_style_index_0_id_63e09937_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/Frontend/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue?vue&type=style&index=0&id=63e09937&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("11f5ee5a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);