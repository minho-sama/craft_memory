import {GoMarkGithub} from 'react-icons/go'

export default function Logo():JSX.Element{
    return (
        <div className = "logo">
            <h1>Cats</h1>
            <a href = "https://github.com/minho-sama/craft_memory" 
                target = "_blank" 
                rel="noreferrer">
                <GoMarkGithub size = "25px" className='gh-logo'/>
            </a>
        </div>
    )
}