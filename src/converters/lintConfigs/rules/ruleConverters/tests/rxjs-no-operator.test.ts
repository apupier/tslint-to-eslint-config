import { convertRxjsNoOperator } from "../rxjs-no-operator";

describe(convertRxjsNoOperator, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoOperator({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
