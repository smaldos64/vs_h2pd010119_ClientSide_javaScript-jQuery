var MathOperation_ENUM;
(function (MathOperation_ENUM) {
    MathOperation_ENUM[MathOperation_ENUM["Add_Operation"] = 0] = "Add_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Subtract_Operation"] = 1] = "Subtract_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Multiply_Operation"] = 2] = "Multiply_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Divide_Operation"] = 3] = "Divide_Operation";
    MathOperation_ENUM[MathOperation_ENUM["Percentage_Operation"] = 4] = "Percentage_Operation";
})(MathOperation_ENUM || (MathOperation_ENUM = {}));
var MathOperationIndex = -1;
var MathOperation = /** @class */ (function () {
    function MathOperation(params) {
        var _this = this;
        this.toString = function () {
            return "(" + _this.ThisMathOperationResult + ")";
        };
        this.ThisMathOperation = params.ThisMathOperation;
        this.ThisMathOperationString = params.ThisMathOperationString;
        this.ThisMathDelegate = params.ThisMathDelegate;
        this.ThisMathOperationResult = 0;
        this.ThisValue1 = 0;
        this.ThisValue2 = 0;
    }
    MathOperation.prototype.PerformMathOperation = function (params) {
        this.ThisMathOperationResult = this.ThisMathDelegate({ Value1: params.Value1, Value2: params.Value2 });
        this.ThisValue1 = params.Value1;
        this.ThisValue2 = params.Value2;
        return (this.ThisMathOperationResult.toString());
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
//let test = new MathOperation({ ThisMathOperation : MathOperation_ENUM.Add_Operation, ThisMathOperationString : "+", ThisMathDelegate : Add });
//let test1 = new MathOperation({ ThisMathOperation : MathOperation_ENUM.Subtract_Operation, ThisMathOperationString : "-", ThisMathDelegate : function(params: { Value1: number, Value2: number }) { return (params.Value1 - params.Value2) } });
//Add({ Value1 : 3, Value2 : 4 });
//Subtract({ Value1 : 3, Value2 : 4 });
function TypeScriptClearTextBoxes(params) {
    var Counter = 0;
    while (Counter < params.TextBoxArray.length) {
        params.TextBoxArray[Counter].value = "";
        Counter++;
    }
}
function TypeScriptCalculateMathResult(params) {
    var Counter = 0;
    var MathOperationFound = false;
    while ((Counter < TypeScriptMathArray.length) && (false == MathOperationFound)) {
        if (TypeScriptMathArray[Counter].ThisMathOperation == params.MathOperation) {
            MathOperationFound = true;
            MathOperationIndex = Counter;
            return (TypeScriptMathArray[Counter].PerformMathOperation({ Value1: parseFloat(params.Value1String), Value2: parseFloat(params.Value2String) }).toString());
            //return (TypeScriptMathArray[Counter].ThisMathDelegate({ Value1 : parseFloat(params.Value1String), Value2 : parseFloat(params.Value2String) }).toString());
        }
        else {
            Counter++;
        }
    }
    if (false == MathOperationFound) {
        alert("Der er noget galt i dit program ---> Spaghetti programmør !!!");
    }
}
function GetTemplateStringFromMathOperation(params) {
    var MathTemplateString = "";
    MathTemplateString =
        params.MathOperation_Object.ThisMathOperationString +
            " : " +
            params.MathOperation_Object.ThisValue1 +
            params.MathOperation_Object.ThisMathOperationString +
            params.MathOperation_Object.ThisValue2 +
            " = " +
            params.MathOperation_Object.ThisMathOperationResult;
    return (MathTemplateString);
}
//# sourceMappingURL=Math_TypeScript.js.map