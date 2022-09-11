import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

type props = {
	setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const Login = ({ setIsAuth }: props) => {

	/* ナビゲーションの変更(リダイレクト)を行うためのオブジェクトを取得 */
	const navigate = useNavigate();

	/**
	 * Firebase の機能を使って、Google アカウントでログインをする
	 * 認証処理はFirebase 側に任せておき、完了したらthen でコールバックを処理する
	 */
	const loginWithGoogle = () => {
		signInWithPopup(auth, provider).then((result => {
			/* ログイン処理が成功した際のコールバックを記述 */
			localStorage.setItem('isAuth', 'true'); // ローカルストレージに、ログイン済みの状態であることを保存
			setIsAuth(true); // state にログイン済みの状態であることを保存
			navigate('/'); // 一連の処理が完了したら、ホーム画面に遷移させる
		}));
	};

	return (
		<div>
			<p>ログインして始める</p>
			<button onClick={loginWithGoogle}>Google でログイン</button>
		</div>
	)
}
