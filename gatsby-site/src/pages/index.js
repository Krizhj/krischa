import React from "react"
import Fred from "./fred"
import Frenchie from "./Frenchie"

export default function Home() {
  return (
    <div>
      <i>Hella</i> Krischa!
      {Fred()}
      {Frenchie()}
    </div>
  )
}
