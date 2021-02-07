import React from 'react';
import './Article.css';

const Article = () => (
    <article elevation={0} className="home-article">
        <h3>#MAIORCAMPEãODOBRASIL</h3>
        <p>
        La Sociedade Esportiva Palmeiras es un club de fútbol brasileño de la ciudad de São Paulo. Conocido popularmente de forma abreviada como Palmeiras, fue fundado el 26 de agosto de 1914, como Palestra Italia, pero su nombre fue cambiado al actual el 14 de septiembre de 1942 por razones políticas.
        </p>
        <h3>Palmeiras, campeón de la Copa Libertadores de América</h3>
        <p>
        Con un gol en el añadido de Breno Lopes, el 'Verdão' venció la final brasileña contra el Santos y conquistó su segundo trofeo de la Copa Libertadores.
        </p>
        <div className="image-article">
            <img src="https://live.staticflickr.com/65535/50899954442_f32931487f_h.jpg" alt="image"/>
            {/* <img src="https://as02.epimg.net/futbol/imagenes/2021/01/30/internacional/1612045214_376407_1612047389_noticia_normal_recorte1.jpg" alt=""/> */}
        </div>
    </article>
);

export default Article;