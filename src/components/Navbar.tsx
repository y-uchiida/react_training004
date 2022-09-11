import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
	return (
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/createpost'>Create post</Link>
			<Link to='/login'>Login</Link>
		</nav>
	)
}
