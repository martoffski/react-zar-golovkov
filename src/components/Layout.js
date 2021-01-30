import s from "./Layout.module.css"

const Layout = ({id, title, descr, urlBg, colorBg}) => {

    let style = colorBg ? {backgroundColor: 'orange'} : {}
return (
    <section className={s.root + ' ' + (urlBg ? s.bg1 : '')} id={id} style={style}>
        <div className={s.wrapper}>
            <article>
                <div className={s.title}>
                    <h3>{title || "no title"}</h3>
                    <span className={s.separator}/>
                </div>
                <div className={s.desc + ' ' + s.full}>
                    <p>{descr || "no description"}</p>
                </div>
            </article>
        </div>
    </section>
)
}
export default Layout