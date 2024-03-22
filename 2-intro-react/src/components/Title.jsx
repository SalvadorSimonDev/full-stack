import Proptypes from "prop-types"

export const Title = ({title}) => {


    return (
        <>
            <h1>{title}</h1>
        </>
)}

Title.proptypes={
    title: Proptypes.string.isRequired
}

Title.defaultProps={
    title:'Título por defecto'
}

