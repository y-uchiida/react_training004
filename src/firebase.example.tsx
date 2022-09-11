// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, initializeFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// ↓ここにfirebase の設定情報を入力する
// firebase の管理画面から、「プロジェクトの設定」画面に表示されている内容を貼り付けする
const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 認証の初期化処理
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore 利用開始の処理
initializeFirestore(app, {
	ignoreUndefinedProperties: true // firestore に保存するデータに、undefined な値が含まれている場合に、それを無視する(ドキュメントに含めない)
});
const db = getFirestore(app);

export { auth, provider, db };
