import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro(){

    const [nome, setNome] = useState("Ricardo");

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            console.log(nome);
        }}> 
            <TextField  
            value={nome}
            onChange={(event)=> {
                setNome(event.target.value);
                if(nome.length >= 3){
                    setNome(nome.substring(0,3));
                }
            }}
            id='nome' 
            label="Nome" 
            variant='outlined' 
            margin='normal' 
            fullWidth/> 
            
            <TextField  id='sobrenome' label="Sobrenome" variant='outlined' margin='normal' fullWidth/>

            <TextField  id='cpf' label="CPF" variant='outlined' margin='normal' fullWidth/>
            
            <FormControlLabel label="Promoções"
                control={
                    <Switch name="promocoes"
                    defaultChecked
                    color="primary"/>
                }
            
            />
            
            <FormControlLabel label="Novidades"
                control={
                    <Switch name="novidades"
                    defaultChecked
                    color="primary"/>
                }
            />

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    );
}
export default FormularioCadastro;