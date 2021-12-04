import UserSignup from './user_signup'
// Verify the object being mapped
export default function UserSignupView(props) {
    return (
        <div>
            <ul>
                {props.SignupList.map(signup => <UserSignup signup={signup}/> )}
            </ul>
        </div>
    )
}