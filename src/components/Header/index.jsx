import { Container, Brand, Profile } from './styles';
import { Input } from '../Input'
import { Button } from '../Button'
import { Link } from 'react-router-dom';

export function Header(){
    return(
      <Container>
        <Brand to="/">
          <h1>RocketMovies</h1>
        </Brand>

        <Input placeholder="Pesquisar pelo título" />

        

        <Profile to="/profile">

           <div>
                <strong>Lucas Debiase</strong>
                <span>sair</span>
            </div>


            <img 
            src="https://github.com/lucaspegasd.png" 
            alt="imagem do usuario" 
            />

        </Profile>
      </Container>
    )
}