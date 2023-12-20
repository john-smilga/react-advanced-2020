import React, { useState } from "react"

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true)

  // Toggle between truncated and full text
  const toggleReadMore = () => {
    setIsTruncated(!isTruncated)
  }

  // Display truncated or full text based on state
  const displayText = isTruncated ? text.slice(0, maxLength) : text

  return (
    <p>
      {displayText}
      {text.length > maxLength && (
        <button
          className="info-btn"
          style={{ color: "#10b981", fontWeight: 600, marginLeft: 3 }}
          onClick={toggleReadMore}
        >
          {isTruncated ? "...Read more" : "Show less"}
        </button>
      )}
    </p>
  )
}

export default ReadMore
