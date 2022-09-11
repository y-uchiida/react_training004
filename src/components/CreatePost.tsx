import { addDoc, collection, } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import './CreatePost.css'
import { db, auth } from '../firebase'
import { useNavigate } from 'react-router-dom';

export const CreatePost = ({ isAuth }: { isAuth: boolean }) => {

	/* ナビゲーションの変更(リダイレクト)を行うためのオブジェクトを取得 */
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) {
			navigate('/login');
		}
	}, []);

	const [title, setTitle] = useState('');
	const [postContent, setPostContent] = useState('');

	/**
	 * fireStore に要してあるposts コレクションに、記事データを投稿する
	 */
	const createPost = async () => {
		await addDoc(collection(db, 'posts'), {
			title,
			postContent,
			author: {
				id: auth.currentUser?.uid,
				userName: auth.currentUser?.displayName,
			}
		}).then(() => {
			navigate('/');
		});
	}

	return (
		<>
			{/* ログインしていなければ、投稿フォームを表示しない */}
			{isAuth ? (
				<div className='createPostPage' >
					< div className="postContainer" >
						<h1>記事を投稿する</h1>
						<div className="inputPost">
							<div>タイトル</div>
							<input type="text" placeholder='タイトルを記入' onChange={(e) => setTitle(e.target.value)} />
						</div>
						<div className="inputPost">
							<div>投稿</div>
							<textarea placeholder='内容を記入' onChange={(e) => setPostContent(e.target.value)}></textarea>
						</div>
						<button className='postButton' onClick={createPost}>投稿する</button>
					</div >
				</div >
			) :
				(<></>)
			}
		</>
	)
}
