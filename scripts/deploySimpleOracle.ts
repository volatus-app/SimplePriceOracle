import { toNano } from '@ton/core';
import { SimpleOracle } from '../wrappers/SimpleOracle';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const simpleOracle = provider.open(await SimpleOracle.fromInit());

    await simpleOracle.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(simpleOracle.address);

    // run methods on `simpleOracle`
}
