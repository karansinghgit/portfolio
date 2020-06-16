import React from "react"
import { Link } from "gatsby"
import header from "../styles/header.module.css";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import dotted from "../../dotted.png"

const ListLink = props => (
  <li style={{display: `inline-block`, marginRight: `1rem`, fontSize: '1.15rem', fontWeight: 'bold'}}>
    <Link  className="link" to={props.to}>{props.children}</Link>
  </li>
)

export default function Header() {
  return (
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textDecoration: 'none', textShadow: `none`, backgroundImage: `none` }}>
          <h2 style={{ display: `inline`, color: 'var(--textNormal)'}}>karan</h2>
          <h2 style={{ display: `inline`, color: 'red' }}>.</h2>
          <h2 style={{ display: 'inline', color: 'var(--textNormal)' }}>singh</h2>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`}}>
          <ListLink to="/projects">projects</ListLink>
          <ListLink to="/blog">blog</ListLink>
          <ListLink to="/books">books</ListLink>
          <ListLink to="/ideas">ideas</ListLink>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <button onClick={() => {
                const nextTheme = theme === 'light' ? 'dark' : 'light';
                toggleTheme(nextTheme) 
              }}>
              <img src={dotted} width="20px" height="20px"/>
              </button>
            )}
          </ThemeToggler>
        </ul>
      </header>
  )
}