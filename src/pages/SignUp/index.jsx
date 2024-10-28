import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Background, Titles, Inputs } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function SignUp(){
    return(
        <Container>
           <Form>
              <Titles>
                <h1>RocketMovies</h1>
                <p>apicação para acompanhar tudo que assistir</p>
                <h2>Crie sua conta</h2>
              </Titles>

              <Inputs>
                <Input icon={FiUser} placeholder="Nome" />
                <Input icon={FiMail} placeholder="E-mail" />
                <Input icon={FiLock} type="password" placeholder="Senha"/>

                <Button title="Cadastrar"/>
              </Inputs>

              <Link to="/">
                 <FiArrowLeft /> Voltar para o login
              </Link>
           </Form>

           <Background />

        </Container>
    )
}