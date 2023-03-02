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
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '../utils';
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(AlertDialogPrimitive.Portal, Object.assign({ className: cn(className) }, props),
        React.createElement("div", { className: 'fixed inset-0 z-50 flex items-end justify-center sm:items-center' }, children)));
};
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;
const AlertDialogOverlay = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(AlertDialogPrimitive.Overlay, Object.assign({ className: cn('animate-in fade-in fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity', className) }, props, { ref: ref })));
});
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(AlertDialogPortal, null,
        React.createElement(AlertDialogOverlay, null),
        React.createElement(AlertDialogPrimitive.Content, Object.assign({ ref: ref, className: cn('animate-in fade-in-90 slide-in-from-bottom-10 sm:zoom-in-90 sm:slide-in-from-bottom-0 fixed z-50 grid w-full max-w-lg scale-100 gap-4 bg-white p-6 opacity-100 sm:rounded-lg md:w-full', 'dark:bg-neutral-900', className) }, props))));
});
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: cn('flex flex-col space-y-2 text-center sm:text-left', className) }, props)));
};
AlertDialogHeader.displayName = 'AlertDialogHeader';
const AlertDialogFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className) }, props)));
};
AlertDialogFooter.displayName = 'AlertDialogFooter';
const AlertDialogTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(AlertDialogPrimitive.Title, Object.assign({ ref: ref, className: cn('text-lg font-semibold text-neutral-900', 'dark:text-neutral-50', className) }, props)));
});
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(AlertDialogPrimitive.Description, Object.assign({ ref: ref, className: cn('text-sm text-neutral-500', 'dark:text-neutral-400', className) }, props)));
});
AlertDialogDescription.displayName =
    AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(AlertDialogPrimitive.Action, Object.assign({ ref: ref, className: cn('inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 py-2 px-4 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900', className) }, props)));
});
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(AlertDialogPrimitive.Cancel, Object.assign({ ref: ref, className: cn('mt-2 inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-transparent py-2 px-4 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 sm:mt-0', className) }, props)));
});
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, };
