import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const SocialBar = () => {
    return (
        <ButtonGroup className="me-2" aria-label="First group">
            <Button><i className="fab fa-github-square"></i></Button>
            <Button><i className="fab fa-linkedin"></i></Button>
            <Button><i className="fab fa-twitter-square"></i></Button>
        </ButtonGroup>
    )
}

export default SocialBar