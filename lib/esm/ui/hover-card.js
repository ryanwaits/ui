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
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cn } from '../utils';
const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardContent = React.forwardRef((_a, ref) => {
    var { className, align = 'center', sideOffset = 4 } = _a, props = __rest(_a, ["className", "align", "sideOffset"]);
    return (React.createElement(HoverCardPrimitive.Content, Object.assign({ ref: ref, align: align, sideOffset: sideOffset, className: cn('animate-in zoom-in-90 z-50 w-64 rounded-md border border-neutral-100 bg-white p-4 shadow-md outline-none dark:border-neutral-800 dark:bg-neutral-800', className) }, props)));
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
export { HoverCard, HoverCardTrigger, HoverCardContent };
