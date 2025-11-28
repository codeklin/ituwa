"use client"

import { useState } from "react"
import { ChevronDown, Play, RotateCcw } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CodeEditor } from "@/components/sandbox/code-editor"
import { FileTree } from "@/components/sandbox/file-tree"
import { ConsoleOutput } from "@/components/sandbox/console-output"

export default function SandboxPage() {
  const [selectedFile, setSelectedFile] = useState("Contract.sol")
  const [network, setNetwork] = useState("Sepolia")
  const [consoleLog, setConsoleLog] = useState<string[]>(["Ready to compile..."])
  const [blockchainState, setBlockchainState] = useState({
    contractAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f42bE",
    balance: "2.5 ETH",
    network: "Sepolia (Testnet)",
    status: "Deployed",
  })

  const handleCompile = () => {
    setConsoleLog((prev) => [...prev, "> Compiling Contract.sol...", "✓ Compilation successful! No errors found."])
  }

  const handleDeploy = () => {
    setConsoleLog((prev) => [
      ...prev,
      "> Deploying to Sepolia...",
      "✓ Contract deployed successfully!",
      `✓ Transaction hash: 0x8f...4a2b`,
    ])
  }

  const handleRun = () => {
    setConsoleLog((prev) => [...prev, "> Running script...", "✓ Script executed. Result: true"])
  }

  const handleReset = () => {
    setConsoleLog(["Ready to compile..."])
  }

  return (
    <div className="h-screen w-full flex flex-col bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition">
            ← Dashboard
          </Link>
          <h1 className="text-xl font-bold text-foreground">Smart Contract Sandbox</h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {/* Network Selector */}
          <div className="relative group">
            <Button variant="outline" className="gap-2 border-border text-foreground bg-transparent" size="sm">
              {network}
              <ChevronDown className="w-4 h-4" />
            </Button>
            <div className="absolute right-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
              {["Sepolia", "Mumbai", "Arbitrum Goerli"].map((net) => (
                <button
                  key={net}
                  onClick={() => setNetwork(net)}
                  className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition first:rounded-t-lg last:rounded-b-lg"
                >
                  {net}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <Button
            onClick={handleCompile}
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            size="sm"
          >
            <RotateCcw className="w-4 h-4" />
            Compile
          </Button>
          <Button
            onClick={handleDeploy}
            className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            size="sm"
          >
            <Play className="w-4 h-4" />
            Deploy to {network}
          </Button>
          <Button onClick={handleRun} className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
            <Play className="w-4 h-4" />
            Run Script
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Code Editor */}
        <div className="flex-1 flex flex-col border-r border-border overflow-hidden">
          {/* File Tree Header */}
          <div className="bg-muted/50 px-4 py-3 border-b border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Files</p>
          </div>

          {/* File Tree */}
          <div className="w-40 bg-card border-r border-border overflow-y-auto">
            <FileTree selectedFile={selectedFile} onSelectFile={setSelectedFile} />
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-hidden">
            <CodeEditor fileName={selectedFile} />
          </div>
        </div>

        {/* Right Panel - Output */}
        <div className="w-80 md:w-96 flex flex-col border-l border-border bg-card overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border">
            <button className="flex-1 px-4 py-3 text-sm font-semibold text-foreground bg-muted/50 border-b-2 border-primary">
              Console Output
            </button>
            <button className="flex-1 px-4 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground transition">
              Blockchain State
            </button>
          </div>

          {/* Console */}
          <div className="flex-1 overflow-hidden">
            <ConsoleOutput logs={consoleLog} onClear={handleReset} />
          </div>
        </div>
      </div>
    </div>
  )
}
