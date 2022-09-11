import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import './Home.css'

type post = {
	id: string,
	title: string,
	postContent: string,
	author: {
		id: string,
		userName: string,
	}
};

type postDoc = {
	title: string,
	postContent: string,
	author: {
		id: string,
		userName: string,
	}
}

export const Home = () => {

	const [postList, setPostList] = useState<post[]>([]);

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(collection(db, 'posts'));
			const posts = data.docs.map<post>(
				doc => {
					const fields = doc.data();
					return { id: doc.id, title: fields.title, postContent: fields.postContent, author: fields.author };
				}
			);
			setPostList(posts);
		}
		getPosts();
	}, []);

	/** 削除ボタンが押された投稿をfirestore から削除する */
	const handleDelete = async (id: string) => {
		await (deleteDoc(doc(db, 'posts', id)));
		setPostList(postList.filter(post => post.id != id));
	}

	return (
		<div className='homePage'>
			<>
				{postList.map(post => {
					return (
						<div className="postContents" key={post.id}>
							<div className="postHeader">
								<h1>{post.title}</h1>
							</div>
							<div className="postContainer">
								{post.postContent}
							</div>
							<div className="nameAndDeleteButton">
								<h3>@ {post.author.userName}</h3>
								{/* 自身が投稿したもののみ、削除ボタンを表示する */}
								{post.author.id === auth.currentUser?.uid && (
									<button onClick={() => handleDelete(post.id)}>削除</button>
								)}
							</div>
						</div>
					);
				})}
			</>
		</div>
	)
}
