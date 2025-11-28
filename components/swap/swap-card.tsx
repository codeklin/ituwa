"use client"

import { useState } from "react"
import { ArrowDownUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface SwapCardProps {
  payAmount: string
  payToken: string
  receiveToken: string
  minimumReceived: string
  onPayAmountChange: (amount: string) => void
  onPayTokenChange: (token: string) => void
  onReceiveTokenChange: (token: string) => void
  onSwap: () => void
  isSwapping: boolean
  isSwapped: boolean // Declare the isSwapped variable here
}

const tokens = ["ETH", "USDC", "DAI", "LINK", "WBTC", "SIM-TOKEN"]

export function SwapCard({
  payAmount,
  payToken,
  receiveToken,
  minimumReceived,
  onPayAmountChange,
  onPayTokenChange,
  onReceiveTokenChange,
  onSwap,
  isSwapping,
  isSwapped,
}: SwapCardProps) {
  const [payDropdownOpen, setPayDropdownOpen] = useState(false)
  const [receiveDropdownOpen, setReceiveDropdownOpen] = useState(false)

  const handleSwapTokens = () => {
    onPayTokenChange(receiveToken)
    onReceiveTokenChange(payToken)
  }

  return (
    <Card className="p-8 border-border">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Swap Tokens</h2>

        {/* You Pay Section */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-muted-foreground">You Pay</label>
          <div className="flex gap-3">
            <div className="flex-1 bg-muted/30 rounded-lg p-4 border border-border">
              <input
                type="number"
                value={payAmount}
                onChange={(e) => onPayAmountChange(e.target.value)}
                placeholder="0.0"
                className="w-full bg-transparent text-2xl font-bold text-foreground outline-none placeholder:text-muted-foreground"
              />
              <p className="text-xs text-muted-foreground mt-2">Balance: 5.25 {payToken}</p>
            </div>

            {/* Token Selector */}
            <div className="relative">
              <button
                onClick={() => setPayDropdownOpen(!payDropdownOpen)}
                className="px-4 py-3 rounded-lg border border-border bg-card hover:bg-muted transition flex items-center gap-2 whitespace-nowrap font-semibold text-foreground"
              >
                {payToken}
                <ChevronDown className="w-4 h-4" />
              </button>

              {payDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg z-50">
                  {tokens.map((token) => (
                    <button
                      key={token}
                      onClick={() => {
                        onPayTokenChange(token)
                        setPayDropdownOpen(false)
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-muted transition first:rounded-t-lg last:rounded-b-lg"
                    >
                      {token}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Swap Direction Icon */}
        <div className="flex justify-center">
          <button
            onClick={handleSwapTokens}
            className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition border border-primary/30 text-primary"
          >
            <ArrowDownUp className="w-5 h-5" />
          </button>
        </div>

        {/* You Receive Section */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-muted-foreground">You Receive</label>
          <div className="flex gap-3">
            <div className="flex-1 bg-muted/30 rounded-lg p-4 border border-border">
              <p className="text-2xl font-bold text-foreground">{minimumReceived}</p>
              <p className="text-xs text-muted-foreground mt-2">Estimated output</p>
            </div>

            {/* Token Selector */}
            <div className="relative">
              <button
                onClick={() => setReceiveDropdownOpen(!receiveDropdownOpen)}
                className="px-4 py-3 rounded-lg border border-border bg-card hover:bg-muted transition flex items-center gap-2 whitespace-nowrap font-semibold text-foreground"
              >
                {receiveToken}
                <ChevronDown className="w-4 h-4" />
              </button>

              {receiveDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg z-50">
                  {tokens.map((token) => (
                    <button
                      key={token}
                      onClick={() => {
                        onReceiveTokenChange(token)
                        setReceiveDropdownOpen(false)
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-muted transition first:rounded-t-lg last:rounded-b-lg"
                    >
                      {token}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Simulate Swap Button */}
        <Button
          onClick={onSwap}
          disabled={isSwapping}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold disabled:opacity-50"
        >
          {isSwapping ? (
            <span className="flex items-center gap-2">
              <span className="inline-block animate-spin">⏳</span>
              Simulating Swap...
            </span>
          ) : (
            "Simulate Swap"
          )}
        </Button>

        {isSwapped && (
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-sm text-green-700 dark:text-green-400">
            ✓ Swap simulation complete! You would have received {minimumReceived} {receiveToken}
          </div>
        )}
      </div>
    </Card>
  )
}
