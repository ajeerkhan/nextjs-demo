import Card from './components/card'
import style from './index.module.css';
import data from '../data/data.json'

export default ({cards})=>{
    return(
        <div className={style.App}>
                <header className={style.AppHeader}>
                    <img src="/static/logo.png"
                        className={style.staticLogo} alt="logo"
                    />
                </header>
                <div className={style.Grid}>
               {cards.map((c, i)=>{
                   return(
                        <Card key={i} card={c} />
                   )
               })} 
                
                </div>
            </div>
    )

}

export async function getStaticProps() {
    return(
        {
            props: {
                cards : data
            }
        }
    )
} 
