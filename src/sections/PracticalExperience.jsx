import Button from "../components/Button";
import Input from "../components/InputField";
import TextArea from "../components/TextArea";

export default function PracticalExperience({ practicalExperiences, onChange, onAdd, onDelete }) {
    return (
        <section className="form-section">
            <h2>Practical Experience</h2>
            {practicalExperiences.map((practical, index) => (
                <div key={practical.id}>
                    {practicalExperiences.length > 1 && <h3>Experience #{index + 1}</h3>}
                    <Input
                        label="Position Title"
                        htmlFor={`position-${practical.id}`}
                        type="text"
                        placeholder="e.g., Software Engineer"
                        name="position"
                        value={practical.position}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`position-${practical.id}`}
                    />
                    <Input
                        label="Company Name"
                        htmlFor={`company-${practical.id}`}
                        type="text"
                        placeholder="Enter Company Name"
                        name="company"
                        value={practical.company}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`company-${practical.id}`}
                    />
                    <Input
                        label="Location"
                        htmlFor={`location-${practical.id}`}
                        type="text"
                        placeholder="City, Country"
                        name="location"
                        value={practical.location}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`location-${practical.id}`}
                    />
                    <Input
                        label="Start Date"
                        htmlFor={`startDate-${practical.id}`}
                        type="text"
                        placeholder="MM/YYYY"
                        name="startDate"
                        value={practical.startDate}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`startDate-${practical.id}`}
                    />
                    <Input
                        label="End Date"
                        htmlFor={`endDate-${practical.id}`}
                        type="text"
                        placeholder="MM/YYYY or Present"
                        name="endDate"
                        value={practical.endDate}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`endDate-${practical.id}`}
                    />
                    <TextArea
                        label="Description"
                        htmlFor={`description-${practical.id}`}
                        placeholder="Briefly describe your responsibilities and achievements."
                        name="description"
                        value={practical.description}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`description-${practical.id}`}
                    />

                    {practicalExperiences.length > 1 && (
                        <Button className="bg-red-600 hover:bg-red-700 w-auto px-4 py-1 text-sm" onClick={() => onDelete(practical.id)}>Delete</Button>
                    )}
                        {index < practicalExperiences.length -1 && <hr />}
                </div>
            ))}

            <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={onAdd}>
                + Add New Experience
            </Button>
        </section>
    );
}