import React from "react"

const Flipcard = ({ color, front, back }) => {
  const keyDown = event => {
    if ((event.code === "Enter" || event.code === "Space") && !event.repeat) {
      event.preventDefault()
      toggleFlip(event)
      toggleSrHidden(event)
    }
  }

  function toggleFlip(card) {
    var isPressed = card.currentTarget.getAttribute("aria-pressed") === "true"
    card.currentTarget.setAttribute("aria-pressed", String(!isPressed))
  }

  function toggleSrHidden(card) {
    let isSRHidden = card.target.getAttribute("aria-pressed") === "true"
    document
      .querySelector("#front")
      .setAttribute("aria-hidden", String(isSRHidden))
    document
      .querySelector("#back")
      .setAttribute("aria-hidden", String(!isSRHidden))
  }

  return (
    <>
      <div
        className="flip-card"
        role="button"
        aria-pressed="false"
        tabindex="0"
        aria-describedby="flip-desc"
        onClick={e => {
          toggleFlip(e)
          toggleSrHidden(e)
        }}
        onKeyDown={e => keyDown(e)}
      >
        <div
          className="flip-card-inner border-2 rounded-lg"
          style={{ borderColor: color }}
        >
          <div
            className="flip-card-front"
            id="front"
            aria-hidden="false"
            style={{ color: color }}
          >
            <div aria-describedby="flip-desc">{front}</div>
          </div>
          <div
            className="flip-card-back border-2 rounded-lg text-white"
            aria-hidden="true"
            id="back"
            style={{ backgroundColor: color, borderColor: color }}
          >
            <div className="md:w-[70%] w-[90%] text-xs">{back}</div>
          </div>
        </div>
      </div>
      <span className="sr-only" id="flip-desc">
        This is a flip card. Activated by pressing enter or spacebar, or alt +
        enter/ alt + space bar.
      </span>
    </>
  )
}

export default Flipcard
