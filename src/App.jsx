import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import store from "./store/store";
import CourseDetail from "./pages/CourseDetail";
import MyCourses from "./pages/MyCourses";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/courses/:courseId" element={<CourseDetail />}></Route>
            <Route path="/mycourses" element={<MyCourses/>}></Route>
            <Route path="*" element={<div>Not Found</div>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
