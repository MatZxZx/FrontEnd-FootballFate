import FormLogin from '../../components/FormLogin/FormLogin'
import './home.css'

function Home() {
  return (
    <div className='flex flex-col items-center mt-12 gap-5'>
      <h1 className='title-login font-bold text-4xl'>Inicia Sesion o Registrate</h1>
      <FormLogin />
    </div>
  )
}

export default Home