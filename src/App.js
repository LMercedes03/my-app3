import { RecoilRoot } from 'recoil'
import { RedStripe } from './RedStripe'
import { BlueStripe } from './BlueStripe'
import { GreenStripe } from './GreenStripe'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RedStripe />
          <BlueStripe />
          <GreenStripe />
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  )
}

export default App