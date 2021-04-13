import {useState} from "react";

function Autocomplete({options, limit, placeholder = "", callback}) {
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);

        if (event.target.value === "") return setSuggestions([]);

        const items = options.filter(op => {
            return op.name.startsWith(event.target.value.toLowerCase());
        })

        setSuggestions(items.slice(0, limit));
    }



    function handleClick(name, id) {

        setInputValue(name);
        setSuggestions([]);

        callback(id);
    }


    return (
        <div className="AutoSuggest">
            <input type="text" onChange={handleChange} placeholder={placeholder} value={inputValue}/>
            <ul className="suggestions">
                {suggestions.map(suggestion => (
                    <li key={suggestion.id} onClick={() => handleClick(suggestion.name, suggestion.id)}>
                        {suggestion.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Autocomplete;
