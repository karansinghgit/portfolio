import React from "react"
import "../styles/footer.module.css";

const FooterLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom:'0rem', fontSize: '1.05rem', fontWeight: 'bold'}}>
    <a href={props.to} target="_blank">{props.children}</a>
  </li>
)

export default function Footer() {
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'flex-end'}}>
            <FooterLink to='https://twitter.com/karansinghgit'>twitter</FooterLink>
            <FooterLink to='https://www.linkedin.com/in/karansinghgit/'>linkedin</FooterLink>
            <FooterLink to='https://github.com/karansinghgit/'>github</FooterLink>
            <FooterLink to='https://medium.com/@karansingh1559'>medium</FooterLink>
        </div>
    )
}
  
