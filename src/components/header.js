import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import 'materialize-css/dist/css/materialize.min.css';
const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `#003594`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
  <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper"
        style={{
              background: `#003594`,
              position: 'relative'
            }}
        >
         <Link to="/" className="brand-logo"><img style={{width: 150, marginLeft: 20}} src="/assets/images/logo.svg" alt="logo" /></Link>
          <Link data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/news">News</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><a className="waves-effect waves-light btn pink accent-3 modal-trigger" href="#modal1">Login</a></li>
          </ul>
        </div>
      </nav>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
