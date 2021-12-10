import UserSignup from './user_signup'
import './userSignUp.css'
// Verify the object being mapped
export default function UserSignupView(props) {
    return (
        <div>
            <ul className="userSignUpdata">
                {props.signupList.map(signup => {
                    return <UserSignup signup={signup} />
                } )}
            </ul>
        </div>
    )
}