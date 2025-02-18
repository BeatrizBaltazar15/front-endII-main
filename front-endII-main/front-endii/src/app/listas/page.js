import Card from '@/components/Card'
export default function Listas () {
const nomes = ['Rottweiler', 'Shih Tzu', 'Pastor Belga', 'Basenji','Yorkshire']
const gatos = [
    {
        id:1,
        tempovida: 14.4,
        raça: 'Burmês'
       
    },

    {
        id:2,
        tempovida: 11.9,
        raça: 'Mestiço'
        
    },

    {
        id:3,
        tempovida: 10.3,
        raça: 'Ragdoll'
       
    },

    {
        id:4,
        raça: 'Maine',
        tempovida: 9.7
    },

    {
        id:5,
        raça: 'Siamês',
        tempovida: 11.7
    }

]
    return(
        <div>
            <h1>Raças de cachorros  e gatos</h1>
            <h2>Lista Comum</h2>
            <ul style={{marginLeft:'50px'}}>
                {nomes.map((nome, id) => (
                    <li key={id}>{nome}</li>
                ))}
            </ul>
            <div>
                <h2>Lista de Objetos</h2>
                {
                    gatos.map((gato) =>(
                        <div key={gato.id}>
                            <h3>{gato.id} - {gato.raça}</h3>
                            <p>{gato.tempovida}</p>
                        </div>
                    ))
     
                }
            </div>
        </div>
    )
}