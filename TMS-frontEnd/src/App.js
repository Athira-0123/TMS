import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/error/Error";
import EnrollPage from "./pages/EnrollPage";
import AdminHome from "./pages/AdminHome";
import Allocate from "./pages/Allocate";
import ViewAllocations from "./pages/ViewAllocations";
import LoginPage from "./pages/LoginPage";
import TrainerProfile from "./pages/TrainerProfile";
import TrainerEditProfile from "././pages/TrainerEditProfile";
import AllocationForm from "./components/admin/AllocationForm";
import Home from "./pages";
import TrainerAllocations from "./pages/TrainerAllocations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/enroll" element={<EnrollPage />} />
        <Route path="/trainer/:id" element={<TrainerProfile />} />
        <Route path="/trainer/edit/:id" element={<TrainerEditProfile />} />
        <Route path="/trainer/:id/view-allocations" element={<TrainerAllocations/>} />


        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/allocate" element={<Allocate />} />
        <Route path="/admin/allocate/:id" element={<AllocationForm />} />
        <Route path="/admin/view-allocations" element={<ViewAllocations />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
