"use strict";
'use client';
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
exports.CommandSeparator = exports.CommandShortcut = exports.CommandItem = exports.CommandGroup = exports.CommandEmpty = exports.CommandList = exports.CommandInput = exports.CommandDialog = exports.Command = void 0;
const react_1 = __importDefault(require("react"));
const cmdk_1 = require("cmdk");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../utils");
const dialog_1 = require("./dialog");
const Command = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(cmdk_1.Command, Object.assign({ ref: ref, className: (0, utils_1.cn)('flex h-full w-full flex-col overflow-hidden rounded-lg bg-white dark:bg-neutral-800', className) }, props)));
});
exports.Command = Command;
Command.displayName = cmdk_1.Command.displayName;
const CommandDialog = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(dialog_1.Dialog, Object.assign({}, props),
        react_1.default.createElement(dialog_1.DialogContent, { className: 'overflow-hidden p-0 shadow-2xl [&_[dialog-overlay]]:bg-red-100' },
            react_1.default.createElement(Command, { className: '[&_[cmdk-group]]:px-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-input]]:h-12 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-group]_+[cmdk-group]]:pt-0' }, children))));
};
exports.CommandDialog = CommandDialog;
const CommandInput = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("div", { className: 'flex items-center border-b border-b-neutral-100 px-4 dark:border-b-neutral-700', "cmdk-input-wrapper": '' },
        react_1.default.createElement(lucide_react_1.Search, { className: 'mr-2 h-4 w-4 shrink-0 opacity-50' }),
        react_1.default.createElement(cmdk_1.Command.Input, Object.assign({ ref: ref, className: (0, utils_1.cn)('flex h-11 w-full rounded-md border-transparent bg-transparent py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-transparent focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50', className) }, props))));
});
exports.CommandInput = CommandInput;
CommandInput.displayName = cmdk_1.Command.Input.displayName;
const CommandList = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(cmdk_1.Command.List, Object.assign({ ref: ref, className: (0, utils_1.cn)('max-h-[300px] overflow-y-auto overflow-x-hidden', className) }, props)));
});
exports.CommandList = CommandList;
CommandList.displayName = cmdk_1.Command.List.displayName;
const CommandEmpty = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(cmdk_1.Command.Empty, Object.assign({ ref: ref, className: 'py-6 text-center text-sm' }, props))));
exports.CommandEmpty = CommandEmpty;
CommandEmpty.displayName = cmdk_1.Command.Empty.displayName;
const CommandGroup = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(cmdk_1.Command.Group, Object.assign({ ref: ref, className: (0, utils_1.cn)('overflow-hidden py-3 px-2 text-neutral-700 dark:text-neutral-400 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-neutral-900 [&_[cmdk-group-heading]]:dark:text-neutral-300', className) }, props)));
});
exports.CommandGroup = CommandGroup;
CommandGroup.displayName = cmdk_1.Command.Group.displayName;
const CommandSeparator = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(cmdk_1.Command.Separator, Object.assign({ ref: ref, className: (0, utils_1.cn)('-mx-1 h-px bg-neutral-100 dark:bg-neutral-700', className) }, props)));
});
exports.CommandSeparator = CommandSeparator;
CommandSeparator.displayName = cmdk_1.Command.Separator.displayName;
const CommandItem = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(cmdk_1.Command.Item, Object.assign({ ref: ref, className: (0, utils_1.cn)('relative flex cursor-default select-none items-center rounded-md py-1.5 px-2 text-sm font-medium outline-none aria-selected:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-selected:bg-neutral-700', className) }, props)));
});
exports.CommandItem = CommandItem;
CommandItem.displayName = cmdk_1.Command.Item.displayName;
const CommandShortcut = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("span", Object.assign({ className: (0, utils_1.cn)('ml-auto text-xs tracking-widest text-neutral-500', className) }, props)));
};
exports.CommandShortcut = CommandShortcut;
CommandShortcut.displayName = 'CommandShortcut';
