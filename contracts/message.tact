// ====== Messages ====== //
message FeedPrice {
    asset: Address;
    price: Int as uint32;
}

message AddFeeder {
    feeder: Address;
}

message RemoveFeeder {
    feeder: Address;
}

message FeedPrices {
    prices: map<Address, Int>;
}

// ====== Struct ====== //
struct PriceData {
    price: Int as uint32;
    lastUpdateTime: Int as uint32;
}