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
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from '../utils';
const ScrollArea = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(ScrollAreaPrimitive.Root, Object.assign({ ref: ref, className: cn('relative overflow-hidden', className) }, props),
        React.createElement(ScrollAreaPrimitive.Viewport, { className: 'h-full w-full rounded-[inherit]' }, children),
        React.createElement(ScrollBar, null),
        React.createElement(ScrollAreaPrimitive.Corner, null)));
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef((_a, ref) => {
    var { className, orientation = 'vertical' } = _a, props = __rest(_a, ["className", "orientation"]);
    return (React.createElement(ScrollAreaPrimitive.ScrollAreaScrollbar, Object.assign({ ref: ref, orientation: orientation, className: cn('flex touch-none select-none transition-colors', orientation === 'vertical' &&
            'h-full w-2.5 border-l border-l-transparent p-[1px]', orientation === 'horizontal' &&
            'h-2.5 border-t border-t-transparent p-[1px]', className) }, props),
        React.createElement(ScrollAreaPrimitive.ScrollAreaThumb, { className: 'bg-neutral relative flex-1 rounded-full bg-neutral-700' })));
});
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
export { ScrollArea, ScrollBar };
