import { FiArrowLeft } from 'react-icons/fi';

import { Container, Form, Inputs, Buttons } from './styles';
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';

export function CreateMovie(){
    return(
        <Container>
           <Header />

           <Form>
             <header>
                  <Link to="/">
                     <FiArrowLeft /> Voltar
                  </Link>

                  <h1>
                    Novo filme
                  </h1>
            </header>

            <Inputs>
              <div id="inputs">
                <Input placeholder="Título" />
                <Input placeholder="Sua nota (de 0 a 5)" type="number" />
              </div>

              <TextArea placeholder="Observações"/>
            
            </Inputs>

            <Buttons>
                <h2>Marcadores</h2>

                <div id="tags">
                    <NoteItem value="react" />
                    <NoteItem isNew placeholder="Nova tag"/>
                </div>

                <div id="buttons">
                  <Button id="delete" title="Excluir Filme" />
                  <Button id="add" title="Salvar alterações" />
                </div>



            </Buttons>
           </Form>
        </Container>
    )
}