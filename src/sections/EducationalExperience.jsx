import Button from "../components/Button";
import Input from "../components/InputField";

export default function EducationalExperience({ eduExperiences, onChange, onAdd, onDelete }) {
    return (
        <section className="form-section">
            <h2>Educational Experience</h2>
            {eduExperiences.map((edu, index) => (
                <div key={edu.id}>
                    {eduExperiences.length > 1 && <h3>Education #{index + 1}</h3>}
                    <Input
                        label="Degree / Qualification"
                        htmlFor={`degree-${edu.id}`}
                        type="text"
                        placeholder="e.g., BSc in Computer Science"
                        name="degree"
                        value={edu.degree}
                        onChange={(e) => onChange(e, edu.id)}
                        id={`degree-${edu.id}`}
                    />
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
                        placeholder="City, Country"
                        name="location"
                        value={edu.location}
                        onChange={(e) => onChange(e, edu.id)}
                        id={`location-${edu.id}`}
                    />
                    <Input
                        label="Start Date"
                        htmlFor={`startDate-${edu.id}`}
                        type="text"
                        placeholder="YYYY or MM/YYYY"
                        name="startDate"
                        value={edu.startDate}
                        onChange={(e) => onChange(e, edu.id)}
                        id={`startDate-${edu.id}`}
                    />
                    <Input
                        label="End Date"
                        htmlFor={`endDate-${edu.id}`}
                        type="text"
                        placeholder="YYYY or Present"
                        name="endDate"
                        value={edu.endDate}
                        onChange={(e) => onChange(e, edu.id)}
                        id={`endDate-${edu.id}`}
                    />
                    
                    {eduExperiences.length > 1 && (
                        <Button className="bg-red-600 hover:bg-red-700 w-auto px-4 py-1 text-sm" onClick={() => onDelete(edu.id)}>Delete</Button>
                    )}
                    {index < eduExperiences.length -1 && <hr />}
                </div>
            ))}
            <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={onAdd}>
                + Add New Education
            </Button>
        </section>
    );
}