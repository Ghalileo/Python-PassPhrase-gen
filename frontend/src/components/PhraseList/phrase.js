import axios from 'axios'
import React, {useState} from 'react'
import './phrase.css'

// Defined variable for phrase item component which will handle the location of generated phrases
const PhraseItem = (props) => {
  const [data, setData] = useState([]);

  // Function to delete generated phrases
  
const deletePhraseHandler = (title) => {
const requestOptions = {
  method: 'DELETE',
  url: `http://127.0.0.1:8000/passphrases/${title}`,
  headers : {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZjIxM2M3M2ItZDJjZC00Mjk0LWJhNGMtYjZhZWMyYzk0Y2JjIiwiYXVkIjpbImZhc3RhcGktdXNlcnM6YXV0aCJdLCJleHAiOjE2NDY2OTYyNjF9.lGPWaAY_o3RQiB75bd1uo9f59WLEVLCiZsrW-0e0ER8",
}}

axios.delete(requestOptions)

  .then(res => setData(res.data)) }

// Generated HTML Of PhraseItem
return(
<div>
<p>
<span style={{ fontWeight: 'bold, underline'}}>{props.phrase.user_passphrases.title} :</span>{props.phrase.user_passphrases.passphrase_output}
<button onClick={() => deletePhraseHandler(props.phrase.user_passphrases.title)} className="btn btn-outline-danger deletePhraseBtn">X</button>
</p>

</div>

)

}

export default PhraseItem;