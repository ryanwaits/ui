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
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import { cn } from '../utils';
const RadioGroup = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(RadioGroupPrimitive.Root, Object.assign({ className: cn('grid gap-2', className) }, props, { ref: ref })));
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(RadioGroupPrimitive.Item, Object.assign({ ref: ref, className: cn('text:fill-neutral-50 h-4 w-4 rounded-full border border-neutral-300 text-neutral-900 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-900 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900', className) }, props),
        React.createElement(RadioGroupPrimitive.Indicator, { className: 'flex items-center justify-center' },
            React.createElement(Circle, { className: 'h-2.5 w-2.5 fill-neutral-900 dark:fill-neutral-50' }))));
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
export { RadioGroup, RadioGroupItem };
