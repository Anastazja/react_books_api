import React from 'react';
import panda from '../../img/panda.png';

const About = () => (
    <div className="ui grid about-us">
        <div className="sixteen wide tablet eight wide computer column">
            <h2>
            I do not read for I have renounced life,
            I read because one life is just not enough for me.
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent facilisis lobortis nisl quis fermentum.
            Aenean vitae urna vitae nibh aliquet pulvinar.
            Nullam sit amet pulvinar risus.
            Donec vehicula, libero et dapibus consequat,
            arcu felis gravida ipsum, ac egestas tellus diam vitae felis.
            Nulla euismod porttitor lectus, a rhoncus odio lobortis ut.
            </p>
            <a href="/about">Read more</a>
        </div>
        <div className="sixteen wide tablet eight wide computer column">
            <img alt="panda" src={panda} />
        </div>
    </div>
);

export default About;
