export default function Input({ label, htmlFor, id, name, placeholder, type, value, onChange }) {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={htmlFor}>{label}</label>
            <input
                className="bg-gray-700 text-white rounded-md p-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}