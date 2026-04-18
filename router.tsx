import { BrowserRouter, Routes, Route } from 'react-router';
import { Home} from './src/Home.tsx';
import { Descricao} from './src/pages/Descricao.tsx';
import { Cadastro } from "./src/pages/Cadastro.tsx";


export function AppRouter(){
    return(
        <>  
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/descricao' element={<Descricao/>}/>
                    <Route path='/cadastro' element={<Cadastro/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}