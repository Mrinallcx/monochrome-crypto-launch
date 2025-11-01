import { useQuery } from "@tanstack/react-query";
import { TrendingUp, TrendingDown, DollarSign, Activity, BarChart3, Users } from "lucide-react";

const fetchTokenData = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/tiamonds"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch token data");
  }
  return response.json();
};

const TiaTokenStats = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tiaTokenData"],
    queryFn: fetchTokenData,
    refetchInterval: 60000, // Refetch every minute
  });

  if (isLoading) {
    return (
      <section className="py-20 px-4 border-t border-black/10">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center text-black/50">Loading live token data...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 border-t border-black/10">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center text-black/50">
            Unable to fetch live statistics. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  const priceChange24h = data?.market_data?.price_change_percentage_24h || 0;
  const priceChange7d = data?.market_data?.price_change_percentage_7d || 0;
  const isPositive24h = priceChange24h >= 0;
  const isPositive7d = priceChange7d >= 0;

  return (
    <section className="py-20 px-4 border-t border-black/10">
      <div className="max-w-[700px] mx-auto">
        <div className="mb-4">
          <span className="text-sm tracking-widest uppercase text-black/50">Real-Time Market Data</span>
        </div>
        
        <h2 className="text-4xl font-bold mb-8">
          Live TIA Token Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-black p-6 hover:bg-black/5 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="h-6 w-6 text-black" />
              <span className="text-sm text-black/60 uppercase tracking-wider font-semibold">Current Price (USD)</span>
            </div>
            <div className="text-3xl font-bold">
              ${data?.market_data?.current_price?.usd?.toFixed(8) || "N/A"}
            </div>
          </div>

          <div className="border-2 border-black p-6 hover:bg-black/5 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              {isPositive24h ? (
                <TrendingUp className="h-6 w-6 text-black" />
              ) : (
                <TrendingDown className="h-6 w-6 text-black" />
              )}
              <span className="text-sm text-black/60 uppercase tracking-wider font-semibold">24h Change</span>
            </div>
            <div className={`text-3xl font-bold ${isPositive24h ? "text-black" : "text-black/70"}`}>
              {isPositive24h ? "+" : ""}{priceChange24h.toFixed(2)}%
            </div>
          </div>

          <div className="border-2 border-black p-6 hover:bg-black/5 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              {isPositive7d ? (
                <TrendingUp className="h-6 w-6 text-black" />
              ) : (
                <TrendingDown className="h-6 w-6 text-black" />
              )}
              <span className="text-sm text-black/60 uppercase tracking-wider font-semibold">7d Change</span>
            </div>
            <div className={`text-3xl font-bold ${isPositive7d ? "text-black" : "text-black/70"}`}>
              {isPositive7d ? "+" : ""}{priceChange7d.toFixed(2)}%
            </div>
          </div>

          <div className="border-2 border-black p-6 hover:bg-black/5 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="h-6 w-6 text-black" />
              <span className="text-sm text-black/60 uppercase tracking-wider font-semibold">Market Cap</span>
            </div>
            <div className="text-3xl font-bold">
              {data?.market_data?.market_cap?.usd 
                ? `$${(data.market_data.market_cap.usd / 1000000).toFixed(2)}M`
                : "N/A"}
            </div>
          </div>

          <div className="border-2 border-black p-6 hover:bg-black/5 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="h-6 w-6 text-black" />
              <span className="text-sm text-black/60 uppercase tracking-wider font-semibold">24h Volume</span>
            </div>
            <div className="text-3xl font-bold">
              {data?.market_data?.total_volume?.usd 
                ? `$${(data.market_data.total_volume.usd / 1000000).toFixed(2)}M`
                : "N/A"}
            </div>
          </div>

          <div className="border-2 border-black p-6 hover:bg-black/5 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-6 w-6 text-black" />
              <span className="text-sm text-black/60 uppercase tracking-wider font-semibold">Market Cap Rank</span>
            </div>
            <div className="text-3xl font-bold">
              #{data?.market_cap_rank || "N/A"}
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 border border-black/20 bg-black/5 rounded text-center">
          <span className="text-xs text-black/50">
            Live data powered by CoinGecko API • Updates every 60 seconds • Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TiaTokenStats;
