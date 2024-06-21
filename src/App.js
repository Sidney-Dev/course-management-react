import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Courses from "./pages/courses";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/courses"
                    element={<Courses />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;