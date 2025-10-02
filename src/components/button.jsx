export const Button = ({ item }) => {
    const fnc = () => { 
        if (item === "Fleet") {
            window.location.href = "/";
        }
        else if (item === "Analytics") {
            window.location.href = "/analytics";
        }
        else if (item === "Sustainability") {
            window.location.href = "/sustainability";
        }   
    }
    return (
        <>
            <button className="px-3 py-2 rounded hover:bg-gray-800" onClick={fnc}>{ item}</button>
        </>
    );
}