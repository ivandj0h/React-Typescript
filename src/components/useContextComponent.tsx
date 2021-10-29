import { useState, useContext } from 'react';
import UserContext, { UserState } from '../store';

// parent component
function UseContextComponent() {
    const [user, userSet] = useState<UserState>({
        firstName: "Dave",
        lastName: "Ibrahimovic"
    })
    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
        </UserContext.Provider>
    )
}

// children component that consume parent component
function ConsumerComponent() {
    const user = useContext<UserState>(UserContext)

    return (
        <div>
            <div>
                The First Name is : {user.firstName}
            </div>
            <div>
                The Last Name is : {user.lastName}
            </div>
        </div>
    )
}

export default UseContextComponent