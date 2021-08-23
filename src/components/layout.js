import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

  const twitter = data.site.siteMetadata.social.twitter
  const linkedin = data.site.siteMetadata.social.linkedin

  return (
    <div className="layout" data-is-root-path={isRootPath}>
      <header className="site-header container">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/profile-pic.jpg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        <div className="logo">
          <Link to="/">Ronak Shah</Link>
        </div>
      </header>
      <main className="site-main container">{children}</main>
      <footer className="site-footer">
        <div className="container">
          <p>Copyright © {new Date().getFullYear()}, Ronak Shah.</p>
          <ul>
            <li>
              <a target="_blank"
                href={`www.linkedin.com/in/${linkedin}`}
              >{`Ronak Shah LinkedIn`}</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Layout
