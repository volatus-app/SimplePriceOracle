import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/simple_oracle.tact',
    options: {
        debug: true,
    },
};
