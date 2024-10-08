import ResourceCard from '../resources-card'
import Support from "../../../assets/therapist-calming-african-american-veteran-experie-2024-01-25-01-09-47-utc.png"
import SelfCare from "../../../assets/young-angry-alone-woman-sits-helplessly-in-bedroom-2023-11-27-05-13-58-utc.png"
import SelfAssesment from "../../../assets/group-supporting-depressed-man-with-alcoholism-pro-2024-03-19-20-57-50-utc.png"
import Exercies from "../../../assets/elevate-skills-with-focused-indoor-padel-training-2023-11-27-05-31-35-utc.png"

const ResourceCardWraper = () => {
  return (
    <div className='container flex flex-row flex-wrap gap-10 my-10'>
        <ResourceCard img={SelfAssesment} month='April' topic='Self-Assesment-Tools' title='Understanding Trauma: Types, Symptoms, and Pathways to Healing'/>
        <ResourceCard img={Exercies} month='Sep' topic='Coping Strategies' title='Coping with Trauma: Practical Strategies for Everyday Resilience'/>
        <ResourceCard img={SelfCare} month='April' topic='Self-Care Planning' title='5 Effective Trauma Therapy Techniques: Finding the Right Approach for You'/>
        <ResourceCard img={Support} month='Jan' topic='Communication Tools' title='How to Support a Loved One Experiencing Trauma: A Guide for Families and Friends'/>
    </div>
  )
}

export default ResourceCardWraper