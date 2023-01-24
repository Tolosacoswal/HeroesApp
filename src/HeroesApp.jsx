import { AuthProvider } from './auth/context';
import { AppRouter } from './heroes/routes/AppRouter';


export const HeroesApp = () => {
  return (
    <AuthProvider>
        
        <AppRouter />
        
    </AuthProvider>
  )
}