
const Sidebar = () => {
  return (
    <div className="w-full max-w-[300px] flex flex-col gap-2 mt-5">
        <h4 className="heading-4">Categories</h4>
        <p className="para-medium underline mt-1 cursor-pointer border-black font-light hover:font-medium">Self-Assessment Tools</p>
        <p className="para-medium underline mt-1 cursor-pointer border-black font-light hover:font-medium">Coping Strategies and Exercises</p>
        <p className="para-medium underline mt-1 cursor-pointer border-black font-light hover:font-medium">Emotional Regulation Tools</p>
        <p className="para-medium underline mt-1 cursor-pointer border-black font-light hover:font-medium">Journaling Prompts and Self-Reflection</p>
        <p className="para-medium underline mt-1 cursor-pointer border-black font-light hover:font-medium">Self-Care Planning</p>
        <p className="para-medium underline mt-1 cursor-pointer border-black font-light hover:font-medium">Support and Communication Tools</p>
        <p className="para-medium underline mt-1 cursor-pointer border-black font-light hover:font-medium">Resources for Families and Caregivers</p>
    </div>
  )
}

export default Sidebar