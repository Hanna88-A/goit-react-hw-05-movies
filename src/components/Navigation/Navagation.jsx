import { Link, Header } from './Navigation.styled';


export default function Navigation(){
     return (
        <Header>
            <nav>
                 <Link to='home'>Home</Link>
                 <Link to='movies'>Movies</Link>
            </nav>
        </Header>
    )
}