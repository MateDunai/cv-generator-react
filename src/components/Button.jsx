export default function Button({ onClick, children, className, type = "button" }) {
    return (
        <button
            className={`w-full text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out ${className}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}