import { Profile } from "../components/profile_props";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{ name: "Maria Skłodowska-Curie", imageId: "szV5sdG" }}
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discoveries="polonium (element)"
      />
      <Profile
        person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discoveries="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
