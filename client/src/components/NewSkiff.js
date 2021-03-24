import React,{useState} from 'react';
import axios from 'axios';
import { navigate} from '@reach/router';


const NewSkiff = (props) => {
    const [ builderComplete, setBuilderComplete] = useState(false);
    const [ ownerName, setOwnerName] =     useState("");
    const [ builderName, setBuilderName] = useState("");
    const [ modelName, setModelName ]=      useState("Standard");
    const [ startDate, setStartDate] =     useState("");
    const [ finishDate, setFinishDate] =   useState("");
    const [ stockLength, setStockLength] = useState("");
    const [ customLength, setCustomLength] = useState("");
    const [ pictureUrl, setPictureUrl] =     useState("");
    const [ description, setDescription] =   useState("");

    const submitForm = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/skiffs",{
        
        ownerName:ownerName,
        builderComplete:builderComplete,
        modelName:modelName,
        startDate:startDate,
        finishDate:finishDate,
        stockLength:stockLength,
        customLength:customLength,
        pictureUrl:pictureUrl,
        description:description,


    })
    .then((res) => {
        console.log(res.data);
        navigate(`/skiff/${res.data._id}`);
    })
    .catch((err) =>{
        console.log(err)
    });
}

    return(
    <div>
        <h2>New Skiff</h2>
        <form onSubmit = {submitForm}>

        <div>
                <label>Build Complete</label>
                <input 
                    type ="checkbox"
                    name ="buildComplete"
                    check ={builderComplete}
                    onChange ={(e) => setBuilderComplete(!builderComplete)}
                />
            </div>
            <div>
                <label>Owner Name</label>
                <input 
                    type ="text"
                    name ="ownerName"
                    value ={ownerName}
                    onChange ={(e) => setOwnerName(e.target.value)}
                />
            </div>

            <div>
                <label>Builder Name</label>
                <input 
                    type ="text"
                    name ="builderName"
                    value ={builderName}
                    onChange ={(e) => setBuilderName(e.target.value)}
                />
            </div>
            <div>
                <label>Model Name</label>
                <select 
                    
                    name ="modelName"
                    value ={modelName}
                    onChange ={(e) => setModelName(e.target.value)}
                >
                <option value ="Standard">Standard</option>
                <option value ="Wide Body">Wide Body</option>
                <option value ="Jumbo">Jumbo</option>
                <option value ="Flat Bottom">Flat Bottom</option>
                </select>
            </div>
            <div>
                <label>Build Start Date</label>
                <input 
                    type ="date"
                    name ="startDate"
                    value ={startDate}
                    onChange ={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div>
                <label>Build Finish Date</label>
                <input 
                    type ="date"
                    name ="finishDate"
                    value ={finishDate}
                    onChange ={(e) => setFinishDate(e.target.value)}
                />
            </div>
            <div>
                <label>Stock Length</label>
                <input 
                    type ="Number"
                    name ="stockLength"
                    value ={stockLength}
                    onChange ={(e) => setStockLength(e.target.value)}
                />
            </div>
            <div>
                <label>Custom Length</label>
                <input 
                    type ="text"
                    name ="customLength"
                    value ={customLength}
                    onChange ={(e) => setCustomLength(e.target.value)}
                />
            </div>
            <div>
                <label>Picture Url</label>
                <input 
                    type ="text"
                    name ="pictureUrl"
                    value ={pictureUrl}
                    onChange ={(e) => setPictureUrl(e.target.value)}
                />
            </div>
            <div>
                <label>Description</label>
                <input 
                    type ="text"
                    name ="description"
                    value ={description}
                    onChange ={(e) => setDescription(e.target.value)}
                />
            </div>
            <button
            type="submit"
            >Add my Skiff</button>
        </form>
    </div>
    )
}

export default NewSkiff;