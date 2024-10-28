import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Container, Avatar, Form } from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';

export function Profile(){
    return(
        <Container>
            <header>
              <Link to="/">
                 <FiArrowLeft /> Voltar
              </Link>
            </header>
           <Form>
              <Avatar>
                 <img 
                 src="https://github.com/lucaspegasd.png" 
                 alt="imagem do usuario" 
                 />

              <label htmlFor="avatar">
                    <FiCamera />

                    <input 
                       id="avatar"
                       type="file"
                    />
                </label>
              </Avatar>

              <Input 
              icon={FiUser}  
              placeholder="Nome de usuário"
              type="text" />

              <Input 
              icon={FiMail}  
              placeholder="Email"
              type="text" />

              <Input icon={FiLock}  
              placeholder="Senha atual"
              type="password" />
              
              <Input icon={FiLock} 
              placeholder="Senha antiga"
              type="password" />

             <Button title="Salvar"/>
           </Form>
        </Container>
    )
}