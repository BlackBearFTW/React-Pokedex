import {useState} from "react";

function Autocomplete({options, limit, placeholder = "", callback}) {
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);

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
        <div className="AutoSuggest">
            <input type="text" onChange={handleChange} placeholder={placeholder} value={inputValue}/>
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
