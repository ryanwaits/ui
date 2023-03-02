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
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '../utils';
const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
const ContextMenuSubTrigger = React.forwardRef((_a, ref) => {
    var { className, inset, children } = _a, props = __rest(_a, ["className", "inset", "children"]);
    return (React.createElement(ContextMenuPrimitive.SubTrigger, Object.assign({ ref: ref, className: cn('flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-700 dark:data-[state=open]:bg-neutral-700', inset && 'pl-8', className) }, props),
        children,
        React.createElement(ChevronRight, { className: 'ml-auto h-4 w-4' })));
});
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
const ContextMenuSubContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(ContextMenuPrimitive.SubContent, Object.assign({ ref: ref, className: cn('animate-in slide-in-from-left-1 z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 shadow-md dark:border-neutral-700 dark:bg-neutral-800', className) }, props)));
});
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
const ContextMenuContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(ContextMenuPrimitive.Portal, null,
        React.createElement(ContextMenuPrimitive.Content, Object.assign({ ref: ref, className: cn('animate-in fade-in-80 z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400', className) }, props))));
});
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
const ContextMenuItem = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(ContextMenuPrimitive.Item, Object.assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700', inset && 'pl-8', className) }, props)));
});
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
const ContextMenuCheckboxItem = React.forwardRef((_a, ref) => {
    var { className, children, checked } = _a, props = __rest(_a, ["className", "children", "checked"]);
    return (React.createElement(ContextMenuPrimitive.CheckboxItem, Object.assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700', className), checked: checked }, props),
        React.createElement("span", { className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center' },
            React.createElement(ContextMenuPrimitive.ItemIndicator, null,
                React.createElement(Check, { className: 'h-4 w-4' }))),
        children));
});
ContextMenuCheckboxItem.displayName =
    ContextMenuPrimitive.CheckboxItem.displayName;
const ContextMenuRadioItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(ContextMenuPrimitive.RadioItem, Object.assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700', className) }, props),
        React.createElement("span", { className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center' },
            React.createElement(ContextMenuPrimitive.ItemIndicator, null,
                React.createElement(Circle, { className: 'h-2 w-2 fill-current' }))),
        children));
});
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
const ContextMenuLabel = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(ContextMenuPrimitive.Label, Object.assign({ ref: ref, className: cn('px-2 py-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-300', inset && 'pl-8', className) }, props)));
});
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
const ContextMenuSeparator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(ContextMenuPrimitive.Separator, Object.assign({ ref: ref, className: cn('-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700', className) }, props)));
});
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
const ContextMenuShortcut = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("span", Object.assign({ className: cn('ml-auto text-xs tracking-widest text-neutral-500', className) }, props)));
};
ContextMenuShortcut.displayName = 'ContextMenuShortcut';
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup, };
