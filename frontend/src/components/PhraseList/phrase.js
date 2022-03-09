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
  url: `http://127.0.0.1:8000/passphrases/{id}?title=${title}`,
  headers : {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjdkM2VjNTUtYjhiYS00ODA5LTlhNjktZjM4MDhiN2I0ZjIyIiwiYXVkIjpbImZhc3RhcGktdXNlcnM6YXV0aCJdLCJleHAiOjE2NDY4NTU4NjZ9.m9lpSuh5l_G2KooQYAsVoYyX9eIMGivl0qjq8VgNg1g",
}}

axios(requestOptions)

  .then(res => setData(res.data));
window.location.reload(false) ;}

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