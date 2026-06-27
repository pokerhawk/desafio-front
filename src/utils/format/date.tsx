export const formatDate = (date:string) =>{
    if(date === undefined) return '';
    const splitDate = date.split("T")[0].split("-");
    if(splitDate.length === 3){
        const newDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
        return newDate;
    }
    return '';
}

export const monthNumberToString = (month: number|string) =>{
    if(typeof month === 'string')month.toString();
    let monthName = '';

    switch(month){
        case '01':
            monthName = 'Janeiro'
            break;
        case '02':
            monthName = 'Fevereiro'
            break;
        case '03':
            monthName = 'Março'
            break;
        case '04':
            monthName = 'Abril'
            break;
        case '05':
            monthName = 'Maio'
            break;
        case '06':
            monthName = 'Junho'
            break;
        case '07':
            monthName = 'Julho'
            break;
        case '08':
            monthName = 'Agosto'
            break;
        case '09':
            monthName = 'Setembro'
            break;
        case '10':
            monthName = 'Outubro'
            break;
        case '11':
            monthName = 'Novembro'
            break;
        case '12':
            monthName = 'Dezembro'
            break;
    }

    return monthName;
}

export const convertDateToAPIFormat = (dateString: string): string => {
  if (!dateString || dateString.length !== 10) return '';
  
  const parts = dateString.split('/');
  if (parts.length === 3) {
    const [day, month, year] = parts;
    
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  
  return '';
};

export const formatDateToLocale = (dateString: string) => {
    if (!dateString) return 'Não informado';
    return new Date(dateString).toLocaleDateString('pt-BR');
  };