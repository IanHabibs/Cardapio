export default function Card({ item }) {
  if (!item) return null

  return (
    <div>
      <h3>{item.nome}</h3>
      <p>{item.descricao}</p>
      <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
    </div>
  )
}