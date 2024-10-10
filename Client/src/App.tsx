import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import UnderstandingTrouma from "./pages/understanding-trouma";
import FindATherapist from "./pages/find-a-therapist";
import ResourcesLibrary from "./pages/ResourcesLibrary";
import FindATherapistDetails from "./pages/find-a-therapist-details";
import Stories from "./pages/stories";
import AboutUs from "./pages/about-us";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/understanding-trouma" element={<UnderstandingTrouma />} />
        <Route path="/find-a-therapist" element={<FindATherapist />} />
        <Route path="/find-a-therapist/detail" element={<FindATherapistDetails />} />
        <Route path="/resource-library" element={<ResourcesLibrary />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default App;
