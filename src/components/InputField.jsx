export default function Input({ label, htmlFor, id, name, placeholder, type, value, onChange }) {
    return (
        <div className="flex flex-col gap-1">
        <label htmlFor={htmlFor}>{label}</label>
        <input className="rounded-md bg-gray-200 p-2 text-left text-xs" id={id} name={name} placeholder={placeholder} type={type} value={value} onChange={onChange}></input>
        </div>
    
    )
}