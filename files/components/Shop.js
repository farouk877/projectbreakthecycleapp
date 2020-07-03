import React,{useEffect} from 'react';
import Link from 'next/link';



const Shop = () => {
    
    useEffect(() => {
        const lightbox = GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            beforeSlideLoad: (slide, data) => {
                // Need to execute a script in the slide?
                // You can do that here...
            }
        });
    
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
        } else {
        loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
        domain: 'projectbreakthecycle.myshopify.com',
        storefrontAccessToken: '1168428bec66998f624857e467cae6a4',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
            id: '202066722981',
            node: document.getElementById('collection-component-1593741298916'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
            "product": {
                "styles": {
                "product": {
                    "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    "width": "calc(25% - 20px)"
                    },
                    "img": {
                    "height": "calc(100% - 15px)",
                    "position": "absolute",
                    "left": "0",
                    "right": "0",
                    "top": "0"
                    },
                    "imgWrapper": {
                    "padding-top": "calc(75% + 15px)",
                    "position": "relative",
                    "height": "0"
                    }
                },
                "title": {
                    "font-family": "Raleway, sans-serif",
                    "color": "#000000"
                },
                "button": {
                    "font-family": "Raleway, sans-serif",
                    "font-size": "18px",
                    "padding-top": "17px",
                    "padding-bottom": "17px",
                    ":hover": {
                    "background-color": "#c498a8"
                    },
                    "background-color": "#daa9bb",
                    ":focus": {
                    "background-color": "#c498a8"
                    },
                    "border-radius": "18px"
                },
                "quantityInput": {
                    "font-size": "18px",
                    "padding-top": "17px",
                    "padding-bottom": "17px"
                }
                },
                "contents": {
                "button": false,
                "buttonWithQuantity": true
                },
                "text": {
                "button": "Add to cart"
                },
                "googleFonts": [
                "Raleway"
                ]
            },
            "productSet": {
                "styles": {
                "products": {
                    "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                    }
                }
                }
            },
            "modalProduct": {
                "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
                },
                "styles": {
                "product": {
                    "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                    }
                },
                "button": {
                    "font-family": "Raleway, sans-serif",
                    "font-size": "18px",
                    "padding-top": "17px",
                    "padding-bottom": "17px",
                    ":hover": {
                    "background-color": "#c498a8"
                    },
                    "background-color": "#daa9bb",
                    ":focus": {
                    "background-color": "#c498a8"
                    },
                    "border-radius": "18px"
                },
                "quantityInput": {
                    "font-size": "18px",
                    "padding-top": "17px",
                    "padding-bottom": "17px"
                }
                },
                "googleFonts": [
                "Raleway"
                ],
                "text": {
                "button": "Add to cart"
                }
            },
            "option": {
                "styles": {
                "label": {
                    "color": "#a43131"
                }
                }
            },
            "cart": {
                "styles": {
                "button": {
                    "font-family": "Raleway, sans-serif",
                    "font-size": "18px",
                    "padding-top": "17px",
                    "padding-bottom": "17px",
                    ":hover": {
                    "background-color": "#c498a8"
                    },
                    "background-color": "#daa9bb",
                    ":focus": {
                    "background-color": "#c498a8"
                    },
                    "border-radius": "18px"
                }
                },
                "text": {
                "total": "Subtotal",
                "notice": "Shipping and discount codes are added at checkout. You will now be redirected to a secure gateway.",
                "button": "Checkout"
                },
                "popup": false,
                "googleFonts": [
                "Raleway"
                ]
            },
            "toggle": {
                "styles": {
                "toggle": {
                    "font-family": "Raleway, sans-serif",
                    "background-color": "#daa9bb",
                    ":hover": {
                    "background-color": "#c498a8"
                    },
                    ":focus": {
                    "background-color": "#c498a8"
                    }
                },
                "count": {
                    "font-size": "18px"
                }
                },
                "googleFonts": [
                "Raleway"
                ]
            }
            },
        });
        });
    }

    });

    return (
        <section className="gallery-area2">
            <div className="container">
                <div className="row">
 
                    <div id='collection-component-1593741298916'></div>

                </div>
            </div>
        </section>

    );
};






export default Shop;










//     var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//     if (window.ShopifyBuy) {
//       if (window.ShopifyBuy.UI) {
//         ShopifyBuyInit();
//       } else {
//         loadScript();
//       }
//     } else {
//       loadScript();
//     }
//     function loadScript() {
//       var script = document.createElement('script');
//       script.async = true;
//       script.src = scriptURL;
//       (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
//       script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//       var client = ShopifyBuy.buildClient({
//         domain: 'projectbreakthecycle.myshopify.com',
//         storefrontAccessToken: '1168428bec66998f624857e467cae6a4',
//       });
//       ShopifyBuy.UI.onReady(client).then(function (ui) {
//         ui.createComponent('collection', {
//           id: '202066722981',
//           node: document.getElementById('collection-component-1593741298916'),
//           moneyFormat: '%24%7B%7Bamount%7D%7D',
//           options: {
//     "product": {
//       "styles": {
//         "product": {
//           "@media (min-width: 601px)": {
//             "max-width": "calc(25% - 20px)",
//             "margin-left": "20px",
//             "margin-bottom": "50px",
//             "width": "calc(25% - 20px)"
//           },
//           "img": {
//             "height": "calc(100% - 15px)",
//             "position": "absolute",
//             "left": "0",
//             "right": "0",
//             "top": "0"
//           },
//           "imgWrapper": {
//             "padding-top": "calc(75% + 15px)",
//             "position": "relative",
//             "height": "0"
//           }
//         },
//         "title": {
//           "font-family": "Raleway, sans-serif",
//           "color": "#000000"
//         },
//         "button": {
//           "font-family": "Raleway, sans-serif",
//           "font-size": "18px",
//           "padding-top": "17px",
//           "padding-bottom": "17px",
//           ":hover": {
//             "background-color": "#c498a8"
//           },
//           "background-color": "#daa9bb",
//           ":focus": {
//             "background-color": "#c498a8"
//           },
//           "border-radius": "18px"
//         },
//         "quantityInput": {
//           "font-size": "18px",
//           "padding-top": "17px",
//           "padding-bottom": "17px"
//         }
//       },
//       "contents": {
//         "button": false,
//         "buttonWithQuantity": true
//       },
//       "text": {
//         "button": "Add to cart"
//       },
//       "googleFonts": [
//         "Raleway"
//       ]
//     },
//     "productSet": {
//       "styles": {
//         "products": {
//           "@media (min-width: 601px)": {
//             "margin-left": "-20px"
//           }
//         }
//       }
//     },
//     "modalProduct": {
//       "contents": {
//         "img": false,
//         "imgWithCarousel": true,
//         "button": false,
//         "buttonWithQuantity": true
//       },
//       "styles": {
//         "product": {
//           "@media (min-width: 601px)": {
//             "max-width": "100%",
//             "margin-left": "0px",
//             "margin-bottom": "0px"
//           }
//         },
//         "button": {
//           "font-family": "Raleway, sans-serif",
//           "font-size": "18px",
//           "padding-top": "17px",
//           "padding-bottom": "17px",
//           ":hover": {
//             "background-color": "#c498a8"
//           },
//           "background-color": "#daa9bb",
//           ":focus": {
//             "background-color": "#c498a8"
//           },
//           "border-radius": "18px"
//         },
//         "quantityInput": {
//           "font-size": "18px",
//           "padding-top": "17px",
//           "padding-bottom": "17px"
//         }
//       },
//       "googleFonts": [
//         "Raleway"
//       ],
//       "text": {
//         "button": "Add to cart"
//       }
//     },
//     "option": {
//       "styles": {
//         "label": {
//           "color": "#a43131"
//         }
//       }
//     },
//     "cart": {
//       "styles": {
//         "button": {
//           "font-family": "Raleway, sans-serif",
//           "font-size": "18px",
//           "padding-top": "17px",
//           "padding-bottom": "17px",
//           ":hover": {
//             "background-color": "#c498a8"
//           },
//           "background-color": "#daa9bb",
//           ":focus": {
//             "background-color": "#c498a8"
//           },
//           "border-radius": "18px"
//         }
//       },
//       "text": {
//         "total": "Subtotal",
//         "notice": "Shipping and discount codes are added at checkout. You will now be redirected to a secure gateway.",
//         "button": "Checkout"
//       },
//       "popup": false,
//       "googleFonts": [
//         "Raleway"
//       ]
//     },
//     "toggle": {
//       "styles": {
//         "toggle": {
//           "font-family": "Raleway, sans-serif",
//           "background-color": "#daa9bb",
//           ":hover": {
//             "background-color": "#c498a8"
//           },
//           ":focus": {
//             "background-color": "#c498a8"
//           }
//         },
//         "count": {
//           "font-size": "18px"
//         }
//       },
//       "googleFonts": [
//         "Raleway"
//       ]
//     }
//   },
//         });
//       });
//     };