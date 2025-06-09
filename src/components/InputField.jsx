export default function Input({ label, htmlFor, id, name, placeholder, type, value, onChange }) {
    return (
        <div className="flex flex-col">
            <label htmlFor={htmlFor}>{label}</label>
            <input className="bg-[#F2F2F2] rounded-md p-2" id={id} name={name} placeholder={placeholder} type={type} value={value} onChange={onChange}></input>
        </div>
    
    )
}