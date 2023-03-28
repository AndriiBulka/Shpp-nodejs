"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Buttons;
(function (Buttons) {
    Buttons["plus"] = "plus";
    Buttons["minus"] = "minus";
})(Buttons || (Buttons = {}));
function fetchCount(button) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(button);
        const res = yield fetch(`http://localhost:3000/${button}`, {
            method: "POST",
        });
        const data = yield res.json();
        let plus = document.getElementById("plus");
        let minus = document.getElementById("minus");
        if (button === Buttons.plus && plus) {
            plus.innerHTML = `&nbsp&nbsp&nbsp: ${data.plus}`;
        }
        if (button === Buttons.minus && minus) {
            minus.innerHTML = `&nbsp&nbsp&nbsp: ${data.minus}`;
        }
    });
}
