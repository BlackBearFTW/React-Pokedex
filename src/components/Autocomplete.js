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
            <div className="AutoSuggest-list">
                {suggestions.map(suggestion => (
                    <div key={suggestion.id} className="AutoSuggest-item" onClick={() => handleClick(suggestion.name, suggestion.id)}>
                        {suggestion.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Autocomplete;
