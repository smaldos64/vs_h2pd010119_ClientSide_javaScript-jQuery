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

let MathOperationIndex:number = -1;

class MathOperation {
    public ThisMathOperation : MathOperation_ENUM;
    public ThisMathOperationString : string;
    public ThisMathDelegate : MathDelegate;
    public ThisMathOperationResult : number;
    public ThisValue1 : number;
    public ThisValue2 : number;

    constructor(params: {
        ThisMathOperation : MathOperation_ENUM,
        ThisMathOperationString : string,
        ThisMathDelegate : MathDelegate} ) {
        this.ThisMathOperation = params.ThisMathOperation;
        this.ThisMathOperationString = params.ThisMathOperationString;
        this.ThisMathDelegate = params.ThisMathDelegate;

        this.ThisMathOperationResult = 0;
        this.ThisValue1 = 0;
        this.ThisValue2 = 0;
    }

    public PerformMathOperation(params: { Value1 : number, Value2 : number }) : string {
        this.ThisMathOperationResult = this.ThisMathDelegate({ Value1: params.Value1, Value2: params.Value2 });
        this.ThisValue1 = params.Value1;
        this.ThisValue2 = params.Value2;
        return (this.ThisMathOperationResult.toString());
    }

    public toString = () : string => {
        return `(${this.ThisMathOperationResult})`;
    }
}

function Add(params: MathFunctionParams) : number{
    return (params.Value1 + params.Value2);
}

function Subtract(params: { Value1 : number, Value2 : number }) : number {
    return (params.Value1 - params.Value2);
}

let TypeScriptMathArray = [
    new MathOperation({ ThisMathOperation: MathOperation_ENUM.Add_Operation, ThisMathOperationString: "+", ThisMathDelegate: Add }),
    new MathOperation({ ThisMathOperation: MathOperation_ENUM.Subtract_Operation, ThisMathOperationString: "-", ThisMathDelegate: function (params: { Value1: number, Value2: number }) { return (params.Value1 - params.Value2) } }),
    new MathOperation({ ThisMathOperation: MathOperation_ENUM.Multiply_Operation, ThisMathOperationString: "*", ThisMathDelegate: function (params: { Value1: number, Value2: number }) { return (params.Value1 * params.Value2) } }),
    new MathOperation({ ThisMathOperation: MathOperation_ENUM.Divide_Operation, ThisMathOperationString: "/", ThisMathDelegate: function (params: { Value1: number, Value2: number }) { return (params.Value1 / params.Value2) } }),
    new MathOperation({ ThisMathOperation: MathOperation_ENUM.Percentage_Operation, ThisMathOperationString: "%", ThisMathDelegate: function (params: { Value1: number, Value2: number }) { return (params.Value1 / params.Value2 * 100) } })
];

//let test = new MathOperation({ ThisMathOperation : MathOperation_ENUM.Add_Operation, ThisMathOperationString : "+", ThisMathDelegate : Add });
//let test1 = new MathOperation({ ThisMathOperation : MathOperation_ENUM.Subtract_Operation, ThisMathOperationString : "-", ThisMathDelegate : function(params: { Value1: number, Value2: number }) { return (params.Value1 - params.Value2) } });

//Add({ Value1 : 3, Value2 : 4 });
//Subtract({ Value1 : 3, Value2 : 4 });

function TypeScriptClearTextBoxes(params: { TextBoxArray: HTMLInputElement[] } ) : void {
    let Counter : number = 0;
    while (Counter < params.TextBoxArray.length) {
        params.TextBoxArray[Counter].value = "";
        Counter++;
    }
}

function TypeScriptCalculateMathResult(params : { MathOperation, Value1String: string, Value2String: string }) : string {
    let Counter : number = 0;
    let MathOperationFound : boolean = false;

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

function GetTemplateStringFromMathOperation(params: { MathOperation_Object : MathOperation}) : string {
    let MathTemplateString: string = "";

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

