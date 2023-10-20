import reactSmall from "../assets/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img src={reactSmall} className="nav--icon"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}