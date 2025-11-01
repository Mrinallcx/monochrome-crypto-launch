import { useQuery } from "@tanstack/react-query";
import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";

const fetchTokenData = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/toto"
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
      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center text-white/50">Loading token statistics...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center text-white/50">
            Unable to fetch live statistics. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  const priceChange24h = data?.market_data?.price_change_percentage_24h || 0;
  const isPositive = priceChange24h >= 0;

  return (
    <section className="py-24 px-4 border-t border-white/10">
      <div className="max-w-[700px] mx-auto">
        <div className="mb-4">
          <span className="text-sm tracking-widest uppercase text-white/50">Live Data</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Token Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-white/10 p-6 hover:border-white/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="h-5 w-5 text-white/50" />
              <span className="text-sm text-white/50 uppercase tracking-wider">Current Price</span>
            </div>
            <div className="text-3xl font-bold">
              ${data?.market_data?.current_price?.usd?.toFixed(6) || "N/A"}
            </div>
          </div>

          <div className="border border-white/10 p-6 hover:border-white/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              {isPositive ? (
                <TrendingUp className="h-5 w-5 text-white/50" />
              ) : (
                <TrendingDown className="h-5 w-5 text-white/50" />
              )}
              <span className="text-sm text-white/50 uppercase tracking-wider">24h Change</span>
            </div>
            <div className={`text-3xl font-bold ${isPositive ? "text-white" : "text-white/60"}`}>
              {priceChange24h.toFixed(2)}%
            </div>
          </div>

          <div className="border border-white/10 p-6 hover:border-white/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="h-5 w-5 text-white/50" />
              <span className="text-sm text-white/50 uppercase tracking-wider">Market Cap</span>
            </div>
            <div className="text-3xl font-bold">
              ${(data?.market_data?.market_cap?.usd / 1000000).toFixed(2) || "N/A"}M
            </div>
          </div>

          <div className="border border-white/10 p-6 hover:border-white/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="h-5 w-5 text-white/50" />
              <span className="text-sm text-white/50 uppercase tracking-wider">24h Volume</span>
            </div>
            <div className="text-3xl font-bold">
              ${(data?.market_data?.total_volume?.usd / 1000000).toFixed(2) || "N/A"}M
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 border border-white/10 text-center">
          <span className="text-xs text-white/40">
            Data provided by CoinGecko • Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TokenStats;
