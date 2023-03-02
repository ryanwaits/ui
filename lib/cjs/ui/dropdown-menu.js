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
exports.DropdownMenuRadioGroup = exports.DropdownMenuSubTrigger = exports.DropdownMenuSubContent = exports.DropdownMenuSub = exports.DropdownMenuPortal = exports.DropdownMenuGroup = exports.DropdownMenuShortcut = exports.DropdownMenuSeparator = exports.DropdownMenuLabel = exports.DropdownMenuRadioItem = exports.DropdownMenuCheckboxItem = exports.DropdownMenuItem = exports.DropdownMenuContent = exports.DropdownMenuTrigger = exports.DropdownMenu = void 0;
const react_1 = __importDefault(require("react"));
const DropdownMenuPrimitive = __importStar(require("@radix-ui/react-dropdown-menu"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../utils");
const DropdownMenu = DropdownMenuPrimitive.Root;
exports.DropdownMenu = DropdownMenu;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
exports.DropdownMenuGroup = DropdownMenuGroup;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
exports.DropdownMenuPortal = DropdownMenuPortal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
exports.DropdownMenuSub = DropdownMenuSub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
const DropdownMenuSubTrigger = react_1.default.forwardRef((_a, ref) => {
    var { className, inset, children } = _a, props = __rest(_a, ["className", "inset", "children"]);
    return (react_1.default.createElement(DropdownMenuPrimitive.SubTrigger, Object.assign({ ref: ref, className: (0, utils_1.cn)('flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-700 dark:data-[state=open]:bg-neutral-700', inset && 'pl-8', className) }, props),
        children,
        react_1.default.createElement(lucide_react_1.ChevronRight, { className: 'ml-auto h-4 w-4' })));
});
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(DropdownMenuPrimitive.SubContent, Object.assign({ ref: ref, className: (0, utils_1.cn)('animate-in slide-in-from-left-1 z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400', className) }, props)));
});
exports.DropdownMenuSubContent = DropdownMenuSubContent;
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = react_1.default.forwardRef((_a, ref) => {
    var { className, sideOffset = 4 } = _a, props = __rest(_a, ["className", "sideOffset"]);
    return (react_1.default.createElement(DropdownMenuPrimitive.Portal, null,
        react_1.default.createElement(DropdownMenuPrimitive.Content, Object.assign({ ref: ref, sideOffset: sideOffset, className: (0, utils_1.cn)('animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400', className) }, props))));
});
exports.DropdownMenuContent = DropdownMenuContent;
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = react_1.default.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (react_1.default.createElement(DropdownMenuPrimitive.Item, Object.assign({ ref: ref, className: (0, utils_1.cn)('relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700', inset && 'pl-8', className) }, props)));
});
exports.DropdownMenuItem = DropdownMenuItem;
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = react_1.default.forwardRef((_a, ref) => {
    var { className, children, checked } = _a, props = __rest(_a, ["className", "children", "checked"]);
    return (react_1.default.createElement(DropdownMenuPrimitive.CheckboxItem, Object.assign({ ref: ref, className: (0, utils_1.cn)('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700', className), checked: checked }, props),
        react_1.default.createElement("span", { className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center' },
            react_1.default.createElement(DropdownMenuPrimitive.ItemIndicator, null,
                react_1.default.createElement(lucide_react_1.Check, { className: 'h-4 w-4' }))),
        children));
});
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = react_1.default.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react_1.default.createElement(DropdownMenuPrimitive.RadioItem, Object.assign({ ref: ref, className: (0, utils_1.cn)('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700', className) }, props),
        react_1.default.createElement("span", { className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center' },
            react_1.default.createElement(DropdownMenuPrimitive.ItemIndicator, null,
                react_1.default.createElement(lucide_react_1.Circle, { className: 'h-2 w-2 fill-current' }))),
        children));
});
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = react_1.default.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (react_1.default.createElement(DropdownMenuPrimitive.Label, Object.assign({ ref: ref, className: (0, utils_1.cn)('px-2 py-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-300', inset && 'pl-8', className) }, props)));
});
exports.DropdownMenuLabel = DropdownMenuLabel;
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(DropdownMenuPrimitive.Separator, Object.assign({ ref: ref, className: (0, utils_1.cn)('-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700', className) }, props)));
});
exports.DropdownMenuSeparator = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("span", Object.assign({ className: (0, utils_1.cn)('ml-auto text-xs tracking-widest text-neutral-500', className) }, props)));
};
exports.DropdownMenuShortcut = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
