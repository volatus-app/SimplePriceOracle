import "@stdlib/deploy";
import "@stdlib/ownable";
import "./message.tact";

// 3 minutes
const EXPIRATION_PERIOD: Int = 180;

contract OracleContract with Deployable, Ownable {
    prices: map<Address, PriceData>;
    feeders: map<Address, Bool>;
    owner: Address;
    expirationPeriod: Int;

    init() {
        self.owner = sender();
        self.expirationPeriod = EXPIRATION_PERIOD;
    }

    receive(msg: AddFeeder){
        self.requireOwner();
        self.feeders.set(msg.feeder, true);
    }

    receive(msg: RemoveFeeder){
        self.requireOwner();
        self.feeders.del(msg.feeder);
    }

    receive(msg: FeedPrices){
        self.requireFeeder(sender());
        self.feedPrices(msg.prices, true);
    }

    // ====== Internal Methods ====== //
    fun feedPrices(prices: map<Address, Int>, validation: Bool) {
        let nowTimestamp: Int = now();
        foreach(reserve, price in prices) {
            self.prices.set(reserve, PriceData{
                price: price,
                lastUpdateTime: nowTimestamp
            });
        }
    }

    fun requireFeeder(feeder: Address) {
        let isFeeder: Bool? = self.feeders.get(feeder);
        require(isFeeder == true, "invalid feeder");
    }

    // ====== Get Methods ====== //
    get fun price(reserve: Address): Int {
        let priceData: PriceData? = self.prices.get(reserve);
        if (
            priceData == null || 
            now() - priceData!!.lastUpdateTime > self.expirationPeriod
        ) {
            return 0;
        }
        return priceData!!.price;
    }
}
