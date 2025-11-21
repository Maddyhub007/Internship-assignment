module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/My projects/yatri-cabs-website/app/store/slices/bookingSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setFrom",
    ()=>setFrom,
    "setPickupDate",
    ()=>setPickupDate,
    "setPickupTime",
    ()=>setPickupTime,
    "setReturnDate",
    ()=>setReturnDate,
    "setServiceType",
    ()=>setServiceType,
    "setTo",
    ()=>setTo,
    "setTripType",
    ()=>setTripType,
    "swapLocations",
    ()=>swapLocations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/My projects/yatri-cabs-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    tripType: "oneWay",
    serviceType: "outstation",
    from: "",
    to: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "00:00"
};
const bookingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "booking",
    initialState,
    reducers: {
        setTripType: (state, action)=>{
            state.tripType = action.payload;
        },
        setServiceType: (state, action)=>{
            state.serviceType = action.payload;
        },
        setFrom: (state, action)=>{
            state.from = action.payload;
        },
        setTo: (state, action)=>{
            state.to = action.payload;
        },
        setPickupDate: (state, action)=>{
            state.pickupDate = action.payload;
        },
        setReturnDate: (state, action)=>{
            state.returnDate = action.payload;
        },
        setPickupTime: (state, action)=>{
            state.pickupTime = action.payload;
        },
        swapLocations: (state)=>{
            const temp = state.from;
            state.from = state.to;
            state.to = temp;
        }
    }
});
const { setTripType, setServiceType, setFrom, setTo, setPickupDate, setReturnDate, setPickupTime, swapLocations } = bookingSlice.actions;
const __TURBOPACK__default__export__ = bookingSlice.reducer;
}),
"[project]/Desktop/My projects/yatri-cabs-website/app/store/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/My projects/yatri-cabs-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$app$2f$store$2f$slices$2f$bookingSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/My projects/yatri-cabs-website/app/store/slices/bookingSlice.ts [app-ssr] (ecmascript)");
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        booking: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$app$2f$store$2f$slices$2f$bookingSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
}),
"[project]/Desktop/My projects/yatri-cabs-website/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/My projects/yatri-cabs-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/My projects/yatri-cabs-website/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$app$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/My projects/yatri-cabs-website/app/store/store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$My__projects$2f$yatri$2d$cabs$2d$website$2f$app$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/My projects/yatri-cabs-website/app/providers.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3c693666._.js.map