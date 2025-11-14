"use client"

import { useState } from "react"
import type React from "react"

interface KeyTermsProps {
  keyTerms?: string
  minDeposit?: string
  defaultText?: React.ReactNode
}

export default function KeyTerms({ keyTerms, minDeposit, defaultText }: KeyTermsProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const fullText = keyTerms || defaultText

  const getPreviewText = () => {
    if (keyTerms) {
      return keyTerms.length > 80 ? keyTerms.substring(0, 80) + "..." : keyTerms
    }
    if (defaultText) {
      const textContent = typeof defaultText === "string" 
        ? defaultText 
        : extractTextFromNode(defaultText)
      return textContent.length > 80 ? textContent.substring(0, 80) + "..." : textContent
    }
    return ""
  }

  const previewText = getPreviewText()
  const needsTruncation = keyTerms 
    ? keyTerms.length > 80 
    : defaultText && extractTextFromNode(defaultText).length > 80

  if (!fullText) return null

  const getPreviewComponent = () => {
    if (keyTerms) {
      return previewText
    }
    const defaultTextStr = extractTextFromNode(defaultText)
    if (defaultTextStr.length > 80) {
      return defaultTextStr.substring(0, 80) + "..."
    }
    return defaultText
  }

  return (
    <div className="text-[8px] md:text-xs text-[#8B8E97] leading-relaxed space-y-0.5">
      <p>
        <strong className="text-[#F5F6F7]">Key terms{keyTerms ? "" : " (New Customers, 18+)"}</strong>
      </p>
      <p>
        {needsTruncation && !isExpanded ? (
          <>
            {getPreviewComponent()}{" "}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setIsExpanded(true)
              }}
              className="text-[#18FFFF] hover:underline cursor-pointer"
            >
              Read more
            </button>
          </>
        ) : (
          <>
            {keyTerms ? (
              keyTerms
            ) : (
              defaultText
            )}
            {needsTruncation && isExpanded && (
              <>
                {" "}
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setIsExpanded(false)
                  }}
                  className="text-[#18FFFF] hover:underline cursor-pointer"
                >
                  Read less
                </button>
              </>
            )}
          </>
        )}
      </p>
    </div>
  )
}

function extractTextFromNode(node: React.ReactNode): string {
  if (typeof node === "string") return node
  if (typeof node === "number") return String(node)
  if (Array.isArray(node)) {
    return node.map(extractTextFromNode).join("")
  }
  if (node && typeof node === "object" && "props" in node) {
    return extractTextFromNode(node.props.children)
  }
  return ""
}













