"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, RefreshCw, CheckCircle, AlertTriangle, XCircle, X } from "lucide-react";

export default function ChurnSimulator({ onClose }: { onClose?: () => void } = {}) {
  const [tenure, setTenure] = useState<number>(6); // months
  const [monthlyCharges, setMonthlyCharges] = useState<number>(85); // USD
  const [contract, setContract] = useState<"month-to-month" | "one-year" | "two-year">("month-to-month");
  const [techSupport, setTechSupport] = useState<boolean>(false);
  const [fiberOptic, setFiberOptic] = useState<boolean>(true);

  // Logistic model calculation matching the trained model weights
  const { prob, riskTier, recommendation, color } = useMemo(() => {
    let z = -0.6; // baseline intercept

    // Contract weights
    if (contract === "month-to-month") z += 1.4;
    else if (contract === "one-year") z -= 0.5;
    else if (contract === "two-year") z -= 1.8;

    // Tenure effect: longer tenure significantly decreases churn
    z -= (tenure / 72) * 2.2;

    // Monthly charges effect: higher bills increase churn
    z += ((monthlyCharges - 20) / 100) * 1.5;

    // Tech support effect
    if (!techSupport) z += 0.55;
    else z -= 0.45;

    // Fiber optic effect
    if (fiberOptic) z += 0.45;

    // Sigmoid function
    const probability = 1 / (1 + Math.exp(-z));
    const pct = Math.min(Math.max(Math.round(probability * 100), 2), 98);

    let tier: "LOW" | "MODERATE" | "HIGH";
    let rec = "";
    let tierColor = "";

    if (pct >= 55) {
      tier = "HIGH";
      tierColor = "#ef4444";
      rec = "⚡ Critical Risk: Trigger immediate retention offer (15% loyalty rebate) & assign dedicated support agent.";
    } else if (pct >= 32) {
      tier = "MODERATE";
      tierColor = "#f59e0b";
      rec = "⚠️ Watchlist: Schedule proactive customer success survey and recommend annual contract savings.";
    } else {
      tier = "LOW";
      tierColor = "#22c55e";
      rec = "✅ High Retention: Customer is stable. Ideal candidate for product tier upgrade or referral program.";
    }

    return {
      prob: pct,
      riskTier: tier,
      recommendation: rec,
      color: tierColor,
    };
  }, [tenure, monthlyCharges, contract, techSupport, fiberOptic]);

  const resetToBaseline = () => {
    setTenure(6);
    setMonthlyCharges(85);
    setContract("month-to-month");
    setTechSupport(false);
    setFiberOptic(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl my-12 text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-green-400 uppercase mb-1">
            <Sparkles size={14} />
            <span>Live Interactive Inference Simulator</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
            Telco Churn ML Model Tester
          </h3>
          <p className="text-white/60 text-xs sm:text-sm font-sans mt-1">
            Adjust customer attributes below to execute real-time inference against the trained classification logic.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={resetToBaseline}
            className="flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-colors"
          >
            <RefreshCw size={12} />
            <span>Reset Inputs</span>
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Tenure */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-2">
              <span className="text-white/80 font-bold uppercase">Customer Tenure</span>
              <span className="text-white font-bold bg-white/10 px-2.5 py-0.5 rounded">
                {tenure} months
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={72}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#22c55e]"
            />
            <div className="flex justify-between text-[10px] text-white/40 font-mono mt-1">
              <span>New (1 mo)</span>
              <span>Loyal (6 years)</span>
            </div>
          </div>

          {/* Slider 2: Monthly Charges */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-2">
              <span className="text-white/80 font-bold uppercase">Monthly Billing</span>
              <span className="text-white font-bold bg-white/10 px-2.5 py-0.5 rounded">
                ${monthlyCharges} / month
              </span>
            </div>
            <input
              type="range"
              min={20}
              max={125}
              value={monthlyCharges}
              onChange={(e) => setMonthlyCharges(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#22c55e]"
            />
            <div className="flex justify-between text-[10px] text-white/40 font-mono mt-1">
              <span>Basic ($20)</span>
              <span>Premium Tier ($125)</span>
            </div>
          </div>

          {/* Contract Type Radio Pills */}
          <div>
            <label className="block text-xs font-mono text-white/80 font-bold uppercase mb-2">
              Contract Agreement
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "month-to-month", label: "Month-to-Month" },
                { id: "one-year", label: "1-Year Plan" },
                { id: "two-year", label: "2-Year Plan" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setContract(item.id as any)}
                  className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all text-center ${
                    contract === item.id
                      ? "bg-white text-black border-white shadow-lg"
                      : "bg-white/5 text-white/70 border-white/10 hover:border-white/30"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Toggles */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => setTechSupport(!techSupport)}
              className={`p-3 rounded-xl border flex items-center justify-between text-xs font-semibold transition-all ${
                techSupport
                  ? "bg-green-500/10 border-green-500/50 text-green-400"
                  : "bg-white/5 border-white/10 text-white/60 hover:border-white/25"
              }`}
            >
              <span>Tech Support</span>
              <span className="font-mono text-[10px] uppercase font-bold">
                {techSupport ? "Active ✓" : "None ✕"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setFiberOptic(!fiberOptic)}
              className={`p-3 rounded-xl border flex items-center justify-between text-xs font-semibold transition-all ${
                fiberOptic
                  ? "bg-blue-500/10 border-blue-500/50 text-blue-400"
                  : "bg-white/5 border-white/10 text-white/60 hover:border-white/25"
              }`}
            >
              <span>Fiber Optic Line</span>
              <span className="font-mono text-[10px] uppercase font-bold">
                {fiberOptic ? "Yes ✓" : "DSL"}
              </span>
            </button>
          </div>
        </div>

        {/* Right Gauge & Output Card (5 cols) */}
        <div className="lg:col-span-5 bg-black/60 rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
          <div className="text-center">
            <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest block mb-3">
              Predicted Churn Probability
            </span>

            {/* Large Radial Probability Indicator */}
            <div className="relative flex items-center justify-center my-4">
              <svg className="w-36 h-36 -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  stroke={color}
                  strokeWidth="10"
                  strokeDasharray="301.6"
                  strokeDashoffset={301.6 - (301.6 * prob) / 100}
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-500 ease-out"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-display font-black tracking-tight" style={{ color }}>
                  {prob}%
                </span>
                <span className="text-[10px] font-mono uppercase text-white/50">Likelihood</span>
              </div>
            </div>

            {/* Risk Tier Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4 border"
                 style={{ backgroundColor: `${color}15`, borderColor: `${color}40`, color }}>
              {riskTier === "HIGH" && <AlertTriangle size={13} />}
              {riskTier === "MODERATE" && <AlertTriangle size={13} />}
              {riskTier === "LOW" && <CheckCircle size={13} />}
              <span>{riskTier} RISK TIER</span>
            </div>
          </div>

          {/* Actionable recommendation */}
          <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 text-xs font-sans-clean leading-relaxed text-white/80">
            {recommendation}
          </div>
        </div>
      </div>
    </div>
  );
}
