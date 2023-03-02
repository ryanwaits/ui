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
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '../utils';
const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
const Menubar = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.Root, Object.assign({ ref: ref, className: cn('flex h-10 items-center space-x-1 rounded-md border border-neutral-300 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800', className) }, props)));
});
Menubar.displayName = MenubarPrimitive.Root.displayName;
const MenubarTrigger = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.Trigger, Object.assign({ ref: ref, className: cn('flex cursor-default select-none items-center rounded-[0.2rem] py-1.5 px-3 text-sm font-medium outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-700 dark:data-[state=open]:bg-neutral-700', className) }, props)));
});
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
const MenubarSubTrigger = React.forwardRef((_a, ref) => {
    var { className, inset, children } = _a, props = __rest(_a, ["className", "inset", "children"]);
    return (React.createElement(MenubarPrimitive.SubTrigger, Object.assign({ ref: ref, className: cn('flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-700 dark:data-[state=open]:bg-neutral-700', inset && 'pl-8', className) }, props),
        children,
        React.createElement(ChevronRight, { className: 'ml-auto h-4 w-4' })));
});
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
const MenubarSubContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.SubContent, Object.assign({ ref: ref, className: cn('animate-in slide-in-from-left-1 z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 shadow-md dark:border-neutral-700 dark:bg-neutral-800', className) }, props)));
});
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
const MenubarContent = React.forwardRef((_a, ref) => {
    var { className, align = 'start', alignOffset = -4, sideOffset = 8 } = _a, props = __rest(_a, ["className", "align", "alignOffset", "sideOffset"]);
    return (React.createElement(MenubarPrimitive.Portal, null,
        React.createElement(MenubarPrimitive.Content, Object.assign({ ref: ref, align: align, alignOffset: alignOffset, sideOffset: sideOffset, className: cn('animate-in slide-in-from-top-1 z-50 min-w-[12rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400', className) }, props))));
});
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
const MenubarItem = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(MenubarPrimitive.Item, Object.assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700', inset && 'pl-8', className) }, props)));
});
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
const MenubarCheckboxItem = React.forwardRef((_a, ref) => {
    var { className, children, checked } = _a, props = __rest(_a, ["className", "children", "checked"]);
    return (React.createElement(MenubarPrimitive.CheckboxItem, Object.assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700', className), checked: checked }, props),
        React.createElement("span", { className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center' },
            React.createElement(MenubarPrimitive.ItemIndicator, null,
                React.createElement(Check, { className: 'h-4 w-4' }))),
        children));
});
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
const MenubarRadioItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(MenubarPrimitive.RadioItem, Object.assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700', className) }, props),
        React.createElement("span", { className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center' },
            React.createElement(MenubarPrimitive.ItemIndicator, null,
                React.createElement(Circle, { className: 'h-2 w-2 fill-current' }))),
        children));
});
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
const MenubarLabel = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(MenubarPrimitive.Label, Object.assign({ ref: ref, className: cn('px-2 py-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-300', inset && 'pl-8', className) }, props)));
});
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
const MenubarSeparator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.Separator, Object.assign({ ref: ref, className: cn('-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700', className) }, props)));
});
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
const MenubarShortcut = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("span", Object.assign({ className: cn('ml-auto text-xs tracking-widest text-neutral-500', className) }, props)));
};
MenubarShortcut.displayname = 'MenubarShortcut';
export { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarLabel, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarPortal, MenubarSubContent, MenubarSubTrigger, MenubarGroup, MenubarSub, MenubarShortcut, };
