import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
}

export function storeStdAddress(src: StdAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 8);
        b_0.storeUint(src.address, 256);
    };
}

export function loadStdAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(8);
    let _address = sc_0.loadUintBig(256);
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleStdAddress(source: StdAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeNumber(source.address);
    return builder.build();
}

function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
        },
        parse: (src) => {
            return loadStdAddress(src.loadRef().beginParse());
        }
    }
}

export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
}

export function storeVarAddress(src: VarAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 32);
        b_0.storeRef(src.address.asCell());
    };
}

export function loadVarAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(32);
    let _address = sc_0.loadRef().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleVarAddress(source: VarAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeSlice(source.address.asCell());
    return builder.build();
}

function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
        },
        parse: (src) => {
            return loadVarAddress(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type FeedPrice = {
    $$type: 'FeedPrice';
    asset: Address;
    price: bigint;
}

export function storeFeedPrice(src: FeedPrice) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2870531978, 32);
        b_0.storeAddress(src.asset);
        b_0.storeUint(src.price, 32);
    };
}

export function loadFeedPrice(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2870531978) { throw Error('Invalid prefix'); }
    let _asset = sc_0.loadAddress();
    let _price = sc_0.loadUintBig(32);
    return { $$type: 'FeedPrice' as const, asset: _asset, price: _price };
}

function loadTupleFeedPrice(source: TupleReader) {
    let _asset = source.readAddress();
    let _price = source.readBigNumber();
    return { $$type: 'FeedPrice' as const, asset: _asset, price: _price };
}

function loadGetterTupleFeedPrice(source: TupleReader) {
    let _asset = source.readAddress();
    let _price = source.readBigNumber();
    return { $$type: 'FeedPrice' as const, asset: _asset, price: _price };
}

function storeTupleFeedPrice(source: FeedPrice) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.asset);
    builder.writeNumber(source.price);
    return builder.build();
}

function dictValueParserFeedPrice(): DictionaryValue<FeedPrice> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFeedPrice(src)).endCell());
        },
        parse: (src) => {
            return loadFeedPrice(src.loadRef().beginParse());
        }
    }
}

export type AddFeeder = {
    $$type: 'AddFeeder';
    feeder: Address;
}

export function storeAddFeeder(src: AddFeeder) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2886385065, 32);
        b_0.storeAddress(src.feeder);
    };
}

export function loadAddFeeder(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2886385065) { throw Error('Invalid prefix'); }
    let _feeder = sc_0.loadAddress();
    return { $$type: 'AddFeeder' as const, feeder: _feeder };
}

function loadTupleAddFeeder(source: TupleReader) {
    let _feeder = source.readAddress();
    return { $$type: 'AddFeeder' as const, feeder: _feeder };
}

function loadGetterTupleAddFeeder(source: TupleReader) {
    let _feeder = source.readAddress();
    return { $$type: 'AddFeeder' as const, feeder: _feeder };
}

function storeTupleAddFeeder(source: AddFeeder) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.feeder);
    return builder.build();
}

function dictValueParserAddFeeder(): DictionaryValue<AddFeeder> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeAddFeeder(src)).endCell());
        },
        parse: (src) => {
            return loadAddFeeder(src.loadRef().beginParse());
        }
    }
}

export type RemoveFeeder = {
    $$type: 'RemoveFeeder';
    feeder: Address;
}

export function storeRemoveFeeder(src: RemoveFeeder) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1310971756, 32);
        b_0.storeAddress(src.feeder);
    };
}

export function loadRemoveFeeder(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1310971756) { throw Error('Invalid prefix'); }
    let _feeder = sc_0.loadAddress();
    return { $$type: 'RemoveFeeder' as const, feeder: _feeder };
}

function loadTupleRemoveFeeder(source: TupleReader) {
    let _feeder = source.readAddress();
    return { $$type: 'RemoveFeeder' as const, feeder: _feeder };
}

function loadGetterTupleRemoveFeeder(source: TupleReader) {
    let _feeder = source.readAddress();
    return { $$type: 'RemoveFeeder' as const, feeder: _feeder };
}

function storeTupleRemoveFeeder(source: RemoveFeeder) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.feeder);
    return builder.build();
}

function dictValueParserRemoveFeeder(): DictionaryValue<RemoveFeeder> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeRemoveFeeder(src)).endCell());
        },
        parse: (src) => {
            return loadRemoveFeeder(src.loadRef().beginParse());
        }
    }
}

export type FeedPrices = {
    $$type: 'FeedPrices';
    prices: Dictionary<Address, bigint>;
}

export function storeFeedPrices(src: FeedPrices) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3415456732, 32);
        b_0.storeDict(src.prices, Dictionary.Keys.Address(), Dictionary.Values.BigInt(257));
    };
}

export function loadFeedPrices(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3415456732) { throw Error('Invalid prefix'); }
    let _prices = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), sc_0);
    return { $$type: 'FeedPrices' as const, prices: _prices };
}

function loadTupleFeedPrices(source: TupleReader) {
    let _prices = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), source.readCellOpt());
    return { $$type: 'FeedPrices' as const, prices: _prices };
}

function loadGetterTupleFeedPrices(source: TupleReader) {
    let _prices = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), source.readCellOpt());
    return { $$type: 'FeedPrices' as const, prices: _prices };
}

function storeTupleFeedPrices(source: FeedPrices) {
    let builder = new TupleBuilder();
    builder.writeCell(source.prices.size > 0 ? beginCell().storeDictDirect(source.prices, Dictionary.Keys.Address(), Dictionary.Values.BigInt(257)).endCell() : null);
    return builder.build();
}

function dictValueParserFeedPrices(): DictionaryValue<FeedPrices> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFeedPrices(src)).endCell());
        },
        parse: (src) => {
            return loadFeedPrices(src.loadRef().beginParse());
        }
    }
}

export type PriceData = {
    $$type: 'PriceData';
    price: bigint;
    lastUpdateTime: bigint;
}

export function storePriceData(src: PriceData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.price, 32);
        b_0.storeUint(src.lastUpdateTime, 32);
    };
}

export function loadPriceData(slice: Slice) {
    let sc_0 = slice;
    let _price = sc_0.loadUintBig(32);
    let _lastUpdateTime = sc_0.loadUintBig(32);
    return { $$type: 'PriceData' as const, price: _price, lastUpdateTime: _lastUpdateTime };
}

function loadTuplePriceData(source: TupleReader) {
    let _price = source.readBigNumber();
    let _lastUpdateTime = source.readBigNumber();
    return { $$type: 'PriceData' as const, price: _price, lastUpdateTime: _lastUpdateTime };
}

function loadGetterTuplePriceData(source: TupleReader) {
    let _price = source.readBigNumber();
    let _lastUpdateTime = source.readBigNumber();
    return { $$type: 'PriceData' as const, price: _price, lastUpdateTime: _lastUpdateTime };
}

function storeTuplePriceData(source: PriceData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.price);
    builder.writeNumber(source.lastUpdateTime);
    return builder.build();
}

function dictValueParserPriceData(): DictionaryValue<PriceData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storePriceData(src)).endCell());
        },
        parse: (src) => {
            return loadPriceData(src.loadRef().beginParse());
        }
    }
}

export type OracleContract$Data = {
    $$type: 'OracleContract$Data';
    prices: Dictionary<Address, PriceData>;
    feeders: Dictionary<Address, boolean>;
    owner: Address;
    expirationPeriod: bigint;
}

export function storeOracleContract$Data(src: OracleContract$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeDict(src.prices, Dictionary.Keys.Address(), dictValueParserPriceData());
        b_0.storeDict(src.feeders, Dictionary.Keys.Address(), Dictionary.Values.Bool());
        b_0.storeAddress(src.owner);
        b_0.storeInt(src.expirationPeriod, 257);
    };
}

export function loadOracleContract$Data(slice: Slice) {
    let sc_0 = slice;
    let _prices = Dictionary.load(Dictionary.Keys.Address(), dictValueParserPriceData(), sc_0);
    let _feeders = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Bool(), sc_0);
    let _owner = sc_0.loadAddress();
    let _expirationPeriod = sc_0.loadIntBig(257);
    return { $$type: 'OracleContract$Data' as const, prices: _prices, feeders: _feeders, owner: _owner, expirationPeriod: _expirationPeriod };
}

function loadTupleOracleContract$Data(source: TupleReader) {
    let _prices = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserPriceData(), source.readCellOpt());
    let _feeders = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    let _owner = source.readAddress();
    let _expirationPeriod = source.readBigNumber();
    return { $$type: 'OracleContract$Data' as const, prices: _prices, feeders: _feeders, owner: _owner, expirationPeriod: _expirationPeriod };
}

function loadGetterTupleOracleContract$Data(source: TupleReader) {
    let _prices = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserPriceData(), source.readCellOpt());
    let _feeders = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    let _owner = source.readAddress();
    let _expirationPeriod = source.readBigNumber();
    return { $$type: 'OracleContract$Data' as const, prices: _prices, feeders: _feeders, owner: _owner, expirationPeriod: _expirationPeriod };
}

function storeTupleOracleContract$Data(source: OracleContract$Data) {
    let builder = new TupleBuilder();
    builder.writeCell(source.prices.size > 0 ? beginCell().storeDictDirect(source.prices, Dictionary.Keys.Address(), dictValueParserPriceData()).endCell() : null);
    builder.writeCell(source.feeders.size > 0 ? beginCell().storeDictDirect(source.feeders, Dictionary.Keys.Address(), Dictionary.Values.Bool()).endCell() : null);
    builder.writeAddress(source.owner);
    builder.writeNumber(source.expirationPeriod);
    return builder.build();
}

function dictValueParserOracleContract$Data(): DictionaryValue<OracleContract$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeOracleContract$Data(src)).endCell());
        },
        parse: (src) => {
            return loadOracleContract$Data(src.loadRef().beginParse());
        }
    }
}

 type OracleContract_init_args = {
    $$type: 'OracleContract_init_args';
}

function initOracleContract_init_args(src: OracleContract_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function OracleContract_init() {
    const __code = Cell.fromBase64('te6ccgECFQEAA/sAART/APSkE/S88sgLAQIBYgIDAurQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s88uCCyPhDAcx/AcoAVTBQNPQA9AABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WgQEBzwDJ7VQSBAIBIA0OA+4BkjB/4HAh10nCH5UwINcLH94gghCsCr2puo7PMNMfAYIQrAq9qbry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIMVUw2zwSgQELUAV/cSFulVtZ9FkwmMgBzwBBM/RB4kATf+AgghBOI9dsuuMCIAcFBgF6MNMfAYIQTiPXbLry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIMVUw2zxQQoEBC/RZMEAzfwcDuoIQy5O73LqPIDDTHwGCEMuTu9y68uCB9AQBMfhCFRRDMNs8VQN/2zx/4IIQlGqYtrqOp9MfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+AwcAgJCgAS+EJSIMcF8uCEAEiBAQskAnFBM/QKb6GUAdcAMJJbbeKBcHMBfyFukltwkbri8vQAxjD4IyGBAQuBAQFZ9IJvpSCWUCPXADBYlmwhbTJtAeKQjj6BAQtRE8hZAssfyx/JIhA5ASBulTBZ9FkwlEEz9BPigQELVEMYgQEBQTP0dG+lIJZQI9cAMFiWbCFtMm0B4uhfBAE8bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwwCwHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wgMAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAhG+KO7Z5tnjYgwSDwIBahARAAIhABGwr7tRNDSAAGACTbFGyDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjbPFUD2zxsQYBITAZDtRNDUAfhj0gABji30BPQE+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAGBAQHXAFUwbBTgMPgo1wsKgwm68uCJ2zwUAH6BAQslAln0C2+hkjBt3yBukjBtmtDTH9MfWWwSbwLiIG6Rf574IyEgbvLQgG8iMaEivOKSMHDgIG7y0IBvIjAADm1t+EKBALQ=');
    const __system = Cell.fromBase64('te6cckECFwEABAUAAQHAAQEFoOIzAgEU/wD0pBP0vPLICwMCAWIEDgLq0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRPbPPLggsj4QwHMfwHKAFUwUDT0APQAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFoEBAc8Aye1UFAUD7gGSMH/gcCHXScIflTAg1wsf3iCCEKwKvam6js8w0x8BghCsCr2puvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxVTDbPBKBAQtQBX9xIW6VW1n0WTCYyAHPAEEz9EHiQBN/4CCCEE4j12y64wIgBwYIAXow0x8BghBOI9dsuvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxVTDbPFBCgQEL9FkwQDN/BwAS+EJSIMcF8uCEA7qCEMuTu9y6jyAw0x8BghDLk7vcuvLggfQEATH4QhUUQzDbPFUDf9s8f+CCEJRqmLa6jqfTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gMHAJCgsASIEBCyQCcUEz9ApvoZQB1wAwkltt4oFwcwF/IW6SW3CRuuLy9ADGMPgjIYEBC4EBAVn0gm+lIJZQI9cAMFiWbCFtMm0B4pCOPoEBC1ETyFkCyx/LH8kiEDkBIG6VMFn0WTCUQTP0E+KBAQtUQxiBAQFBM/R0b6UgllAj1wAwWJZsIW0ybQHi6F8EATxtbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPDAMAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7CA0AmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCASAPEQIRviju2ebZ42IMFBAAAiECAWoSEwARsK+7UTQ0gABgAk2xRsg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI2zxVA9s8bEGAUFgGQ7UTQ1AH4Y9IAAY4t9AT0BPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBgQEB1wBVMGwU4DD4KNcLCoMJuvLgids8FQAObW34QoEAtAB+gQELJQJZ9AtvoZIwbd8gbpIwbZrQ0x/TH1lsEm8C4iBukX+e+CMhIG7y0IBvIjGhIrzikjBw4CBu8tCAbyIwfBcFaA==');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initOracleContract_init_args({ $$type: 'OracleContract_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const OracleContract_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    11: { message: `'Unknown' error` },
    12: { message: `Fatal error` },
    13: { message: `Out of gas error` },
    14: { message: `Virtualization error` },
    32: { message: `Action list is invalid` },
    33: { message: `Action list is too long` },
    34: { message: `Action is invalid or not supported` },
    35: { message: `Invalid source address in outbound message` },
    36: { message: `Invalid destination address in outbound message` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    39: { message: `Outbound message does not fit into a cell after rewriting` },
    40: { message: `Cannot process a message` },
    41: { message: `Library reference is null` },
    42: { message: `Library change action error` },
    43: { message: `Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree` },
    50: { message: `Account state size exceeded limits` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    28787: { message: `invalid feeder` },
}

const OracleContract_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"StdAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":8}},{"name":"address","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"VarAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"address","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"FeedPrice","header":2870531978,"fields":[{"name":"asset","type":{"kind":"simple","type":"address","optional":false}},{"name":"price","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
    {"name":"AddFeeder","header":2886385065,"fields":[{"name":"feeder","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"RemoveFeeder","header":1310971756,"fields":[{"name":"feeder","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"FeedPrices","header":3415456732,"fields":[{"name":"prices","type":{"kind":"dict","key":"address","value":"int"}}]},
    {"name":"PriceData","header":null,"fields":[{"name":"price","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"lastUpdateTime","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
    {"name":"OracleContract$Data","header":null,"fields":[{"name":"prices","type":{"kind":"dict","key":"address","value":"PriceData","valueFormat":"ref"}},{"name":"feeders","type":{"kind":"dict","key":"address","value":"bool"}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"expirationPeriod","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
]

const OracleContract_getters: ABIGetter[] = [
    {"name":"price","arguments":[{"name":"reserve","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

export const OracleContract_getterMapping: { [key: string]: string } = {
    'price': 'getPrice',
    'owner': 'getOwner',
}

const OracleContract_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"AddFeeder"}},
    {"receiver":"internal","message":{"kind":"typed","type":"RemoveFeeder"}},
    {"receiver":"internal","message":{"kind":"typed","type":"FeedPrices"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class OracleContract implements Contract {
    
    static async init() {
        return await OracleContract_init();
    }
    
    static async fromInit() {
        const init = await OracleContract_init();
        const address = contractAddress(0, init);
        return new OracleContract(address, init);
    }
    
    static fromAddress(address: Address) {
        return new OracleContract(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  OracleContract_types,
        getters: OracleContract_getters,
        receivers: OracleContract_receivers,
        errors: OracleContract_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: AddFeeder | RemoveFeeder | FeedPrices | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'AddFeeder') {
            body = beginCell().store(storeAddFeeder(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'RemoveFeeder') {
            body = beginCell().store(storeRemoveFeeder(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'FeedPrices') {
            body = beginCell().store(storeFeedPrices(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getPrice(provider: ContractProvider, reserve: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(reserve);
        let source = (await provider.get('price', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}