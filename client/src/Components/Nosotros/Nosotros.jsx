import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'

const About = () => {

    return (

        <AboutStyle>
            <Header />
           <h1>Acerca de Nosotros</h1>

           <p>En <b>CEMENTERIO CLUB DISCOS</b> tenemos una premisa fundamental y consiste en trabajar sobre la CONFIANZA de nuestros fieles clientes, que respaldan éste proyecto porque brindamos información clara y fundamentada en relación a cada producto que ofrecemos en nuestra tienda.

            Es algo muy importante para nuestro negocio y agradecemos la respuesta incondicional de quienes valoran dicha información.

            Están invitados a seguir leyendo ... </p>

 
            <p><b>¿Qué es la escala Goldmine?</b></p>
                <p>
                Es un sistema de graduación internacional que se utiliza para establecer el estado de los discos de vinilo y sus tapas. El criterio es unificar todas las posibilidades en relación al estado de los discos en un sistema que va desde el mejor (discos nuevos) hasta el peor estado posible (discos rotos, o en muy mal estado).

                Ten en cuenta que la escala es aplicada por humanos y por lo mismo es un estándar que se basa en la buena fe y el criterio de los vendedores.

                </p>
                
                <p><b> ESCALA GOLDMINE</b> </p>
                
            <p>Mint o Nuevo (M o N): Es el mejor estado en el cual podemos encontrar un disco usado. 
                Hablamos de un disco o una tapa sin ningún tipo de uso. 
                Es un estado pocas veces utilizado por la dificultad de encontrar discos usados sin ningún tipo de desgaste,
                 por más ínfimo que este sea.</p>
            <p>
            Near Mint (NM): Un disco que puede haber sido usado (aunque no necesariamente), pero no tiene signos evidentes de uso. Puede referirse a un disco que fue reproducido una sola vez o varias, en su totalidad o parcialmente, siempre y cuando no evidencie signos de desgaste. La tapa luce como nueva, sin ningún tipo de marcas, ni stickers, ni escrituras.
            </p>
            <p>
            Excellent (EX): A partir de este grado, empieza a intervenir la subjetividad de la persona que gradúa y el sistema de reproducción que utiliza. Un disco excelente no debe tener ningún tipo de ruido al ser reproducido. Visualmente puede tener algún desgaste pero mínimo (marcas por sacar/guardar el disco del sobre interno, por ejemplo). Estas marcas no tienen que afectar en ningún modo la correcta reproducción del disco. Las tapas en estado excelente deben conservarse en perfecto estado, aunque pueden tener algún signo de desgaste mínimo.
            </p>
            <p>
            Very Good Plus (VG+): La mayoría de los discos usados que circulan por el mundo se encuentran en este estado. Las marcas de uso comienzan a ser evidentes a partir de este estado (tanto en los discos como en las tapas). Una tapa VG+ puede tener escrituras mínimas en algún sector. Un disco en estado VG+ presenta marcas de uso, y también puede tener ruidos intermitentes al reproducir, pero estos ruidos deberían reducirse al mínimo. Si los ruidos interfieren con la escucha, el disco no podrá calificarse como VG+.
            </p>
            <p>
            Very Good (VG): Las marcas presentes en un disco VG+ se acentúan en un disco VG. Las tapas comienzan a mostrar desgaste y pueden presentar escrituras, arreglos con cinta, etc. A partir del estado VG comienza a evidenciarse un círculo alrededor de la tapa (ringwear). Un disco VG presenta ruidos que no son intermitentes sino continuos, que se acentúan en los silencios entre tema y tema, fade in y fade out, o en momentos silenciosos del disco.
            </p>
            <p>
            Good (G): Los discos en estado G tendrán ruido continuo sin saltos. Las tapas se ven deterioradas por el uso y pueden contener cortes, marcas, arreglos, etc. El valor de mercado de un disco G se reduce a un porcentaje bajo, aunque no mínimo. 
            </p>
            <p>
            Fair/Poor (F o P): Todos los discos que presenten saltos, dobladuras, roturas que impidan la correcta reproducción califican como F/P. Su valor de mercado es ínfimo.
            </p>
            

           <p> <b>GUÍA DE ATRIBUTOS</b></p>


           <p> Sabemos que las características de un disco son importantes, por eso incluimos una ficha de detalles abajo de cada producto para que puedas revisar y comparar. Aquí repasamos nuestros criterios sobre cada atributo que aparece en la ficha:
           </p>
  

           <p> 
            <li> Artista</li>
               Corresponde al intérprete titular de la obra, tal como figura en la carátula del disco. 
           </p>
           

            <p>
            <li>  Album</li>
            Es el nombre de la obra. En ocasiones excepcionales, podríamos abreviarlo para poder desplegarlo en la interfaz.
            </p>
            

            <p>
            <li> Año</li>
            Es el año en que esa versión en particular salió al mercado. En algunos casos, especialmente en las reediciones, esto es difícil de establecer, ya que una misma versión puede haber sido prensada/replicada varias veces, en años distintos, y no lo especifica en la carátula. Siempre intentaremos que «Año» refleje el momento exacto de esa versión. En el caso que no logremos establecerlo a ciencia cierta, este campo puede estar vacío.
            </p>
           
            <p>
            <li> País </li>  
            Es el país al que corresponde la edición, o sea, el mercado en donde fue editado el disco.
            </p>
           
            <p>
            <li>  Formato </li>
            Es el soporte y el tipo de edición a la que corresponde el título. Normalmente vamos listando los atributos separados por comas para dar una idea global.
            </p>
           
            <p>
            <li>  Estado </li>
            Es el estado del soporte y su arte de tapa según la escala Goldmine (puedes ver los detalles más arriba). En Cementerio Club intentamos siempre descartar cualquier producto que esté por debajo de la categoría VG (Very Good) exceptuando piezas realmente raras o imposibles de encontrar.
            </p>


        </AboutStyle>
    )
}

export default About

const AboutStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    
    h1{
        font-size: 2.5rem;
        margin-top: 50px;
        text-align: center;
    }
    p{
        text-align: left;
        font-size: 1.5rem;
        margin: 30px 30px 0px 30px;
    }
`
