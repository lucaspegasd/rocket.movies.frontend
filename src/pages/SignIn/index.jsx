import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background, Titles, Inputs } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

export function SignIn(){
    return(
        <Container>
           <Form>
              <Titles>
                <h1>RocketMovies</h1>
                <p>apicação para acompanhar tudo que assistir</p>
                <h2>Faça seu login</h2>
              </Titles>

              <Inputs>
                <Input icon={FiMail} placeholder="E-mail" />
                <Input icon={FiLock} type="password" placeholder="Senha"/>


                <Button title="Entrar"/>
              </Inputs>

              <Link to="/register">
                Criar conta
              </Link>
           </Form>

           <Background />

        </Container>
    )
}