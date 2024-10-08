import CallToAction2 from "@/components/understanding-trouma/callToAction2";
import FindTherapist from "../../assets/ressource-library-banner.png";
import Hero from "@/components/understanding-trouma/hero";
import DownloadWorksheet from "@/components/resource-library/download-worksheet";
import ResourceCardWraper from "@/components/resource-library/resourceCardWrapper";
import Sidebar from "@/components/resource-library/sidebar";

function ResourcesLibrary() {
  return (
    <div>
        <Hero image={FindTherapist} info={"Download free tools, worksheets, and guides to support trauma recovery, self-care, and emotional well-being."}/>
        <div className="">
            <ResourceCardWraper/>
            <Sidebar/>
        </div>
        <DownloadWorksheet/>
        <CallToAction2/>
    </div>
  )
}

export default ResourcesLibrary