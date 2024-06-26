/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssString: () => (/* binding */ cssString)
/* harmony export */ });
const cssString = css => {
  let result = '';
  for (const selector in css) {
    let cssProps = '';
    for (const property in css[selector]) {
      if (css[selector][property] && css[selector][property].length > 0) {
        cssProps += property + ':' + css[selector][property] + ';';
      }
    }
    result += '' !== cssProps ? selector + '{' + cssProps + '}' : '';
  }
  return result;
};

/***/ }),

/***/ "./src/dynamicCss.js":
/*!***************************!*\
  !*** ./src/dynamicCss.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./src/controls.js");

function dynamicCss(attributes) {
  const {
    uniqueId,
    itemsGap,
    titlleBgColor,
    contentBgColor,
    contentHoverBgColor,
    titleBgHover,
    titlleTextColor,
    titleTextHover,
    titleTextAlingment,
    iconPosition,
    iconColor,
    iconHoverColor,
    titlePadding,
    contentPadding,
    titleFontFamily
  } = attributes;
  let desktopCss = {
    [`.wp-block-wpdev-example-woocommerce-block .myProduct h2`]: {
      'color': 'yellow'
    },
    [`.wp-block-task-block-shapedplugin-accordion .accordion__item .accordion__title`]: {
      'background-color': 'red',
      'padding': '44px'
    }
  };
  desktopCss = (0,_controls__WEBPACK_IMPORTED_MODULE_0__.cssString)(desktopCss);
  const styling = `${desktopCss}`;
  return styling;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dynamicCss);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _dynamicCss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamicCss */ "./src/dynamicCss.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);

// import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
// import { useSelect } from '@wordpress/data';
// import { __ } from '@wordpress/i18n';
// import { useState, useEffect } from '@wordpress/element';
// import './editor.scss';

// export default function Edit({ attributes, setAttributes }) {
//     const blockProps = useBlockProps();
//     const [loading, setLoading] = useState(true);
//     const [products, setProducts] = useState([]);

//     console.log(products);

//     useEffect(() => {
//         // Fetch product prices via AJAX
//         fetch(exampleWooCommerceBlock.ajax_url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//             },
//             body: `action=fetch_product_prices&nonce=${exampleWooCommerceBlock.nonce}`,
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 setProducts(data.data);
//                 setAttributes({ productPrices: data.data });
//             } else {
//                 console.error('Failed to fetch product prices');
//             }
//             setLoading(false);
//         })
//         .catch(error => {
//             console.error('Error fetching product prices:', error);
//             setLoading(false);
//         });
//     }, []);

//     // return (
//     //     <div {...blockProps}>
//     //         <InspectorControls>
//     //             <p>Settings can go here</p>
//     //         </InspectorControls>
//     //         <div className='example-woocommerce-block'>
//     //             {products.map((product) => {
//     //                 const featuredMedia = product._embedded && product._embedded['wp:featuredmedia'] && product._embedded['wp:featuredmedia'][0];
//     //                 let price = 'N/A';

//     //                 // Check if price is available in meta data
//     //                 if (product.meta_data) {
//     //                     const priceMeta = product.meta_data.find(meta => meta.key === '_price');
//     //                     if (priceMeta) {
//     //                         price = priceMeta.value;
//     //                     }
//     //                 }

//     //                 return (
//     //                     <div key={product.id} className="myProduct">
//     //                             {featuredMedia && <img src={featuredMedia.source_url} alt={product.title.rendered} />}
//     //                             <h2>{product.title.rendered}</h2>
//     //                         <span className="price">{price}</span>
//     //                         <button className='add_to_cart_button wp-element-button '>Add to cart</button>
//     //                     </div>
//     //                 );
//     //             })}
//     //         </div>
//     //     </div>
//     // );

//     return (
//         <div {...blockProps}>
//             <div className="example-woocommerce-block">
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     products.length > 0 ? (
//                         products.map((product) => (
//                             <div key={product.id} className="myProduct">
//                                 <div dangerouslySetInnerHTML={{ __html: product.thumbnail }}></div>
//                                 <h2>{product.title}</h2>
//                                 <span className="price" dangerouslySetInnerHTML={{ __html: product.price }}></span>
//                                 <button className='add_to_cart_button wp-element-button '>Add to cart</button>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No products found</p>
//                     )
//                 )}
//             </div>
//         </div>
//     );
// };









function Edit({
  attributes,
  setAttributes
}) {
  const {
    postPerPage,
    orderBy,
    order,
    showOnSaleRibbon,
    showAverageRatings,
    frontendCss
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('general');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setAttributes({
      frontendCss: JSON.stringify((0,_dynamicCss__WEBPACK_IMPORTED_MODULE_6__["default"])(attributes))
    });
  }, [attributes]);

  // Fetch product data using wp.data.select
  const products = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select('core').getEntityRecords('postType', 'product', {
      per_page: postPerPage,
      orderby: orderBy,
      order: order,
      _embed: true
    });
  }, [postPerPage, orderBy, order]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (products === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [products]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TabPanel, {
    className: "example-woocommerce-block-tab-panel",
    activeClass: "example-woocommerce-block-active-tab",
    onSelect: tabName => setActiveTab(tabName),
    activeTab: activeTab,
    tabs: [{
      name: 'general',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "example-woocommerce-block-tab-panel-title"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M10 10.15a2.613 2.613 0 0 0 2.505-1.87h1.832V6.785h-1.832a2.613 2.613 0 0 0-5.01 0H.803V8.28h6.692A2.613 2.613 0 0 0 10 10.15Zm0-3.74c.617 0 1.122.506 1.122 1.123 0 .616-.505 1.121-1.122 1.121a1.125 1.125 0 0 1-1.122-1.121c0-.617.505-1.122 1.122-1.122Z"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M5.14 14.45a2.613 2.613 0 0 0 2.505-1.87h6.692v-1.496H7.645a2.613 2.613 0 0 0-5.01 0H.803v1.496h1.832a2.613 2.613 0 0 0 2.505 1.87Zm0-3.74c.617 0 1.121.505 1.121 1.122 0 .617-.504 1.122-1.121 1.122a1.125 1.125 0 0 1-1.122-1.122c0-.617.505-1.122 1.122-1.122ZM5.14 6.037a2.613 2.613 0 0 0 2.505-1.87h6.692V2.673H7.645a2.613 2.613 0 0 0-5.01 0H.803v1.496h1.832A2.613 2.613 0 0 0 5.14 6.037Zm0-3.739c.617 0 1.121.505 1.121 1.122 0 .617-.504 1.121-1.121 1.121A1.125 1.125 0 0 1 4.018 3.42c0-.617.505-1.122 1.122-1.122Z"
      })), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('General', 'example-woocommerce-block')),
      className: 'general-tab'
    }, {
      name: 'styles',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "example-woocommerce-block-tab-panel-title"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 18,
        height: 16,
        fill: "none"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fillRule: "evenodd",
        d: "M9.845 6.994c-.438 0-.876.17-1.21.504-.67.669-1.043 2.67-2.646 3.597 1.914.14 3.635.107 5.068-1.176.704-.631.669-1.752 0-2.421a1.707 1.707 0 0 0-1.21-.504h-.002Z",
        clipRule: "evenodd"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M15.805 4.928v8.886c0 .184-.218.454-.402.454H1.627c-.184 0-.427-.27-.427-.454V6.947l2.892-.019c.605-.004.902-.22.909-.824l.055-2.84h8.187l1.294-1.348-9.885-.011L0 6.306v7.508c0 .899.728 1.655 1.627 1.655h13.776c.899 0 1.602-.756 1.602-1.655V3.634l-1.2 1.294Z"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fillRule: "evenodd",
        d: "M17.137 1.393 12 6.531l5.138-5.138Z",
        clipRule: "evenodd"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fillRule: "evenodd",
        d: "M12 7.393a.863.863 0 0 1-.61-1.472L16.528.784a.863.863 0 0 1 1.22 1.22L12.61 7.14a.86.86 0 0 1-.61.252Z",
        clipRule: "evenodd"
      })), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Styles', 'example-woocommerce-block')),
      className: 'styles-tab'
    }]
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, tab.name === 'general' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "example-woocommerce-block-tabs-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post per page', 'example-woocommerce-block'),
    value: postPerPage,
    onChange: value => setAttributes({
      postPerPage: value
    }),
    min: 2,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Orderby', 'example-woocommerce-block'),
    value: orderBy,
    onChange: value => setAttributes({
      orderBy: value
    }),
    options: [{
      value: '',
      label: 'Orderby',
      disabled: true
    }, {
      value: 'date',
      label: 'Date'
    }, {
      value: 'title',
      label: 'Name'
    }, {
      value: 'rand',
      label: 'Random'
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "example-woocommerce-block-sidebar-label-text"
  }, "Order"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "example-woocommerce-block-button-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    className: `example-woocommerce-block-sidebar-button ${order == "asc" ? 'active-button' : ''}`,
    onClick: () => setAttributes({
      order: "asc"
    })
  }, "Ascending"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    className: `example-woocommerce-block-sidebar-button ${order == "desc" ? 'active-button' : ''}`,
    onClick: () => setAttributes({
      order: "desc"
    })
  }, "Descending")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show On Sale Ribbon'),
    help: showOnSaleRibbon ? 'Disable to hide on sale ribbon.' : 'Enable to show on sale ribon.',
    checked: showOnSaleRibbon,
    onChange: newValue => {
      setAttributes({
        showOnSaleRibbon: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Average Ratings'),
    help: showAverageRatings ? 'Disable to hide average ratings.' : 'Enable to show average ratings.',
    checked: showAverageRatings,
    onChange: newValue => {
      setAttributes({
        showAverageRatings: newValue
      });
    }
  })), tab.name === 'styles' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "styles")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, (0,_dynamicCss__WEBPACK_IMPORTED_MODULE_6__["default"])(attributes)), loading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Loading...") : products && products.length > 0 ? products.map(product => {
    const featuredMedia = product._embedded && product._embedded['wp:featuredmedia'] && product._embedded['wp:featuredmedia'][0];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: product.id,
      className: "myProduct"
    }, featuredMedia && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: featuredMedia.source_url,
      alt: product.title.rendered
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "product-name"
    }, product.title.rendered), exampleWooCommerceBlock.productsMeta.map((v, i) => {
      if (v.id === product.id) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "price",
          dangerouslySetInnerHTML: {
            __html: v.price
          }
        }), showAverageRatings && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "example-woocommerce-block-rating-area"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "empty-icons"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          class: "far fa-star"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          class: "far fa-star"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          class: "far fa-star"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          class: "far fa-star"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          class: "far fa-star"
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            width: `${v.rating / 5 * 100}%`
          },
          className: "filled-icons"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          class: "fas fa-star"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          class: "fas fa-star"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          class: "fas fa-star"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          class: "fas fa-star"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          class: "fas fa-star"
        })))), v.onSale && showOnSaleRibbon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "on-sale-label"
        }, "On Sale!"));
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "add_to_cart_button wp-element-button"
    }, "Add to cart"));
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "No products found"));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wpdev/example-woocommerce-block","version":"0.1.0","title":"Example WooCommerce Block","category":"widgets","icon":"slides","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false,"align":["wide","full"]},"attributes":{"frontendCss":{"type":"string","default":""},"productPrices":{"type":"array","default":[]},"postPerPage":{"type":"number","default":5},"orderBy":{"type":"string","default":"date"},"order":{"type":"string","default":"asc"},"showOnSaleRibbon":{"type":"boolean","default":true},"showAverageRatings":{"type":"boolean","default":true}},"textdomain":"example-woocommerce-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkexample_dynamic_block"] = globalThis["webpackChunkexample_dynamic_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map