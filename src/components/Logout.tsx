import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

type props = {
	setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const Logout = ({ setIsAuth }: props) => {

	/* ナビゲーションの変更(リダイレクト)を行うためのオブジェクトを取得 */
	const navigate = useNavigate();

	/**
	 * Firebase の機能を使って、ログアウトさせる
	 * 認証処理はFirebase 側に任せておき、完了したらthen でコールバックを処理する
	 */
	const logout = () => {
		signOut(auth).then((result => {
			/* ログイン処理が成功した際のコールバックを記述 */
			localStorage.clear(); // ローカルストレージから、保存しているデータを消去
			setIsAuth(false); // state にログアウト状態であることを保存
			navigate('/login'); // 一連の処理が完了したら、ホーム画面に遷移させる
		}));
	};

	return (
		<div>
			<button onClick={logout}>ログアウト</button>
		</div>
	)
}
