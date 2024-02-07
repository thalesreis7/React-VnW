import Header from '../Components/Pages/Header'
import FuncaoDobro from '../Components/Pages/FuncaoDobro';



export default function App(){
  const saudacao = (mensagem)=>{
    alert (mensagem);
  }
  saudacao("Olá, Mundo com Arrow Functions!")

  return(
    <div>
      <Header/>
      <FuncaoDobro/>
    </div>
  )
}




