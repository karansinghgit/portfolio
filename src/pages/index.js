import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default function Home() {
  return (
    <Layout style>
      <br></br>
      <br></br>
      <br></br>
      <div style={{paddingRight:'16rem', fontSize:'1.8rem'}}>
        <p style={{color: "var(--textNormal)"}}>Hey!👋</p>    
        <p style={{color: "var(--textNormal)"}}>I'm <strong>Karan</strong> and I love writing code and ideating.<br></br>
          I am a Backend Web Developer and a product enthusaist.
          When I am not writing code, I like to read books and play the ukulele.
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </Layout>
  );
}