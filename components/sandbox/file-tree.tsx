"use client"

import { ChevronRight } from "lucide-react"

interface FileTreeProps {
  selectedFile: string
  onSelectFile: (file: string) => void
}

const files = [
  { name: "Contract.sol", icon: "S" },
  { name: "Deploy.js", icon: "J" },
  { name: "Test.js", icon: "T" },
]

export function FileTree({ selectedFile, onSelectFile }: FileTreeProps) {
  return (
    <div className="p-2 space-y-1">
      {files.map((file) => (
        <button
          key={file.name}
          onClick={() => onSelectFile(file.name)}
          className={`w-full flex items-center gap-2 px-3 py-2 rounded text-sm transition ${
            selectedFile === file.name
              ? "bg-primary/20 text-primary font-semibold"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{file.name}</span>
        </button>
      ))}
    </div>
  )
}
