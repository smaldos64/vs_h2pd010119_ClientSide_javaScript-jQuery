var MathOperation_ENUM;
(function (MathOperation_ENUM) {
    MathOperation_ENUM[MathOperation_ENUM["Add_Operation"] = 0] = "Add_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Subtract_Operation"] = 1] = "Subtract_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Multiply_Operation"] = 2] = "Multiply_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Divide_Operation"] = 3] = "Divide_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Percentage_Operation"] = 4] = "Percentage_Operation";
})(MathOperation_ENUM || (MathOperation_ENUM = {}));
var MathOperation = /** @class */ (function () {
    function MathOperation(params) {
        var _this = this;
        this.toString = function () {
            return "(" + (_this.ThisMathOperationResult + " " + _this.ThisMathOperationResult) + ")";
        };
        this.ThisMathOperation = params.ThisMathOperation;
        this.ThisMathOperationString = params.ThisMathOperationString;
        this.ThisMathDelegate = params.ThisMathDelegate;
    }
    MathOperation.prototype.PerformMathOperation = function (params) {
        this.ThisMathOperationResult = this.ThisMathDelegate({ Value1: params.Value1, Value2: params.Value2 });
    };
    return MathOperation;
}());
function Add(params) {
    return (params.Value1 + params.Value2);
}
function Subtract(params) {
    return (params.Value1 - params.Value2);
}
var TypeScriptMathArray = [
    new MathOperation({ ThisMathOperation: MathOperation_ENUM.Add_Operation, ThisMathOperationString: "+", ThisMathDelegate: Add }),
    new MathOperation({ ThisMathOperation: MathOperation_ENUM.Subtract_Operation, ThisMathOperationString: "-", ThisMathDelegate: function (params) { return (params.Value1 - params.Value2); } }),
    new MathOperation({ ThisMathOperation: MathOperation_ENUM.Multiply_Operation, ThisMathOperationString: "*", ThisMathDelegate: function (params) { return (params.Value1 * params.Value2); } }),
    new MathOperation({ ThisMathOperation: MathOperation_ENUM.Divide_Operation, ThisMathOperationString: "/", ThisMathDelegate: function (params) { return (params.Value1 / params.Value2); } }),
    new MathOperation({ ThisMathOperation: MathOperation_ENUM.Percentage_Operation, ThisMathOperationString: "%", ThisMathDelegate: function (params) { return (params.Value1 / params.Value2 * 100); } })
];
var test = new MathOperation({ ThisMathOperation: MathOperation_ENUM.Add_Operation, ThisMathOperationString: "+", ThisMathDelegate: Add });
var test1 = new MathOperation({ ThisMathOperation: MathOperation_ENUM.Subtract_Operation, ThisMathOperationString: "-", ThisMathDelegate: function (params) { return (params.Value1 - params.Value2); } });
Add({ Value1: 3, Value2: 4 });
Subtract({ Value1: 3, Value2: 4 });
//# sourceMappingURL=Math_TypeScript.js.map