import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import SimpleOracle from '../wrappers/SimpleOracle';
import '@ton/test-utils';

describe('SimpleOracle', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let simpleOracle: SandboxContract<SimpleOracle>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        simpleOracle = blockchain.openContract(await SimpleOracle.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await simpleOracle.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: simpleOracle.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and simpleOracle are ready to use
    });
});
