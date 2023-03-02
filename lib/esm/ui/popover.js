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
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '../utils';
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef((_a, ref) => {
    var { className, align = 'center', sideOffset = 4 } = _a, props = __rest(_a, ["className", "align", "sideOffset"]);
    return (React.createElement(PopoverPrimitive.Portal, null,
        React.createElement(PopoverPrimitive.Content, Object.assign({ ref: ref, align: align, sideOffset: sideOffset, className: cn('animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 z-50 w-72 rounded-md border border-neutral-100 bg-white p-4 shadow-md outline-none dark:border-neutral-800 dark:bg-neutral-800', className) }, props))));
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
export { Popover, PopoverTrigger, PopoverContent };
