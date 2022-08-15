import { Routes, Route } from "react-router-dom";
import { Certificate } from "../shared/components/Certificate";
import { Company } from "../shared/components/Company";
import { Meetings } from "../shared/components/Meetings";
import { Responsible } from "../shared/components/Responsible";
import { SocialNetworks } from "../shared/components/SocialNetworks";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Company />} />
      <Route path="/responsible" element={<Responsible />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/social-networks" element={<SocialNetworks />} />
      <Route path="/meeting" element={<Meetings />} />
    </Routes>
  );
}
