import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket, faDoorClosed } from '@fortawesome/free-solid-svg-icons'

export const Navbar = ({ isAuth }: { isAuth: boolean }) => {
	return (
		<nav>
			<Link to='/'>
				<FontAwesomeIcon icon={faHouse} />
				Home
			</Link>


			{/* ログイン状態によって、login/logout メニューを切り替える */}
			{!isAuth ? (
				// ログインしてないとき -> login メニューを表示
				<Link to='/login'>
					<FontAwesomeIcon icon={faArrowRightToBracket} />
					Login
				</Link>
			) : (
				// ログインしているとき -> createpost メニューと logout メニューを表示
				<>
					<Link to='/createpost'>
						<FontAwesomeIcon icon={faFilePen} />
						Create post
					</Link>
					<Link to='/logout'>
						<FontAwesomeIcon icon={faDoorClosed} />
						Logout
					</Link>
				</>
			)}

		</nav>
	)
}
