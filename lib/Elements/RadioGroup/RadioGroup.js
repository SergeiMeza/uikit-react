var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import { classNames } from '../../helpers/methods';
var plans = [
    {
        name: 'Hobby',
        ram: '8GB',
        cpus: '4 CPUs',
        disk: '160 GB SSD disk',
        price: '$40',
    },
    {
        name: 'Startup',
        ram: '12GB',
        cpus: '6 CPUs',
        disk: '256 GB SSD disk',
        price: '$80',
    },
    {
        name: 'Business',
        ram: '16GB',
        cpus: '8 CPUs',
        disk: '512 GB SSD disk',
        price: '$160',
    },
    {
        name: 'Enterprise',
        ram: '32GB',
        cpus: '12 CPUs',
        disk: '1024 GB SSD disk',
        price: '$240',
    },
];
var RadioGroupType;
(function (RadioGroupType) {
    RadioGroupType["card"] = "card";
    RadioGroupType["list"] = "list";
})(RadioGroupType || (RadioGroupType = {}));
var RadioGroupComponent = function (_a) {
    var _b = _a.type, type = _b === void 0 ? RadioGroupType.card : _b, _c = _a.items, items = _c === void 0 ? plans : _c, _d = _a.selectedItem, selectedItem = _d === void 0 ? plans[0] : _d, _e = _a.onSelectedItem, onSelectedItem = _e === void 0 ? function (item) {
        console.log(item.name);
    } : _e, _f = _a.renderItem, renderItem = _f === void 0 ? function (item, active, selected) {
        // ## Card
        // return (
        //   <>
        //     <div className="flex items-center">
        //       <div className="text-sm">
        //         <HeadlessRadioGroup.Label
        //           as="p"
        //           className="font-medium text-gray-900"
        //         >
        //           {item.name}
        //         </HeadlessRadioGroup.Label>
        //         <HeadlessRadioGroup.Description as="div" className="text-gray-500">
        //           <p className="sm:inline">
        //             {item.ram} / {item.cpus}
        //           </p>{' '}
        //           <span className="hidden sm:inline sm:mx-1" aria-hidden="true">
        //             &middot;
        //           </span>{' '}
        //           <p className="sm:inline">{item.disk}</p>
        //         </HeadlessRadioGroup.Description>
        //       </div>
        //     </div>
        //     <HeadlessRadioGroup.Description
        //       as="div"
        //       className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
        //     >
        //       <div className="font-medium text-gray-900">{item.price}</div>
        //       <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
        //     </HeadlessRadioGroup.Description>
        //     <div
        //       className={classNames(
        //         selected ? 'border-primary-500' : 'border-transparent',
        //         'absolute -inset-px rounded-lg border-2 pointer-events-none',
        //       )}
        //       aria-hidden="true"
        //     />
        //   </>
        // )
        return (_jsxs(_Fragment, { children: [_jsx("span", __assign({ className: classNames(selected
                        ? 'bg-primary-600 border-transparent'
                        : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-primary-500' : '', 'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'), "aria-hidden": "true" }, { children: _jsx("span", { className: "rounded-full bg-white w-1.5 h-1.5" }, void 0) }), void 0), _jsxs("div", __assign({ className: "ml-3 flex flex-col" }, { children: [_jsx(HeadlessRadioGroup.Label, __assign({ as: "span", className: classNames(selected ? 'text-primary-900' : 'text-gray-900', 'block text-sm font-medium') }, { children: item.name }), void 0), _jsx(HeadlessRadioGroup.Description, __assign({ as: "span", className: classNames(selected ? 'text-primary-700' : 'text-gray-500', 'block text-sm') }, { children: item.description }), void 0)] }), void 0)] }, void 0));
    } : _f;
    var _g = useState(selectedItem), selected = _g[0], setSelected = _g[1];
    var cardWrapperClassNames = function (active) {
        return classNames(active ? 'ring-1 ring-offset-2 ring-primary-500' : '', 'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none');
    };
    var listWrapperClassNames = function (index, active) {
        return classNames(index === 0 ? 'rounded-tl-md rounded-tr-md' : '', index === items.length - 1 ? 'rounded-bl-md rounded-br-md' : '', active ? 'bg-primary-50 border-primary-200 z-10' : 'border-gray-200', 'relative border p-4 flex cursor-pointer focus:outline-none');
    };
    var cardGroupClassNames = 'space-y-4';
    var listGroupClassNames = 'bg-white rounded-md -space-y-px';
    var cardOrListRadioGroup = (_jsxs(HeadlessRadioGroup, __assign({ value: selected, onChange: function (item) {
            setSelected(item);
            onSelectedItem(item);
        } }, { children: [_jsx(HeadlessRadioGroup.Label, __assign({ className: "sr-only" }, { children: "Server size" }), void 0), _jsx("div", __assign({ className: type === RadioGroupType.card
                    ? cardGroupClassNames
                    : listGroupClassNames }, { children: items.map(function (item, index) { return (_jsx(HeadlessRadioGroup.Option, __assign({ value: item, className: function (_a) {
                        var active = _a.active;
                        return type === RadioGroupType.card
                            ? cardWrapperClassNames(active)
                            : listWrapperClassNames(index, active);
                    } }, { children: function (_a) {
                        var active = _a.active, checked = _a.checked;
                        return renderItem(item, active, checked);
                    } }), item.name)); }) }), void 0)] }), void 0));
    return cardOrListRadioGroup;
};
export var RadioGroup = Object.assign(RadioGroupComponent, {
    type: RadioGroupType,
});
export default RadioGroup;
