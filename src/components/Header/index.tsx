import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import * as S from './styles';
import { useEffect, useState } from "react";
import ButtonV2 from "../Button/ButtonV2";
import { getPassengers } from "../../services/passengers";

const Header = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    const location = useLocation();
    const [title, setTitle] = useState<string|undefined>(undefined);
    const [loadButton, setLoadButton] = useState(true);

    useEffect(()=>{
      const currentPage = location.pathname;

      if (currentPage.startsWith('/dashboard')) {
        setTitle('Dashboard');
        return;
      }
      if (currentPage.startsWith('/analytics')) {
        setTitle('Analytics');
        setLoadButton(false)
        return;
      }
      if (currentPage.startsWith('/trip')) {
        setTitle('Detalhes');
        setLoadButton(false)
        return;
      }

    }, [location.pathname])

    return (
      <S.HeaderWrapper>
        <S.TopBarWrapper>
          {title != undefined ? (<S.Title>{title}</S.Title>)
          :(<a href="dashboard">Voltar</a>)}
        </S.TopBarWrapper>

        <S.BalanceBarWrapper>
          <S.HrefWrapper>
            {loadButton && (
              <S.A href="/analytics" onClick={(e) => { e.preventDefault(); navigate('/analytics'); }}>
                Análise de viagens
              </S.A>

            )}
            {(title === 'Analytics' || title === 'Detalhes') && (<a href="/dashboard">Voltar</a>)}
          </S.HrefWrapper>
          <S.ActionsLineExtra><ButtonV2 onClick={(e)=>{e.preventDefault();logOut()}}>Logout</ButtonV2></S.ActionsLineExtra>
        </S.BalanceBarWrapper>
      </S.HeaderWrapper>
    );
}

export default Header;
