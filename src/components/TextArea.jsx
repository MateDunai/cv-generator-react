export default function TextArea({ label, htmlFor, id, name, placeholder, value, onChange }) {
    return (
        <div className="flex flex-col">
            <label htmlFor={htmlFor}>{label}</label>
            <textarea className="rounded-md bg-gray-200 p-1 text-left" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange}></textarea>
        </div>
    )
}