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
import React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import { cn } from '../utils';
import { Dialog, DialogContent } from './dialog';
const Command = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(CommandPrimitive, Object.assign({ ref: ref, className: cn('flex h-full w-full flex-col overflow-hidden rounded-lg bg-white dark:bg-neutral-800', className) }, props)));
});
Command.displayName = CommandPrimitive.displayName;
const CommandDialog = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(Dialog, Object.assign({}, props),
        React.createElement(DialogContent, { className: 'overflow-hidden p-0 shadow-2xl [&_[dialog-overlay]]:bg-red-100' },
            React.createElement(Command, { className: '[&_[cmdk-group]]:px-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-input]]:h-12 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-group]_+[cmdk-group]]:pt-0' }, children))));
};
const CommandInput = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", { className: 'flex items-center border-b border-b-neutral-100 px-4 dark:border-b-neutral-700', "cmdk-input-wrapper": '' },
        React.createElement(Search, { className: 'mr-2 h-4 w-4 shrink-0 opacity-50' }),
        React.createElement(CommandPrimitive.Input, Object.assign({ ref: ref, className: cn('flex h-11 w-full rounded-md border-transparent bg-transparent py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-transparent focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50', className) }, props))));
});
CommandInput.displayName = CommandPrimitive.Input.displayName;
const CommandList = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(CommandPrimitive.List, Object.assign({ ref: ref, className: cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className) }, props)));
});
CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => (React.createElement(CommandPrimitive.Empty, Object.assign({ ref: ref, className: 'py-6 text-center text-sm' }, props))));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
const CommandGroup = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(CommandPrimitive.Group, Object.assign({ ref: ref, className: cn('overflow-hidden py-3 px-2 text-neutral-700 dark:text-neutral-400 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-neutral-900 [&_[cmdk-group-heading]]:dark:text-neutral-300', className) }, props)));
});
CommandGroup.displayName = CommandPrimitive.Group.displayName;
const CommandSeparator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(CommandPrimitive.Separator, Object.assign({ ref: ref, className: cn('-mx-1 h-px bg-neutral-100 dark:bg-neutral-700', className) }, props)));
});
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
const CommandItem = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(CommandPrimitive.Item, Object.assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-md py-1.5 px-2 text-sm font-medium outline-none aria-selected:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-selected:bg-neutral-700', className) }, props)));
});
CommandItem.displayName = CommandPrimitive.Item.displayName;
const CommandShortcut = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("span", Object.assign({ className: cn('ml-auto text-xs tracking-widest text-neutral-500', className) }, props)));
};
CommandShortcut.displayName = 'CommandShortcut';
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, };
