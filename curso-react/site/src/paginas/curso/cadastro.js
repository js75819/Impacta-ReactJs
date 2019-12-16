import React, { Component } from 'react';
import { FormCurso} from ',/from'
import { CursoList} from ',/from'

export class CadastroCurso extends Component {
    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso />
                </div>
                <div className="col-md-6">
                    <CursoList />
                </div>
            </div>
        )
    }
}
