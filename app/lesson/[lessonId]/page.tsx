"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LEARNING_CATEGORIES } from "@/lib/constants/learning-content"
import { LESSON_QUIZZES } from "@/lib/constants/quiz-data"
import { ArrowLeft, CheckCircle2, Clock, BookOpen, LinkIcon, ImageIcon, FileText } from "lucide-react"
import { notFound } from "next/navigation"
import { QuizSection } from "@/components/lesson/quiz-section"

const LESSON_CONTENT = {
  "intro-to-blockchain": {
    sections: [
      {
        title: "What is Blockchain?",
        type: "text",
        content:
          "Blockchain is a revolutionary technology that maintains a continuously growing list of records called blocks. Each block contains transaction data and is cryptographically linked to the previous block, creating an immutable chain that is virtually impossible to alter retroactively.",
      },
      {
        title: "Key Characteristics",
        type: "text",
        content:
          "Blockchain technology is characterized by three main features: immutability (records cannot be changed once added), transparency (all participants can view the data), and decentralization (no single point of control).",
      },
      {
        title: "Real-World Analogy",
        type: "text",
        content:
          "Think of blockchain like a ledger in a bank, but instead of one bank keeping the ledger, thousands of computers maintain identical copies. When a new transaction occurs, all computers update their ledgers simultaneously, and everyone can verify the accuracy.",
      },
      {
        title: "Visual: How Blockchain Works",
        type: "image",
        url: "/blockchain-chain-of-blocks-with-cryptographic-link.jpg",
      },
      {
        title: "Why It Matters",
        type: "text",
        content:
          "Blockchain eliminates the need for intermediaries like banks or payment processors. This enables direct peer-to-peer transactions, reduces costs, increases speed, and most importantly, creates trust in systems without central authorities.",
      },
    ],
    externalResources: [
      { title: "Bitcoin Whitepaper", url: "https://bitcoin.org/bitcoin.pdf" },
      { title: "Blockchain Explained (MIT OpenCourseWare)", url: "https://ocw.mit.edu" },
    ],
  },
  "how-blockchain-works": {
    sections: [
      {
        title: "The Process Step-by-Step",
        type: "text",
        content:
          "When someone initiates a transaction on a blockchain network, it goes through several stages: first, the transaction is broadcast to all nodes in the network. Each node validates the transaction using predetermined rules.",
      },
      {
        title: "Cryptographic Hashing",
        type: "text",
        content:
          "A hash is a unique fingerprint for data. Any change to the data produces a completely different hash. Each block contains the hash of the previous block, creating an unbreakable chain. If someone tries to tamper with an old block, its hash changes, breaking the chain for all subsequent blocks.",
      },
      {
        title: "Mining & Consensus",
        type: "text",
        content:
          "Miners or validators compete to add new blocks to the chain. They collect pending transactions, bundle them into a block, and solve a complex mathematical puzzle (Proof of Work) or stake their coins (Proof of Stake) to earn the right to add the block.",
      },
      {
        title: "Network Consensus",
        type: "text",
        content:
          "Once a miner creates a block, other nodes validate it. Only when the majority of the network agrees the block is valid does it get added permanently to the blockchain. This distributed consensus ensures security and prevents fraud.",
      },
      {
        title: "Diagram: Transaction Flow",
        type: "image",
        url: "/blockchain-transaction-flow-diagram-with-nodes-and.jpg",
      },
    ],
    externalResources: [
      { title: "Cryptography Basics", url: "https://www.khanacademy.org" },
      { title: "Understanding Consensus Mechanisms", url: "https://ethereum.org/developers" },
    ],
  },
  "bitcoin-basics": {
    sections: [
      {
        title: "Bitcoin: The First Cryptocurrency",
        type: "text",
        content:
          "Bitcoin was created in 2009 by someone or a group using the pseudonym Satoshi Nakamoto. It introduced the concept of a decentralized digital currency that doesn't require any central bank or government to function.",
      },
      {
        title: "Fixed Supply",
        type: "text",
        content:
          "Bitcoin has a maximum supply of 21 million coins. This scarcity is built into the protocol and cannot be changed. Currently about 21 million BTC exist, with new coins created through mining. After all coins are mined, miners will be compensated solely through transaction fees.",
      },
      {
        title: "Store of Value",
        type: "text",
        content:
          "Many people view Bitcoin as 'digital gold.' Like gold, it has limited supply, is divisible, and holds value over time. It serves as a store of value and hedge against inflation rather than a medium of exchange for daily transactions.",
      },
      {
        title: "Bitcoin Chart Illustration",
        type: "image",
        url: "/bitcoin-supply-chart-showing-21-million-limit.jpg",
      },
      {
        title: "Peer-to-Peer Payment",
        type: "text",
        content:
          "Bitcoin enables direct payments from person to person without intermediaries. Transaction fees are lower than traditional payment systems, and transactions are irreversible once confirmed.",
      },
    ],
    externalResources: [
      { title: "Bitcoin Official Website", url: "https://bitcoin.org" },
      { title: "The Bitcoin Blockchain Explorer", url: "https://blockchain.com" },
    ],
  },
}

export default function LessonPage({ params }: { params: { lessonId: string } }) {
  const [isCompleted, setIsCompleted] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizScore, setQuizScore] = useState<number | null>(null)

  // Find the lesson
  let foundLesson = null
  let categoryName = ""
  let nextLessonId: string | null = null
  let categoryIndex = 0
  let lessonIndex = 0

  for (let catIdx = 0; catIdx < LEARNING_CATEGORIES.length; catIdx++) {
    const category = LEARNING_CATEGORIES[catIdx]
    const lsnIdx = category.lessons.findIndex((l) => l.id === params.lessonId)
    if (lsnIdx !== -1) {
      foundLesson = category.lessons[lsnIdx]
      categoryName = category.name
      categoryIndex = catIdx
      lessonIndex = lsnIdx

      if (lsnIdx < category.lessons.length - 1) {
        // Next lesson in same category
        nextLessonId = category.lessons[lsnIdx + 1].id
      } else if (catIdx < LEARNING_CATEGORIES.length - 1) {
        // First lesson of next category
        nextLessonId = LEARNING_CATEGORIES[catIdx + 1].lessons[0]?.id || null
      }
      break
    }
  }

  if (!foundLesson) {
    notFound()
  }

  const hasQuiz = params.lessonId in LESSON_QUIZZES
  const quiz = hasQuiz ? LESSON_QUIZZES[params.lessonId as keyof typeof LESSON_QUIZZES] : null
  const lessonContent = LESSON_CONTENT[params.lessonId as keyof typeof LESSON_CONTENT]

  const handleQuizComplete = (score: number) => {
    setQuizScore(score)
    if (score >= 70) {
      setIsCompleted(true)
    }
  }

  const canContinue = !hasQuiz ? true : isCompleted

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={`/courses/${categoryName.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-2 text-primary hover:text-primary/80"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <Button
              onClick={() => setIsCompleted(!isCompleted)}
              variant={isCompleted ? "default" : "outline"}
              className="gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? "Completed" : "Mark Complete"}
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-6">
          <Link href="/courses" className="hover:text-foreground">
            Courses
          </Link>
          {" > "}
          <span>{categoryName}</span>
          {" > "}
          <span className="text-foreground font-medium">{foundLesson.title}</span>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">{foundLesson.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{foundLesson.description}</p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {foundLesson.duration_minutes} minutes
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lesson Content */}
          <div className="lg:col-span-2">
            {!showQuiz ? (
              <>
                <div className="space-y-6">
                  {lessonContent?.sections.map((section, idx) => (
                    <Card key={idx}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {section.type === "text" && <FileText className="w-5 h-5" />}
                          {section.type === "image" && <ImageIcon className="w-5 h-5" />}
                          {section.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {section.type === "text" && (
                          <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                        )}
                        {section.type === "image" && (
                          <img
                            src={section.url || "/placeholder.svg"}
                            alt={section.title}
                            className="w-full rounded-lg border border-border"
                          />
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* External Resources */}
                {lessonContent?.externalResources && lessonContent.externalResources.length > 0 && (
                  <Card className="mt-8 border-primary/20">
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="flex items-center gap-2">
                        <LinkIcon className="w-5 h-5" />
                        External Resources & Videos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {lessonContent.externalResources.map((resource, idx) => (
                        <a
                          key={idx}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition"
                        >
                          <LinkIcon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">{resource.title}</span>
                        </a>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Quiz Button */}
                {hasQuiz && (
                  <Button onClick={() => setShowQuiz(true)} className="w-full mt-8" size="lg">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Take the Quiz
                  </Button>
                )}
              </>
            ) : (
              <>
                {quiz && <QuizSection quiz={quiz} onComplete={handleQuizComplete} />}
                <Button onClick={() => setShowQuiz(false)} variant="outline" className="w-full mt-6">
                  Back to Lesson
                </Button>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Your Progress</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Completion</span>
                      <span className="font-medium text-foreground">
                        {isCompleted ? "100%" : showQuiz && quizScore ? `${quizScore}%` : "0%"}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: isCompleted ? "100%" : showQuiz && quizScore ? `${quizScore}%` : "0%" }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quiz Status */}
            {quizScore !== null && (
              <Card>
                <CardHeader>
                  <CardTitle>Quiz Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{quizScore}%</div>
                    <p className="text-sm text-muted-foreground">
                      {quizScore >= 70 ? "✓ Passed - Great job!" : "Try again to improve your score"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Resources */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Lesson Content</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Detailed Text Explanations
                  </div>
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    Illustrations & Diagrams
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkIcon className="w-4 h-4" />
                    External Resources
                  </div>
                  {hasQuiz && (
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Knowledge Quiz
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Button
              className="w-full"
              disabled={!canContinue}
              onClick={() => nextLessonId && (window.location.href = `/lesson/${nextLessonId}`)}
              asChild={!!nextLessonId}
            >
              {nextLessonId ? (
                <Link href={`/lesson/${nextLessonId}`}>Continue to Next Lesson</Link>
              ) : (
                <button disabled>Course Complete! 🎉</button>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
