import * as S from './styles';
import Header from '../../components/Header';
import { PageWrapper } from '../../styles/Global';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import Toastify from '../../components/Toastify/Toastify';
import { DashboardStats } from './interface';
import { PageContent } from '../../components/PageContent';
import Button from '../../components/Button';
import { StatCard } from '../../components/StatCard';
import { DollarSign, CreditCard, BarChart2, Clock } from 'lucide-react';
import { notify } from '../../utils/Toast/notify';
import { importExcel } from '../../services/analytics';
import { Input } from '../../components/Input';
import { Form } from '../../components/RegisterForm/styles';
import { getCache, setCache } from '../../utils/cache';

const Analytics = () => {
  const [dashboardStats, setDashboardStats] = useState<DashboardStats>({
    total_passengers: 0,
    total_average_occupancy: '',
    total_expected_revenue: '',
    bottleneck: {
      route_name: '',
      operator_assigned: '',
      total_delay: 0,
    }
  });

  const [loading, setLoading] = useState(false);
  const buildFileKey = (file: File) => {
    return `${file.name}-${file.size}-${file.lastModified}`;
  };

  const handleCards = async (file: File) => {
    const key = buildFileKey(file);
    try{
      setLoading(true);
      const cached = getCache(key);
      if(cached){
        setDashboardStats(cached);
        return;
      }

      const response = await importExcel(file);
      if (!response) {
        throw new Error("Empty response from importExcel");
      }
      setCache(key, response)
      setDashboardStats(response);
    } catch(error) {
      notify("error", "Algo deu errado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageWrapper>
      <Header />
      <Toastify position='top-right' theme='light' displayTime={1500}/>
      <PageContent padding="md">
        <S.DashboardHeaderFilters>
          <S.SimpleDiv>
            <S.SectionTitle>Arquivo</S.SectionTitle>
            <Input type="file" name="Arquivo" accept='.csv' isFileUpload label='Enviar Arquivo' onChange={(e)=>{
              if(e.target.files)handleCards(e.target.files?.[0]);
            }} />
          </S.SimpleDiv>
        </S.DashboardHeaderFilters>
        <S.SectionTitle>Informações de voos:</S.SectionTitle>
        <S.CardsContainer>
          <StatCard
            icon={<BarChart2 size={22} strokeWidth={2} />}
            title="Numero de passageiros total"
            value={dashboardStats.total_passengers || 0}
            subInfo="Entre todos os voos"
            variant="success"
          />
          <StatCard
            icon={<BarChart2 size={22} strokeWidth={2} />}
            title="Média de ocupação total"
            value={dashboardStats.total_average_occupancy || 0}
            subInfo="Entre todos os voos"
            variant="default"
          />
          <StatCard
            icon={<DollarSign size={22} strokeWidth={2} />}
            title="Receita total"
            value={dashboardStats.total_expected_revenue || 0}
            subInfo="Entre todas os voos"
            variant="default"
          />
        </S.CardsContainer>
        <S.SectionTitle>Operador e rota com maior gargalo:</S.SectionTitle>
        <S.CardsContainer>
          <StatCard
            icon={<BarChart2 size={22} strokeWidth={2} />}
            title="Rota"
            value={dashboardStats.bottleneck.route_name || 0}
            variant="warning"
          />
          <StatCard
            icon={<BarChart2 size={22} strokeWidth={2} />}
            title="Operador"
            value={dashboardStats.bottleneck.operator_assigned || 0}
            variant="warning"
          />
          <StatCard
            icon={<BarChart2 size={22} strokeWidth={2} />}
            title="Atraso (min)"
            value={dashboardStats.bottleneck.total_delay || 0}
            subInfo='Soma de todas as viagens'
            variant="warning"
          />
        </S.CardsContainer>
      </PageContent>
    </PageWrapper>
  );
}

export default Analytics;
