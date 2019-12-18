import React, { Component } from 'react';
import { FormCurso } from './form'
import { CursoList } from './list'
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos'


export class CadastroCurso extends Component {

    initialState = {
        _id: null,
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA'
        

    }

    state = { ...this.initialState, cursos: [] }

    constructor(props) {
        super(props);
        this.listar();
    }

    

    


    codigoChange(html) {

        this.setState({ codigo: html.target.value })

    }
    descricaoChange(html) {

        this.setState({ descricao: html.target.value })

    }

    cargaHorariaChange(html) {

        this.setState({ cargaHoraria: html.target.value })

    }

    precoChange(html) {

        this.setState({ preco: html.target.value })

    }

    categoriaChange(html) {

        this.setState({ categoria: html.target.value })

    }
    adicionar(evento) {
        evento.preventDefault()

        const {_id, codigo, descricao, cargaHoraria, preco, categoria } = this.state
        const body = {
            codigo,
            descricao,
            cargaHoraria,
            preco,
            categoria
        }
          if(_id){
            axios.put(`${URL}/${_id}`, body)
              .then(_id =>{
                  this.limpar(evento)
                  this.listar()
                  alert('Curso atualizado')                
              })
              .catch(error =>{
                  console.log(error)
              })             
          } else {
              
            axios.post(URL, body)
            .then(_ => {
                this.limpar()
                this.listar()

                alert('Curso Adicionado')
            })
            .catch(error => {
                console.log(error)
                alert('Erro ao Adicionar Curso')
            })
          }
    }

    remover(curso) {
        if (window.confirm('deseja realmente remover curso?')) {
            axios.delete(`${URL}/${curso._id}`)
                .then(_ => {
                    this.listar()
                    alert('Curso deletado com sucesso')
                })
                .catch(error => {
                    alert('Erro ao deletar Curso')
                })
        }

    }
    limpar(event){
        if(event){
            event.preventDefault();
        }
        
        this.setState(this.initialState)
    }

    categoriaCallback(html){
        this.setState({categoria : html.target.value})
    }

    consultar(curso) {
        this.setState({
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            categoria: curso.categoria,
            preco: curso.preco

        })
    }

   
    listar() {
        axios.get(URL).then(response => {
            this.setState({ cursos: response.data })
        })
    }

   
    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso
                        codigo={this.state.codigo}
                        codigoChange={this.codigoChange.bind(this)}

                        descricao={this.state.descricao}
                        descricaoChange={this.descricaoChange.bind(this)}

                        cargaHoraria={this.state.cargaHoraria}
                        cargaHorariaChange={this.cargaHorariaChange.bind(this)}
                        categoriaCallback={this.categoriaCallback.bind(this)}

                        preco={this.state.preco}
                        precoChange={this.precoChange.bind(this)}

                        categoria={this.state.categoria}
                        categoriaChange={this.categoriaChange.bind(this)}

                        adicionar={this.adicionar.bind(this)}
                        limpar={this.limpar.bind(this)}
                        isAtualizar={this.state._id ? true : false}



                    />
                </div>
                <div className="col-md-6">
                    <CursoList
                        cursos={this.state.cursos}
                        removerCurso={this.remover.bind(this)}
                        consultarCurso={this.consultar.bind(this)}
                    />
                </div>
            </div>
        )
    }
}


