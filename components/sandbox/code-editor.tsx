"use client"

interface CodeEditorProps {
  fileName: string
}

const defaultCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloBlockchain {
    string public message = "Hello, Ituwa!";
    
    function setMessage(string memory _message) public {
        message = _message;
    }
    
    function getMessage() public view returns (string memory) {
        return message;
    }
}`

export function CodeEditor({ fileName }: CodeEditorProps) {
  return (
    <div className="h-full w-full flex flex-col bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      {/* Editor Header */}
      <div className="px-4 py-3 border-b border-[#3e3e42] bg-[#252526] flex items-center justify-between">
        <p className="text-sm font-semibold">{fileName}</p>
        <button className="text-[#858585] hover:text-[#d4d4d4] p-1 transition">×</button>
      </div>

      {/* Editor Content */}
      <div className="flex-1 overflow-auto p-4">
        <pre className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          <code className="text-[#ce9178]">{defaultCode}</code>
        </pre>
      </div>

      {/* Line Numbers would go on the left in a real editor */}
    </div>
  )
}
