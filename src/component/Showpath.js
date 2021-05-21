import React from 'react';
import {useParams,useLocation} from 'react-router-dom'
export const Showpath = () =>{
    const location = useLocation();
    const path = location.pathname;
    const {num} = useParams();
    const {id} = useParams();
    return (
    <React.Fragment>
        <h3>現在のパスは{path}です</h3>
        {num &&
        <h3>パラメータの数字は{num}です</h3>
        }
        {id &&
        <h3>パラメータのIDは{id}です</h3>
        }
    </React.Fragment>
    )
  }