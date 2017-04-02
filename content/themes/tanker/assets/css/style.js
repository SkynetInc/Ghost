import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "mission": {
        "paddingTop": 30,
        "paddingRight": "!important",
        "paddingBottom": 30,
        "paddingLeft": "!important"
    },
    "full-height": {
        "height": "100%"
    },
    "full-height body": {
        "height": "100%"
    },
    "body": {
        "background": "#f0f4f7",
        "color": "#7e8596",
        "fontFamily": "'Roboto', sans-serif",
        "fontSize": 14,
        "fontWeight": "400",
        "lineHeight": 24,
        "WebkitFontSmoothing": "antialiased",
        "WebkitTextSizeAdjust": "100%"
    },
    "h1": {
        "color": "#1a1a1a",
        "fontSize": 46,
        "lineHeight": 56,
        "marginTop": 30,
        "marginBottom": 24
    },
    "h2": {
        "color": "#1a1a1a",
        "fontSize": 36,
        "lineHeight": 46,
        "marginTop": 38,
        "marginBottom": 24
    },
    "h3": {
        "color": "#1a1a1a",
        "fontSize": 30,
        "lineHeight": 40,
        "marginTop": 30,
        "marginBottom": 24
    },
    "h4": {
        "color": "#1a1a1a",
        "fontSize": 24,
        "lineHeight": 34,
        "marginTop": 28,
        "marginBottom": 24
    },
    "h5": {
        "color": "#1a1a1a",
        "fontSize": 18,
        "lineHeight": 28,
        "marginTop": 26,
        "marginBottom": 24
    },
    "h6": {
        "color": "#1a1a1a",
        "fontSize": 16,
        "lineHeight": 26,
        "marginTop": 24,
        "marginBottom": 24
    },
    "a": {
        "color": "#f16468",
        "transition": "color .3s ease"
    },
    "a:hover": {
        "color": "#f16468",
        "textDecoration": "underline"
    },
    "a:focus": {
        "outline": "none",
        "textDecoration": "none"
    },
    "blockquote": {
        "borderLeft": "6px solid #f16468",
        "fontSize": 16,
        "fontStyle": "italic",
        "fontWeight": "300",
        "lineHeight": 32,
        "marginTop": 24,
        "marginRight": 0,
        "marginBottom": 24,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 50,
        "position": "relative"
    },
    "blockquote:before": {
        "content": "",
        "borderLeft": "2px solid #f16468",
        "height": "100%",
        "position": "absolute",
        "top": 0,
        "left": 4
    },
    "img": {
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "input[type=\"text\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none"
    },
    "input[type=\"email\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none"
    },
    "button:focus": {
        "outline": "none"
    },
    "text-bold": {
        "fontWeight": "600"
    },
    "text-white": {
        "color": "#fff"
    },
    "text-dark": {
        "color": "#1a1a1a"
    },
    "::-moz-selection": {
        "background": "#858b9b",
        "color": "#fff"
    },
    "::selection": {
        "background": "#858b9b",
        "color": "#fff"
    },
    "::-webkit-input-placeholder": {
        "color": "#7e8596"
    },
    "::-moz-placeholder": {
        "color": "#7e8596"
    },
    ":-moz-placeholder": {
        "color": "#7e8596"
    },
    ":-ms-input-placeholder": {
        "color": "#7e8596"
    },
    "btn": {
        "background": "#7e8596",
        "border": "1px solid #7e8596",
        "borderRadius": 40,
        "color": "#fff",
        "fontSize": 16,
        "fontWeight": "300",
        "lineHeight": 28,
        "paddingTop": 8,
        "paddingRight": 30,
        "paddingBottom": 8,
        "paddingLeft": 30,
        "position": "relative",
        "overflow": "hidden",
        "transition": "background .6s ease, border .6s ease, color .6s ease"
    },
    "btn i": {
        "marginLeft": 20
    },
    "btn:hover": {
        "background": "#f16468",
        "borderColor": "#f16468",
        "color": "#fff"
    },
    "btn:focus": {
        "boxShadow": "none",
        "color": "#fff",
        "outline": "none"
    },
    "btn-dark": {
        "background": "#1a1a1a",
        "borderColor": "#1a1a1a"
    },
    "btn-green": {
        "background": "#39c283",
        "borderColor": "#39c283"
    },
    "btn-green:hover": {
        "background": "#3cd5ad",
        "borderColor": "#3cd5ad",
        "color": "#fff"
    },
    "btn-red": {
        "background": "#f16468",
        "borderColor": "#f16468"
    },
    "btn-red:hover": {
        "background": "#f47a92",
        "borderColor": "#f47a92",
        "color": "#fff"
    },
    "btn-blue": {
        "background": "#2a96f6",
        "borderColor": "#2a96f6"
    },
    "btn-blue:hover": {
        "background": "#45a5fb",
        "borderColor": "#45a5fb",
        "color": "#fff"
    },
    "btn-blue2": {
        "background": "#DE322E",
        "borderColor": "#DE322E"
    },
    "btn-blue2:hover": {
        "background": "#01bad4",
        "borderColor": "#01bad4",
        "color": "#fff"
    },
    "btn-no-fill": {
        "background": "transparent",
        "color": "#7e8596"
    },
    "btn-no-fill:hover": {
        "background": "transparent",
        "color": "#f16468"
    },
    "btn-no-fill:focus": {
        "borderColor": "#f16468",
        "color": "#f16468"
    },
    "btn-no-fill-black": {
        "borderColor": "#1a1a1a",
        "color": "#1a1a1a"
    },
    "btn-no-fill-black:focus": {
        "borderColor": "#1a1a1a",
        "color": "#1a1a1a"
    },
    "btn-no-fill-black:hover": {
        "background": "#1a1a1a",
        "borderColor": "#1a1a1a",
        "color": "#fff"
    },
    "btn-no-fill-white": {
        "borderColor": "#fff",
        "color": "#fff"
    },
    "btn-no-fill-white:focus": {
        "borderColor": "#fff",
        "color": "#fff"
    },
    "btn-no-fill-white:hover": {
        "background": "#fff",
        "borderColor": "#fff",
        "color": "#1a1a1a"
    },
    "btn-small": {
        "fontSize": 14,
        "fontWeight": "300",
        "lineHeight": 24,
        "paddingTop": 4,
        "paddingRight": 28,
        "paddingBottom": 4,
        "paddingLeft": 28
    },
    "btn-big": {
        "borderWidth": 2,
        "fontSize": 18,
        "fontWeight": "400",
        "lineHeight": 28,
        "paddingTop": 14,
        "paddingRight": 60,
        "paddingBottom": 14,
        "paddingLeft": 60
    },
    "btn-big:hover": {
        "borderWidth": 2
    },
    "btn-white": {
        "background": "#fff",
        "borderColor": "#fff",
        "color": "#1a1a1a"
    },
    "btn-white:hover": {
        "background": "transparent",
        "borderColor": "#fff",
        "color": "#fff"
    },
    "btn-load": {
        "backgroundColor": "transparent",
        "border": "1px solid #7e8596",
        "color": "#7e8596",
        "fontWeight": "400",
        "marginTop": 100,
        "paddingTop": 15,
        "paddingRight": 60,
        "paddingBottom": 15,
        "paddingLeft": 60
    },
    "btn-load:hover": {
        "background": "#7e8596",
        "borderColor": "#7e8596",
        "color": "#fff"
    },
    "btn-load:focus": {
        "background": "#7e8596",
        "color": "#fff"
    },
    "btn-full": {
        "width": "100%"
    },
    "btn-no-radius": {
        "borderRadius": 2,
        "fontSize": 16,
        "fontWeight": "600",
        "marginTop": 40,
        "marginBottom": 60,
        "textTransform": "uppercase"
    },
    "btndisabled": {
        "cursor": "default",
        "opacity": 1
    },
    "btn[disabled]": {
        "cursor": "default",
        "opacity": 1
    },
    "fieldset[disabled] btn": {
        "cursor": "default",
        "opacity": 1
    },
    "btndisabled:focus": {
        "outline": "none"
    },
    "btn[disabled]:focus": {
        "outline": "none"
    },
    "fieldset[disabled] btn:focus": {
        "outline": "none"
    },
    "form-control-style": {
        "backgroundColor": "#fff",
        "border": 0,
        "borderBottom": "2px solid #7e8596",
        "borderRadius": 0,
        "boxShadow": "none",
        "height": 60,
        "paddingLeft": 20,
        "paddingRight": 20
    },
    "form-control-style:focus": {
        "backgroundColor": "#fff",
        "border": 0,
        "borderBottom": "2px solid #1a1a1a",
        "borderRadius": 0,
        "boxShadow": "none",
        "color": "#1a1a1a",
        "height": 60,
        "paddingLeft": 20,
        "paddingRight": 20
    },
    "textareaform-control-style": {
        "paddingTop": 20,
        "paddingBottom": 20,
        "resize": "none",
        "MsOverflowStyle": "none"
    },
    "has-error form-control": {
        "background": "transparent",
        "border": 0,
        "borderBottom": "2px solid #f16468",
        "color": "#f16468",
        "boxShadow": "none",
        "WebkitTransition": "all .3s ease",
        "transition": "all .3s ease"
    },
    "has-error form-control:focus": {
        "background": "transparent",
        "border": 0,
        "borderBottom": "2px solid #f16468",
        "color": "#f16468",
        "boxShadow": "none",
        "WebkitTransition": "all .3s ease",
        "transition": "all .3s ease"
    },
    "form-control-style::-webkit-input-placeholder": {
        "color": "#7e8596"
    },
    "form-control-style::-moz-placeholder": {
        "color": "#7e8596"
    },
    "form-control-style:-moz-placeholder": {
        "color": "#7e8596"
    },
    "form-control-style:-ms-input-placeholder": {
        "color": "#7e8596"
    },
    "form-control-style:focus::-webkit-input-placeholder": {
        "color": "#1a1a1a"
    },
    "form-control-style:focus::-moz-placeholder": {
        "color": "#1a1a1a"
    },
    "form-control-style:focus:-moz-placeholder": {
        "color": "#1a1a1a"
    },
    "form-control-style:focus:-ms-input-placeholder": {
        "color": "#1a1a1a"
    },
    "base-header": {
        "background": "#fff",
        "position": "relative",
        "zIndex": 99
    },
    "header-top": {
        "paddingTop": 30,
        "paddingBottom": 30
    },
    "fixed-header": {
        "boxShadow": "0 0 10px rgba(81, 61, 174, 0.10)",
        "position": "fixed",
        "width": "100%",
        "zIndex": 20,
        "top": 0,
        "transition": "all 500ms cubic-bezier(0.445, 0.050, 0.550, 0.950)",
        "transitionTimingFunction": "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    },
    "row-logo": {
        "opacity": 1,
        "transition": "all .3s ease-in-out",
        "position": "relative",
        "zIndex": 1
    },
    "sticky": {
        "top": -100
    },
    "sticky row-logo": {
        "visibility": "hidden",
        "opacity": 0
    },
    "sticky main-nav": {
        "borderWidth": 0
    },
    "logo": {
        "background": "#fff",
        "marginTop": -12,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "relative",
        "top": 36,
        "textAlign": "center",
        "zIndex": 1,
        "maxWidth": 200
    },
    "logo img": {
        "width": "100%"
    },
    "btn-header": {
        "paddingTop": 33,
        "paddingBottom": 33
    },
    "btn-header btn": {
        "marginRight": 20
    },
    "btn-header btn-no-fill": {
        "marginRight": 0
    },
    "main-nav": {
        "background": "#fff",
        "border": 0,
        "borderTop": "1px solid #e0e7ed",
        "borderRadius": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textTransform": "uppercase"
    },
    "main-nav navbar-nav": {
        "display": "block",
        "float": "none",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "main-nav navbar-collapse": {
        "border": 0,
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "main-nav navbar-toggle": {
        "borderColor": "#e0e7ed",
        "backgroundColor": "#fff",
        "float": "left",
        "marginTop": 32,
        "width": "100%"
    },
    "main-nav navbar-toggle:hover": {
        "borderColor": "#f16468",
        "backgroundColor": "#fff"
    },
    "main-nav navbar-toggle:focus": {
        "borderColor": "#f16468",
        "backgroundColor": "#fff"
    },
    "main-nav navbar-toggle:hover > icon-bar": {
        "backgroundColor": "#f16468"
    },
    "main-nav navbar-toggle:focus > icon-bar": {
        "backgroundColor": "#f16468"
    },
    "main-nav navbar-toggle icon-bar": {
        "backgroundColor": "#7e8596"
    },
    "main-nav navbar-nav > li > a": {
        "color": "#1a1a1a",
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 25
    },
    "main-nav navbar-nav open dropdown-menu > li > a": {
        "color": "#1a1a1a"
    },
    "main-nav navbar-nav > li:first-child > a": {
        "paddingLeft": 0
    },
    "main-nav navbar-nav > li:last-child > a": {
        "paddingRight": 0
    },
    "main-nav navbar-nav > li > a:hover": {
        "background": "transparent",
        "color": "#f16468"
    },
    "main-nav navbar-nav > li > a:focus": {
        "background": "transparent",
        "color": "#f16468"
    },
    "main-nav navbar-nav > open > a": {
        "background": "transparent",
        "color": "#f16468"
    },
    "main-nav navbar-nav nav open > a": {
        "background": "transparent",
        "color": "#f16468"
    },
    "nav open > a:focus": {
        "background": "transparent",
        "color": "#f16468"
    },
    "nav open > a:hover": {
        "background": "transparent",
        "color": "#f16468"
    },
    "main-nav navbar-nav open dropdown-menu > li > a:hover": {
        "background": "transparent",
        "color": "#f16468"
    },
    "main-nav navbar-nav > li > adropdown-toggle:focus": {
        "background": "transparent",
        "color": "#f16468"
    },
    "main-nav dropdown-toggle i": {
        "marginLeft": 8
    },
    "main-nav navbar-nav dropdown dropdown-menu": {
        "backgroundColor": "#fff",
        "border": 0,
        "borderTop": "0px solid #fff",
        "borderRadius": 0,
        "boxShadow": "0 6px 10px rgba(81, 61, 174, 0.16)",
        "minWidth": 260,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "transition": "background .6s ease"
    },
    "main-nav dropdown-menu a": {
        "paddingTop": 8,
        "paddingRight": 23,
        "paddingBottom": 8,
        "paddingLeft": 23
    },
    "main-nav dropdown-menu li:last-child a": {
        "borderBottom": 0
    },
    "main-nav dropdown-menu a:hover": {
        "background": "transparent",
        "borderLeft": "4px solid #f16468",
        "color": "#f16468"
    },
    "dropdown-menuanimated": {
        "WebkitAnimationDuration": "0.55s",
        "animationDuration": "0.55s",
        "WebkitAnimationTimingFunction": "ease",
        "animationTimingFunction": "ease"
    },
    "particles-js canvas": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "height": "100%",
        "width": "100%"
    },
    "main-slider": {
        "backgroundSize": "cover",
        "position": "relative"
    },
    "main-slider-image": {
        "backgroundColor": "#fff",
        "backgroundImage": "url(../images/bg-header.jpg)",
        "backgroundAttachment": "fixed",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "height": "100%"
    },
    "main-slider vertical-center": {
        "paddingTop": 220
    },
    "touch main-slider-image": {
        "backgroundAttachment": "scroll"
    },
    "main-slider-image:before": {
        "content": "",
        "backgroundColor": "rgba(49, 54, 76, 0.3)",
        "height": "100%",
        "position": "absolute",
        "top": 0,
        "width": "100%"
    },
    "image-slider:before": {
        "content": "",
        "backgroundColor": "rgba(49, 54, 76, 0.3)",
        "height": "100%",
        "position": "absolute",
        "top": 0,
        "width": "100%"
    },
    "main-slider-image heading": {
        "fontWeight": "300",
        "marginTop": 0
    },
    "main-slidercarousel heading": {
        "fontWeight": "300",
        "marginTop": 0
    },
    "main-slidercarousel": {
        "height": "100%"
    },
    "image-slider": {
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat"
    },
    "carousel-fade carousel-inner item": {
        "opacity": 0,
        "transitionProperty": "opacity",
        "transition": "opacity .3s ease"
    },
    "carousel-fade carousel-inner active": {
        "opacity": 1
    },
    "carousel-fade carousel-inner activeleft": {
        "left": 0,
        "opacity": 0,
        "zIndex": 1
    },
    "carousel-fade carousel-inner activeright": {
        "left": 0,
        "opacity": 0,
        "zIndex": 1
    },
    "carousel-fade carousel-inner nextleft": {
        "opacity": 1
    },
    "carousel-fade carousel-inner prevright": {
        "opacity": 1
    },
    "carousel-fade carousel-control": {
        "zIndex": 2
    },
    "carousel-fade carousel-inner > itemnext": {
        "opacity": 0,
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "carousel-fade carousel-inner > itemactiveright": {
        "opacity": 0,
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "carousel-fade carousel-inner > itemprev": {
        "opacity": 0,
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "carousel-fade carousel-inner > itemactiveleft": {
        "opacity": 0,
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "carousel-fade carousel-inner > itemnextleft": {
        "opacity": 1,
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "carousel-fade carousel-inner > itemprevright": {
        "opacity": 1,
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "carousel-fade carousel-inner > itemactive": {
        "opacity": 1,
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "carousel-indicators active": {
        "width": 16,
        "height": 16,
        "marginTop": 4,
        "marginRight": 4,
        "marginBottom": 4,
        "marginLeft": 4,
        "backgroundColor": "#fff",
        "opacity": 1
    },
    "carousel-indicators li": {
        "display": "inline-block",
        "width": 16,
        "height": 16,
        "marginTop": 4,
        "marginRight": 4,
        "marginBottom": 4,
        "marginLeft": 4,
        "textIndent": -999,
        "cursor": "pointer",
        "border": "4px solid #fff",
        "borderRadius": 10,
        "opacity": 0.8
    },
    "main-slider-static row": {
        "paddingTop": 100,
        "paddingBottom": 100,
        "position": "relative",
        "zIndex": 1
    },
    "main-slider h1": {
        "fontSize": 54,
        "fontWeight": "600",
        "lineHeight": 66,
        "marginTop": 110,
        "textTransform": "uppercase"
    },
    "slogan": {
        "fontSize": 18,
        "fontWeight": "300",
        "lineHeight": 28
    },
    "btn-group-slider": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "btn-group-slider btn": {
        "border": "2px solid #7e8596",
        "fontSize": 16,
        "fontWeight": "400",
        "lineHeight": 26,
        "marginRight": 26,
        "paddingTop": 8,
        "paddingRight": 28,
        "paddingBottom": 8,
        "paddingLeft": 28
    },
    "btn-group-slider btn:last-child": {
        "marginRight": 0
    },
    "animation-angle-right": {
        "WebkitAnimation": "animation-angle-right linear 1.4s infinite both",
        "animation": "animation-angle-right linear 1.4s infinite both"
    },
    "vertical-center": {
        "display": "table",
        "height": "100%",
        "position": "absolute",
        "overflow": "hidden",
        "width": "100%"
    },
    "vertical-center row": {
        "display": "table-cell",
        "verticalAlign": "middle",
        "position": "relative",
        "zIndex": 1
    },
    "btn-arrow-next": {
        "display": "block",
        "bottom": 30,
        "left": 0,
        "right": 0,
        "opacity": 1,
        "marginTop": 50,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "height": 40,
        "width": 40,
        "zIndex": 2,
        "WebkitAnimation": "pointDown 0.6s 0.6s ease-in infinite alternate forwards",
        "animation": "pointDown 0.6s 0.6s ease-in infinite alternate forwards",
        "fill": "#fff"
    },
    "btn-arrow-next svg": {
        "width": 2
    },
    "btn-arrow-next path": {
        "WebkitTransition": "fill 0.3s",
        "transition": "fill 0.3s",
        "fill": "inherit"
    },
    "btn-arrow-next:hover": {
        "fill": "#DE322E",
        "outline": "none"
    },
    "btn-arrow-next:focus": {
        "fill": "#ffffff",
        "outline": "none"
    },
    "bread-crumbs a": {
        "color": "#fff"
    },
    "breadcrumb": {
        "background": "transparent",
        "color": "#fff",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 38,
        "marginBottom": 38
    },
    "breadcrumb>active": {
        "color": "#fff",
        "opacity": 0.8
    },
    "breadcrumb>li+li:before": {
        "color": "#fff",
        "paddingTop": 0,
        "paddingRight": 7,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "content": "-"
    },
    "list-socials": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "list-socials li > a": {
        "border": "1px solid #7e8596",
        "borderRadius": "50%",
        "display": "inline-block",
        "height": 34,
        "width": 34,
        "paddingTop": 4,
        "textAlign": "center",
        "transition": "all .3s ease"
    },
    "list-socials li > a:hover": {
        "borderColor": "#f16468"
    },
    "search-form": {
        "position": "relative"
    },
    "search": {
        "marginTop": 0,
        "marginBottom": 0,
        "position": "relative"
    },
    "search form-control": {
        "background": "transparent",
        "boxShadow": "none",
        "border": "2px solid #f16468",
        "borderRadius": 30,
        "color": "#f16468",
        "height": "auto",
        "paddingTop": 8,
        "paddingRight": 100,
        "paddingBottom": 8,
        "paddingLeft": 20,
        "width": "100%"
    },
    "search form-control::-webkit-input-placeholder": {
        "color": "#f16468"
    },
    "search form-control::-moz-placeholder": {
        "color": "#f16468"
    },
    "search form-control:-moz-placeholder": {
        "color": "#f16468"
    },
    "search form-control:-ms-input-placeholder": {
        "color": "#f16468"
    },
    "search button": {
        "background": "transparent",
        "border": 0,
        "color": "#f16468",
        "fontWeight": "600",
        "height": 42,
        "position": "absolute",
        "top": 0,
        "right": 20,
        "textTransform": "uppercase"
    },
    "search button:hover": {
        "opacity": 0.8
    },
    "search-results": {
        "listStyle": "none",
        "position": "absolute",
        "background": "rgba(255,255,255,0.85)",
        "top": 38,
        "width": "auto",
        "marginTop": 0,
        "marginRight": 30,
        "marginBottom": 0,
        "marginLeft": 30,
        "border": "2px solid #f16468",
        "display": "none"
    },
    "search-results ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "search-results li": {
        "borderBottom": "1px solid #cecece",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "display": "block",
        "float": "none",
        "overflow": "hidden"
    },
    "search-results a:hover": {
        "textDecoration": "none",
        "color": "#1a1a1a"
    },
    "section": {
        "paddingTop": 120,
        "paddingRight": 0,
        "paddingBottom": 120,
        "paddingLeft": 0
    },
    "section-white": {
        "backgroundColor": "#fff"
    },
    "section-blue": {
        "backgroundColor": "#00ace6",
        "color": "#fff"
    },
    "section-blue-soft": {
        "background": "#89daf6",
        "color": "#fff"
    },
    "section-red": {
        "backgroundColor": "#f16468",
        "color": "#fff"
    },
    "section-green": {
        "backgroundColor": "#3dd6b0",
        "color": "#fff"
    },
    "title-section": {
        "fontSize": 46,
        "lineHeight": 56,
        "marginTop": 0,
        "paddingBottom": 18,
        "position": "relative",
        "color": "#fff"
    },
    "title-section-left": {
        "fontSize": 46,
        "lineHeight": 56,
        "marginTop": 0,
        "paddingBottom": 18,
        "position": "relative",
        "color": "#fff"
    },
    "title-section-details": {
        "fontSize": 18,
        "fontWeight": "300",
        "lineHeight": 30,
        "marginBottom": 10,
        "paddingTop": 10
    },
    "title-section:before": {
        "content": "",
        "borderBottom": "1px solid #1a1a1a",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "right": 0,
        "width": 80
    },
    "title-section-left:before": {
        "content": "",
        "borderBottom": "1px solid #1a1a1a",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "right": 0,
        "width": 80
    },
    "section-salutation": {
        "position": "relative"
    },
    "section-salutation:after": {
        "content": "",
        "backgroundColor": "#31364c",
        "position": "absolute",
        "height": "100%",
        "width": "50%",
        "top": 0,
        "right": 0
    },
    "text-salutation": {
        "paddingTop": 100,
        "paddingRight": 40,
        "paddingBottom": 100,
        "paddingLeft": 0
    },
    "section-salutation img-responsive": {
        "position": "relative",
        "zIndex": 1
    },
    "our-steps img": {
        "width": 128,
        "height": 128
    },
    "our-steps h4": {
        "marginTop": 30,
        "marginBottom": 20,
        "letterSpacing": 2,
        "textTransform": "uppercase"
    },
    "filter-item": {
        "marginBottom": 54,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "filter-item li": {
        "display": "inline-block",
        "fontWeight": "500",
        "paddingRight": 20,
        "paddingLeft": 20,
        "marginBottom": 16,
        "textTransform": "uppercase"
    },
    "filter-item li > a": {
        "color": "#1a1a1a",
        "textDecoration": "none"
    },
    "filter-item li > a:hover": {
        "color": "#f16468"
    },
    "filter-item active > a": {
        "background": "#f16468",
        "borderRadius": 4,
        "color": "#fff",
        "cursor": "default",
        "paddingTop": 6,
        "paddingRight": 15,
        "paddingBottom": 6,
        "paddingLeft": 15
    },
    "filter-item active > a:hover": {
        "background": "#f16468",
        "borderRadius": 4,
        "color": "#fff",
        "cursor": "default",
        "paddingTop": 6,
        "paddingRight": 15,
        "paddingBottom": 6,
        "paddingLeft": 15
    },
    "item-project": {
        "background": "#fff",
        "borderRadius": 4,
        "marginBottom": 30,
        "overflow": "hidden",
        "textAlign": "center"
    },
    "item-project cover": {
        "background": "#e0e4e8",
        "border": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "relative",
        "height": 270
    },
    "no-touch item-project cover": {
        "cursor": "default"
    },
    "touch item-project cover": {
        "cursor": "pointer"
    },
    "fit": {
        "height": 270,
        "overflow": "hidden",
        "position": "relative"
    },
    "img-cover": {
        "width": "100%",
        "height": "100%",
        "objectFit": "cover"
    },
    "item-project cover:before": {
        "content": "",
        "background": "rgba(0, 172, 230, 0.5)",
        "borderRadius": "4px 4px 0 0",
        "height": "100%",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "opacity": 0,
        "width": "100%",
        "transition": "opacity .6s ease",
        "zIndex": 1
    },
    "item-project cover:hover:before": {
        "opacity": 1
    },
    "item-project cover badge": {
        "background": "#fff",
        "borderRadius": "50%",
        "display": "block",
        "height": 60,
        "marginLeft": "auto",
        "marginRight": "auto",
        "position": "absolute",
        "left": 0,
        "right": 0,
        "bottom": -30,
        "width": 60,
        "transition": "bottom .6s ease",
        "zIndex": 1,
        "pointerEvents": "none"
    },
    "item-project cover badge:before": {
        "content": "",
        "borderTop": "1px solid #1a1a1a",
        "height": 1,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "position": "absolute",
        "left": 0,
        "right": 0,
        "top": 0,
        "bottom": 0,
        "width": 17
    },
    "item-project cover badge:after": {
        "content": "",
        "borderTop": "1px solid #1a1a1a",
        "height": 17,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "position": "absolute",
        "left": 0,
        "right": 0,
        "top": 0,
        "bottom": 0,
        "width": 1,
        "borderLeft": "1px solid #1a1a1a"
    },
    "item-project cover badge:hover:before": {
        "borderColor": "#00ace6"
    },
    "item-project cover badge:hover:after": {
        "borderColor": "#00ace6"
    },
    "item-project cover:hover badge": {
        "marginTop": "auto",
        "marginBottom": "auto",
        "top": 0,
        "bottom": 0,
        "pointerEvents": "auto"
    },
    "badge svg": {
        "top": 0,
        "left": 0
    },
    "item-project caption": {
        "paddingTop": 22,
        "paddingRight": 30,
        "paddingBottom": 22,
        "paddingLeft": 30
    },
    "item-project h3": {
        "fontSize": 16,
        "lineHeight": 28,
        "marginTop": 0,
        "marginBottom": 5,
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis"
    },
    "item-project h3 a": {
        "color": "#1a1a1a"
    },
    "item-project a": {
        "color": "#7e8596"
    },
    "item-project a:hover": {
        "color": "#f16468",
        "textDecoration": "none"
    },
    "item-project details": {
        "fontSize": 12,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "project-single": {
        "paddingBottom": 100
    },
    "full-image-project": {
        "background": "#f0f4f7",
        "maxHeight": 800,
        "overflow": "hidden",
        "textAlign": "center"
    },
    "full-image-project img": {
        "maxHeight": 800,
        "width": "100%",
        "objectFit": "cover"
    },
    "project-single carousel-indicators li": {
        "background": "#696f7e",
        "border": 0,
        "height": 16,
        "marginTop": 0,
        "marginRight": 4,
        "marginBottom": 0,
        "marginLeft": 4,
        "opacity": 0.5,
        "width": 16
    },
    "project-single carousel-indicators active": {
        "background": "#f16468",
        "height": 16,
        "marginTop": 0,
        "marginRight": 4,
        "marginBottom": 0,
        "marginLeft": 4,
        "opacity": 1,
        "width": 16
    },
    "project-single carousel-controlleft": {
        "backgroundImage": "none",
        "backgroundColor": "#fff",
        "color": "#1a1a1a",
        "fontSize": 14,
        "height": 60,
        "marginTop": "auto",
        "marginRight": 0,
        "marginBottom": "auto",
        "marginLeft": 0,
        "lineHeight": 60,
        "opacity": 0.9,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "width": 80,
        "textShadow": "none",
        "textTransform": "uppercase",
        "transition": "all .3s ease",
        "filter": "none"
    },
    "project-single carousel-controlright": {
        "backgroundImage": "none",
        "backgroundColor": "#fff",
        "color": "#1a1a1a",
        "fontSize": 14,
        "height": 60,
        "marginTop": "auto",
        "marginRight": 0,
        "marginBottom": "auto",
        "marginLeft": 0,
        "lineHeight": 60,
        "opacity": 0.9,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "width": 80,
        "textShadow": "none",
        "textTransform": "uppercase",
        "transition": "all .3s ease",
        "filter": "none"
    },
    "project-single carousel-controlleft:hover": {
        "backgroundImage": "none",
        "backgroundColor": "#fff",
        "color": "#f16468",
        "fontSize": 14,
        "height": 60,
        "marginTop": "auto",
        "marginRight": 0,
        "marginBottom": "auto",
        "marginLeft": 0,
        "lineHeight": 60,
        "opacity": 0.9,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "width": 70,
        "textShadow": "none",
        "textTransform": "uppercase",
        "transition": "all .3s ease",
        "filter": "none"
    },
    "project-single carousel-controlright:hover": {
        "backgroundImage": "none",
        "backgroundColor": "#fff",
        "color": "#f16468",
        "fontSize": 14,
        "height": 60,
        "marginTop": "auto",
        "marginRight": 0,
        "marginBottom": "auto",
        "marginLeft": 0,
        "lineHeight": 60,
        "opacity": 0.9,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "width": 70,
        "textShadow": "none",
        "textTransform": "uppercase",
        "transition": "all .3s ease",
        "filter": "none"
    },
    "title-project": {
        "marginTop": 50,
        "paddingBottom": 20
    },
    "timeline": {
        "paddingLeft": 100,
        "position": "relative"
    },
    "timeline:before": {
        "content": "",
        "borderLeft": "1px solid #7e8596",
        "height": "100%",
        "position": "absolute",
        "left": 20
    },
    "timeline-title": {
        "marginTop": 28,
        "marginBottom": 28,
        "paddingLeft": 100,
        "position": "relative"
    },
    "timeline-title fa": {
        "border": "1px solid #7e8596",
        "borderRadius": "50%",
        "color": "#7e8596",
        "fontSize": 14,
        "height": 40,
        "paddingTop": 12,
        "paddingRight": 0,
        "paddingBottom": 12,
        "paddingLeft": 0,
        "position": "absolute",
        "top": -7,
        "left": 0,
        "textAlign": "center",
        "width": 40
    },
    "text-project p": {
        "marginBottom": 20
    },
    "project-single ul": {
        "listStyle": "none",
        "paddingLeft": 0
    },
    "list-checked": {
        "listStyle": "none",
        "paddingLeft": 0
    },
    "project-single ul > li": {
        "paddingTop": 8,
        "paddingBottom": 8
    },
    "list-checked li": {
        "paddingTop": 8,
        "paddingBottom": 8
    },
    "project-single ul > li:first-child": {
        "paddingTop": 0
    },
    "list-checked li:first-child": {
        "paddingTop": 0
    },
    "list-checked li:before": {
        "content": "\\f00c",
        "color": "#f16468",
        "fontFamily": "FontAwesome",
        "paddingRight": 16,
        "position": "relative"
    },
    "share-project a": {
        "color": "#7e8596",
        "marginRight": 20
    },
    "share-project a:hover": {
        "color": "#f16468"
    },
    "item-team social-team": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "absolute",
        "bottom": -40,
        "left": 0,
        "right": 0,
        "textAlign": "center",
        "opacity": 0,
        "zIndex": 1,
        "transition": "all .3s ease",
        "pointerEvents": "none"
    },
    "item-team cover:hover social-team": {
        "bottom": 0,
        "opacity": 1,
        "pointerEvents": "auto"
    },
    "item-team social-team li": {
        "paddingTop": 20,
        "paddingRight": 10,
        "paddingBottom": 20,
        "paddingLeft": 10
    },
    "item-team social-team li > a": {
        "color": "#fff"
    },
    "item-team social-team li > a:hover": {
        "opacity": 0.8
    },
    "item-team cover badge": {
        "opacity": 1,
        "transition": "all .3s ease"
    },
    "item-team cover:hover badge": {
        "opacity": 0,
        "visibility": "hidden"
    },
    "row-feature": {
        "paddingTop": 15,
        "paddingBottom": 15
    },
    "row-feature h3": {
        "fontSize": 18,
        "lineHeight": 28,
        "marginTop": 0,
        "marginBottom": 30,
        "textTransform": "uppercase",
        "transition": "color .3s ease"
    },
    "row-feature p": {
        "paddingRight": 30
    },
    "row-feature:hover h3": {
        "color": "#f16468"
    },
    "row-feature img": {
        "marginTop": 8,
        "marginBottom": 20
    },
    "free-started": {
        "backgroundImage": "url(../images/arrow-bg.svg)",
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "paddingTop": 76,
        "paddingBottom": 80
    },
    "section-blue title-section": {
        "color": "#fff"
    },
    "section-blue p": {
        "color": "#fff"
    },
    "section-blue title-section:before": {
        "borderColor": "#fff"
    },
    "section-blue title-section-left:before": {
        "borderColor": "#fff"
    },
    "free-started title-section-details": {
        "marginBottom": 0
    },
    "free-started btn": {
        "color": "#03a2d8",
        "marginTop": 56
    },
    "free-started btn:hover": {
        "color": "#fff"
    },
    "plan-item": {
        "border": "1px solid #dbe1e1",
        "marginBottom": 30,
        "paddingTop": 43,
        "paddingRight": 30,
        "paddingBottom": 50,
        "paddingLeft": 30,
        "textAlign": "center",
        "transition": "all .3s ease"
    },
    "plan-item:hover": {
        "borderColor": "#7e8596"
    },
    "plan-item h3": {
        "fontSize": 24,
        "fontWeight": "700",
        "lineHeight": 28,
        "marginTop": 0,
        "marginBottom": 0
    },
    "plan-item price": {
        "color": "#1a1a1a",
        "fontSize": 36,
        "fontWeight": "700",
        "marginTop": 32,
        "marginRight": 0,
        "marginBottom": 32,
        "marginLeft": 0,
        "transition": "all .3s ease"
    },
    "plan-item price span": {
        "color": "#7e8596",
        "fontSize": 14,
        "fontWeight": "400",
        "paddingLeft": 10
    },
    "plan-item:hover price": {
        "color": "#f16468"
    },
    "plan-item img": {
        "width": 180
    },
    "plan-item ul": {
        "lineHeight": 38,
        "marginTop": 26,
        "marginBottom": 26
    },
    "plan-item btn": {
        "paddingTop": 8,
        "paddingRight": 60,
        "paddingBottom": 8,
        "paddingLeft": 60
    },
    "section-stats": {
        "backgroundImage": "url(../images/bg-stats.jpg)",
        "backgroundAttachment": "fixed",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "position": "relative"
    },
    "touch section-stats": {
        "backgroundAttachment": "scroll"
    },
    "section-stats:before": {
        "content": "",
        "backgroundColor": "rgba(0, 172, 230, 0.9)",
        "position": "absolute",
        "top": 0,
        "height": "100%",
        "width": "100%"
    },
    "digits-item": {
        "paddingBottom": 21,
        "position": "relative",
        "textAlign": "center"
    },
    "digits-item:before": {
        "content": "",
        "borderLeft": "1px solid #fff",
        "height": 40,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "absolute",
        "left": 0,
        "right": 0,
        "width": 1,
        "top": -70
    },
    "digits-item:after": {
        "content": "",
        "borderLeft": "1px solid #fff",
        "height": 40,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "absolute",
        "left": 0,
        "right": 0,
        "width": 1,
        "bottom": -42
    },
    "digits-item digit": {
        "color": "#fff",
        "fontSize": 36,
        "fontWeight": "600",
        "marginBottom": 24
    },
    "digits-item digit-name": {
        "display": "block",
        "textTransform": "uppercase"
    },
    "panel-group panel": {
        "borderRadius": 0,
        "border": 0,
        "boxShadow": "none"
    },
    "panel-style panel-heading": {
        "backgroundColor": "#fff",
        "border": "1px solid #dbe1e1",
        "borderRadius": 0,
        "color": "#1a1a1a",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "transition": "all .3s ease"
    },
    "panel-style panel-heading span": {
        "backgroundImage": "url(../images/icon-collapse.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "backgroundPosition": "0 -32px",
        "display": "block",
        "float": "right",
        "marginTop": 9,
        "height": 16,
        "width": 16
    },
    "panel-style panel-heading:hover span": {
        "backgroundPosition": "0 -48px"
    },
    "panel-style panel-headingactive span": {
        "backgroundPosition": "0 0"
    },
    "panel-style panel-headingactive:hover span": {
        "backgroundPosition": "0 -16px"
    },
    "panel-style panel-heading:hover": {
        "color": "#f16468",
        "border": "1px solid #f16468"
    },
    "panel-style panel-heading:hover a": {
        "color": "#f16468"
    },
    "panel-title": {
        "fontWeight": "600",
        "textTransform": "uppercase"
    },
    "panel-title a": {
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 30,
        "paddingBottom": 10,
        "paddingLeft": 30,
        "textDecoration": "none"
    },
    "panel-style panel-heading + panel-collapse panel-body": {
        "border": 0
    },
    "panel-body": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30
    },
    "panel-group panel+panel": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "section-reviews": {
        "borderTop": "1px solid #dbe1e1"
    },
    "section-reviews user-image": {
        "background": "#f0f4f7",
        "borderRadius": "50%",
        "float": "left",
        "height": 140,
        "marginTop": 32,
        "overflow": "hidden",
        "width": 140
    },
    "section-reviews user-image img": {
        "borderRadius": "50%",
        "height": 140,
        "width": 140
    },
    "text-reviews": {
        "marginLeft": 140,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30
    },
    "icon-quote": {
        "backgroundImage": "url(../images/icon-quote.svg)",
        "display": "block",
        "height": 32,
        "marginBottom": 30,
        "width": 44
    },
    "text-reviews h5": {
        "fontWeight": "600",
        "marginTop": 0,
        "textTransform": "uppercase"
    },
    "text-reviews h5 span": {
        "backgroundImage": "url(../images/diagonal-separation.svg)",
        "backgroundRepeat": "no-repeat",
        "color": "#7e8596",
        "display": "inline-block",
        "fontSize": 14,
        "fontWeight": "400",
        "lineHeight": 14,
        "paddingTop": 30,
        "paddingLeft": 50,
        "position": "relative",
        "top": 30,
        "textTransform": "none"
    },
    "section-blog-grid": {
        "overflow": "hidden"
    },
    "blog-grid": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "blog-item": {
        "background": "#fff",
        "borderRadius": 4,
        "boxShadow": "0 0 10px rgba(81, 61, 174, 0.0)",
        "paddingTop": 0,
        "paddingBottom": 30,
        "marginBottom": 30,
        "width": 360,
        "transition": "box-shadow .3s ease"
    },
    "blog-item:hover": {
        "boxShadow": "0 0 10px rgba(81, 61, 174, 0.10)"
    },
    "blog-details": {
        "fontSize": 12,
        "lineHeight": 20,
        "listStyle": "none",
        "paddingRight": 30,
        "paddingLeft": 30,
        "paddingBottom": 15,
        "paddingTop": 15,
        "marginBottom": 0,
        "textAlign": "center"
    },
    "blog-details > li": {
        "display": "inline-block",
        "position": "relative"
    },
    "blog-details > li:before": {
        "content": "/",
        "paddingRight": 7,
        "paddingLeft": 7
    },
    "blog-details > li:first-child:before": {
        "content": "",
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "blog-details > li > a": {
        "color": "#f16468"
    },
    "blog-cover": {
        "background": "#e0e4e8",
        "lineHeight": 0,
        "overflow": "hidden",
        "position": "relative",
        "borderRadius": "4px 4px 0 0"
    },
    "blog-cover img": {
        "height": 200,
        "width": "100%"
    },
    "blog-cover item img": {
        "height": 200,
        "width": "100%"
    },
    "blog-no-image": {
        "borderBottom": "1px solid #f0f4f7"
    },
    "blog-title": {
        "paddingRight": 30,
        "paddingLeft": 30
    },
    "blog-description": {
        "paddingRight": 30,
        "paddingLeft": 30
    },
    "blog-footer": {
        "paddingRight": 30,
        "paddingLeft": 30,
        "marginTop": 20
    },
    "blog-item blog-title": {
        "fontSize": 24,
        "fontWeight": "400",
        "lineHeight": 34,
        "marginTop": 26,
        "marginBottom": 20
    },
    "blog-title a": {
        "color": "#1a1a1a"
    },
    "blog-title a:hover": {
        "color": "#f16468",
        "textDecoration": "none"
    },
    "author-profile author-image": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "display": "block",
        "position": "relative",
        "top": "auto",
        "left": "auto",
        "marginLeft": "auto",
        "width": 120,
        "height": 120,
        "borderRadius": "100%",
        "overflow": "hidden",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "background": "#fff",
        "zIndex": 2,
        "boxShadow": "none",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0
    },
    "author-profile author-image img": {
        "position": "relative",
        "display": "block",
        "width": "100%",
        "height": "100%",
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "borderRadius": "100%"
    },
    "author-title": {
        "marginTop": 1.5,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "author-profile author-title": {
        "color": "#fff"
    },
    "author-bio": {
        "fontSize": 1.8,
        "lineHeight": 1.5,
        "fontWeight": "200",
        "color": "#50585D",
        "letterSpacing": 0,
        "textIndent": 0
    },
    "author-meta": {
        "marginTop": 1.6,
        "marginRight": 0,
        "marginBottom": 1.6,
        "marginLeft": 0
    },
    "author-profile author-meta": {
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "fontFamily": "\"Merriweather\", serif",
        "letterSpacing": 0.01,
        "fontSize": 1.7
    },
    "author-profile author-bio": {
        "color": "#fff"
    },
    "author-meta span": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 1,
        "marginLeft": 0,
        "wordWrap": "break-word"
    },
    "author-meta a": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "archive-template author-profile author-meta": {
        "display": "none"
    },
    "share a": {
        "background": "transparent",
        "border": "0px solid #cecece",
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "borderRadius": 0,
        "display": "inline-block",
        "lineHeight": "normal",
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#fff !important",
        "boxSizing": "border-box"
    },
    "share a:hover": {
        "color": "#fff !important",
        "textDecoration": "none"
    },
    "share ashare-facebook": {
        "backgroundColor": "#3e64ad"
    },
    "share ashare-twitter": {
        "backgroundColor": "#6aadd1"
    },
    "share ashare-google-plus": {
        "backgroundColor": "#d34836"
    },
    "share ashare-pinterest": {
        "backgroundColor": "#ff6c00"
    },
    "share ashare-whatsapp": {
        "backgroundColor": "#6cd94e",
        "display": "none"
    },
    "touch share ashare-whatsapp": {
        "display": "inline-block"
    },
    "read-more": {
        "color": "#1a1a1a",
        "fontWeight": "500",
        "textTransform": "uppercase"
    },
    "read-more:hover": {
        "color": "#f16468",
        "textDecoration": "none"
    },
    "read-more i": {
        "paddingLeft": 6,
        "transition": "padding .3s ease"
    },
    "read-more:hover i": {
        "paddingLeft": 12
    },
    "blog-item iframe": {
        "border": 0,
        "width": "100%",
        "minHeight": 208
    },
    "carousel-controlleft": {
        "backgroundImage": "none",
        "backgroundColor": "#fff",
        "color": "#1a1a1a",
        "height": 40,
        "marginTop": "auto",
        "marginRight": 0,
        "marginBottom": "auto",
        "marginLeft": 0,
        "opacity": 0.9,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "width": 40,
        "textShadow": "none",
        "transition": "all .3s ease",
        "filter": "none"
    },
    "carousel-controlright": {
        "backgroundImage": "none",
        "backgroundColor": "#fff",
        "color": "#1a1a1a",
        "height": 40,
        "marginTop": "auto",
        "marginRight": 0,
        "marginBottom": "auto",
        "marginLeft": 0,
        "opacity": 0.9,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "width": 40,
        "textShadow": "none",
        "transition": "all .3s ease",
        "filter": "none"
    },
    "carousel-controlleft:hover": {
        "backgroundImage": "none",
        "backgroundColor": "#fff",
        "color": "#f16468",
        "height": 40,
        "marginTop": "auto",
        "marginRight": 0,
        "marginBottom": "auto",
        "marginLeft": 0,
        "opacity": 1,
        "paddingTop": 10,
        "paddingRight": 2,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "width": 40,
        "textShadow": "none",
        "transition": "all .3s ease",
        "filter": "none"
    },
    "carousel-controlright:hover": {
        "backgroundImage": "none",
        "backgroundColor": "#fff",
        "color": "#f16468",
        "height": 40,
        "marginTop": "auto",
        "marginRight": 0,
        "marginBottom": "auto",
        "marginLeft": 0,
        "opacity": 1,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 2,
        "width": 40,
        "textShadow": "none",
        "transition": "all .3s ease",
        "filter": "none"
    },
    "blog-item-v2 carousel-controlleft": {
        "fontSize": 30,
        "height": 60,
        "lineHeight": 58,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 60
    },
    "blog-item-v2 carousel-controlright": {
        "fontSize": 30,
        "height": 60,
        "lineHeight": 58,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 60
    },
    "blog-item-v2 carousel-controlleft:hover": {
        "fontSize": 30,
        "height": 60,
        "lineHeight": 58,
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 60
    },
    "blog-item-v2 carousel-controlright:hover": {
        "fontSize": 30,
        "height": 60,
        "lineHeight": 58,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 6,
        "width": 60
    },
    "blog-item-v2": {
        "marginBottom": 60
    },
    "blog-item-v2 blog-details": {
        "fontSize": 14,
        "paddingTop": 25,
        "textAlign": "left",
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "blog-item-v2 blog-cover": {
        "height": 280,
        "position": "relative"
    },
    "blog-item-v2 blog-cover img": {
        "height": 280,
        "position": "relative"
    },
    "blog-item-v2 blog-title": {
        "paddingLeft": 0,
        "paddingRight": 0,
        "fontWeight": "600",
        "marginTop": 0
    },
    "blog-item-v2 blog-footer": {
        "paddingLeft": 0,
        "paddingRight": 0,
        "marginTop": 30
    },
    "blog-item-v2 p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "blog-item-v2 iframe": {
        "border": 0,
        "width": "100%",
        "minHeight": 280
    },
    "pager previous a": {
        "borderColor": "#7e8596",
        "borderRadius": 50,
        "color": "#7e8596",
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15
    },
    "pager next a": {
        "borderColor": "#7e8596",
        "borderRadius": 50,
        "color": "#7e8596",
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15
    },
    "pager digit strong": {
        "borderColor": "#7e8596",
        "borderRadius": 50,
        "color": "#7e8596",
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "marginTop": 5,
        "marginRight": 10,
        "marginBottom": 5,
        "marginLeft": 10,
        "fontWeight": "700"
    },
    "pager previous a:hover": {
        "backgroundColor": "transparent",
        "borderColor": "#f16468",
        "color": "#f16468"
    },
    "pager next a:hover": {
        "backgroundColor": "transparent",
        "borderColor": "#f16468",
        "color": "#f16468"
    },
    "pager disabled a:hover": {
        "borderColor": "#7e8596",
        "color": "#7e8596"
    },
    "pager digit a": {
        "marginTop": 5,
        "marginRight": 10,
        "marginBottom": 5,
        "marginLeft": 10
    },
    "pager digit a:hover": {
        "backgroundColor": "transparent",
        "color": "#f16468"
    },
    "pager digit a:focus": {
        "backgroundColor": "transparent",
        "color": "#f16468"
    },
    "pager active a": {
        "color": "#f16468"
    },
    "section-media": {
        "background": "fixed 0 0 / cover",
        "maxHeight": 400,
        "minHeight": 400,
        "height": "100%",
        "overflow": "hidden",
        "position": "relative",
        "display": "flex",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "WebkitBoxAlign": "center",
        "alignItems": "center"
    },
    "section-media > container": {},
    "section-mediacover:before": {
        "background": "rgba(0,0,0,0.5)",
        "content": " ",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "height": "100%",
        "bottom": 0,
        "left": 0
    },
    "blog-single": {
        "borderBottom": "1px solid #dbe1e1",
        "marginBottom": 30,
        "paddingBottom": 30
    },
    "blog-single blog-footer": {
        "marginTop": 50
    },
    "blog-single blog-footer a": {
        "color": "#7e8596"
    },
    "blog-single blog-footer a:hover": {
        "color": "#f16468"
    },
    "blog-single blog-footer strong": {
        "paddingRight": 20
    },
    "prev-next-wrap": {
        "paddingTop": 28,
        "paddingBottom": 28,
        "borderTop": "1px solid #f0f0f0"
    },
    "prev-next-wrap previous-post": {
        "backgroundColor": "#ff4444",
        "boxSizing": "border-box",
        "width": "48%",
        "color": "#ffffff",
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "textAlign": "center",
        "position": "relative",
        "overflow": "hidden",
        "textDecoration": "none",
        "display": "flex",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "WebkitBoxAlign": "center",
        "alignItems": "center",
        "marginRight": "1%"
    },
    "prev-next-wrap next-post": {
        "backgroundColor": "#ff4444",
        "boxSizing": "border-box",
        "width": "48%",
        "color": "#ffffff",
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "textAlign": "center",
        "position": "relative",
        "overflow": "hidden",
        "textDecoration": "none",
        "display": "flex",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "WebkitBoxAlign": "center",
        "alignItems": "center",
        "marginLeft": "1%"
    },
    "prev-next-wrap a": {
        "textDecoration": "none",
        "color": "#ffffff"
    },
    "prev-next-wrap a:hover": {
        "textDecoration": "none",
        "color": "#ffffff"
    },
    "prev-next-wrap previous-post:before": {
        "content": "",
        "height": "100%",
        "width": "100%",
        "background": "rgba(0, 0, 0, 0.6)",
        "WebkitOpacity": 0,
        "MozOpacity": 0,
        "MsOpacity": 0,
        "OOpacity": 0,
        "opacity": 0,
        "filter": "alpha(opacity=(0))",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "WebkitBorderRadius": "50%",
        "MozBorderRadius": "50%",
        "borderRadius": "50%",
        "WebkitTransform": "scale(0, 0)",
        "MozTransform": "scale(0, 0)",
        "MsTransform": "scale(0, 0)",
        "OTransform": "scale(0, 0)",
        "transform": "scale(0, 0)",
        "WebkitTransition": "all 0.4s",
        "MozTransition": "all 0.4s",
        "MsTransition": "all 0.4s",
        "OTransition": "all 0.4s",
        "transition": "all 0.4s"
    },
    "prev-next-wrap next-post:before": {
        "content": "",
        "height": "100%",
        "width": "100%",
        "background": "rgba(0, 0, 0, 0.6)",
        "WebkitOpacity": 0,
        "MozOpacity": 0,
        "MsOpacity": 0,
        "OOpacity": 0,
        "opacity": 0,
        "filter": "alpha(opacity=(0))",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "WebkitBorderRadius": "50%",
        "MozBorderRadius": "50%",
        "borderRadius": "50%",
        "WebkitTransform": "scale(0, 0)",
        "MozTransform": "scale(0, 0)",
        "MsTransform": "scale(0, 0)",
        "OTransform": "scale(0, 0)",
        "transform": "scale(0, 0)",
        "WebkitTransition": "all 0.4s",
        "MozTransition": "all 0.4s",
        "MsTransition": "all 0.4s",
        "OTransition": "all 0.4s",
        "transition": "all 0.4s"
    },
    "prev-next-wrap previous-post prev-next-inner": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "minHeight": 150,
        "backgroundColor": "rgba(0, 0, 0, 0.3)",
        "position": "relative",
        "width": "100%"
    },
    "prev-next-wrap next-post prev-next-inner": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "minHeight": 150,
        "backgroundColor": "rgba(0, 0, 0, 0.3)",
        "position": "relative",
        "width": "100%"
    },
    "prev-next-wrap previous-postno-image prev-next-inner": {
        "backgroundColor": "transparent"
    },
    "prev-next-wrap next-postno-image prev-next-inner": {
        "backgroundColor": "transparent"
    },
    "prev-next-wrap previous-post:hover:before": {
        "WebkitOpacity": 1,
        "MozOpacity": 1,
        "MsOpacity": 1,
        "OOpacity": 1,
        "opacity": 1,
        "filter": "alpha(opacity=(100))",
        "WebkitTransform": "scale(1.5, 1.5)",
        "MozTransform": "scale(1.5, 1.5)",
        "MsTransform": "scale(1.5, 1.5)",
        "OTransform": "scale(1.5, 1.5)",
        "transform": "scale(1.5, 1.5)"
    },
    "prev-next-wrap next-post:hover:before": {
        "WebkitOpacity": 1,
        "MozOpacity": 1,
        "MsOpacity": 1,
        "OOpacity": 1,
        "opacity": 1,
        "filter": "alpha(opacity=(100))",
        "WebkitTransform": "scale(1.5, 1.5)",
        "MozTransform": "scale(1.5, 1.5)",
        "MsTransform": "scale(1.5, 1.5)",
        "OTransform": "scale(1.5, 1.5)",
        "transform": "scale(1.5, 1.5)"
    },
    "prev-next-wrap previous-post title": {
        "color": "#ffffff",
        "marginTop": 0
    },
    "prev-next-wrap next-post title": {
        "color": "#ffffff",
        "marginTop": 0
    },
    "prev-next-wrap link-text": {
        "color": "#ffffff"
    },
    "blog-single blog-cover": {
        "height": "auto"
    },
    "blog-single blog-cover img": {
        "height": "auto"
    },
    "blog-single iframe": {
        "border": 0,
        "width": "100%",
        "height": 430
    },
    "blog-single blog-audio iframe": {
        "height": "auto",
        "minHeight": "auto"
    },
    "section-comments": {
        "clear": "both"
    },
    "media": {
        "marginTop": 40
    },
    "media pull-left": {
        "borderRadius": "50%",
        "height": 80,
        "paddingRight": 0,
        "marginRight": 30,
        "overflow": "hidden",
        "width": 80
    },
    "media pull-left img": {
        "height": 80,
        "width": 80
    },
    "media-header": {
        "marginBottom": 18
    },
    "media-heading": {
        "fontWeight": "bold"
    },
    "media-heading a": {
        "color": "#1a1a1a"
    },
    "media-heading a:hover": {
        "color": "#f16468",
        "textDecoration": "none"
    },
    "media-footer": {
        "marginTop": 20
    },
    "media-footer reply": {
        "fontSize": 12,
        "color": "#a1a6b2",
        "textTransform": "uppercase"
    },
    "media-footer reply:hover": {
        "color": "#f16468",
        "textDecoration": "none"
    },
    "media-footer reply i": {
        "paddingRight": 8
    },
    "sidebar-section": {
        "paddingLeft": 50,
        "marginBottom": 60
    },
    "sidebar-section-left": {
        "paddingLeft": 0,
        "paddingRight": 50
    },
    "sidebar-section a": {
        "color": "#1a1a1a"
    },
    "sidebar-section a:hover": {
        "color": "#f16468",
        "textDecoration": "none"
    },
    "sidebar-heading": {
        "fontWeight": "600",
        "marginTop": 0,
        "marginBottom": 40,
        "position": "relative"
    },
    "sidebar-heading span": {
        "background": "#fff",
        "paddingRight": 28,
        "position": "relative",
        "zIndex": 1
    },
    "sidebar-heading:before": {
        "content": "",
        "borderTop": "1px solid #1a1a1a",
        "position": "absolute",
        "top": 14,
        "width": "100%"
    },
    "sidebar-section post-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": "normal",
        "fontSize": 16
    },
    "list-categories li": {
        "position": "relative",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "list-categories > li:before": {
        "content": "-",
        "paddingRight": 7
    },
    "list-categories > li:hover:before": {
        "color": "#f16468"
    },
    "list-categories > li:first-child": {
        "paddingTop": 0
    },
    "list-categories > li:last-child": {
        "paddingBottom": 0
    },
    "list-categories li span": {
        "paddingLeft": 5
    },
    "item-latest-post": {
        "marginBottom": 30
    },
    "item-latest-post a": {
        "fontWeight": "500"
    },
    "data-latest-post": {
        "fontSize": 12
    },
    "item-payment": {
        "textAlign": "center"
    },
    "item-brands": {
        "textAlign": "center"
    },
    "item-brands a": {
        "opacity": 0.7,
        "transition": "all .3s ease"
    },
    "item-brands a:hover": {
        "opacity": 1
    },
    "section-tips h5": {
        "marginTop": 0,
        "marginBottom": 20,
        "textTransform": "uppercase"
    },
    "section-tips p": {
        "marginBottom": 16
    },
    "icon-tip": {
        "width": 64
    },
    "section-twitter": {
        "background": "#DE322E",
        "color": "#fff",
        "paddingTop": 40,
        "paddingBottom": 35
    },
    "section-twitter a": {
        "color": "#fff",
        "textDecoration": "underline"
    },
    "section-twitter a:hover": {
        "textDecoration": "none"
    },
    "data-twitter": {
        "display": "block",
        "opacity": 0.9
    },
    "section-twitter fa": {
        "fontSize": 40
    },
    "post-content img": {
        "maxWidth": "100%",
        "width": "100%"
    },
    "progress": {
        "height": 6,
        "marginBottom": 20,
        "backgroundColor": "#d3dde1",
        "borderRadius": 0,
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "progress-bar": {
        "backgroundColor": "#fff",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "progress-bar-red": {
        "backgroundColor": "#f16468"
    },
    "progress-bar-blue": {
        "backgroundColor": "#00ace6"
    },
    "item-contact": {
        "backgroundColor": "#fff",
        "borderRadius": 4,
        "marginBottom": 30,
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "transition": "all .3s ease"
    },
    "item-contact:hover": {
        "boxShadow": "0 0 10px rgba(81, 61, 174, 0.10)",
        "color": "#f16468"
    },
    "item-contact img": {
        "height": 64,
        "width": 64
    },
    "item-contact-heading": {
        "marginBottom": 16,
        "transition": "all .3s ease"
    },
    "item-contact p": {
        "marginBottom": 0
    },
    "item-contact:hover item-contact-heading": {
        "color": "#f16468"
    },
    "map": {
        "height": 500
    },
    "group-questions": {
        "marginBottom": 130
    },
    "tab-sidebar active": {
        "background": "#f16468",
        "borderRadius": 2,
        "color": "#fff",
        "paddingLeft": 20,
        "paddingRight": 20,
        "position": "relative"
    },
    "tab-sidebar active:before": {
        "content": "",
        "borderColor": "#f16468",
        "borderStyle": "solid",
        "borderWidth": 22,
        "borderTopColor": "transparent",
        "borderBottomColor": "transparent",
        "borderRightColor": "transparent",
        "borderRadius": 2,
        "position": "absolute",
        "top": 0,
        "right": -50
    },
    "tab-sidebar active a": {
        "color": "#fff"
    },
    "tab-sidebar active a:hover": {
        "color": "#fff"
    },
    "tab-sidebar > liactive:before": {
        "color": "#fff"
    },
    "tab-sidebar > li:first-child": {
        "paddingTop": 10
    },
    "tab-sidebar > li:last-child": {
        "paddingBottom": 10
    },
    "base-footer": {
        "background": "#1a1a1a"
    },
    "container-footer": {
        "paddingTop": 100,
        "paddingBottom": 100
    },
    "footer-logo": {
        "marginBottom": 53,
        "width": 135
    },
    "footer-logo img": {
        "width": "100%"
    },
    "color-white": {
        "color": "#fff"
    },
    "base-footer h4": {
        "color": "#fff",
        "marginTop": 0,
        "marginBottom": 51
    },
    "base-footer ul > li": {
        "paddingTop": 6,
        "paddingBottom": 6
    },
    "base-footer ul > li:before": {
        "content": "\\f105",
        "fontFamily": "FontAwesome",
        "paddingRight": 10,
        "position": "relative"
    },
    "no-list-style li:before": {
        "display": "none"
    },
    "base-footer ul > li:hover:before": {
        "color": "#f16468"
    },
    "base-footer a": {
        "color": "#7e8596"
    },
    "base-footer ul > li > a:hover": {
        "color": "#f16468",
        "textDecoration": "none"
    },
    "base-footer form-group": {
        "marginTop": 64,
        "marginBottom": 33
    },
    "form-group": {
        "position": "relative"
    },
    "base-footer form-control": {
        "background": "transparent",
        "border": "2px solid #7e8596",
        "borderRadius": 0,
        "color": "#7e8596",
        "height": 44,
        "paddingLeft": 20,
        "paddingRight": 80,
        "transition": "border .3s ease"
    },
    "base-footer form-control:focus": {
        "borderColor": "#fff",
        "boxShadow": "none",
        "color": "#fff"
    },
    "base-footer input[type=\"email\"]::-webkit-input-placeholder": {
        "color": "#7e8596"
    },
    "base-footer input[type=\"email\"]::-moz-placeholder": {
        "color": "#7e8596"
    },
    "base-footer input[type=\"email\"]:-moz-placeholder": {
        "color": "#7e8596"
    },
    "base-footer input[type=\"email\"]:-ms-input-placeholder": {
        "color": "#7e8596",
        "opacity": 1
    },
    "base-footer has-error form-control::-moz-placeholder": {
        "color": "#f16468",
        "opacity": 1
    },
    "base-footer has-error form-control:-ms-input-placeholder": {
        "color": "#f16468"
    },
    "base-footer has-error form-control::-webkit-input-placeholder": {
        "color": "#f16468"
    },
    "base-footer input:-webkit-autofill": {
        "backgroundColor": "#1a1a1a !important",
        "color": "#7e8596 !important",
        "WebkitBoxShadow": "0 0 0 1000px #1a1a1a inset !important",
        "WebkitTextFillColor": "#7e8596 !important"
    },
    "base-footer input:-webkit-autofill:hover": {
        "backgroundColor": "#1a1a1a !important",
        "color": "#7e8596 !important",
        "WebkitBoxShadow": "0 0 0 1000px #1a1a1a inset !important",
        "WebkitTextFillColor": "#7e8596 !important"
    },
    "base-footer input:-webkit-autofill:active": {
        "backgroundColor": "#1a1a1a !important",
        "color": "#7e8596 !important",
        "WebkitBoxShadow": "0 0 0 1000px #1a1a1a inset !important",
        "WebkitTextFillColor": "#7e8596 !important"
    },
    "base-footer input:-webkit-autofill:focus": {
        "backgroundColor": "#1a1a1a !important",
        "color": "#7e8596 !important",
        "WebkitBoxShadow": "0 0 0 1000px #1a1a1a inset !important",
        "WebkitTextFillColor": "#7e8596 !important"
    },
    "btn-subscribe": {
        "background": "transparent",
        "border": 0,
        "color": "#7e8596",
        "fontWeight": "600",
        "height": 45,
        "position": "absolute",
        "top": 0,
        "right": 20,
        "outline": "none",
        "textTransform": "uppercase"
    },
    "btn-subscribe:hover": {
        "color": "#fff"
    },
    "base-footer has-error form-control": {
        "background": "transparent",
        "border": "2px solid #f16468",
        "color": "#f16468",
        "boxShadow": "none",
        "WebkitTransition": "all .3s ease",
        "transition": "all .3s ease"
    },
    "base-footer has-error btn-subscribe": {
        "color": "#f16468"
    },
    "base-footer style-text-danger": {
        "marginTop": 8,
        "marginLeft": 20,
        "color": "#f16468"
    },
    "base-footer style-text-success": {
        "marginTop": 8,
        "marginLeft": 20,
        "color": "#00d7ae"
    },
    "base-footer copy": {
        "borderTop": "1px solid #4c5260",
        "paddingTop": 20,
        "paddingBottom": 20
    },
    "base-footer copy p": {
        "marginTop": 11
    },
    "base-footer list-socials": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "base-footer list-socials li > a": {
        "border": "1px solid #7e8596",
        "borderRadius": "50%",
        "display": "inline-block",
        "height": 34,
        "width": 34,
        "paddingTop": 4,
        "textAlign": "center",
        "transition": "all .3s ease"
    },
    "base-footer list-socials li > a:hover": {
        "borderColor": "#f16468"
    },
    "container-error": {
        "background": "#fff",
        "color": "#8e9da8",
        "height": "100%"
    },
    "image-404": {
        "maxWidth": 320
    },
    "heading-error": {
        "color": "#8e9da8",
        "fontSize": 130,
        "fontWeight": "100",
        "lineHeight": 130,
        "marginTop": 0,
        "marginBottom": 10,
        "overflow": "hidden",
        "width": "100%",
        "transition": "all .3s ease-in-out"
    },
    "message-error": {
        "fontSize": 24,
        "lineHeight": 38,
        "marginBottom": 10,
        "transition": "all .3s ease-in-out"
    },
    "container-error btn": {
        "marginTop": 30,
        "marginBottom": 30,
        "fontWeight": "100"
    },
    "owl-carousel owl-wrapper:after": {
        "content": ".",
        "display": "block",
        "clear": "both",
        "visibility": "hidden",
        "lineHeight": 0,
        "height": 0
    },
    "owl-carousel": {
        "display": "none",
        "position": "relative",
        "width": "100%",
        "MsTouchAction": "pan-y"
    },
    "owl-carousel owl-wrapper": {
        "display": "none",
        "position": "relative",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "MozBackfaceVisibility": "hidden",
        "MsBackfaceVisibility": "hidden",
        "MozTransform": "translate3d(0, 0, 0)",
        "MsTransform": "translate3d(0, 0, 0)"
    },
    "owl-carousel owl-wrapper-outer": {
        "overflow": "hidden",
        "position": "relative",
        "width": "100%"
    },
    "owl-carousel owl-wrapper-outerautoHeight": {
        "WebkitTransition": "height 500ms ease-in-out",
        "MozTransition": "height 500ms ease-in-out",
        "MsTransition": "height 500ms ease-in-out",
        "OTransition": "height 500ms ease-in-out",
        "transition": "height 500ms ease-in-out"
    },
    "owl-carousel owl-item": {
        "float": "left",
        "WebkitBackfaceVisibility": "hidden",
        "MozBackfaceVisibility": "hidden",
        "MsBackfaceVisibility": "hidden",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "MozTransform": "translate3d(0, 0, 0)",
        "MsTransform": "translate3d(0, 0, 0)"
    },
    "owl-controls owl-page": {
        "cursor": "pointer"
    },
    "owl-controls owl-buttons div": {
        "cursor": "pointer"
    },
    "owl-controls": {
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
    },
    "grabbing": {
        "cursor": "url(../images/grabbing.png) 8 8, move"
    },
    "owl-theme owl-controls": {
        "marginTop": 50,
        "textAlign": "center"
    },
    "owl-theme owl-controls owl-buttons div": {
        "color": "#FFF",
        "display": "inline-block",
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "fontSize": 12,
        "borderRadius": 30,
        "background": "#696f7e",
        "opacity": 0.5
    },
    "owl-theme owl-controlsclickable owl-buttons div:hover": {
        "opacity": 1,
        "textDecoration": "none"
    },
    "owl-theme owl-controls owl-page": {
        "display": "inline-block"
    },
    "owl-theme owl-controls owl-page span": {
        "display": "block",
        "width": 20,
        "height": 20,
        "marginTop": 0,
        "marginRight": 7,
        "marginBottom": 0,
        "marginLeft": 7,
        "opacity": 0.5,
        "borderRadius": 20,
        "background": "#696f7e"
    },
    "owl-theme owl-controls owl-pageactive span": {
        "background": "#f16468",
        "opacity": 1
    },
    "owl-theme owl-controlsclickable owl-page:hover span": {
        "background": "#f16468",
        "opacity": 1
    },
    "owl-theme owl-controls owl-page spanowl-numbers": {
        "height": "auto",
        "width": "auto",
        "color": "#FFF",
        "paddingTop": 2,
        "paddingRight": 10,
        "paddingBottom": 2,
        "paddingLeft": 10,
        "fontSize": 12,
        "borderRadius": 30
    },
    "owl-itemloading": {
        "minHeight": 150,
        "background": "url(../images/AjaxLoader.gif) no-repeat center center"
    },
    "mfp-bg": {
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": 1042,
        "overflow": "hidden",
        "position": "fixed",
        "background": "#31364c",
        "opacity": 1
    },
    "mfp-wrap": {
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": 1043,
        "position": "fixed",
        "outline": "none !important",
        "WebkitBackfaceVisibility": "hidden"
    },
    "mfp-container": {
        "textAlign": "center",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "left": 0,
        "top": 0,
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "boxSizing": "border-box"
    },
    "mfp-container:before": {
        "content": "''",
        "display": "inline-block",
        "height": "100%",
        "verticalAlign": "middle"
    },
    "mfp-align-top mfp-container:before": {
        "display": "none"
    },
    "mfp-content": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "middle",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "textAlign": "left",
        "zIndex": 1045
    },
    "mfp-inline-holder mfp-content": {
        "width": "100%",
        "cursor": "auto"
    },
    "mfp-ajax-holder mfp-content": {
        "width": "100%",
        "cursor": "auto"
    },
    "mfp-ajax-cur": {
        "cursor": "progress"
    },
    "mfp-zoom-out-cur": {
        "cursor": "zoom-out"
    },
    "mfp-zoom-out-cur mfp-image-holder mfp-close": {
        "cursor": "zoom-out"
    },
    "mfp-zoom": {
        "cursor": "zoom-in"
    },
    "mfp-auto-cursor mfp-content": {
        "cursor": "auto"
    },
    "mfp-close": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "userSelect": "none",
        "backgroundColor": "#f16468",
        "backgroundImage": "url(../images/close.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center center",
        "backgroundSize": "60% 60%",
        "width": 48,
        "height": 48,
        "lineHeight": 44,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "textDecoration": "none",
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 2,
        "paddingLeft": 0,
        "color": "#FFF",
        "fontStyle": "normal",
        "fontSize": 48,
        "textIndent": -9999,
        "WebkitTransition": "background-color 0.3s",
        "transition": "background-color 0.3s"
    },
    "mfp-arrow": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "userSelect": "none",
        "position": "absolute",
        "opacity": 0.65,
        "marginTop": -55,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "top": "50%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 90,
        "height": 110,
        "WebkitTapHighlightColor": "transparent"
    },
    "mfp-preloader": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "userSelect": "none",
        "color": "#CCC",
        "position": "absolute",
        "top": "50%",
        "width": "auto",
        "textAlign": "center",
        "marginTop": -0.8,
        "left": 8,
        "right": 8,
        "zIndex": 1044
    },
    "mfp-counter": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "userSelect": "none",
        "position": "absolute",
        "top": 0,
        "right": 0,
        "color": "#CCC",
        "fontSize": 12,
        "lineHeight": 18,
        "whiteSpace": "nowrap"
    },
    "mfp-loadingmfp-figure": {
        "display": "none"
    },
    "mfp-hide": {
        "display": "none !important"
    },
    "mfp-preloader a": {
        "color": "#CCC"
    },
    "mfp-preloader a:hover": {
        "color": "#FFF"
    },
    "mfp-s-ready mfp-preloader": {
        "display": "none"
    },
    "mfp-s-error mfp-content": {
        "display": "none"
    },
    "buttonmfp-close": {
        "overflow": "visible",
        "cursor": "pointer",
        "border": 0,
        "WebkitAppearance": "none",
        "display": "block",
        "outline": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "zIndex": 1046,
        "boxShadow": "none",
        "touchAction": "manipulation"
    },
    "buttonmfp-arrow": {
        "overflow": "visible",
        "cursor": "pointer",
        "border": 0,
        "WebkitAppearance": "none",
        "display": "block",
        "outline": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "zIndex": 1046,
        "boxShadow": "none",
        "touchAction": "manipulation"
    },
    "button::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "mfp-close:hover": {
        "backgroundColor": "#f97e81"
    },
    "mfp-close:focus": {
        "backgroundColor": "#f97e81"
    },
    "mfp-close-btn-in mfp-close": {
        "color": "#333"
    },
    "mfp-image-holder mfp-close": {
        "color": "#FFF",
        "textAlign": "center"
    },
    "mfp-iframe-holder mfp-close": {
        "color": "#FFF",
        "textAlign": "center"
    },
    "mfp-arrow:active": {
        "marginTop": -54
    },
    "mfp-arrow:hover": {
        "opacity": 1
    },
    "mfp-arrow:focus": {
        "opacity": 1
    },
    "mfp-arrow:before": {
        "content": "''",
        "display": "block",
        "width": 0,
        "height": 0,
        "position": "absolute",
        "left": 0,
        "top": 0,
        "marginTop": 35,
        "marginLeft": 35,
        "border": "medium inset transparent",
        "borderTopWidth": 21,
        "borderBottomWidth": 21,
        "opacity": 0.7
    },
    "mfp-arrow:after": {
        "content": "''",
        "display": "block",
        "width": 0,
        "height": 0,
        "position": "absolute",
        "left": 0,
        "top": 8,
        "marginTop": 35,
        "marginLeft": 35,
        "border": "medium inset transparent",
        "borderTopWidth": 13,
        "borderBottomWidth": 13
    },
    "mfp-arrow-left": {
        "left": 0
    },
    "mfp-arrow-left:after": {
        "borderRight": "17px solid #FFF",
        "marginLeft": 31
    },
    "mfp-arrow-left:before": {
        "marginLeft": 25,
        "borderRight": "27px solid #3F3F3F"
    },
    "mfp-arrow-right": {
        "right": 0
    },
    "mfp-arrow-right:after": {
        "borderLeft": "17px solid #FFF",
        "marginLeft": 39
    },
    "mfp-arrow-right:before": {
        "borderLeft": "27px solid #3F3F3F"
    },
    "mfp-iframe-holder": {
        "paddingTop": 40,
        "paddingBottom": 40
    },
    "mfp-iframe-holder mfp-content": {
        "lineHeight": 0,
        "width": "100%",
        "maxWidth": 900
    },
    "mfp-iframe-scaler": {
        "width": "100%",
        "height": 0,
        "overflow": "hidden",
        "paddingTop": "56.25%"
    },
    "mfp-iframe-scaler iframe": {
        "position": "absolute",
        "display": "block",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "background": "#fff"
    },
    "imgmfp-img": {
        "width": "auto",
        "maxWidth": "100%",
        "height": "auto",
        "display": "block",
        "lineHeight": 0,
        "boxSizing": "border-box",
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "mfp-figure": {
        "lineHeight": 0
    },
    "mfp-figure:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 40,
        "bottom": 40,
        "display": "block",
        "right": 0,
        "width": "auto",
        "height": "auto",
        "zIndex": -1,
        "boxShadow": "0 0 8px rgba(0, 0, 0, 0.6)",
        "background": "#444"
    },
    "mfp-figure small": {
        "color": "#BDBDBD",
        "display": "block",
        "fontSize": 12,
        "lineHeight": 14
    },
    "mfp-figure figure": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "mfp-bottom-bar": {
        "marginTop": -36,
        "position": "absolute",
        "top": "100%",
        "left": 0,
        "width": "100%",
        "cursor": "auto"
    },
    "mfp-title": {
        "textAlign": "left",
        "lineHeight": 18,
        "color": "#F3F3F3",
        "wordWrap": "break-word",
        "paddingRight": 36
    },
    "mfp-image-holder mfp-content": {
        "maxWidth": "100%"
    },
    "mfp-gallery mfp-image-holder mfp-figure": {
        "cursor": "pointer"
    },
    "dialog": {
        "backgroundColor": "#fff",
        "paddingTop": 20,
        "paddingRight": 30,
        "paddingBottom": 20,
        "paddingLeft": 30,
        "textAlign": "left",
        "maxWidth": 400,
        "marginTop": 40,
        "marginRight": "auto",
        "marginBottom": 40,
        "marginLeft": "auto",
        "position": "relative"
    },
    "my-mfp-zoom-in zoom-anim-dialog": {
        "opacity": 0,
        "WebkitTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out",
        "WebkitTransform": "scale(0.8)",
        "transform": "scale(0.8)"
    },
    "my-mfp-zoom-inmfp-ready zoom-anim-dialog": {
        "opacity": 1,
        "WebkitTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "my-mfp-zoom-inmfp-removing zoom-anim-dialog": {
        "opacity": 0,
        "WebkitTransform": "scale(0.8)",
        "transform": "scale(0.8)"
    },
    "my-mfp-zoom-inmfp-bg": {
        "opacity": 0,
        "WebkitTransition": "opacity 0.3s ease-out",
        "transition": "opacity 0.3s ease-out"
    },
    "my-mfp-zoom-inmfp-readymfp-bg": {
        "opacity": 0.8
    },
    "my-mfp-zoom-inmfp-removingmfp-bg": {
        "opacity": 0
    },
    "my-mfp-slide-bottom zoom-anim-dialog": {
        "opacity": 0,
        "WebkitTransition": "all 0.2s ease-out",
        "transition": "all 0.2s ease-out",
        "WebkitTransform": "translateY(-20px) perspective( 600px ) rotateX( 10deg )",
        "transform": "translateY(-20px) perspective( 600px ) rotateX( 10deg )"
    },
    "my-mfp-slide-bottommfp-ready zoom-anim-dialog": {
        "opacity": 1,
        "WebkitTransform": "translateY(0) perspective( 600px ) rotateX( 0 )",
        "transform": "translateY(0) perspective( 600px ) rotateX( 0 )"
    },
    "my-mfp-slide-bottommfp-removing zoom-anim-dialog": {
        "opacity": 0,
        "WebkitTransform": "translateY(-10px) perspective( 600px ) rotateX( 10deg )",
        "transform": "translateY(-10px) perspective( 600px ) rotateX( 10deg )"
    },
    "my-mfp-slide-bottommfp-bg": {
        "opacity": 0,
        "WebkitTransition": "opacity 0.3s ease-out",
        "transition": "opacity 0.3s ease-out"
    },
    "my-mfp-slide-bottommfp-readymfp-bg": {
        "opacity": 0.8
    },
    "my-mfp-slide-bottommfp-removingmfp-bg": {
        "opacity": 0
    }
});