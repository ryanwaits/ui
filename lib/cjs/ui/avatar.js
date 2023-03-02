"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarFallback = exports.AvatarImage = exports.Avatar = void 0;
const react_1 = __importDefault(require("react"));
const AvatarPrimitive = __importStar(require("@radix-ui/react-avatar"));
const utils_1 = require("../utils");
const Avatar = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(AvatarPrimitive.Root, Object.assign({ ref: ref, className: (0, utils_1.cn)('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className) }, props)));
});
exports.Avatar = Avatar;
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(AvatarPrimitive.Image, Object.assign({ ref: ref, className: (0, utils_1.cn)('aspect-square h-full w-full', className) }, props)));
});
exports.AvatarImage = AvatarImage;
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(AvatarPrimitive.Fallback, Object.assign({ ref: ref, className: (0, utils_1.cn)('flex h-full w-full items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-700', className) }, props)));
});
exports.AvatarFallback = AvatarFallback;
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
