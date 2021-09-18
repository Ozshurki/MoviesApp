import React, {useState, useCallback, useContext} from 'react';
import Home from "./pages/Home/Home";
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import LoginForm from "./pages/login-form/LoginForm";
import RegisterForm from "./pages/signup-form/signupForm";
import {AuthContext} from "./shared/context/AuthContext";

const App: React.FC = () => {


    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isPressed, setIsPressed] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);
    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    const toggleButton = useCallback(()=>{
        setIsPressed(!isPressed);
    },[isPressed]);

    const contextValue = {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        isPressed: isPressed,
        toggleButton: toggleButton
    }
    return (
        <AuthContext.Provider
            // Value will listening for isLoggedIn state changes
            value={contextValue}>
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
                        </Route>
                        <Redirect to="/" from="*"/>
                    </Switch>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
