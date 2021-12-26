import React, {useState, useCallback, useEffect} from 'react';
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import LoginForm from "./pages/login-form/LoginForm";
import RegisterForm from "./pages/signup-form/signupForm";
import {AuthContext} from "./shared/context/AuthContext";

const App: React.FC = () => {

    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
console.log("aaa")
    const login = useCallback((tempToken:string, uid:string) => {

        setToken(tempToken);
        setUserId(uid);
    }, []);

    useEffect(()=>{
        console.log(token)
    },[token])

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null)
    }, []);

    return (
        <AuthContext.Provider value={{
            userId: userId,
            token: token,
            isLoggedIn: !!token,
            login: login,
            logout: logout
        }}>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/login">
                            <LoginForm/>
                        </Route>
                        <Route exact path="/signup">
                            <RegisterForm/>
                        </Route>
                        <Route exact path="/cart">
                            <Cart/>
                        </Route>
                        <Redirect to="/" from="*"/>
                    </Switch>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
