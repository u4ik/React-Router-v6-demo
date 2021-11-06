import { NavLink, Route, Routes } from "react-router-dom";

const Welcome = () => {

    return (
        <>
            <h1>Welcome</h1>

            <NavLink to="new-user">
                Enter
            </NavLink>

            <Routes>
                {/* If a parent is loaded with /welcome/*, this nested route will assume that /welcome is already present, which allows us to omit it from this nested path. */}
                <Route path="new-user" element={<WelcomeUser/>} />
            </Routes>
        </>

    )

}

const WelcomeUser = () => {
    return(
        <h1>Hey User!</h1>
    )
}



export default Welcome;