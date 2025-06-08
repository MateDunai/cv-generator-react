import AddButton from "../components/AddButton";
import Input from "../components/InputField";

export default function EducationalExperience({ eduExperiences, onChange, onAdd, onDelete }) {
    return (
        <section id="EducationalExperience" className='bg-white p-4 rounded-lg mb-6 flex flex-col items-center'>
            <h2 className="text-3xl wrap-break-word font-bold">Educational Experience</h2> 
            {eduExperiences.map((edu, index) => (
                <div key={edu.id} className="educational-entry"> 
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
                        type="date"
                        placeholder="MM/YYYY"
                        name="startDate"
                        value={edu.startDate}
                        onChange={(e) => onChange(e, edu.id)}
                        id={`startDate-${edu.id}`}
                    />
                    <Input
                        label="End Date"
                        htmlFor={`endDate-${edu.id}`}
                        type="date"
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
                        <button type="button" onClick={() => onDelete(edu.id)}>Delete</button>
                    )}
                    <hr />
                </div>
            ))}
            
            <AddButton onClick={onAdd} /> 
        </section>
    );
}