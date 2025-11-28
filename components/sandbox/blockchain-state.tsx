interface BlockchainStateProps {
  contractAddress: string
  balance: string
  network: string
  status: string
}

export function BlockchainState({ contractAddress, balance, network, status }: BlockchainStateProps) {
  return (
    <div className="h-full flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-muted/50">
        <p className="text-xs font-semibold text-muted-foreground uppercase">Blockchain State</p>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 space-y-4">
        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-2">Contract Address</p>
          <p className="text-sm font-mono text-foreground break-all">{contractAddress}</p>
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-2">Balance</p>
          <p className="text-sm text-foreground">{balance}</p>
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-2">Network</p>
          <p className="text-sm text-foreground">{network}</p>
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-2">Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <p className="text-sm text-foreground">{status}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
