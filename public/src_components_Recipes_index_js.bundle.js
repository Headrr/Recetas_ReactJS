(self["webpackChunktarea_1_cookapp"] = self["webpackChunktarea_1_cookapp"] || []).push([["src_components_Recipes_index_js"],{

/***/ "./src/components/Recipes/Receta.js":
/*!******************************************!*\
  !*** ./src/components/Recipes/Receta.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Common_ButtonPrimary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/ButtonPrimary */ "./src/components/Common/ButtonPrimary.js");
/* harmony import */ var _contexts_Saves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/Saves */ "./src/contexts/Saves.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/heart.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/clock.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/user.js");
/* harmony import */ var country_flag_icons_react_3x2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! country-flag-icons/react/3x2 */ "./node_modules/country-flag-icons/react/3x2/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_static_icons_star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/static/icons/star.svg */ "./src/assets/static/icons/star.svg");
/* harmony import */ var _components_ModalAddFavoritos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ModalAddFavoritos */ "./src/components/ModalAddFavoritos/index.js");
/* harmony import */ var _custom_hooks_useModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../custom-hooks/useModal */ "./src/custom-hooks/useModal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var tipoComida = function tipoComida(tipo) {
  if (tipo === "China") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(country_flag_icons_react_3x2__WEBPACK_IMPORTED_MODULE_3__.default.CH, {
    title: "China",
    style: {
      width: "12%",
      borderRadius: 10
    }
  });
  if (tipo === "Española") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(country_flag_icons_react_3x2__WEBPACK_IMPORTED_MODULE_3__.default.ES, {
    title: "Espa\xF1a",
    style: {
      width: "12%"
    }
  });
  if (tipo === "Chilena") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(country_flag_icons_react_3x2__WEBPACK_IMPORTED_MODULE_3__.default.CL, {
    title: "Chile",
    style: {
      width: "12%"
    }
  });
  if (tipo === "Italiana") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(country_flag_icons_react_3x2__WEBPACK_IMPORTED_MODULE_3__.default.IT, {
    title: "Italia",
    style: {
      width: "12%"
    }
  });
  if (tipo === "Francia") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(country_flag_icons_react_3x2__WEBPACK_IMPORTED_MODULE_3__.default.FR, {
    title: "Francia",
    style: {
      width: "12%"
    }
  });
  if (tipo === "Egipto") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(country_flag_icons_react_3x2__WEBPACK_IMPORTED_MODULE_3__.default.EG, {
    title: "Egipto",
    style: {
      width: "12%"
    }
  });else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(country_flag_icons_react_3x2__WEBPACK_IMPORTED_MODULE_3__.default.CL, {
    title: "Chile",
    style: {
      width: "12%"
    }
  }); // if (tipo === "Chile")
  //   return <Flags.CH title="Chile" style={{ width: "12%" }} />;
};

var Track = function Track(props) {
  var id = props.id,
      name = props.name,
      tiempo = props.tiempo,
      porciones = props.porciones,
      tipo = props.tipo,
      etiquetas = props.etiquetas,
      url = props.url,
      descripcion = props.descripcion;
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_Saves__WEBPACK_IMPORTED_MODULE_2__.CartContext);
  var cart = context.cart,
      setCart = context.setCart,
      existe = context.existe,
      setExiste = context.setExiste;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalVisible = _useState2[0],
      setModalVisible = _useState2[1];

  var _useModal = (0,_custom_hooks_useModal__WEBPACK_IMPORTED_MODULE_7__.default)(),
      modal = _useModal.modal,
      handleCloseModal = _useModal.handleCloseModal,
      handleOpenModal = _useModal.handleOpenModal;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: 550,
      width: "22%",
      alignItems: "center",
      marginRight: 20,
      marginLeft: 20,
      marginBottom: 60
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ModalAddFavoritos__WEBPACK_IMPORTED_MODULE_6__.default // modalVisible={modalVisible}
  // setModalVisible={setModalVisible}
  , {
    handleCloseModal: handleCloseModal,
    handleOpenModal: handleOpenModal,
    receta: props,
    id: id,
    name: name,
    modal: modal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Card, {
    style: {
      borderRadius: 15,
      marginBottom: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.CardHeader, {
    style: {
      backgroundColor: "#a0a0a0ba",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.CardTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {
    style: {
      justifyContent: "space-between",
      margin: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, name, "  ", existe.includes(id) ?
  /*#__PURE__*/
  // <Button size='sm' style={{width: '20%'}}>
  react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_feather__WEBPACK_IMPORTED_MODULE_9__.default, {
    strokeWidth: 3,
    fill: "red",
    size: 25,
    color: "red",
    style: {
      color: "red",
      marginRight: 10,
      // backgroundColor: "red",
      // borderRadius: 10,
      // borderBottomColor: "red",
      margin: 5
    }
  }) : // </Button>
  null), tipoComida(tipo))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.CardSubtitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Col, null, etiquetas.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        margin: 3
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, item));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {
    align: "right"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.CardImg, {
    component: "img",
    height: "194",
    src: url,
    alt: "fotograf\xEDa receta",
    style: {
      borderRadius: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      textAlign: "justify",
      marginTop: 10,
      height: 110
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, descripcion)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Col, null, existe.includes(id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Label // disabled
  , {
    color: "warning",
    style: {
      color: "black",
      fontSize: 16,
      // backgroundColor: "grey",
      padding: 5,
      borderRadius: 5,
      height: 35
    } // onClick={ () =>
    //
    // onClick={() => {
    //   setModalVisible(true)
    // }
    // }

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_feather__WEBPACK_IMPORTED_MODULE_9__.default, {
    size: 25,
    color: "red",
    fill: "red"
  }), " ", "Me gusta!") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {
    color: "white" // style={{ color: "white", fontSize: 16 }}
    ,
    style: {
      color: "black",
      fontSize: 16,
      // backgroundColor: "grey",
      padding: 5,
      borderRadius: 5,
      height: 35
    } // onClick={ () =>
    //
    // onClick={() => {
    //   setModalVisible(true);
    // }}
    ,
    onClick: handleOpenModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_feather__WEBPACK_IMPORTED_MODULE_9__.default, {
    size: 25,
    color: "red"
  }), " ", "Dar me gusta")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {
    align: "right"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.CardFooter, {
    style: {
      backgroundColor: "#a0a0a0ba",
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Col, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_feather__WEBPACK_IMPORTED_MODULE_10__.default, {
    size: 20
  }), " Tiempo de preparaci\xF3n: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, tiempo), " ", "minutos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Col, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_feather__WEBPACK_IMPORTED_MODULE_11__.default, {
    size: 20
  }), " Porciones: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, porciones)))));
}; // DOCUMENTACIÓN PROP-TYPE


Track.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
tipoComida.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["China", "Española", "Chilena", "Italiana", "Francia", "Egipto"])
};
/* harmony default export */ __webpack_exports__["default"] = (Track); // {existe.includes(recetas.id) ? (
//   <View
//     style={{
//         backgroundColor: 'grey',
//         padding: 10,
//         marginVertical: 5,
//         borderRadius: 5,
//         width: '50%',
//         marginBottom: 5,
//         width: '30%',
//         marginHorizontal: 10
//     }}>
//     <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}>
//       En Favoritos
//     </Text>
//   </View>
// ) : (
//   <TouchableOpacity
//     style={{
//       backgroundColor: 'gold',
//       padding: 10,
//       marginVertical: 5,
//       borderRadius: 5,
//       width: '50%',
//       marginBottom: 5,
//       width: '30%',
//       marginHorizontal: 10
//     }}>
//     <Text
//       style={{
//         fontSize: 15,
//         color: '#2d2e32',
//         paddingHorizontal: 5,
//         textAlign: 'center',
//       }}
//       onPress={() => {
//         setModalVisible(true);
//       }}>
//       Favoritos
//     </Text>
//   </TouchableOpacity>
// )}
// </View>

/***/ }),

/***/ "./src/components/Recipes/Recetas.js":
/*!*******************************************!*\
  !*** ./src/components/Recipes/Recetas.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _Receta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Receta */ "./src/components/Recipes/Receta.js");
/* harmony import */ var _Common_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Message */ "./src/components/Common/Message.js");





var Tracks = function Tracks(_ref) {
  var recetas = _ref.recetas,
      text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_Message__WEBPACK_IMPORTED_MODULE_2__.default, {
    text: text
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
    container: true,
    spacing: 3,
    justify: "center"
  }, recetas.map(function (receta) {
    var id = receta.id,
        name = receta.name,
        tiempo = receta.tiempo,
        porciones = receta.porciones,
        tipo = receta.tipo,
        etiquetas = receta.etiquetas,
        url = receta.url,
        descripcion = receta.descripcion;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Receta__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: id,
      id: id,
      name: name,
      tiempo: tiempo,
      porciones: porciones,
      tipo: tipo,
      etiquetas: etiquetas,
      url: url,
      descripcion: descripcion
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tracks);

/***/ }),

/***/ "./src/components/Recipes/index.js":
/*!*****************************************!*\
  !*** ./src/components/Recipes/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts_RecetasContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/RecetasContext */ "./src/contexts/RecetasContext.js");
/* harmony import */ var _Recetas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Recetas */ "./src/components/Recipes/Recetas.js");
/* harmony import */ var _Common_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ProgressBar */ "./src/components/Common/ProgressBar.js");
/* harmony import */ var _Common_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/Message */ "./src/components/Common/Message.js");






var Recipes = function Recipes() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_RecetasContext__WEBPACK_IMPORTED_MODULE_1__.RecetasContext),
      doneFetch = _useContext.doneFetch,
      recetas = _useContext.recetas,
      text = _useContext.text;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, doneFetch ? recetas.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Recetas__WEBPACK_IMPORTED_MODULE_2__.default, {
    text: text,
    recetas: recetas
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_Message__WEBPACK_IMPORTED_MODULE_4__.default, {
    text: text
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_ProgressBar__WEBPACK_IMPORTED_MODULE_3__.default, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Recipes);

/***/ }),

/***/ "./src/custom-hooks/useModal.js":
/*!**************************************!*\
  !*** ./src/custom-hooks/useModal.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useModal = function useModal() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var handleCloseModal = function handleCloseModal() {
    setModal(false);
  };

  var handleOpenModal = function handleOpenModal() {
    setModal(true);
  };

  return {
    modal: modal,
    handleCloseModal: handleCloseModal,
    handleOpenModal: handleOpenModal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useModal);

/***/ })

}]);
//# sourceMappingURL=src_components_Recipes_index_js.bundle.js.map