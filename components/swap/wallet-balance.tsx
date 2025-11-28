import { Wallet } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Token {
  symbol: string
  balance: string
  usdValue: string
}

interface WalletBalanceProps {
  tokens: Token[]
}

export function WalletBalance({ tokens }: WalletBalanceProps) {
  return (
    <Card className="p-6 border-primary/30 bg-primary/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/20">
          <Wallet className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Test Wallet</h3>
          <p className="text-xs text-muted-foreground">Sepolia Testnet</p>
        </div>
      </div>

      <div className="space-y-3">
        {tokens.map((token) => (
          <div key={token.symbol} className="p-3 rounded-lg bg-card border border-border">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-foreground">{token.symbol}</span>
              <span className="text-sm font-mono text-foreground">{token.balance}</span>
            </div>
            <p className="text-xs text-muted-foreground">${token.usdValue}</p>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/5 transition text-sm font-semibold">
        Connect Wallet
      </button>
    </Card>
  )
}
