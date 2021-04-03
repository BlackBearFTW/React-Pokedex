import {useState} from "react";

function Autocomplete({options, limit, callback}) {
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
        callback("");

        if (event.target.value === "") return setSuggestions([]);

        const items = options.filter(op => {
            return op.startsWith(event.target.value.toLowerCase());
        })

        setSuggestions(items.slice(0, limit));
    }



    function handleClick(event) {
        setInputValue(event.target.innerText);
        setSuggestions([]);

        callback(event.target.innerText);
    }


    return (
        <div>
            <input type="text" onChange={handleChange} value={inputValue}/>
            <ul className="suggestions">
                {suggestions.map(suggestion => (
                    <li key={suggestion} onClick={handleClick}>
                        {suggestion}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Autocomplete;
