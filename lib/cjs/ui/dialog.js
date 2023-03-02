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
exports.DialogDescription = exports.DialogTitle = exports.DialogFooter = exports.DialogHeader = exports.DialogContent = exports.DialogTrigger = exports.Dialog = void 0;
const react_1 = __importDefault(require("react"));
const DialogPrimitive = __importStar(require("@radix-ui/react-dialog"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../utils");
const Dialog = DialogPrimitive.Root;
exports.Dialog = Dialog;
const DialogTrigger = DialogPrimitive.Trigger;
exports.DialogTrigger = DialogTrigger;
const DialogPortal = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react_1.default.createElement(DialogPrimitive.Portal, Object.assign({ className: (0, utils_1.cn)(className) }, props),
        react_1.default.createElement("div", { className: 'fixed inset-0 z-50 flex items-start justify-center sm:items-center' }, children)));
};
DialogPortal.displayName = DialogPrimitive.Portal.displayName;
const DialogOverlay = react_1.default.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react_1.default.createElement(DialogPrimitive.Overlay, Object.assign({ className: (0, utils_1.cn)('data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100', className) }, props, { ref: ref })));
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = react_1.default.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react_1.default.createElement(DialogPortal, null,
        react_1.default.createElement(DialogOverlay, null),
        react_1.default.createElement(DialogPrimitive.Content, Object.assign({ ref: ref, className: (0, utils_1.cn)('animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 fixed z-50 grid w-full gap-4 rounded-b-lg bg-white p-6 sm:max-w-lg sm:rounded-lg', 'dark:bg-neutral-900', className) }, props),
            children,
            react_1.default.createElement(DialogPrimitive.Close, { className: 'absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=open]:bg-neutral-800' },
                react_1.default.createElement(lucide_react_1.X, { className: 'h-4 w-4' }),
                react_1.default.createElement("span", { className: 'sr-only' }, "Close")))));
});
exports.DialogContent = DialogContent;
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, utils_1.cn)('flex flex-col space-y-2 text-center sm:text-left', className) }, props)));
};
exports.DialogHeader = DialogHeader;
DialogHeader.displayName = 'DialogHeader';
const DialogFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, utils_1.cn)('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className) }, props)));
};
exports.DialogFooter = DialogFooter;
DialogFooter.displayName = 'DialogFooter';
const DialogTitle = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(DialogPrimitive.Title, Object.assign({ ref: ref, className: (0, utils_1.cn)('text-lg font-semibold text-neutral-900', 'dark:text-neutral-50', className) }, props)));
});
exports.DialogTitle = DialogTitle;
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(DialogPrimitive.Description, Object.assign({ ref: ref, className: (0, utils_1.cn)('text-sm text-neutral-500', 'dark:text-neutral-400', className) }, props)));
});
exports.DialogDescription = DialogDescription;
DialogDescription.displayName = DialogPrimitive.Description.displayName;
