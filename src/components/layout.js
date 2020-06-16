import React from "react"
import Header from "./header"

export default function Layout({ children }) {
  return (
    //margin format here is: top left-right bottom
    <div style={{ margin: `3rem auto 1rem`, maxWidth: 1300, padding: `0 1rem`}}>
        <Header/>
        {children}
    </div>
  )
}