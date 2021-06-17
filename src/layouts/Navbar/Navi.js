import React from 'react'
import headerLogo from '../../header-logo5.png'
import { Link } from 'react-router-dom'

export default function Navi() {
	return (

		<header className="header-nav  style_one navbar-scrolltofixed main-menu">
			<div className="container">
				<nav>
					<Link to="/">
						<a href=" " className="navbar_brand float-left dn-smd">
							<img className="img-fluid mt10" src={headerLogo} alt=" " />
						</a>
					</Link>
					<ul id="respMenu" className="ace-responsive-menu" data-menu-style="horizontal">
						<li className="sub-menu">
							<Link to="/"><a href=" "><span className="title">Ana Sayfa</span></a></Link>
						</li>
						<li>
							<Link to="/jobAdverts"><a href=" "><span className="title">Tüm İş İlanları</span></a></Link>
						</li>
						<li>
							<Link to="/employers"><a href=" "><span className="title">İş Verenler</span></a></Link>
						</li>
						<li>
							<Link to="/jobSeekers"><a href=" "><span className="title">İş Arayanlar</span></a></Link>

						</li>
						<li>
							<Link to="/"><a href=" "><span className="title">İlan Ver</span></a></Link>

						</li>
					</ul>
					<ul className="sign_up_btn pull-right dn-smd mt10">
						<li><a href="/" className="btn btn-md" data-toggle="modal" data-target="#exampleModalCenter">Log<span className="dn-md">in</span>/Reg<span className="dn-md">ister</span></a></li>
					</ul>
				</nav>
			</div>
		</header>


	)
}
