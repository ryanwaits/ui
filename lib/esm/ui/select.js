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
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../utils';
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(SelectPrimitive.Trigger, Object.assign({ ref: ref, className: cn('flex h-10 w-full items-center justify-between rounded-md border border-neutral-300 bg-transparent py-2 px-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900', className) }, props),
        children,
        React.createElement(ChevronDown, { className: 'h-4 w-4 opacity-50' })));
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectContent = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(SelectPrimitive.Portal, null,
        React.createElement(SelectPrimitive.Content, Object.assign({ ref: ref, className: cn('animate-in fade-in-80 relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white text-neutral-700 shadow-md dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400', className) }, props),
            React.createElement(SelectPrimitive.Viewport, { className: 'p-1' }, children))));
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(SelectPrimitive.Label, Object.assign({ ref: ref, className: cn('py-1.5 pr-2 pl-8 text-sm font-semibold text-neutral-900 dark:text-neutral-300', className) }, props)));
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(SelectPrimitive.Item, Object.assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700', className) }, props),
        React.createElement("span", { className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center' },
            React.createElement(SelectPrimitive.ItemIndicator, null,
                React.createElement(Check, { className: 'h-4 w-4' }))),
        React.createElement(SelectPrimitive.ItemText, null, children)));
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(SelectPrimitive.Separator, Object.assign({ ref: ref, className: cn('-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700', className) }, props)));
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, };
