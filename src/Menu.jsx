const Menu = () => {
    return (
        <div>
            <ul className= "nav">
                <a class= "nav-link active" href= "#">
                    Active
                </a>
                <li className="nav-item">
                    <a className="nav-link" href= "/home">
                    Home

                    </a>
                    <li className="nav-item">
                        <a className="nav-link" href="/viacep">
                        ViaCep
                        </a>
                    </li>

                </li>
            </ul>
        </div>
    )


}