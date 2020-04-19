import React, { Component } from 'react';
/*import ListGroup from '../Components/ListGroup'
import ListGroupItem from '../Components/ListGroupItem'*/
import './Home.css'
import Image from '../Components/Image'

export default class Home extends Component {
    render () {
        return(
            <div className='bkg'>

            <h1 className='wordMainTitle'>Battle Brothers</h1>

            <p>
                Battle Brothers или "Боевые братья", это игра жанра TBS, в которой игроку предстоит выступить в роли капитана отряда наемников,
                вынужденного выживать в суровом мире средневековья с примесями немецкой, нордической и ближне-восточной культур.
                Лорно игра относится к ныне популярному жанру low-фэнтези, в мире которого присутствуют классические
                атрибуты жанра "полного" фэнтэзи, но в крайне малом, обрезанном масштабе, в том числе не доступном для использования игроку.<br/>
                <br/>
                <span className='wordWarning'>ВНИМАНИЕ!!!</span> Ввиду сложности устройства движка игра не имеет локализации на русский язык для актуальной версии 1.3.0.25.<br/>
            </p>
            
            <h2 className='wordMainTitle'>Предыгровые настройки</h2>

            <p>
                При создании новой игровой кампании игрок выбирает различные значения настроек, по собственному усмотрению.
                Выбранные настройки нельзя будет изменить после начала компании.<br/>
                <br/>
                <Image src={require('../Images/Starts.jpg')} className='imageStarts'></Image>
                <br/>
                В данном окне игроку представляется возможность одну из возможных предысторий своей команды наемников. Выбор следующий:<br/>
                <br/>

            </p>

                <table border="1" cellpadding="5" 
                className='tableCompany' >
                    <tr>
                        <td><h4 className='backstoryTitle'> Название</h4></td>
                        <td><h4 className='shortDiscription'>Краткое описание</h4></td>
                        <td><h4 className='startBrothers'>Стартовые "братья"</h4></td>
                        <td><h4 className='startEquip'>Стартовое снаряжение</h4></td>
                        <td><h4 className='startAdvantage'>Преимущества</h4></td>
                        <td><h4 className='startDisAdvantage'>Недостатки</h4></td>
                        <td><h4 className='startDifficulty'>Сложность</h4></td>
                        
                    </tr>

                    <tr>
                        <td>Rebuilding a Company(Tutorial) - "Восстановление компании(Обучение)".</td>
                        <td>Данная предыстория проведет вас по обучающей миссии, объясняющей основные механики игры.<br/></td>
                        <td>Три бойца со средними характеристиками.</td>
                        <td>Слабое.</td>
                        <td>Отсутствуют</td>
                        <td>Отсутствуют</td>
                        <td>Низкая</td>
                    </tr>

                    <tr>
                        <td>A New Company - "Новая компания".</td>
                        <td>Отличие от первой предыстории - возможность пропустить обучение. Также оно будет отсутствовать и во всех последующих предысториях.</td>
                        <td>Три бойца со средними характеристиками.</td>
                        <td>Слабое.</td>
                        <td>Отсутствуют</td>
                        <td>Отсутствуют</td>
                        <td>Низкая</td>
                    </tr>

                    <tr>
                        <td>Peasant Militia - "Крестьянская армия".</td>
                        <td>Данный старт позволяет использовать численное превосходство в битвах, но ухудшает качественное состояние армии в поздних этапах игры</td>
                        <td>Дюжина(12) бойцов с случайными характеристиками и бэкграундами группы "Lowborn"(Низшее сословие).</td>
                        <td>Очень слабое.</td>
                        <td>Возможность выставлять на поле боя до 16 бойцов (вместо стандартных 12) и иметь в подчинении до 25 бойцов (вместо стандартных 20).</td>
                        <td>Невозможность нанимать бойцов, не принадлежащих группе "Lowborn"(Низшее сословие).</td>
                        <td>Низкая</td>

                    </tr>

                    <tr>
                        
                        <td>Band of Poachers - "Банда браконьеров".</td>
                        <td>Данный старт позволяет выбирать стратегически верные битвы, всегда имея информацию об ожидающем вас противнике.</td>
                        <td>Три бойца с бэкграундом "Poacher"(Браконьер). Все имеют высокий стартовый показатель дистанционной атаки.</td>
                        <td>Слабое, преимущественно дистанционное (луки, праща).</td>
                        <td>Увеличенная скорость передвижения на карте мира, возможность всегда видеть, какие противники вас поджидают в локациях на карте мира.</td>
                        <td>Уменьшенный стартовый размер инвентаря группы.</td>
                        <td>Средняя</td>
                    </tr>

                    <tr>
                        <td>Trading Caravan - "Торговый караван".</td>
                        <td>Даёт большую экономическую выгоду от торговли и продажи дорогих трофеев, позволяя нанимать и содержать дорогих бойцов, а также быстро получить доступ к высококачественному снаряжению.</td>
                        <td>Два бойца с бэкграундом "Caravan hand"(Член каравана).</td>
                        <td>Среднее.</td>
                        <td>Цены на продажу и покупку любых товаров в поселениях улучшаются на 10%.</td>
                        <td>Стартовое значение известности равно нулю, известност зарабатывается в 2 раза медленнее.</td>
                        <td>Средняя</td>
                    </tr>
                
                    <tr>
                        <td>Beast slayers - "Охотники на чудищ".</td>
                        <td>Большее количество трофеев позволит чаще использовать алхимические предметы (яды, зелья и т.д.). а также повысит прибыльность от охоты на чудищ.</td>
                        <td>Три бойца с бэкграундом "Beast slayer"(Убийца чудищ).</td>
                        <td>Среднее.</td>
                        <td>Видят следы других групп на карте мира на большем расстоянии, каждое убитое отрядом чудище имее 50% шанс оставить дополнительный трофей.</td>
                        <td>Цены на продажу и покупку любых товаров в поселениях ухудшаются на 10%.</td>
                        <td>Средняя</td>
                    </tr>
                    <tr>
                        <td>Deserters - "Дезертиры".</td>
                        <td>Старт за дезертиров позволит получать тактическое преимущество в каждой битве на протяжении всей компании, а враждебность одного из благородных домов можно обратить в плюс, совершая рейды на караваны и небольшие вражеские отряды.</td>
                        <td>Три бойца с бэкграундом "Deserter"(Дезертир). Все имеют низкий стартовый показатель морали.</td>
                        <td>Среднее.</td>
                        <td>Все ваши бойцы действуют раньше противника в первом ходу битвы.</td>
                        <td>Вашей смерти желает один из благородных домов, на территории которого вы начинаете компанию.</td>
                        <td>Средняя</td>
                    </tr>
                    <tr>
                        <td>Davkul Cultists - "Культисты Давкула".</td>
                        <td>Огромные преимущества в виде усилений бойцов и мощных артефактов поздней игры, в обмен на жертвоприношения и потерю не согласных с ними бойцов.</td>
                        <td>Четыре бойца с бэкграундом "Cultist"(Культист).</td>
                        <td>Очень слабое.</td>
                        <td>Иногда к вашему отряду могут бесплатно присоединяться другие культисты.
                        Жертвоприношения повышают характеристики культистов в вашей компании,
                        а на поздних этапах могут принести могущественные артефакты,
                        которые крайне сложно добыть компании с другой предысторией.</td>
                        <td>Компания вынуждена с определенной переодичностью приносить жертву Давкулу.
                        Это будет понижать настроение всех НЕ культистов в вашей компании до крайне низкого значения,
                        при котором они могут ее покинуть.</td>
                        <td>Средняя</td>
                    </tr>
                    <tr>
                        <td>Northern Raiders - "Северные налетчики".</td>
                        <td>Возможность получать больше трофеев в сражениях позволяет быстро раздобыть высококачественыне предметы в боях.</td>
                        <td>Три опытных бойца с бэкграундом "Barbarian"(Варвар).</td>
                        <td>Хорошее.</td>
                        <td>Повышенный шанс получить снаряжение с поверженного противника, даже если оно полностью уничтожено.</td>
                        <td>Вы начинаете компанию на крайнем севере, при том, что северный и центральный благородные дома желают вашей смерти.</td>
                        <td>Средняя</td>
                    </tr>
                    <tr>
                        <td>Lone Wolf - "Одинокий волк".</td>
                        <td>Отыгрышь себя любимого в купе с быстрой прокачкой главного бойца, создадут ситуацию, в которой вы сможете выполнять весьма сложные задания, не траятя деньги на плату бойцам.</td>
                        <td>Один крайне опытный боец с бэкграундом "Hedge Knight"(Межевой рыцарь).</td>
                        <td>Отличное.</td>
                        <td>Стартовый боец не требует платы и обладает великолепными характеристиками,
                        вместе с несколькими бесплатными уровнями.</td>
                        <td>Вы не можете иметь под своим командованием более дюжины бойцов,
                        в случае смерти стартового персонажа, компания заканчивается проигрышем.</td>
                        <td>Высокая</td>
                    </tr>



                </table>

                

            

            </div>
        )

    }


}