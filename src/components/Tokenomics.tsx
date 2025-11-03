"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Liquidity Pool", value: 40, color: "#000000" },
  { name: "Public Sale", value: 25, color: "#333333" },
  { name: "Team & Advisors", value: 15, color: "#666666" },
  { name: "Marketing", value: 10, color: "#999999" },
  { name: "Development", value: 10, color: "#CCCCCC" },
];

const Tokenomics = () => {
  return (
    <section className="py-24 px-4 border-t border-black/10">
      <div className="max-w-[700px] mx-auto">
        <div className="mb-4">
          <span className="text-sm tracking-widest uppercase text-black/50 font-light">Economics</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-light mb-12">
          Tokenomics
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={1000}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#fff", 
                    border: "1px solid #ddd",
                    borderRadius: "0.5rem",
                    color: "#000"
                  }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                  wrapperStyle={{ paddingTop: "20px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-black/10 pb-3 transition-transform duration-200 hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full transition-transform duration-200" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-black/80 font-light">{item.name}</span>
                </div>
                <span className="text-black font-semibold">{item.value}%</span>
              </div>
            ))}
            
            <div className="pt-6 border-t border-black/20 mt-6">
              <div className="flex justify-between mb-2">
                <span className="text-black/60 font-light">Total Supply</span>
                <span className="text-black font-semibold">1,000,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60 font-light">Initial Circulating</span>
                <span className="text-black font-semibold">400,000,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
