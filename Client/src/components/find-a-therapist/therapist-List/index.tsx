import TherapistCard from "../therapist-card"
import Dr1 from "../../../assets/dr.1.png";
import Dr2 from "../../../assets/dr.2.png";
import Dr3 from "../../../assets/dr.3.png";

function TherapistList() {
  return (
    <>
    <TherapistCard image={Dr1} name={"Dr Jane Doe"}/>
    <TherapistCard image={Dr3} name={"Dr Kamala"}/>
    <TherapistCard image={Dr2} name={"Dr Mark"}/>
    <TherapistCard image={Dr1} name={"Dr Jane Doe"}/>
    </>
  )
}

export default TherapistList