/*interface StringValidator {
    isAccept(s:string):boolean;
}
var lettersRrgexp=/^[A-Za-z]+$/;
var numberRrgexp=/^[0-9]+$/;

class letterOnluValidator implements StringValidator{
    isAccept(s: string): boolean {
        return lettersRrgexp.test(s);
    }

}
class ZipOnluValidator implements StringValidator{
    isAccept(s: string): boolean {
        return s.length===5&&numberRrgexp.test(s);
    }

}*/
var Validation;
(function (Validation) {
    var lettersRrgexp = /^[A-Za-z]+$/;
    var numberRrgexp = /^[0-9]+$/;
    var lettersOnlyValidator = /** @class */ (function () {
        function lettersOnlyValidator() {
        }
        lettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRrgexp.test(s);
        };
        return lettersOnlyValidator;
    }());
    Validation.lettersOnlyValidator = lettersOnlyValidator;
    var ZipOnluValidator = /** @class */ (function () {
        function ZipOnluValidator() {
        }
        ZipOnluValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRrgexp.test(s);
        };
        return ZipOnluValidator;
    }());
})(Validation || (Validation = {}));
