import React, {useState, useCallback} from 'react';
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import LoginForm from "./pages/login-form/LoginForm";
import RegisterForm from "./pages/signup-form/signupForm";
import {AuthContext} from "./shared/context/AuthContext";

const App: React.FC = () => {

    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);

    const login = useCallback((token:string, uid:string) => {
        setToken(token);
        setUserId(uid);
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null)
    }, []);

    const contextValues = {
        userId: userId,
        token: token,
        isLoggedIn: !!token,
        login: login,
        logout: logout
    }
    return (
        <AuthContext.Provider value={contextValues}>
            <div className="App">
                <BrowserRouter forceRefresh={true}>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/login">
                            <LoginForm/>
                        </Route>
                        <Route path="/signup">
                            <RegisterForm/>
                        </Route>
                        <Route path="/cart">
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
