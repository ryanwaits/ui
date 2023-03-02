"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationMenuViewport = exports.NavigationMenuIndicator = exports.NavigationMenuLink = exports.NavigationMenuTrigger = exports.NavigationMenuContent = exports.NavigationMenuItem = exports.NavigationMenuList = exports.NavigationMenu = exports.navigationMenuTriggerStyle = void 0;
const react_1 = __importDefault(require("react"));
const NavigationMenuPrimitive = __importStar(require("@radix-ui/react-navigation-menu"));
const class_variance_authority_1 = require("class-variance-authority");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../utils");
const NavigationMenu = react_1.default.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react_1.default.createElement(NavigationMenuPrimitive.Root, Object.assign({ ref: ref, className: (0, utils_1.cn)('relative z-10 flex flex-1 items-center justify-center', className) }, props),
        children,
        react_1.default.createElement(NavigationMenuViewport, null)));
});
exports.NavigationMenu = NavigationMenu;
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(NavigationMenuPrimitive.List, Object.assign({ ref: ref, className: (0, utils_1.cn)('group flex flex-1 list-none items-center justify-center', className) }, props)));
});
exports.NavigationMenuList = NavigationMenuList;
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
exports.NavigationMenuItem = NavigationMenuItem;
const navigationMenuTriggerStyle = (0, class_variance_authority_1.cva)('inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-neutral-100 disabled:opacity-50 dark:focus:bg-neutral-800 disabled:pointer-events-none bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-100 dark:hover:text-neutral-100 data-[state=open]:bg-neutral-50 dark:data-[state=open]:bg-neutral-800 h-10 py-2 px-4 group w-max');
exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle;
const NavigationMenuTrigger = react_1.default.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react_1.default.createElement(NavigationMenuPrimitive.Trigger, Object.assign({ ref: ref, className: (0, utils_1.cn)(navigationMenuTriggerStyle(), 'group', className) }, props),
        children,
        ' ',
        react_1.default.createElement(lucide_react_1.ChevronDown, { className: 'relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180', "aria-hidden": 'true' })));
});
exports.NavigationMenuTrigger = NavigationMenuTrigger;
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(NavigationMenuPrimitive.Content, Object.assign({ ref: ref, className: (0, utils_1.cn)('data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:slide-in-from-right-52 top-0 left-0 w-full md:absolute md:w-auto ', className) }, props)));
});
exports.NavigationMenuContent = NavigationMenuContent;
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
exports.NavigationMenuLink = NavigationMenuLink;
const NavigationMenuViewport = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('absolute left-0 top-full flex justify-center') },
        react_1.default.createElement(NavigationMenuPrimitive.Viewport, Object.assign({ className: (0, utils_1.cn)('origin-top-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-95 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800 md:w-[var(--radix-navigation-menu-viewport-width)]', className), ref: ref }, props))));
});
exports.NavigationMenuViewport = NavigationMenuViewport;
NavigationMenuViewport.displayName =
    NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(NavigationMenuPrimitive.Indicator, Object.assign({ ref: ref, className: (0, utils_1.cn)('data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=visible]:fade-in data-[state=hidden]:fade-out top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden', className) }, props),
        react_1.default.createElement("div", { className: 'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-neutral-200 shadow-md dark:bg-neutral-800' })));
});
exports.NavigationMenuIndicator = NavigationMenuIndicator;
NavigationMenuIndicator.displayName =
    NavigationMenuPrimitive.Indicator.displayName;
