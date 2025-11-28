export const LEARNING_CATEGORIES = [
  {
    id: "blockchain-basics",
    name: "Blockchain Basics",
    description: "Learn the fundamentals of blockchain technology and how it works",
    icon: "Blocks",
    color: "primary",
    lessons: [
      {
        id: "intro-to-blockchain",
        title: "What is Blockchain?",
        description: "Understand the core concepts of blockchain technology and why it matters",
        duration_minutes: 15,
        content:
          "Blockchain is a distributed ledger technology that maintains a continuously growing list of records called blocks. Each block contains transaction data and is cryptographically linked to the previous block, creating an immutable chain.",
      },
      {
        id: "how-blockchain-works",
        title: "How Blockchain Works",
        description: "Deep dive into the mechanics of distributed ledgers and the blockchain process",
        duration_minutes: 20,
        content:
          "Blockchain works through a combination of cryptography, distributed networks, and consensus mechanisms. Transactions are broadcast to a network of nodes, validated, bundled into blocks, and added to the chain through consensus.",
      },
      {
        id: "blocks-and-chains",
        title: "Blocks and Chains",
        description: "Learn about blocks, transactions, and chain validation in detail",
        duration_minutes: 18,
        content:
          "A block contains a header with metadata and a body with transaction data. Each block references the previous block's hash, creating an immutable chain. If anyone tries to alter a past block, all subsequent blocks become invalid.",
      },
      {
        id: "consensus-mechanisms",
        title: "Consensus Mechanisms",
        description: "Proof of Work, Proof of Stake, and other consensus methods explained",
        duration_minutes: 25,
        content:
          "Consensus mechanisms ensure all network participants agree on the valid state of the blockchain. Proof of Work requires computational solving, while Proof of Stake selects validators based on their stake in the network.",
      },
      {
        id: "mining-validators",
        title: "Mining and Validators",
        description: "How miners and validators secure the blockchain network",
        duration_minutes: 22,
        content:
          "Miners (PoW) or validators (PoS) are responsible for creating new blocks and securing the network. They receive rewards in the form of newly created cryptocurrency and transaction fees for their work.",
      },
      {
        id: "decentralization",
        title: "Decentralization Explained",
        description: "Why decentralization matters and how it differs from centralized systems",
        duration_minutes: 17,
        content:
          "Decentralization removes the need for a central authority. Instead of trusting one entity, the network itself maintains trust through distributed consensus. This eliminates single points of failure and enables censorship resistance.",
      },
    ],
  },
  {
    id: "crypto-fundamentals",
    name: "Crypto Fundamentals",
    description: "Master cryptocurrency basics, wallets, and transactions",
    icon: "Coins",
    color: "secondary",
    lessons: [
      {
        id: "intro-to-crypto",
        title: "Introduction to Cryptocurrency",
        description: "What is cryptocurrency and why it matters in the modern world",
        duration_minutes: 15,
        content:
          "Cryptocurrency is digital money that uses cryptography to secure transactions and control the creation of new units. Unlike traditional currency issued by governments, crypto operates on decentralized networks.",
      },
      {
        id: "bitcoin-basics",
        title: "Bitcoin: Digital Gold",
        description: "Understanding Bitcoin and its purpose as a store of value",
        duration_minutes: 20,
        content:
          "Bitcoin, created in 2009, is the first and most well-known cryptocurrency. It has a fixed supply of 21 million coins and serves as a peer-to-peer electronic cash system without intermediaries.",
      },
      {
        id: "ethereum-intro",
        title: "Ethereum & Smart Contracts",
        description: "Learn about Ethereum and programmable blockchain platforms",
        duration_minutes: 22,
        content:
          "Ethereum introduced smart contracts - self-executing code on the blockchain. This enabled the creation of decentralized applications (dApps) and entire ecosystems built on the blockchain.",
      },
      {
        id: "altcoins",
        title: "Alternative Coins (Altcoins)",
        description: "Understanding different cryptocurrencies beyond Bitcoin and Ethereum",
        duration_minutes: 18,
        content:
          "Altcoins are alternative cryptocurrencies with different features, use cases, and technologies. Some focus on privacy, others on speed or specific applications. Research is crucial before investing.",
      },
      {
        id: "wallets-keys",
        title: "Wallets and Private Keys",
        description: "How to securely manage your cryptocurrency with wallets and keys",
        duration_minutes: 17,
        content:
          "A crypto wallet stores your private keys which prove ownership of your coins. Private keys must be kept secret. Public keys (addresses) are shared to receive funds. Never share private keys.",
      },
      {
        id: "transactions",
        title: "Understanding Transactions",
        description: "How crypto transactions work and transaction fees",
        duration_minutes: 18,
        content:
          "When you send cryptocurrency, you create a transaction signed with your private key. It's broadcast to the network, validated by nodes, included in a block, and then confirmed as immutable.",
      },
      {
        id: "gas-fees",
        title: "Gas Fees Explained",
        description: "Understanding network fees and how gas costs work",
        duration_minutes: 16,
        content:
          "Gas fees are paid to network participants for processing your transaction. Fees vary based on network congestion and transaction complexity. Higher fees mean faster processing.",
      },
    ],
  },
  {
    id: "trading-basics",
    name: "Trading Basics",
    description: "Learn how to trade cryptocurrencies safely and effectively",
    icon: "TrendingUp",
    color: "accent",
    lessons: [
      {
        id: "what-is-trading",
        title: "What is Crypto Trading?",
        description: "Introduction to buying and selling cryptocurrencies",
        duration_minutes: 12,
        content:
          "Crypto trading involves buying cryptocurrencies at a low price and selling at a higher price. Unlike investing, which is long-term, trading is typically short-term and involves more frequent transactions.",
      },
      {
        id: "spot-trading",
        title: "Spot Trading Explained",
        description: "Buying and holding cryptocurrencies on the spot market",
        duration_minutes: 16,
        content:
          "Spot trading is buying coins and taking immediate possession of them. You own the actual asset and can transfer it to your personal wallet. It's the safest way for beginners to trade.",
      },
      {
        id: "dca-strategy",
        title: "Dollar Cost Averaging (DCA)",
        description: "A beginner-friendly investment strategy to minimize risk",
        duration_minutes: 14,
        content:
          "DCA involves investing a fixed amount regularly regardless of price. This reduces the impact of volatility and removes emotion from investing. It's ideal for long-term wealth building.",
      },
      {
        id: "risk-management",
        title: "Risk Management",
        description: "Protecting your investments and managing risk effectively",
        duration_minutes: 20,
        content:
          "Never invest more than you can afford to lose. Diversify your portfolio, use stop losses, and only risk a small percentage per trade. Risk management is more important than profit-taking.",
      },
      {
        id: "reading-charts",
        title: "Reading Price Charts",
        description: "Basics of technical analysis for beginners",
        duration_minutes: 18,
        content:
          "Charts show price history over time. Candlestick charts display open, close, high, and low prices. Support and resistance are key levels where price tends to bounce.",
      },
      {
        id: "common-mistakes",
        title: "Common Trading Mistakes",
        description: "What to avoid as a beginner trader",
        duration_minutes: 15,
        content:
          "Beginners often chase losses, overtrade, lack a plan, and let emotions drive decisions. FOMO (fear of missing out) and panic selling cause losses. A trading plan and discipline prevent these mistakes.",
      },
      {
        id: "exchange-selection",
        title: "Choosing the Right Exchange",
        description: "How to select a safe and reliable crypto exchange",
        duration_minutes: 16,
        content:
          "Choose exchanges with good security, low fees, good customer service, and regulatory compliance. Major exchanges include Binance, Coinbase, and Kraken. Never use untested or suspicious platforms.",
      },
    ],
  },
  {
    id: "web3-intro",
    name: "Web3 & DeFi",
    description: "Discover decentralized finance and Web3 applications",
    icon: "Globe",
    color: "primary",
    lessons: [
      {
        id: "what-is-web3",
        title: "What is Web3?",
        description: "Understanding the decentralized internet and its evolution",
        duration_minutes: 16,
        content:
          "Web3 represents the third generation of the internet built on blockchain. Unlike Web2 where companies control data, Web3 enables user ownership and control through decentralization.",
      },
      {
        id: "defi-explained",
        title: "DeFi Explained",
        description: "Decentralized Finance and its opportunities",
        duration_minutes: 20,
        content:
          "DeFi uses blockchain to recreate financial services without banks. Services include lending, borrowing, trading, and insurance. DeFi is open to anyone with internet access.",
      },
      {
        id: "dexes",
        title: "Decentralized Exchanges (DEX)",
        description: "How to trade on decentralized platforms without custodians",
        duration_minutes: 18,
        content:
          "DEXs use smart contracts to enable peer-to-peer trading. You maintain control of your private keys. Examples include Uniswap, SushiSwap, and Curve. No KYC required.",
      },
      {
        id: "lending-protocols",
        title: "Lending Protocols",
        description: "How to earn interest by lending cryptocurrency",
        duration_minutes: 19,
        content:
          "Lending protocols like Aave and Compound let you deposit crypto to earn interest. Borrowers pay interest on their loans. Returns vary based on supply and demand.",
      },
      {
        id: "yield-farming",
        title: "Yield Farming Basics",
        description: "Earning returns on crypto deposits through liquidity mining",
        duration_minutes: 22,
        content:
          "Yield farming involves providing liquidity to DEXs or lending protocols. You earn transaction fees and governance tokens. Returns can be high but risks include impermanent loss.",
      },
      {
        id: "staking",
        title: "Staking Explained",
        description: "How to earn rewards by staking cryptocurrency",
        duration_minutes: 19,
        content:
          "Staking involves locking crypto to support network operations. You earn rewards for participating. Staking is lower risk than yield farming and provides passive income.",
      },
      {
        id: "nft-basics",
        title: "NFTs & Digital Assets",
        description: "Understanding Non-Fungible Tokens and their use cases",
        duration_minutes: 17,
        content:
          "NFTs are unique digital assets stored on blockchain. Unlike crypto coins, each NFT is unique. Use cases include art, collectibles, gaming items, and domain names.",
      },
    ],
  },
  {
    id: "smart-contracts",
    name: "Smart Contracts 101",
    description: "Introduction to writing and understanding smart contracts",
    icon: "Code",
    color: "secondary",
    lessons: [
      {
        id: "what-are-smart-contracts",
        title: "What are Smart Contracts?",
        description: "Introduction to automated code on the blockchain",
        duration_minutes: 15,
        content:
          "Smart contracts are self-executing programs stored on blockchain. They automatically execute when conditions are met. No intermediaries needed - the code enforces the agreement.",
      },
      {
        id: "solidity-basics",
        title: "Solidity Basics",
        description: "Getting started with the Solidity programming language",
        duration_minutes: 25,
        content:
          "Solidity is the primary language for Ethereum smart contracts. It's similar to JavaScript but runs on the blockchain. Learn variables, functions, and contract structure.",
      },
      {
        id: "first-contract",
        title: "Your First Smart Contract",
        description: "Write a simple smart contract step by step",
        duration_minutes: 20,
        content:
          "Start with a simple contract like a counter or greeting function. Understand state variables, functions, and how data is stored on blockchain. Use Remix IDE for experimentation.",
      },
      {
        id: "contract-security",
        title: "Smart Contract Security",
        description: "Common vulnerabilities and best practices for secure contracts",
        duration_minutes: 22,
        content:
          "Common vulnerabilities include reentrancy attacks, overflow/underflow, and function visibility issues. Always follow security best practices and get contracts audited before deploying.",
      },
      {
        id: "deploying-contracts",
        title: "Deploying Contracts",
        description: "How to deploy smart contracts to the blockchain",
        duration_minutes: 18,
        content:
          "Deploy to testnet first to test functionality. Use tools like Truffle or Hardhat. Deployment costs gas fees. After verification, your contract code is immutable.",
      },
      {
        id: "contract-interaction",
        title: "Interacting with Contracts",
        description: "How to call contract functions and read data",
        duration_minutes: 16,
        content:
          "Use Web3.js or ethers.js to interact with contracts from frontend applications. Send transactions to modify state or call read functions to query data.",
      },
      {
        id: "openzeppelin",
        title: "Using OpenZeppelin Libraries",
        description: "Leverage audited and secure smart contract libraries",
        duration_minutes: 17,
        content:
          "OpenZeppelin provides battle-tested contracts for ERC-20 tokens, ERC-721 NFTs, and access control. Using proven code reduces security risks in your contracts.",
      },
    ],
  },
  {
    id: "security-safety",
    name: "Security & Safety",
    description: "Stay safe in crypto - scams, security, and best practices",
    icon: "Shield",
    color: "accent",
    lessons: [
      {
        id: "common-scams",
        title: "Common Crypto Scams",
        description: "Identify and avoid common cryptocurrency scams",
        duration_minutes: 16,
        content:
          "Common scams include fake exchanges, Ponzi schemes, pump and dump, rug pulls, and fake tokens. Always verify project legitimacy. Use official websites and never trust unsolicited offers.",
      },
      {
        id: "wallet-security",
        title: "Wallet Security Best Practices",
        description: "How to protect your digital assets from theft",
        duration_minutes: 18,
        content:
          "Use hardware wallets for large amounts. Keep private keys offline and secure. Use strong passwords. Enable all security features. Never share recovery phrases. Verify addresses before sending funds.",
      },
      {
        id: "2fa-security",
        title: "Two-Factor Authentication",
        description: "Adding extra security layers to your accounts",
        duration_minutes: 12,
        content:
          "2FA requires two verification methods. Use authenticator apps like Google Authenticator instead of SMS. Save backup codes in a secure location. Enables 2FA on all important accounts.",
      },
      {
        id: "phishing",
        title: "Avoiding Phishing Attacks",
        description: "Recognizing and avoiding phishing attempts",
        duration_minutes: 14,
        content:
          "Phishing uses fake emails or websites to steal credentials. Check URLs carefully. Legitimate sites use HTTPS. Never click links in emails. Hover over links to see true destination.",
      },
      {
        id: "recovery-phrases",
        title: "Protecting Recovery Phrases",
        description: "Safely storing your seed phrases and backups",
        duration_minutes: 15,
        content:
          "Recovery phrases grant access to all your funds. Write them down and store offline. Never photograph or email them. Never share with anyone. Consider using a safe or safety deposit box.",
      },
      {
        id: "transaction-security",
        title: "Safe Transaction Practices",
        description: "How to execute safe and secure cryptocurrency transactions",
        duration_minutes: 13,
        content:
          "Double-check addresses before sending. Use small amounts for testing. Verify contract addresses on official sites. Watch for transaction fee anomalies. Consider transaction delays for critical transfers.",
      },
      {
        id: "exchange-security",
        title: "Exchange Account Security",
        description: "Protecting your accounts on cryptocurrency exchanges",
        duration_minutes: 14,
        content:
          "Use unique, strong passwords. Enable all security features. Use VPN for access. Store crypto in personal wallets when possible. Remove API keys after use. Whitelist withdrawal addresses.",
      },
    ],
  },
  {
    id: "investing-strategies",
    name: "Investing Strategies",
    description: "Long-term investment strategies for building wealth in crypto",
    icon: "TrendingUp",
    color: "secondary",
    lessons: [
      {
        id: "investment-vs-trading",
        title: "Investing vs Trading",
        description: "Understanding the differences and choosing your approach",
        duration_minutes: 14,
        content:
          "Investing is long-term with buy-and-hold strategy. Trading is short-term with frequent buys/sells. Investing has lower stress and fewer fees. Trading requires more time and skill.",
      },
      {
        id: "portfolio-diversification",
        title: "Portfolio Diversification",
        description: "How to build a balanced crypto portfolio",
        duration_minutes: 16,
        content:
          "Don't put all money in one coin. Mix large-cap and smaller projects. Balance between different use cases. Rebalance periodically. Diversification reduces risk.",
      },
      {
        id: "fundamental-analysis",
        title: "Fundamental Analysis",
        description: "Analyzing projects by their fundamentals rather than price",
        duration_minutes: 18,
        content:
          "Look at team experience, technology, adoption rate, and use case. Read whitepapers and code. Check GitHub activity. Analyze tokenomics. Strong fundamentals indicate quality projects.",
      },
      {
        id: "long-term-holding",
        title: "Long-Term Holding (HODL)",
        description: "Building wealth through patient long-term investing",
        duration_minutes: 15,
        content:
          "HODL means holding through volatility and market cycles. Most successful investors are long-term hodlers. Ignore short-term price swings. History shows crypto trends upward over years.",
      },
      {
        id: "rebalancing",
        title: "Portfolio Rebalancing",
        description: "Maintaining your portfolio allocation over time",
        duration_minutes: 13,
        content:
          "Rebalancing means selling overweighted assets and buying underweighted ones. Do it quarterly or when allocations drift 5-10%. Rebalancing locks in gains and maintains risk levels.",
      },
    ],
  },
  {
    id: "advanced-topics",
    name: "Advanced Topics",
    description: "Deeper concepts and advanced crypto knowledge",
    icon: "Code",
    color: "accent",
    lessons: [
      {
        id: "layer-2-scaling",
        title: "Layer 2 Scaling Solutions",
        description: "Understanding L2s like Lightning Network and Polygon",
        duration_minutes: 19,
        content:
          "Layer 2 solutions process transactions off-chain for speed and lower costs. Examples include Lightning Network for Bitcoin and Polygon for Ethereum. L2s settle to L1 for security.",
      },
      {
        id: "cross-chain-bridges",
        title: "Cross-Chain Bridges",
        description: "Moving assets between different blockchains",
        duration_minutes: 17,
        content:
          "Bridges enable asset transfers between blockchains. They work by locking assets on one chain and minting them on another. Bridges expand liquidity but introduce new risks.",
      },
      {
        id: "dao-governance",
        title: "DAOs and Governance",
        description: "Decentralized Autonomous Organizations and voting",
        duration_minutes: 20,
        content:
          "DAOs are organizations governed by smart contracts and token holders. Token holders vote on proposals. DAOs eliminate traditional hierarchies. Governance is transparent and on-chain.",
      },
      {
        id: "oracles",
        title: "Blockchain Oracles",
        description: "Bringing real-world data onto the blockchain",
        duration_minutes: 16,
        content:
          "Oracles provide external data to smart contracts. They bridge the gap between on-chain and off-chain worlds. Chainlink is the most popular oracle network. Oracles introduce centralization risks.",
      },
      {
        id: "zero-knowledge",
        title: "Zero-Knowledge Proofs",
        description: "Advanced cryptography for privacy and scalability",
        duration_minutes: 21,
        content:
          "ZK proofs prove knowledge of something without revealing it. They enable privacy and scalability. ZK-SNARKs and ZK-STARKs are implementations. Enables new privacy-focused applications.",
      },
    ],
  },
  {
    id: "career-opportunities",
    name: "Career Opportunities",
    description: "Careers and opportunities in blockchain and crypto",
    icon: "Zap",
    color: "primary",
    lessons: [
      {
        id: "blockchain-jobs",
        title: "Blockchain Industry Jobs",
        description: "Different career paths in blockchain and crypto",
        duration_minutes: 15,
        content:
          "Careers include developers, analysts, designers, and managers. Blockchain engineers are highly paid. Non-technical roles exist in marketing, business development, and compliance.",
      },
      {
        id: "becoming-developer",
        title: "Becoming a Blockchain Developer",
        description: "Path to becoming a Solidity or Web3 developer",
        duration_minutes: 18,
        content:
          "Learn Solidity, smart contract development, and Web3.js. Build projects and share on GitHub. Join communities and contribute to open-source. Network at conferences and online communities.",
      },
      {
        id: "crypto-analyst",
        title: "Becoming a Crypto Analyst",
        description: "Path to becoming a blockchain analyst or researcher",
        duration_minutes: 14,
        content:
          "Study economics, finance, and technology. Analyze on-chain data and market trends. Create reports and share insights. Build reputation through writing and research.",
      },
      {
        id: "startup-ecosystem",
        title: "Crypto Startup Ecosystem",
        description: "Understanding the startup and fundraising landscape",
        duration_minutes: 16,
        content:
          "Many crypto startups raise through ICOs or VCs. Learn about pitching, product-market fit, and fundraising. Understanding the ecosystem helps with career decisions.",
      },
    ],
  },
  {
    id: "gas-fees-deep-dive",
    name: "Understanding Gas Fees",
    description: "Learn how transaction costs work on the blockchain",
    icon: "Zap",
    color: "accent",
    lessons: [
      {
        id: "what-are-gas-fees",
        title: "What are Gas Fees?",
        description: "Understanding the basics of gas fees and why they exist",
        duration_minutes: 18,
        content:
          "Gas fees are payments made to network participants for processing your transactions. Every action on the blockchain requires computational resources, and gas fees compensate validators and miners for those resources. Think of gas as the fuel that powers the blockchain network.",
      },
      {
        id: "how-gas-is-calculated",
        title: "How Gas is Calculated",
        description: "Understanding gas units, gas price, and total cost",
        duration_minutes: 20,
        content:
          "Gas cost = Gas Units × Gas Price. Gas Units measure computational complexity (more complex = more gas). Gas Price is what you pay per unit. Total cost is in ETH (or network currency). Higher gas prices = faster transaction processing.",
      },
      {
        id: "ethereum-gas-explained",
        title: "Ethereum Gas Fees Explained",
        description: "Deep dive into how Ethereum calculates and charges gas",
        duration_minutes: 22,
        content:
          "Ethereum uses a dynamic pricing model. Base Fee varies with network congestion and is burned. Priority Fee incentivizes miners to include your transaction. Max Fee sets the absolute limit. EIP-1559 introduced this system to stabilize gas prices.",
      },
      {
        id: "saving-on-gas",
        title: "Strategies to Save on Gas",
        description: "Practical tips to reduce your transaction costs",
        duration_minutes: 19,
        content:
          "Send transactions during low-traffic periods for cheaper fees. Batch transactions to reduce total gas spent. Use layer 2 solutions for significant savings. Limit complex operations in smart contracts. Use efficient code patterns.",
      },
      {
        id: "gas-on-other-chains",
        title: "Gas Fees on Different Blockchains",
        description: "Comparing gas costs across Bitcoin, Polygon, Solana, and others",
        duration_minutes: 21,
        content:
          "Bitcoin uses a fee-market model with satoshis per byte. Polygon has much lower gas costs than Ethereum. Solana uses a different model without gas fluctuation. Each blockchain has different cost structures and trade-offs.",
      },
      {
        id: "estimating-gas",
        title: "Estimating Gas Before Transactions",
        description: "How to estimate gas costs and avoid surprises",
        duration_minutes: 17,
        content:
          "Use block explorers or wallet estimators to see gas costs before sending. Consider pending transactions to estimate current prices. Add buffer to avoid transaction failures. Watch gas trackers like ETH Gas Station.",
      },
      {
        id: "gas-optimization",
        title: "Smart Contract Gas Optimization",
        description: "For developers: techniques to optimize gas usage in contracts",
        duration_minutes: 23,
        content:
          "Store variables efficiently using tight packing. Use short-circuit evaluation in conditions. Avoid unnecessary storage writes. Use events instead of storage when possible. Lazy initialization and other patterns reduce gas.",
      },
    ],
  },
  {
    id: "iota-intro",
    name: "IOTA Distributed Ledger",
    description: "Learn about IOTA - the Distributed Ledger for IoT and lightweight transactions",
    icon: "Globe",
    color: "primary",
    lessons: [
      {
        id: "iota-what-is",
        title: "What is IOTA?",
        description: "Understanding IOTA and how it differs from blockchain",
        duration_minutes: 16,
        content:
          "IOTA is a Distributed Ledger Technology (DLT) designed for the Internet of Things (IoT). Unlike blockchain, IOTA uses a Directed Acyclic Graph (DAG) called the Tangle. It enables feeless transactions and scalability for IoT devices.",
      },
      {
        id: "iota-vs-blockchain",
        title: "IOTA vs Blockchain",
        description: "Key differences between IOTA's Tangle and traditional blockchain",
        duration_minutes: 18,
        content:
          "Blockchain is linear; Tangle is a DAG. Blockchain has miners; Tangle is fee-less. Blockchain has scalability issues; Tangle scales with network size. Blockchain is slow; Tangle confirms transactions instantly.",
      },
      {
        id: "iota-tangle",
        title: "The Tangle Explained",
        description: "Understanding IOTA's innovative Tangle data structure",
        duration_minutes: 20,
        content:
          "The Tangle is a Directed Acyclic Graph where each transaction references two previous transactions. This creates a web-like structure instead of a chain. The more transactions, the faster confirmations. Consensus emerges through the structure itself.",
      },
      {
        id: "iota-use-cases",
        title: "IOTA Use Cases",
        description: "Real-world applications of IOTA in IoT and beyond",
        duration_minutes: 17,
        content:
          "IOTA enables machine-to-machine payments, supply chain tracking, and sensor data marketplaces. Devices can transact autonomously without intermediaries. IOTA's feeless nature is perfect for micropayments between machines.",
      },
      {
        id: "iota-token-economics",
        title: "IOTA Token Economics",
        description: "Understanding the MIOTA token and network economics",
        duration_minutes: 15,
        content:
          "MIOTA is IOTA's native token. There are 2.78 billion MIOTA in total supply. Nodes don't receive block rewards but consensus is automatic. Token economics incentivize network participation.",
      },
      {
        id: "iota-scalability",
        title: "IOTA Scalability",
        description: "How IOTA achieves unlimited scalability",
        duration_minutes: 19,
        content:
          "Traditional blockchain throughput decreases with network size. IOTA's throughput increases with each new transaction. No block size limits exist. Tangle architecture allows parallel transactions creating infinite scalability potential.",
      },
    ],
  },
  {
    id: "iota-developers",
    name: "IOTA for Developers",
    description: "Technical guide for building on IOTA - beginner to advanced",
    icon: "Code",
    color: "secondary",
    lessons: [
      {
        id: "iota-setup",
        title: "Setting Up IOTA Development Environment",
        description: "Getting started with IOTA development tools and testnet",
        duration_minutes: 20,
        content:
          "Install Node.js and the IOTA CLI. Connect to IOTA testnet for development. Use IOTA Faucet to get test tokens. Understand public and private networks. Set up your first IOTA wallet.",
      },
      {
        id: "iota-transactions",
        title: "IOTA Transactions and API",
        description: "How to send transactions and interact with the IOTA network",
        duration_minutes: 22,
        content:
          "Use IOTA.js library for JavaScript development. Create transactions, sign with private keys, and submit to the network. Query transaction history and balances. Understand transaction structure and metadata.",
      },
      {
        id: "iota-smart-contracts",
        title: "Smart Contracts on IOTA",
        description: "Building smart contracts on IOTA with Wasp and WASM",
        duration_minutes: 25,
        content:
          "IOTA supports smart contracts through Wasp framework. Write contracts in Rust, Go, or TypeScript. Compile to WASM for the Tangle. Smart contracts enable complex business logic on IOTA.",
      },
      {
        id: "iota-dapps",
        title: "Building DApps on IOTA",
        description: "Creating decentralized applications using IOTA backend",
        duration_minutes: 23,
        content:
          "Combine React frontend with IOTA backend. Use IOTA.js for wallet integration. Store data on the Tangle. Build peer-to-peer applications. Enable direct machine-to-machine transactions.",
      },
      {
        id: "iota-identity",
        title: "IOTA Identity",
        description: "Digital identity solutions using IOTA DIDs",
        duration_minutes: 19,
        content:
          "IOTA provides Decentralized Identifiers (DIDs) for entities. Create self-sovereign identity without central authority. Verifiable credentials stored on Tangle. Privacy-preserving identity solutions.",
      },
      {
        id: "iota-iot-integration",
        title: "Integrating IoT Devices with IOTA",
        description: "Connecting IoT devices to the IOTA network",
        duration_minutes: 21,
        content:
          "Install IOTA client libraries on IoT devices. Configure devices to send sensor data to the Tangle. Create automated machine-to-machine payments. Build data marketplace applications.",
      },
    ],
  },
  {
    id: "iota-trading",
    name: "IOTA Trading & Investment",
    description: "Trading MIOTA and understanding IOTA market dynamics",
    icon: "TrendingUp",
    color: "accent",
    lessons: [
      {
        id: "iota-tokenomics",
        title: "IOTA Tokenomics Deep Dive",
        description: "Understanding MIOTA supply, distribution, and economics",
        duration_minutes: 18,
        content:
          "Total supply: 2.78 billion MIOTA. No new tokens minted - fixed supply. No inflation or dilution. Early buyers received tokens in Genesis event. Token distribution aligns incentives.",
      },
      {
        id: "iota-trading-pairs",
        title: "Trading MIOTA Pairs",
        description: "Where to trade MIOTA and popular trading pairs",
        duration_minutes: 15,
        content:
          "MIOTA trades on exchanges like Binance, Coinbase, and Kraken. Popular pairs: MIOTA/USD, MIOTA/BTC, MIOTA/ETH. Liquidity is high on major exchanges. Consider fees and spread when trading.",
      },
      {
        id: "iota-market-analysis",
        title: "IOTA Market Analysis",
        description: "Technical and fundamental analysis for MIOTA trading",
        duration_minutes: 20,
        content:
          "Analyze MIOTA price charts for patterns. Track network growth metrics (TPS, active nodes). Monitor development announcements. IOTA's unique tech creates unique trading opportunities.",
      },
      {
        id: "iota-investment-thesis",
        title: "IOTA Investment Thesis",
        description: "Long-term investment case for IOTA",
        duration_minutes: 17,
        content:
          "IoT market grows exponentially. IOTA is built for IoT scalability. Feeless transactions benefit machine-to-machine economy. Strong team and development. Potential to capture IoT transaction market.",
      },
      {
        id: "iota-volatility",
        title: "Trading IOTA Volatility",
        description: "Strategies for trading IOTA's price swings",
        duration_minutes: 16,
        content:
          "IOTA shows significant volatility - good for traders. Monitor news and development for catalysts. Use technical analysis for entry/exit. Risk management is critical with volatile assets.",
      },
      {
        id: "iota-staking",
        title: "Staking and Holding IOTA",
        description: "Strategies for long-term IOTA holders",
        duration_minutes: 14,
        content:
          "While IOTA doesn't have traditional staking yet, holding positions you for network participation. Governance participation may become available. Dollar-cost averaging is good for long-term investors.",
      },
    ],
  },
]
