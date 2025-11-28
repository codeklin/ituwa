import { Card } from "@/components/ui/card"

interface TransactionDetailsProps {
  gasEstimate: string
  priceImpact: number
  minimumReceived: string
  receiveToken: string
}

export function TransactionDetails({
  gasEstimate,
  priceImpact,
  minimumReceived,
  receiveToken,
}: TransactionDetailsProps) {
  return (
    <Card className="p-6 border-border">
      <h3 className="font-semibold text-foreground mb-4">Transaction Details</h3>

      <div className="space-y-4">
        {/* Minimum Received */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Minimum Received</span>
          <span className="text-sm font-semibold text-foreground">
            {minimumReceived} {receiveToken}
          </span>
        </div>

        {/* Price Impact */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Price Impact</span>
          <span
            className={`text-sm font-semibold ${priceImpact > 1 ? "text-accent" : "text-green-600 dark:text-green-400"}`}
          >
            {priceImpact}%
          </span>
        </div>

        {/* Gas Fee */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Estimated Gas Fee (Testnet)</span>
          <span className="text-sm font-semibold text-foreground">{gasEstimate} ETH (~$0.02)</span>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Total */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-semibold text-foreground">Total Cost</span>
          <span className="text-sm font-semibold text-primary">
            ${(Number.parseFloat(gasEstimate) * 1850 + 0.02).toFixed(2)}
          </span>
        </div>
      </div>
    </Card>
  )
}
