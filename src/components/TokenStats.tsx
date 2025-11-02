import { useQuery } from "@tanstack/react-query";
import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";

// CoinGecko API Key (publishable - safe for client-side use)
const COINGECKO_API_KEY = "CG-z6ZMqu1K3bGgGuHhk2hJX4Lm";

const fetchTokenData = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/toto",
    {
      headers: {
        "x-cg-demo-api-key": COINGECKO_API_KEY,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch token data");
  }
  return response.json();
};

const TokenStats = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tokenData"],
    queryFn: fetchTokenData,
    refetchInterval: 60000, // Refetch every minute
  });

  if (isLoading) {
    return (
      <section className="py-24 px-4 border-t border-black/10">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center text-black/50 font-light">Loading token statistics...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-4 border-t border-black/10">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center text-black/50 font-light">
            Unable to fetch live statistics. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  const priceChange24h = data?.market_data?.price_change_percentage_24h || 0;
  const isPositive = priceChange24h >= 0;

  return (
    <section className="py-24 px-4 border-t border-black/10">
      <div className="max-w-[700px] mx-auto">
        <div className="mb-4">
          <span className="text-sm tracking-widest uppercase text-black/50 font-light">Live Data</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-light mb-12">
          Token Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black/10 p-6 hover:border-black/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="h-5 w-5 text-black/50" />
              <span className="text-sm text-black/50 uppercase tracking-wider font-light">Current Price</span>
            </div>
            <div className="text-3xl font-light">
              ${data?.market_data?.current_price?.usd?.toFixed(10) || "N/A"}
            </div>
          </div>

          <div className="border border-black/10 p-6 hover:border-black/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              {isPositive ? (
                <TrendingUp className="h-5 w-5 text-black/50" />
              ) : (
                <TrendingDown className="h-5 w-5 text-black/50" />
              )}
              <span className="text-sm text-black/50 uppercase tracking-wider font-light">24h Change</span>
            </div>
            <div className={`text-3xl font-light ${isPositive ? "text-black" : "text-black/60"}`}>
              {priceChange24h.toFixed(2)}%
            </div>
          </div>

          <div className="border border-black/10 p-6 hover:border-black/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="h-5 w-5 text-black/50" />
              <span className="text-sm text-black/50 uppercase tracking-wider font-light">Market Cap</span>
            </div>
            <div className="text-3xl font-light">
              ${(data?.market_data?.market_cap?.usd / 1000000).toFixed(2) || "N/A"}M
            </div>
          </div>

          <div className="border border-black/10 p-6 hover:border-black/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="h-5 w-5 text-black/50" />
              <span className="text-sm text-black/50 uppercase tracking-wider font-light">24h Volume</span>
            </div>
            <div className="text-3xl font-light">
              ${(data?.market_data?.total_volume?.usd / 1000000).toFixed(2) || "N/A"}M
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 border border-black/10 text-center">
          <span className="text-xs text-black/40 font-light">
            Data provided by CoinGecko • Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TokenStats;
