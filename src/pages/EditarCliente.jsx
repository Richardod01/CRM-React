import { obtenerCliente } from "../data/Clientes";

export async function loader({params}){
  const cliente = await obtenerCliente(params.clienteId)
  console.log(cliente)
  return 0;
}

function Editar() {
  return (
    <div>
      <h1>Editar</h1>
    </div>
  )
}

export default Editar
