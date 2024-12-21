import './LastNews.css'
import LastCard from './LastCard'
import news from '../../news.json'

export default function LastNews(){
    let arr = news.reverse()
    return(
        <div className="lastnews__block block">
            <h3>ОСТАННІ НОВИНИ</h3>
            <div className="lastnews__content">
                {arr.map((el, index) => {
                    if(index < 3) return (<LastCard title={el.title} desc={el.shortdesc} image={el.imageurl}/>)
                })}
            </div>
        </div>
    )
}