import './Content.css'
import About from './About/About'
import LastNews from './LastNews/LastNews'
import Contact from './Contact/Contact'

export default function Content(){
    return (
        <div className="content">
            <div className="content__twoblock">
                <About/>
                <LastNews/>
                <Contact/>
            </div>
        </div>
    )
}