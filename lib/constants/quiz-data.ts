export const LESSON_QUIZZES = {
  "intro-to-blockchain": {
    lessonId: "intro-to-blockchain",
    title: "Blockchain Basics Quiz",
    description: "Test your understanding of blockchain fundamentals",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What is the primary purpose of blockchain technology?",
        options: [
          "To speed up internet connections",
          "To create a distributed, immutable record of transactions",
          "To replace all databases",
          "To increase cryptocurrency prices",
        ],
        correctAnswer: 1,
        explanation:
          "Blockchain creates a distributed, immutable ledger that multiple parties can trust without a central authority.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What is a block in blockchain?",
        options: [
          "A unit of cryptocurrency",
          "A container of transaction data linked cryptographically to previous blocks",
          "A server on the network",
          "A type of wallet",
        ],
        correctAnswer: 1,
        explanation:
          "A block contains transaction data and is cryptographically linked to the previous block, forming a chain.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: Once data is added to blockchain, it can be easily modified.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. Blockchain is immutable due to cryptographic hashing. Modifying past data would invalidate all subsequent blocks.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "What makes blockchain 'distributed'?",
        options: [
          "It has multiple colors",
          "It is maintained by many independent nodes across a network",
          "It uses distributed databases",
          "It has distributed power consumption",
        ],
        correctAnswer: 1,
        explanation:
          "A distributed blockchain is maintained by multiple nodes worldwide, ensuring no single point of failure or control.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "What is the primary advantage of decentralization?",
        options: [
          "Faster processing speed",
          "Eliminates single points of failure and enables censorship resistance",
          "Lower cost of internet",
          "Better graphics quality",
        ],
        correctAnswer: 1,
        explanation:
          "Decentralization removes reliance on central authorities, creating systems resistant to censorship and failure.",
      },
    ],
  },
  "how-blockchain-works": {
    lessonId: "how-blockchain-works",
    title: "How Blockchain Works Quiz",
    description: "Test your knowledge of blockchain mechanisms",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What is a hash in blockchain?",
        options: [
          "A type of cryptocurrency wallet",
          "A cryptographic function that converts data into a unique fixed-size string",
          "A network node",
          "A type of transaction fee",
        ],
        correctAnswer: 1,
        explanation:
          "A hash is a cryptographic function that converts any input data into a unique, fixed-size string. Even tiny changes to input create completely different hashes.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What happens when a transaction is broadcast to the network?",
        options: [
          "It is immediately added to the blockchain",
          "It is validated by nodes, bundled into a block, and added through consensus",
          "It is stored on a central server",
          "It is encrypted and then deleted",
        ],
        correctAnswer: 1,
        explanation:
          "Transactions go through validation, bundling into blocks, and consensus before being permanently added to the blockchain.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: All blockchain nodes must process every transaction.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation:
          "True. In most blockchain networks, all nodes validate and maintain a complete copy of the transaction history to ensure network security and decentralization.",
      },
    ],
  },
  "bitcoin-basics": {
    lessonId: "bitcoin-basics",
    title: "Bitcoin Basics Quiz",
    description: "Test your knowledge about Bitcoin",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Who created Bitcoin?",
        options: ["Satoshi Nakamoto (pseudonym)", "The US Government", "A group of hackers", "Mark Zuckerberg"],
        correctAnswer: 0,
        explanation: "Bitcoin was created by Satoshi Nakamoto, whose true identity remains unknown.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What is the total maximum supply of Bitcoin?",
        options: ["Unlimited", "100 million", "21 million", "1 billion"],
        correctAnswer: 2,
        explanation: "Bitcoin has a hard cap of 21 million coins, making it a deflationary and scarce digital asset.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: Bitcoin transactions can be reversed.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Bitcoin transactions are irreversible once confirmed and added to the blockchain.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "What mining difficulty adjustment ensures Bitcoin blocks are created every 10 minutes?",
        options: [
          "Automatic hashing",
          "Dynamic difficulty adjustment every 2 weeks",
          "Fixed mining power",
          "Central coordinator",
        ],
        correctAnswer: 1,
        explanation:
          "Bitcoin's difficulty adjusts every 2,016 blocks to maintain a consistent 10-minute block time regardless of mining power.",
      },
    ],
  },
  "ethereum-intro": {
    lessonId: "ethereum-intro",
    title: "Ethereum & Smart Contracts Quiz",
    description: "Test your knowledge about Ethereum",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What innovation did Ethereum introduce to blockchain?",
        options: [
          "Faster transactions than Bitcoin",
          "Smart contracts - self-executing programs on blockchain",
          "Lower transaction fees",
          "Better wallet security",
        ],
        correctAnswer: 1,
        explanation:
          "Ethereum introduced smart contracts, enabling programmable applications and entire ecosystems on the blockchain.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What is the native currency of Ethereum?",
        options: ["Bitcoin", "Ether (ETH)", "Altcoin", "Tether"],
        correctAnswer: 1,
        explanation: "Ether (ETH) is Ethereum's native cryptocurrency used for transactions and paying gas fees.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: Smart contracts are controlled by a company or individual.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. Smart contracts are self-executing code on the blockchain - once deployed, they operate autonomously without central control.",
      },
    ],
  },
  "what-are-gas-fees": {
    lessonId: "what-are-gas-fees",
    title: "What are Gas Fees? Quiz",
    description: "Test your understanding of blockchain gas fees",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Why do gas fees exist on blockchains?",
        options: [
          "To make transactions slow",
          "To compensate network validators and miners for computational resources",
          "To prevent poor people from using blockchain",
          "To increase cryptocurrency prices",
        ],
        correctAnswer: 1,
        explanation:
          "Gas fees compensate validators and miners for the computational power and resources required to process transactions and secure the network.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Who receives the gas fees you pay?",
        options: [
          "The blockchain company",
          "Validators or miners who process transactions",
          "The government",
          "Random users on the network",
        ],
        correctAnswer: 1,
        explanation:
          "Gas fees go to validators (Proof of Stake) or miners (Proof of Work) who include your transaction in a block and process it on the network.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: Gas fees are the same regardless of network congestion.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. Gas fees vary based on network congestion. When more people are using the network, gas prices increase due to higher demand.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "What does higher gas price typically result in?",
        options: [
          "Slower transaction processing",
          "More secure transactions",
          "Faster transaction processing",
          "Lower transaction costs",
        ],
        correctAnswer: 2,
        explanation:
          "Higher gas prices incentivize miners/validators to prioritize your transaction, resulting in faster processing.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Can you avoid paying gas fees on blockchain?",
        options: [
          "Yes, use Layer 2 solutions or low-congestion periods",
          "No, all transactions require gas",
          "Yes, use older blockchains",
          "No, it is impossible",
        ],
        correctAnswer: 0,
        explanation:
          "While you cannot avoid gas entirely, you can minimize fees by using Layer 2 solutions, timing transactions during low-traffic periods, or using alternative blockchains with lower fees.",
      },
    ],
  },
  "how-gas-is-calculated": {
    lessonId: "how-gas-is-calculated",
    title: "How Gas is Calculated Quiz",
    description: "Test your knowledge of gas calculation mechanics",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What is the formula for calculating gas cost?",
        options: [
          "Gas Cost = Gas Price ÷ Gas Units",
          "Gas Cost = Gas Units × Gas Price",
          "Gas Cost = Gas Units + Gas Price",
          "Gas Cost = Gas Price",
        ],
        correctAnswer: 1,
        explanation: "Total gas cost equals the number of gas units required multiplied by the price per unit.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What do gas units measure?",
        options: [
          "The amount of cryptocurrency",
          "The computational complexity of a transaction",
          "The speed of the network",
          "The distance to the server",
        ],
        correctAnswer: 1,
        explanation:
          "Gas units measure the computational resources and complexity required to execute a transaction or smart contract operation.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: Gas price is always the same across all transactions.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. Gas price fluctuates based on network demand. During peak times, prices are higher; during quiet times, prices are lower.",
      },
    ],
  },
  "ethereum-gas-explained": {
    lessonId: "ethereum-gas-explained",
    title: "Ethereum Gas Fees Quiz",
    description: "Test your understanding of Ethereum's gas mechanism",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What did EIP-1559 introduce to Ethereum?",
        options: [
          "Lower transaction speeds",
          "A dynamic pricing model with Base Fee and Priority Fee",
          "Removal of gas fees",
          "Increased transaction costs",
        ],
        correctAnswer: 1,
        explanation:
          "EIP-1559 introduced a new fee market structure with a Base Fee (burned) and Priority Fee, making gas pricing more predictable.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What happens to the Base Fee in Ethereum?",
        options: [
          "It goes to miners",
          "It is burned (removed from circulation)",
          "It is stored in a vault",
          "It is given to users",
        ],
        correctAnswer: 1,
        explanation:
          "The Base Fee is burned after EIP-1559, which helps reduce ETH supply over time and makes the protocol more deflationary.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: Max Fee is the minimum amount you must pay for gas.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. Max Fee is the maximum you're willing to pay. You typically pay less (Base Fee + Priority Fee).",
      },
    ],
  },
  "saving-on-gas": {
    lessonId: "saving-on-gas",
    title: "Saving on Gas Fees Quiz",
    description: "Test your knowledge of gas fee reduction strategies",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "When are gas fees typically lowest?",
        options: [
          "During peak hours (noon UTC)",
          "During low-traffic periods (early morning UTC)",
          "On weekends",
          "On Mondays",
        ],
        correctAnswer: 1,
        explanation:
          "Gas fees are typically lowest during low-traffic periods when fewer people are using the network.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "How can Layer 2 solutions help with gas fees?",
        options: [
          "They increase fees",
          "They process transactions off-chain for lower costs",
          "They remove gas fees entirely",
          "They have no impact on fees",
        ],
        correctAnswer: 1,
        explanation:
          "Layer 2 solutions like Polygon and Optimism process transactions off-chain and only settle to the main chain periodically, significantly reducing gas costs.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: Batching transactions always saves gas.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation:
          "True. Batching multiple transactions into one can reduce total gas spent because you pay the base transaction cost only once.",
      },
    ],
  },
  "gas-on-other-chains": {
    lessonId: "gas-on-other-chains",
    title: "Gas Fees Across Blockchains Quiz",
    description: "Test your knowledge of gas fees on different chains",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Which blockchain typically has the lowest gas fees?",
        options: ["Ethereum mainnet", "Bitcoin", "Polygon or Solana", "All have same fees"],
        correctAnswer: 2,
        explanation:
          "Polygon and Solana have significantly lower gas fees than Ethereum mainnet due to different architecture and design choices.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "How does Bitcoin's fee model differ from Ethereum?",
        options: [
          "Bitcoin has no fees",
          "Bitcoin uses satoshis per byte, not gas units",
          "Bitcoin fees are always higher",
          "They are identical",
        ],
        correctAnswer: 1,
        explanation:
          "Bitcoin uses a satoshis-per-byte fee model rather than the gas unit system used by Ethereum and similar networks.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: Solana has fluctuating gas fees like Ethereum.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. Solana uses a different model where fees are based on network state and are much more stable and predictable.",
      },
    ],
  },
  "iota-what-is": {
    lessonId: "iota-what-is",
    title: "What is IOTA? Quiz",
    description: "Test your understanding of IOTA fundamentals",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What does IOTA stand for?",
        options: [
          "Internet of Things Application",
          "IOTA is the name itself, not an acronym",
          "Innovative Otc Transaction Algorithm",
          "Internet Overall Transfer Association",
        ],
        correctAnswer: 1,
        explanation:
          "IOTA is the name itself representing the smallest Greek letter. It emphasizes the project's focus on tiny transactions and IoT.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What technology does IOTA use instead of blockchain?",
        options: [
          "Proof of Work",
          "Directed Acyclic Graph (DAG) called the Tangle",
          "Traditional database",
          "Centralized ledger",
        ],
        correctAnswer: 1,
        explanation:
          "IOTA uses a Directed Acyclic Graph called the Tangle instead of blockchain. This enables feeless transactions and better scalability.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: IOTA transactions require fees.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. IOTA transactions are completely feeless, making it ideal for micropayments between machines in the IoT ecosystem.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "What is the primary use case for IOTA?",
        options: [
          "Gaming and NFTs",
          "Internet of Things (IoT) and machine-to-machine transactions",
          "Social media applications",
          "Traditional banking",
        ],
        correctAnswer: 1,
        explanation:
          "IOTA is specifically designed for the Internet of Things, enabling billions of devices to transact autonomously.",
      },
    ],
  },
  "iota-vs-blockchain": {
    lessonId: "iota-vs-blockchain",
    title: "IOTA vs Blockchain Quiz",
    description: "Test your knowledge of differences between IOTA and blockchain",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "How does the Tangle structure differ from blockchain?",
        options: [
          "Tangle is faster but less secure",
          "Tangle is a linear chain; blockchain is a web",
          "Tangle is a DAG; blockchain is linear",
          "They are identical",
        ],
        correctAnswer: 2,
        explanation:
          "Blockchain is a linear chain of blocks, while IOTA's Tangle is a Directed Acyclic Graph where transactions reference two previous transactions.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: Blockchain scales better than IOTA's Tangle.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. IOTA's Tangle scales infinitely - the more transactions, the faster confirmations. Blockchain scalability decreases with network size.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What is a key advantage of IOTA's Tangle over blockchain?",
        options: ["More secure", "Faster processing and confirmation", "Requires miners", "Uses more energy"],
        correctAnswer: 1,
        explanation:
          "IOTA's Tangle confirms transactions instantly as each new transaction references and validates previous ones.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "Which requires fees - blockchain or IOTA?",
        options: ["IOTA requires fees", "Blockchain requires fees", "Both require fees", "Neither requires fees"],
        correctAnswer: 1,
        explanation:
          "Traditional blockchain networks require transaction fees (gas, mining fees). IOTA transactions are completely feeless.",
      },
    ],
  },
  "iota-tangle": {
    lessonId: "iota-tangle",
    title: "The Tangle Explained Quiz",
    description: "Test your understanding of IOTA's Tangle structure",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "In the Tangle, what does each transaction do?",
        options: [
          "References the previous transaction only",
          "References two previous transactions",
          "References all previous transactions",
          "Doesn't reference anything",
        ],
        correctAnswer: 1,
        explanation:
          "Each transaction in the Tangle references exactly two previous transactions, creating a web-like structure instead of a linear chain.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: More transactions in the Tangle means slower confirmation.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. More transactions mean faster confirmations. The Tangle reaches consensus through its structure itself.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What is the data structure of the Tangle?",
        options: ["Linear chain", "Tree structure", "Directed Acyclic Graph (DAG)", "Circular graph"],
        correctAnswer: 2,
        explanation:
          "The Tangle is a Directed Acyclic Graph - transactions point to previous transactions but never create cycles.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "How does consensus emerge in the Tangle?",
        options: [
          "Through proof of work mining",
          "Through the structure of the Tangle itself",
          "Through a central authority",
          "Through voting",
        ],
        correctAnswer: 1,
        explanation:
          "Consensus in the Tangle emerges automatically from the DAG structure where newer transactions validate older ones.",
      },
    ],
  },
  "iota-use-cases": {
    lessonId: "iota-use-cases",
    title: "IOTA Use Cases Quiz",
    description: "Test your knowledge of IOTA applications",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Which is NOT a use case for IOTA?",
        options: [
          "Machine-to-machine payments",
          "Supply chain tracking",
          "Social media platforms",
          "Sensor data marketplaces",
        ],
        correctAnswer: 2,
        explanation:
          "Social media platforms are not ideal for IOTA. IOTA is designed for IoT, machines, and devices - not consumer social applications.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: Devices can make autonomous payments on IOTA without human intervention.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation:
          "True. IOTA's feeless transactions and instant confirmation enable devices to autonomously pay each other for services.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What makes IOTA ideal for IoT compared to blockchain?",
        options: [
          "Faster speeds only",
          "Feeless transactions and instant confirmation",
          "More security",
          "Better user interface",
        ],
        correctAnswer: 1,
        explanation:
          "IOTA's feeless nature and instant confirmation make it perfect for millions of small transactions between IoT devices.",
      },
    ],
  },
  "iota-token-economics": {
    lessonId: "iota-token-economics",
    title: "IOTA Token Economics Quiz",
    description: "Test your knowledge of MIOTA economics",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What is the total supply of MIOTA?",
        options: ["Unlimited", "21 million", "2.78 billion", "100 million"],
        correctAnswer: 2,
        explanation: "MIOTA has a fixed total supply of 2.78 billion tokens with no new token creation.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: Miners receive block rewards on IOTA.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. IOTA doesn't have traditional mining. Consensus is automatic through the Tangle structure.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What incentivizes nodes to run on IOTA?",
        options: [
          "Mining rewards",
          "Staking rewards",
          "Network participation and future governance",
          "Money from the foundation",
        ],
        correctAnswer: 2,
        explanation:
          "Nodes are incentivized by network participation and potential future governance rights without immediate financial rewards.",
      },
    ],
  },
  "iota-scalability": {
    lessonId: "iota-scalability",
    title: "IOTA Scalability Quiz",
    description: "Test your knowledge of IOTA's scalability",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "How does IOTA achieve scalability?",
        options: [
          "By increasing block size",
          "By creating more miners",
          "Through DAG structure where throughput increases with transactions",
          "By limiting transactions",
        ],
        correctAnswer: 2,
        explanation: "IOTA's DAG architecture means each new transaction increases network capacity, not decreases it.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: IOTA has block size limits.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. IOTA has no block size limits because it doesn't use blocks - it uses a DAG structure with unlimited parallelization.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What is IOTA's theoretical transaction throughput limit?",
        options: ["Similar to Ethereum", "Fixed at 1000 TPS", "Unlimited - scales with network", "100 TPS maximum"],
        correctAnswer: 2,
        explanation:
          "IOTA can theoretically achieve unlimited throughput as the network grows and more transactions contribute to validation.",
      },
    ],
  },
  "iota-setup": {
    lessonId: "iota-setup",
    title: "IOTA Development Setup Quiz",
    description: "Test your knowledge of setting up IOTA development",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What should developers use before deploying to mainnet?",
        options: ["Mainnet directly", "IOTA testnet for testing", "Bitcoin testnet", "Their local computer only"],
        correctAnswer: 1,
        explanation:
          "Always test on IOTA testnet first to verify functionality and save on costs before deploying to mainnet.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What is the IOTA Faucet used for?",
        options: ["To store tokens", "To get test tokens for development", "To exchange tokens", "To create wallets"],
        correctAnswer: 1,
        explanation: "The IOTA Faucet provides free test tokens to developers for building and testing on testnet.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: IOTA CLI is required for all IOTA development.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. While IOTA CLI is useful, developers can use IOTA.js library or other tools for application development.",
      },
    ],
  },
  "iota-transactions": {
    lessonId: "iota-transactions",
    title: "IOTA Transactions and API Quiz",
    description: "Test your knowledge of IOTA transaction handling",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What library is used for JavaScript IOTA development?",
        options: ["Web3.js", "IOTA.js", "Ethers.js", "Axios"],
        correctAnswer: 1,
        explanation: "IOTA.js is the official JavaScript library for interacting with the IOTA network.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What must you do before submitting a transaction to the network?",
        options: ["Ask permission", "Sign it with your private key", "Wait for approval", "Burn tokens"],
        correctAnswer: 1,
        explanation: "Transactions must be signed with your private key to prove ownership and authorization.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: You can read transaction history using IOTA API.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. The IOTA API allows you to query transaction history, balances, and network data.",
      },
    ],
  },
  "iota-smart-contracts": {
    lessonId: "iota-smart-contracts",
    title: "Smart Contracts on IOTA Quiz",
    description: "Test your knowledge of IOTA smart contracts",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What framework does IOTA use for smart contracts?",
        options: ["Solidity", "Wasp framework", "Truffle", "Hardhat"],
        correctAnswer: 1,
        explanation: "IOTA uses the Wasp framework for deploying and managing smart contracts on the Tangle.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What languages can IOTA smart contracts be written in?",
        options: ["Only Solidity", "Only Rust", "Rust, Go, or TypeScript", "Only JavaScript"],
        correctAnswer: 2,
        explanation:
          "IOTA smart contracts support multiple languages including Rust, Go, and TypeScript for flexibility.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: IOTA smart contracts compile to WASM.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. Smart contracts compile to WebAssembly (WASM) for execution on the IOTA network.",
      },
    ],
  },
  "iota-dapps": {
    lessonId: "iota-dapps",
    title: "Building DApps on IOTA Quiz",
    description: "Test your knowledge of IOTA DApp development",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What frontend technology can be used with IOTA?",
        options: ["Only Solidity", "React or any JavaScript framework", "Only PHP", "Only Python"],
        correctAnswer: 1,
        explanation: "Any frontend framework like React can interact with IOTA through IOTA.js library.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: IOTA DApps require centralized servers.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. IOTA DApps can be fully decentralized with data and logic on the Tangle.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What advantage do IOTA DApps have over Ethereum DApps?",
        options: ["More users", "Feeless transactions and instant confirmation", "Better interface", "Easier to use"],
        correctAnswer: 1,
        explanation:
          "IOTA DApps benefit from feeless transactions and instant confirmation compared to Ethereum DApps with gas fees.",
      },
    ],
  },
  "iota-identity": {
    lessonId: "iota-identity",
    title: "IOTA Identity Quiz",
    description: "Test your knowledge of IOTA identity solutions",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What are DIDs in IOTA?",
        options: [
          "Direct Internet Data",
          "Decentralized Identifiers",
          "Digital Identity Documents",
          "Distributed Internet Devices",
        ],
        correctAnswer: 1,
        explanation:
          "DIDs (Decentralized Identifiers) allow self-sovereign identity without relying on central authorities.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: IOTA Identity requires a central issuer.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. IOTA DIDs are self-sovereign, meaning individuals control their own identity without central authorities.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Where are IOTA credentials stored?",
        options: ["Centralized database", "On the Tangle", "On users' devices", "With a provider"],
        correctAnswer: 1,
        explanation: "Verifiable credentials can be stored on the IOTA Tangle for permanent, tamper-proof records.",
      },
    ],
  },
  "iota-iot-integration": {
    lessonId: "iota-iot-integration",
    title: "Integrating IoT Devices with IOTA Quiz",
    description: "Test your knowledge of IoT and IOTA integration",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What can IoT devices do on the IOTA network?",
        options: [
          "Store large files",
          "Send sensor data and make autonomous payments",
          "Create social media posts",
          "Nothing unique",
        ],
        correctAnswer: 1,
        explanation:
          "IoT devices can autonomously send data and make payments on IOTA, enabling machine-to-machine economy.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: IoT devices need to pay transaction fees on IOTA.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. IOTA transactions are feeless, making it economical for IoT devices to send frequent data.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What can IoT devices create on IOTA?",
        options: ["NFTs only", "Data marketplace applications", "Only store data", "Nothing special"],
        correctAnswer: 1,
        explanation:
          "IoT devices can create data marketplace applications where sensor data is bought and sold autonomously.",
      },
    ],
  },
  "iota-tokenomics": {
    lessonId: "iota-tokenomics",
    title: "IOTA Tokenomics Deep Dive Quiz",
    description: "Test your understanding of MIOTA economics",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What is the total MIOTA supply?",
        options: ["1 million", "1 billion", "2.78 billion", "Unlimited"],
        correctAnswer: 2,
        explanation: "MIOTA has a fixed total supply of 2.78 billion tokens established at genesis.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: New MIOTA tokens are created through mining.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. IOTA doesn't use mining. The total supply is fixed with no new token creation.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What prevents MIOTA inflation?",
        options: [
          "Central bank control",
          "Fixed supply and no new token creation",
          "Government regulation",
          "Market demand only",
        ],
        correctAnswer: 1,
        explanation: "MIOTA's fixed supply prevents inflation - there can never be more than 2.78 billion tokens.",
      },
    ],
  },
  "iota-trading-pairs": {
    lessonId: "iota-trading-pairs",
    title: "Trading MIOTA Pairs Quiz",
    description: "Test your knowledge of MIOTA trading",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Where can you trade MIOTA?",
        options: [
          "Only decentralized exchanges",
          "Major exchanges like Binance, Coinbase, Kraken",
          "Only OTC",
          "Nowhere",
        ],
        correctAnswer: 1,
        explanation: "MIOTA is traded on major centralized exchanges with high liquidity.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What is a common MIOTA trading pair?",
        options: ["MIOTA/AUD", "MIOTA/JPY", "MIOTA/USD", "MIOTA/Gold"],
        correctAnswer: 2,
        explanation: "MIOTA/USD is one of the most common and liquid trading pairs.",
      },
      {
        id: "q3",
        type: "true-false",
        question: "True or False: MIOTA liquidity is low on major exchanges.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. MIOTA has good liquidity on major exchanges, making it easy to trade.",
      },
    ],
  },
  "iota-market-analysis": {
    lessonId: "iota-market-analysis",
    title: "IOTA Market Analysis Quiz",
    description: "Test your knowledge of analyzing IOTA markets",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What metric is important for analyzing IOTA's potential?",
        options: [
          "Only price",
          "Network growth, TPS, active nodes",
          "Celebrity endorsements",
          "Social media followers",
        ],
        correctAnswer: 1,
        explanation:
          "Network metrics like transaction throughput and node count indicate IOTA's actual adoption and utility.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: IOTA's price is independent of IoT adoption.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. As IoT adoption grows, IOTA's value proposition and price potential increases.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What should traders monitor for IOTA?",
        options: [
          "Only technical charts",
          "Development announcements and partnerships",
          "Competitor pricing",
          "Random news",
        ],
        correctAnswer: 1,
        explanation: "Development progress and partnerships are key catalysts for IOTA's price movement.",
      },
    ],
  },
  "iota-investment-thesis": {
    lessonId: "iota-investment-thesis",
    title: "IOTA Investment Thesis Quiz",
    description: "Test your knowledge of IOTA's investment potential",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What is the long-term value proposition of IOTA?",
        options: [
          "Quick price gains",
          "Capturing the IoT transaction market",
          "Replacing all cryptocurrencies",
          "Gaming features",
        ],
        correctAnswer: 1,
        explanation: "IOTA's long-term value comes from its potential to dominate the IoT transaction market.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: IoT market growth is irrelevant to IOTA's success.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Exponential IoT market growth is directly relevant to IOTA's potential success.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What team factor matters for IOTA investment?",
        options: ["Team size only", "Team experience and track record", "Team location", "Team age"],
        correctAnswer: 1,
        explanation:
          "An experienced team with proven track records is crucial for successful blockchain projects like IOTA.",
      },
    ],
  },
  "iota-volatility": {
    lessonId: "iota-volatility",
    title: "Trading IOTA Volatility Quiz",
    description: "Test your knowledge of trading volatile assets like IOTA",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What creates trading opportunities with IOTA?",
        options: [
          "Price stability",
          "Price volatility and market swings",
          "No price movement",
          "Perfect predictability",
        ],
        correctAnswer: 1,
        explanation: "Price volatility creates opportunities for traders to profit from price swings.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: Volatile assets like IOTA are safe for inexperienced traders.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation:
          "False. Volatility means higher risk. Inexperienced traders should use risk management and smaller positions.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What is crucial when trading volatile assets?",
        options: ["Ignoring risk", "Risk management and position sizing", "Using leverage", "Following hype"],
        correctAnswer: 1,
        explanation: "Proper risk management protects capital when trading volatile assets like IOTA.",
      },
    ],
  },
  "iota-staking": {
    lessonId: "iota-staking",
    title: "Staking and Holding IOTA Quiz",
    description: "Test your knowledge of long-term IOTA holding strategies",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What is the strategy for long-term IOTA investors?",
        options: ["Day trading", "Hold through volatility and network growth", "Panic selling", "Following trends"],
        correctAnswer: 1,
        explanation: "Long-term investors hold through market cycles, betting on network growth and adoption.",
      },
      {
        id: "q2",
        type: "true-false",
        question: "True or False: Dollar-cost averaging is good for long-term IOTA investors.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. Buying fixed amounts regularly reduces the impact of price volatility.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "What might become available for IOTA holders in the future?",
        options: ["Staking rewards", "Governance participation", "Network incentives", "All of the above"],
        correctAnswer: 3,
        explanation: "Future governance and incentive mechanisms may reward long-term token holders.",
      },
    ],
  },
}

export interface QuizQuestion {
  id: string
  type: "multiple-choice" | "true-false"
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Quiz {
  lessonId: string
  title: string
  description: string
  questions: QuizQuestion[]
}
