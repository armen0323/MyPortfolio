import './style.scss';
import {useEffect, useState} from "react";
import ArmImg from  '../../assets/images/Armsssss.png';
import TextTransition, { presets } from "react-text-transition";
import MyWorks from "./components/myWorks";
import {worksList} from "./worksList";
const languages = [
    "Armen Muradyan",
    "Արմեն Մուրադյան",



];
function Work(){
    const [list,setList] = useState(worksList);
    const [index, setIndex] = useState(0);
    useEffect(() => {

        const intervalId = setInterval(() => {
            if (index <= 4) {
                setIndex(index => index + 1)
            }

        }, 3000
        );
        return () => clearTimeout(intervalId);
    }, []);
    const [hello,setHello] = useState('Hi');

    return(
        <section className='P-work-block' data-aos="unset">

            <div className='P-work-container G-container'>

                {/*<div className='P-work-title'>*/}
                {/*    <h2 className='P-work-name' data-aos="fade-down" data-aos-duration="700" >*/}
                {/*        <TextTransition className='P-text-transition' springConfig={presets.wobbly} delay={3}>*/}
                {/*            {languages[index % languages.length]}*/}
                {/*        </TextTransition>*/}
                {/*    </h2>*/}
                {/*</div>*/}

                {/*<div className='P-my-img-block' data-aos="flip-left"*/}
                {/*     data-aos-easing="ease-out-cubic"*/}
                {/*     data-aos-duration="700">*/}
                {/*    <div  className='P-my-img' style={{backgroundImage: `url(${ArmImg})`}}/>*/}
                {/*</div>*/}
                {/*<div className='P-work-info' data-aos="fade-up">I'm a Front-end developer with a year of work experiacne</div>*/}
                <div className='P-home-block'>
                    <div className='P-home-left-block'>
                        <h2 className="P-home-my-name">
                                    <TextTransition  springConfig={presets.wobbly} delay={3}>
                                      {languages[index % languages.length]}
                                   </TextTransition>
                        </h2>
                        <p className="P-home-subtitle">Website and user interface designer</p>
                        <p className="P-home-text">Over the past 9 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups to successfully help them reach their full potential and attract new customers.</p>

                    </div>
                    <div className="P-home-right-block" />
                </div>

    <div className="P-about-my">
    <div className='P-about-Hobby' data-aos="fade-right" data-aos-duration="700">
        <h2 className='P-hobby'>Hobby</h2>
        <p className='P-hobby-text'>
            A little about my hobbies. During my free time I like listening to music, reading fantasy and historical books, watching movies, playing football, doing fitness.
        </p>

    </div>
        <div className='P-purpose-block' data-aos="fade-left" data-aos-duration="700">
            <h2 className='P-purpose'>Purpose</h2>
            <p className='P-purpose-text'>Become a “senior developer”, learn as many programming languages as possible, develop and become an expert in programming.</p>
        </div>
        <div className="P-resume" data-aos="zoom-in-up"
             data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
            <h2 className='P-resume-title'>Resume</h2>
            <div className='P-resume-text-btn'>
            <p className="P-resume-text">If you are interested in my candidacy, you can download <br/> my resume directly
                from this site. Without registration and SMS.
            </p>
                <div className='P-resume-btn-block'>
                <button className='P-resume-btn'>DOWNLOAD</button>
                </div>
            </div>
        </div>
        <div className='P-experiences-block' >
            <h2 className='P-work-experiences'  data-aos="zoom-in-down">Work Experiences</h2>
            <div className='Work-experiences-container'>
                <div className="P-work-left-block" data-aos="fade-right"  data-aos-duration="700">
                    <h2 className="P-sharp">SharpBrains</h2>
                    <h3 className="P-sharp-data">Feb.2022 - Sep.2022</h3>
                    <h3 className="P-sharp-brains">Frontend Developer</h3>
                    <p className="P-sharp-brains-block">I work at Group 404 as a frontend developer. I'll tell you a little about what I do in this company ` I develop applications on react.js using typeScript. I work in a team, for example we create an admin panel for accountants and many other things.</p>
                </div>
                <div className="P-work-left-block" data-aos="fade-left"  data-aos-duration="700">
                    <h2 className="P-sharp">SharpBrains</h2>
                    <h3 className="P-sharp-data">Feb.2022 - Sep.2022</h3>
                    <h3 className="P-sharp-brains">Frontend Developer</h3>
                    <p className="P-sharp-brains-block">I work at Group 404 as a frontend developer. I'll tell you a little about what I do in this company ` I develop applications on react.js using typeScript. I work in a team, for example we create an admin panel for accountants and many other things.</p>
                </div>
            </div>
        </div>
    </div>
            </div>

        </section>
    )
}
export default Work