import RoutesRoot from './routes'
import Layout from './components/Layout'
import './styles/App.css'

export default function App() {
  return (
    <div className='layout-container'>
      <Layout>
        <RoutesRoot />
      </Layout>
    </div>
  )
};
