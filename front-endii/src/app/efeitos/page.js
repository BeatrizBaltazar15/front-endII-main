'use client'
import { useEffect, useState } from "react"

export default function Efeitos() {

    const [ufs, setUfs] = useState([])
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [cidades, setCidades] = useState([])

    const getUfs = async () => {
        
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/?orderBy=nome')
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados: ' + response.statusText)
        }

        const data = await response.json();
        setUfs(data);
        console.log(data);

    }
    const getcidades = async () => {
        console.log('getCidades')
        console.log(estado)
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios/?orderBy=nome`)
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados: ' + response.statusText)
        }

        const data = await response.json();
        setCidades(data)
        console.log(data);

    }


    useEffect(() => {

        getUfs();
    }, [])

    useEffect(() => {
        getcidades();
    }, [estado])

    return (
        <div>
            <h1>UseEffect/ Efeitos Colaterais </h1>
            <select
                onChange={(ev) => {setEstado(ev.target.value), setCidade('') }}
            >
                <option value="">Selecione o Estado🌆</option>
                {ufs.map(uf => (
                    <option
                        value={uf.id}
                        key={uf.id}
                    >
                        {uf.nome}
                    </option>
                ))}
            </select>

            <select
                onChange={(ev) => {setCidade(ev.target.value)}}
            >
                <option value="">Selecione a Cidade🌆</option>
                {cidades.map((cidade) => (
                    <option
                        value={cidade.nome}
                        key={cidade.id}
                    >
                        {cidade.nome}
                    </option>
                ))}
            </select>
            { cidade?<p>{cidade}</p>:<p>Eacolha a Cidade</p>}
        </div>
    )
}
