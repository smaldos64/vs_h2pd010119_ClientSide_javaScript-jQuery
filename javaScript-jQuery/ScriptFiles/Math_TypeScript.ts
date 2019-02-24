enum MathOperation_ENUM {
    Add_Operation,
    Subtract_Operation,
    Multiply_Operation,
    Divide_Operation,
    Percentage_Operation
}

type MathFunctionParams = { Value1: number, Value2: number }
type MathDelegate = (params: MathFunctionParams) => number;
type MathDelegateOld = (Value1: number, Value2: number) => number;

class MathOperation {
    public ThisMathOperation: MathOperation_ENUM;
    public ThisMathOperationString: string;
    public ThisMathDelegate: MathDelegate;
    public ThisMathOperationResult: number;

    constructor(ThisMathOperation: MathOperation_ENUM,
        ThisMathOperationString: string,
        ThisMathDelegate: MathDelegate ) {
        this.ThisMathOperation = ThisMathOperation;
        this.ThisMathOperationString = ThisMathOperationString;
        this.ThisMathDelegate = ThisMathDelegate;
    }

    public PerformMathOperation(params: { Value1: number, Value2: number }) {
        this.ThisMathOperationResult = this.ThisMathDelegate({ Value1: params.Value1, Value2: params.Value2 });
    }

    public toString = (): string => {
        return `(${this.ThisMathOperationResult + " " + this.ThisMathOperationResult})`;
    }
}

//type MathFunctionParams = { Value1: number, Value2: number }
function Add(params: MathFunctionParams) {
    return (params.Value1 + params.Value2);
}

function Subtract(params: { Value1: number, Value2: number }) {
    return (params.Value1 - params.Value2);
}

//let TypeScriptMathArray = [
//    { new  MathOperation(ThisMathOperation: Add_Operation, )},
//];

let test = new MathOperation(MathOperation_ENUM.Add_Operation, "+", Add);
let test1 = new MathOperation(MathOperation_ENUM.Subtract_Operation, "-", function (params: { Value1: number, Value2: number }) { return (params.Value1 - params.Value2) });

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
