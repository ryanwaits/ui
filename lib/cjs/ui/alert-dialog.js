"use strict";
'use client';
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
exports.AlertDialogCancel = exports.AlertDialogAction = exports.AlertDialogDescription = exports.AlertDialogTitle = exports.AlertDialogFooter = exports.AlertDialogHeader = exports.AlertDialogContent = exports.AlertDialogTrigger = exports.AlertDialog = void 0;
const react_1 = __importDefault(require("react"));
const AlertDialogPrimitive = __importStar(require("@radix-ui/react-alert-dialog"));
const utils_1 = require("../utils");
const AlertDialog = AlertDialogPrimitive.Root;
exports.AlertDialog = AlertDialog;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
exports.AlertDialogTrigger = AlertDialogTrigger;
const AlertDialogPortal = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react_1.default.createElement(AlertDialogPrimitive.Portal, Object.assign({ className: (0, utils_1.cn)(className) }, props),
        react_1.default.createElement("div", { className: 'fixed inset-0 z-50 flex items-end justify-center sm:items-center' }, children)));
};
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;
const AlertDialogOverlay = react_1.default.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react_1.default.createElement(AlertDialogPrimitive.Overlay, Object.assign({ className: (0, utils_1.cn)('animate-in fade-in fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity', className) }, props, { ref: ref })));
});
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(AlertDialogPortal, null,
        react_1.default.createElement(AlertDialogOverlay, null),
        react_1.default.createElement(AlertDialogPrimitive.Content, Object.assign({ ref: ref, className: (0, utils_1.cn)('animate-in fade-in-90 slide-in-from-bottom-10 sm:zoom-in-90 sm:slide-in-from-bottom-0 fixed z-50 grid w-full max-w-lg scale-100 gap-4 bg-white p-6 opacity-100 sm:rounded-lg md:w-full', 'dark:bg-neutral-900', className) }, props))));
});
exports.AlertDialogContent = AlertDialogContent;
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, utils_1.cn)('flex flex-col space-y-2 text-center sm:text-left', className) }, props)));
};
exports.AlertDialogHeader = AlertDialogHeader;
AlertDialogHeader.displayName = 'AlertDialogHeader';
const AlertDialogFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, utils_1.cn)('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className) }, props)));
};
exports.AlertDialogFooter = AlertDialogFooter;
AlertDialogFooter.displayName = 'AlertDialogFooter';
const AlertDialogTitle = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(AlertDialogPrimitive.Title, Object.assign({ ref: ref, className: (0, utils_1.cn)('text-lg font-semibold text-neutral-900', 'dark:text-neutral-50', className) }, props)));
});
exports.AlertDialogTitle = AlertDialogTitle;
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(AlertDialogPrimitive.Description, Object.assign({ ref: ref, className: (0, utils_1.cn)('text-sm text-neutral-500', 'dark:text-neutral-400', className) }, props)));
});
exports.AlertDialogDescription = AlertDialogDescription;
AlertDialogDescription.displayName =
    AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(AlertDialogPrimitive.Action, Object.assign({ ref: ref, className: (0, utils_1.cn)('inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 py-2 px-4 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900', className) }, props)));
});
exports.AlertDialogAction = AlertDialogAction;
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(AlertDialogPrimitive.Cancel, Object.assign({ ref: ref, className: (0, utils_1.cn)('mt-2 inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-transparent py-2 px-4 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 sm:mt-0', className) }, props)));
});
exports.AlertDialogCancel = AlertDialogCancel;
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
