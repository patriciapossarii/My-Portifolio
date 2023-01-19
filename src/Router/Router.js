import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutPage from "../Pages/AboutPage/AboutPage";
import ProjectsPage from "../Pages/ProjectsPage/ProjectsPage";
import StackPage from "../Pages/StackPage/StackPage"
import IndexPage from "../Pages/IndexPage/IndexPage"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"
import ContactPage from "../Pages/ContactPage/ContactPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/stacks" element={<StackPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/" element={<IndexPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router