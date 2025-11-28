"use client"

import { useState } from "react"
import { ArrowDownUp, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { SwapCard } from "@/components/swap/swap-card"
import { WalletBalance } from "@/components/swap/wallet-balance"
import { TransactionDetails } from "@/components/swap/transaction-details"

export default function SwapSimulatorPage() {
  const [payAmount, setPayAmount] = useState("1.0")
  const [payToken, setPayToken] = useState("ETH")
  const [receiveToken, setReceiveToken] = useState("USDC")
  const [swapped, setSwapped] = useState(false)

  // Simulated price calculation
  const priceImpact = 0.35
  const gasEstimate = "0.0012"
  const minimumReceived = (Number.parseFloat(payAmount) * 1850 * (1 - priceImpact / 100)).toFixed(2)

  const handleSwap = () => {
    setSwapped(true)
    setTimeout(() => setSwapped(false), 3000)
  }

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition">
              ← Dashboard
            </Link>
            <h1 className="text-xl font-bold text-foreground">Token Swap Simulator</h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Sepolia Testnet Connected
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Swap Card */}
          <div className="lg:col-span-2">
            <SwapCard
              payAmount={payAmount}
              payToken={payToken}
              receiveToken={receiveToken}
              minimumReceived={minimumReceived}
              onPayAmountChange={setPayAmount}
              onPayTokenChange={setPayToken}
              onReceiveTokenChange={setReceiveToken}
              onSwap={handleSwap}
              isSwapping={swapped}
            />

            {/* Transaction Details */}
            <div className="mt-6">
              <TransactionDetails
                gasEstimate={gasEstimate}
                priceImpact={priceImpact}
                minimumReceived={minimumReceived}
                receiveToken={receiveToken}
              />
            </div>

            {/* Info Box */}
            <Card className="mt-6 p-6 border-secondary/30 bg-secondary/5">
              <div className="flex gap-4">
                <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Testnet Simulation</h4>
                  <p className="text-sm text-muted-foreground">
                    This is a simulation using testnet tokens. No real funds are involved. Prices are simulated based on
                    current market data for educational purposes.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Wallet & Info */}
          <div className="space-y-6">
            <WalletBalance
              tokens={[
                { symbol: "ETH", balance: "5.25", usdValue: "9,712.50" },
                { symbol: "USDC", balance: "2,450.00", usdValue: "2,450.00" },
                { symbol: "DAI", balance: "1,200.00", usdValue: "1,200.00" },
                { symbol: "LINK", balance: "45.30", usdValue: "1,634.80" },
              ]}
            />

            {/* Quick Stats */}
            <Card className="p-6 border-border">
              <h3 className="font-semibold text-foreground mb-4">How It Works</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">1</span>
                  <span>Select tokens and enter the amount you want to swap</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold flex-shrink-0">2</span>
                  <span>View the estimated output and transaction details</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">3</span>
                  <span>Click Simulate Swap to see the transaction in action</span>
                </li>
              </ul>
            </Card>

            {/* Common Swaps */}
            <Card className="p-6 border-border">
              <h3 className="font-semibold text-foreground mb-4">Common Swaps</h3>
              <div className="space-y-2">
                {[
                  { from: "ETH", to: "USDC" },
                  { from: "USDC", to: "DAI" },
                  { from: "ETH", to: "LINK" },
                ].map((swap, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setPayToken(swap.from)
                      setReceiveToken(swap.to)
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition text-sm"
                  >
                    <span className="text-foreground font-medium">
                      {swap.from} → {swap.to}
                    </span>
                    <ArrowDownUp className="w-4 h-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
