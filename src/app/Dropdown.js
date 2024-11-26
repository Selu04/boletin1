export default function Dropdown({options}){
    return(
        <div>
            <select>
                {options.map((product, index) =>
                    <option key={index} value={product}>{product}</option>
                )}
            </select>
        </div>
    );
}