import { auth } from "@/firebase/firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleCreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleProfileUpdate = updatedInfo => {
        setLoading(true);
        setUser({
            ...auth.currentUser,
            displayName: updatedInfo.displayName,
            photoURL: updatedInfo.photoURL
        })
        setLoading(false);
        return updateProfile(auth.currentUser, updatedInfo)
    }

    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const handleGithubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const handleLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // track user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])


    const authInfo = {
        user,
        loading,
        handleCreateUser,
        handleProfileUpdate,
        handleLogInUser,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleLogOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;