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
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '../utils';
const Progress = React.forwardRef((_a, ref) => {
    var { className, value } = _a, props = __rest(_a, ["className", "value"]);
    return (React.createElement(ProgressPrimitive.Root, Object.assign({ ref: ref, className: cn('relative h-4 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800', className) }, props),
        React.createElement(ProgressPrimitive.Indicator, { className: 'h-full w-full flex-1 bg-neutral-900 transition-all dark:bg-neutral-400', style: { transform: `translateX(-${100 - (value || 0)}%)` } })));
});
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress };
