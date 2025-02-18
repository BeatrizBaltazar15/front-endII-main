import Card from '@/components/Card'

export default function Props() {
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
    return (
        <div>
            <h1>Gatos e seu tempo de vida!</h1>
            {
                gatos.map((gato) => (
                    <Card 
                        key = {gato.id}
                        id = {gato.id} 
                        raça = {gato.raça}
                        tempovida = {gato.tempovida} 
                    />
                ))}
        </div>
    )
}