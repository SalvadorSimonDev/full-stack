import Proptypes from "prop-types"

export const UserDetails = ({user, id}) => (
    <div>
        <h2>todo correcto? {user.username} {user.lastname} con id: {id}</h2>
    </div>
)

UserDetails.prototypes={
    user: Proptypes.object,
    id: Proptypes.string.isRequired
} 
 
UserDetails.defaultProps={
    user:{
        username:'hola',
        lastname:'hola'
    },
    id: '1'
}

