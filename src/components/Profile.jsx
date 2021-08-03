

const Profile = () =>{
    return(
         <div className='main-content'>
                <div className='content__img-box'> 
                    <img className='content__img' src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
                </div>

                <div className='user-info__wrapper'>
                    <img className='user-ava' src='https://lh3.googleusercontent.com/proxy/BmkhmaJPVyDoAKPJB9ut4uKFm_CLuBsgVYz355BKwh4I5BTQg06SCUk8fS2frUb_Wm6mbmReSBYFcGrDb49Wl989WsIvJbm82rqPW4bfzBonivTxHwKeeg' >
                    </img>
                    <div className='user-info__text'>
                        <h2 className='user-name'>
                            Alexey Dunnikov
                        </h2>
                        <ul className='user-info__list'>
                            <li className='user-info__item'>
                                Date of Birth: 18 October
                            </li>
                            <li className='user-info__item'>
                                City: Grodno
                            </li>
                            <li className='user-info__item'>
                                Education: GGPC
                            </li>
                            <li className='user-info__item'>
                                Web Site: <a href='https://github.com/AlexeyDunnikov'><em>https://github.com/AlexeyDunnikov</em></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='posts'>
                    <h3 className='posts__title'>
                        My posts
                    </h3>
                    <form className='posts__form'>
                        <textarea className='posts__input' type='text' placeholder='your news...'></textarea>
                        <button className='posts__button' type='submit'>Send</button>
                    </form>
                    <ul className='posts__list'>
                        <li className='posts__item'>
                            <p className='posts__item-text'>
                                Hey, why nobody lobve me?
                            </p>
                        </li>
                        <li className='posts__item'>
                            <p className='posts__item-text'>
                                It's my new program! Hey!
                            </p>
                        </li>
                        
                    </ul>
                </div>
            </div>
    )
}

export default Profile;