var MathOperation_ENUM;
(function (MathOperation_ENUM) {
    MathOperation_ENUM[MathOperation_ENUM["Add_Operation"] = 0] = "Add_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Subtract_Operation"] = 1] = "Subtract_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Multiply_Operation"] = 2] = "Multiply_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Divide_Operation"] = 3] = "Divide_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Percentage_Operation"] = 4] = "Percentage_Operation";
})(MathOperation_ENUM || (MathOperation_ENUM = {}));
var MathOperation = /** @class */ (function () {
    function MathOperation(ThisMathOperation, ThisMathOperationString, ThisMathDelegate) {
        var _this = this;
        this.toString = function () {
            return "(" + (_this.ThisMathOperationResult + " " + _this.ThisMathOperationResult) + ")";
        };
        this.ThisMathOperation = ThisMathOperation;
        this.ThisMathOperationString = ThisMathOperationString;
        this.ThisMathDelegate = ThisMathDelegate;
    }
    MathOperation.prototype.PerformMathOperation = function (params) {
        this.ThisMathOperationResult = this.ThisMathDelegate({ Value1: params.Value1, Value2: params.Value2 });
    };
    return MathOperation;
}());
//type MathFunctionParams = { Value1: number, Value2: number }
function Add(params) {
    return (params.Value1 + params.Value2);
}
function Subtract(params) {
    return (params.Value1 - params.Value2);
}
//let TypeScriptMathArray = [
//    { new  MathOperation(ThisMathOperation: Add_Operation, )},
//];
var test = new MathOperation(MathOperation_ENUM.Add_Operation, "+", Add);
var test1 = new MathOperation(MathOperation_ENUM.Subtract_Operation, "-", function (params) { return (params.Value1 - params.Value2); });
Add({ Value1: 3, Value2: 4 });
Subtract({ Value1: 3, Value2: 4 });
//const TypeScriptMathArray: Array<MathOperation> =
//{
//    new MathOperation
//}
//const TypeScriptMathArray: MathOperation[] = new Array(5).fill('');
//class PerformMathOperation {
//    public PerformThisMathOperation: MathOperation;
//    public toString = (): string => {
//        return `(${this.CourseID + " / " + this.CourseName})`;
//    }
//}
//# sourceMappingURL=Math_TypeScript.js.map