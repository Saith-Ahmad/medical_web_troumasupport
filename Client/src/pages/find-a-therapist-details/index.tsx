import Hero from '@/components/understanding-trouma/hero'
import FindTherapist from "../../assets/find-a-therapist-banner.png";
import SidebarTherapistDetail from '@/components/find-a-therapist-details/sidebar';
import TherapistDetailsSection from '@/components/find-a-therapist-details/therapist-details-section';
import AboutMe from '@/components/find-a-therapist-details/about-me';
import Experience from '@/components/find-a-therapist-details/experience';
import AreasOfCouncelling from '@/components/find-a-therapist-details/areas-of-counceling';
import TheripiesOffered from '@/components/find-a-therapist-details/theripies-offered';
import Fee from '@/components/find-a-therapist-details/fee';
import PhotosNvideos from '@/components/find-a-therapist-details/photos&videos';
import Table from '@/components/find-a-therapist-details/table';
function FindATherapistDetails() {
  return (
    <>
        <Hero image={FindTherapist} info={"Connect with a trauma-informed therapist to receive compassionate support and guidance on your path to healing."}/>
        <div className='container flex flex-col md:flex-row justify-between my-10'>
            <div className='w-full md:w-[74%] bg-offwhite p-1 lg:px-6 shadow-xl'>
                <TherapistDetailsSection/>
                <AboutMe/>
                <Experience/>
                <AreasOfCouncelling/>
                <TheripiesOffered/>
                <PhotosNvideos/>
                <Fee/>
                <Table/>
            </div>
            <div className='w-full md:w-[24%]'><SidebarTherapistDetail/></div>
        </div>

    </>
  )
}

export default FindATherapistDetails