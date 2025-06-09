import Button from "../components/Button";
import Input from "../components/InputField";

export default function EducationalExperience({ eduExperiences, onChange, onAdd, onDelete }) {
    return (
        <section className="container">
            <h2>Educational Experience</h2> 
            {eduExperiences.map((edu, index) => (
                <div key={edu.id}> 
                    <h3>{edu.school}</h3> 
                    <Input
                        label="University Name"
                        htmlFor={`school-${edu.id}`} 
                        type="text"
                        placeholder="Enter the name of the university"
                        name="school"
                        value={edu.school}
                        onChange={(e) => onChange(e, edu.id)} 
                        id={`school-${edu.id}`}
                    />
                    <Input
                        label="Location"
                        htmlFor={`location-${edu.id}`}
                        type="text"
                        placeholder="City, State, Country"
                        name="location"
                        value={edu.location}
                        onChange={(e) => onChange(e, edu.id)}
                        id={`location-${edu.id}`}
                    />
                    <Input
                        label="Start Date"
                        htmlFor={`startDate-${edu.id}`}
                        type="text"
                        placeholder="MM/YYYY"
                        name="startDate"
                        value={edu.startDate}
                        onChange={(e) => onChange(e, edu.id)}
                        id={`startDate-${edu.id}`}
                    />
                    <Input
                        label="End Date"
                        htmlFor={`endDate-${edu.id}`}
                        type="text"
                        placeholder="MM/YYYY or Present"
                        name="endDate"
                        value={edu.endDate}
                        onChange={(e) => onChange(e, edu.id)}
                        id={`endDate-${edu.id}`}
                    />
                    <Input
                        label="Degree"
                        htmlFor={`degree-${edu.id}`}
                        type="text"
                        placeholder="Gotten degrees"
                        name="degree"
                        value={edu.degree}
                        onChange={(e) => onChange(e, edu.id)}
                        id={`degree-${edu.id}`}
                    />
                    
                    {eduExperiences.length > 1 && (
                        <Button className="bg-red-500!" type="button" onClick={() => onDelete(edu.id)}>Delete</Button>
                    )}
                    <hr />
                </div>
            ))}
            <Button onClick={onAdd}>
                + Add New
            </Button>
        </section>
    );
}