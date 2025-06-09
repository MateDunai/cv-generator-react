export default function TextArea({ label, htmlFor, id, name, placeholder, value, onChange }) {
    return (
        <div className="flex flex-col">
            <label htmlFor={htmlFor}>{label}</label>
            <textarea className="bg-[#F2F2F2] rounded-md p-2" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange}></textarea>
        </div>
    )
}