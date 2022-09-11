import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
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
								<button>削除</button>
							</div>
						</div>
					);
				})}
			</>
		</div>
	)
}
