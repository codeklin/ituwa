"use client"

import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ConsoleOutputProps {
  logs: string[]
  onClear: () => void
}

export function ConsoleOutput({ logs, onClear }: ConsoleOutputProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Console Header */}
      <div className="px-4 py-3 border-b border-border bg-muted/50 flex items-center justify-between">
        <p className="text-xs font-semibold text-muted-foreground uppercase">Console</p>
        <Button onClick={onClear} size="sm" variant="ghost" className="h-6 w-6 p-0">
          <Trash2 className="w-3 h-3" />
        </Button>
      </div>

      {/* Console Output */}
      <div className="flex-1 overflow-y-auto bg-[#1e1e1e] text-[#d4d4d4] font-mono text-xs p-4 space-y-1">
        {logs.map((log, idx) => (
          <div key={idx} className="text-[#ce9178]">
            {log}
          </div>
        ))}
        <div className="text-[#858585]">▌</div>
      </div>
    </div>
  )
}
