import { convertUsePipeDecorator } from "../use-pipe-decorator";

describe(convertUsePipeDecorator, () => {
    test("conversion without arguments", () => {
        const result = convertUsePipeDecorator({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
