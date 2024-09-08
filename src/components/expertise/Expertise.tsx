import "./expertise.css"
const Expertise = () => {
    return(
        <div className='expertise-block'>
            <h2 className='block-title'>ЭКСПЕРТИЗА</h2>
            <div className='exp-data'>
                <div className='exp-block'>
                    <div className='block-num'>15+</div>
                    <div className='block-text'>Лет опыт разработчиков</div>
                </div>
                <div className='exp-block borders'>
                    <div className='block-num'>20+</div>
                    <div className='block-text'>Выпущенных проектов</div>
                </div>
                <div className='exp-block'>
                    <div className='block-num'>5</div>
                    <div className='block-text'>Внутренних проектов</div>
                </div>
            </div>
        </div>
    )
}
export default Expertise