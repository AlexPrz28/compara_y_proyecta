
import styled from "styled-components";
import $ from "jquery";
import React,{useEffect} from "react"



const InvestmentsScreen = () => {
  useEffect(() => {
    $(function(){
      $.ajax({
        url : 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/SP74665,SF61745,SF60634,SF43773/datos/oportuno?token=390f07589aecf8b536fed5013d194e8172a789831eccebb0ced369682196ce8a',
        jsonp : 'callback',
        dataType : 'jsonp', //Se utiliza JSONP para realizar la consulta cross-site
        success : function(response) {  //Handler de la respuesta
          var series=response.bmx.series;
          
          //Se carga una tabla con los registros obtenidos
          for (var i in series) {
            var serie=series[i];
            var reg='<tr><Td>'+serie.titulo+'</Td><Td>'+serie.datos[0].fecha+'</Td><Td>'+serie.datos[0].dato+'</Td></tr>'
            $('#result').append(reg);
          }
        }
      });
    });
}, [])
  return (
    <div className="coin-app" style = {{backgroundColor: '#1a1a1c'}}>
      <div className="coin-search">
        <h1 className="coin-text"> INVESTMENTS SCREEN</h1>
      </div>
      <div>
	{/* 	<head>
			<script
				src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'></script>
		</head>
		<body style = {{backgroundColor: '#1a1a1c'}}>
			<Table id='result'>
			</Table>
		</body> */}
	</div>
    <div style = {{marginTop: '4rem'}}>
      <h2 className="coin-text"> La inflación anual para Octubre 2021 está en: 6.24% </h2>
      <h3>La mejor forma de protegerte contra la inflación es invirtiendo. ¿En que puedes invertir desde México?</h3>
      <div style = {{marginTop: '4rem'}}>
        <h2 >Renta Fija:</h2>
      </div>
      <div style = {{marginTop: '4rem'}}>
        <h2 >Renta Variable:</h2>
      </div>
    </div>
    </div>
  );
}

export default InvestmentsScreen;

const Td = styled.div`
    background-color: '#E8E8E8';
    padding: 5px;
`
const Table = styled.div`
    border-spacing: 5px;
    border-collapse: separate;
`