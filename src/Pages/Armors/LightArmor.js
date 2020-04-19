import React, { Component } from 'react';
/*import ListGroup from '../Components/ListGroup'
import ListGroupItem from '../Components/ListGroupItem'*/
import './LightArmor.css'
import Image from '../../Components/Image'


export default class Home extends Component {
    render () {
        return(
           <div className='bkg'>

                <h1 className='wordMainTitle'>Лёгкая броня</h1>

                <p>К данному классу брони следует относить ту, которая имеет штраф к fatigue(усталость) от -1 до -12 единиц.<br/>
                    Ниже представлен список всей подобной брони, имеющейся в игре на момент актуальной версии 1.3.0.25.<br/>
                </p>

                <table border="1" cellpadding="5" 
                className='tableLightArmor' >
                    <tr>
                        <td>Название</td>
                        <td>Внешний вид</td>
                        <td>Прочность</td>
                        <td>Штраф к усталости</td>
                        <td>Номинальная стоимость</td>
                    </tr>

                    <tr>
                        <td>Thick furs - "Толстые меха"</td>
                        <td><Image src={require('../Armors/LightArmorImages/ThickFurs.jpg')}></Image></td>
                        <td>30</td>
                        <td>-1</td>
                        <td>40</td>
                    </tr>

                    <tr>
                        <td>Dark Thick Tunic - "Толстая темная туника"</td>
                        <td><Image src={require('../Armors/LightArmorImages/DarkThickTunic.jpg')}></Image></td>
                        <td>35</td>
                        <td>-2</td>
                        <td>75</td>
                    </tr>

                    <tr>
                        <td>Thick Tunic - "Толстая туника"</td>
                        <td><Image src={require('../Armors/LightArmorImages/ThickTunic.jpg')}></Image></td>
                        <td>35</td>
                        <td>-2</td>
                        <td>75</td>
                    </tr>

                    <tr>
                        <td>Animal Hide Armor - "Броня из шкур"</td>
                        <td><Image src={require('../Armors/LightArmorImages/AnimalHideArmor.jpg')}></Image></td>
                        <td>45</td>
                        <td>-3</td>
                        <td>80</td>
                    </tr>

                    <tr>
                        <td>Dark Rugged Surcoat - "Темный грубая накидка"</td>
                        <td><Image src={require('../Armors/LightArmorImages/DarkRuggedSurcoat.jpg')}></Image></td>
                        <td>60</td>
                        <td>-4</td>
                        <td>100</td>
                    </tr>

                    <tr>
                        <td>Padded Surcoat - "Подбитая накидка"</td>
                        <td><Image src={require('../Armors/LightArmorImages/PaddedSurcoat.jpg')}></Image></td>
                        <td>50</td>
                        <td>-4</td>
                        <td>90</td>
                    </tr>

                    <tr>
                        <td>Gambeson - "Гамбезон"</td>
                        <td><Image src={require('../Armors/LightArmorImages/Gambeson.jpg')}></Image></td>
                        <td>65</td>
                        <td>-6</td>
                        <td>150</td>
                    </tr>

                    <tr>
                        <td>Rugged Surcoat - "Темная накидка"</td>
                        <td><Image src={require('../Armors/LightArmorImages/RuggedSurcoat.jpg')}></Image></td>
                        <td>55</td>
                        <td>-6</td>
                        <td>100</td>
                    </tr>

                    <tr>
                        <td>Blotched Gambeson - "Заляпанный гамбезон"</td>
                        <td><Image src={require('../Armors/LightArmorImages/BlotchedGambeson.jpg')}></Image></td>
                        <td>70</td>
                        <td>-7</td>
                        <td>160</td>
                    </tr>

                    <tr>
                        <td>Reinforced Animal Hide Armor - "Укрепленная броня из шкур"</td>
                        <td><Image src={require('../Armors/LightArmorImages/ReinforcedAnimalHideArmor.jpg')}></Image></td>
                        <td>65</td>
                        <td>-7</td>
                        <td>120</td>
                    </tr>

                    <tr>
                        <td>Padded Leather - "Подбитая кожанка"</td>
                        <td><Image src={require('../Armors/LightArmorImages/PaddedLeather.jpg')}></Image></td>
                        <td>80</td>
                        <td>-8</td>
                        <td>200</td>
                    </tr>

                    <tr>
                        <td>Scrap Metal Armor - "Броня из обрезков металла"</td>
                        <td><Image src={require('../Armors/LightArmorImages/ScrapMetalArmor.jpg')}></Image></td>
                        <td>75</td>
                        <td>-8</td>
                        <td>130</td>
                    </tr>

                    <tr>
                        <td>Leather Direwolf Hide Armor - "Кожанная броня с волчьим воротником"</td>
                        <td><Image src={require('../Armors/LightArmorImages/LeatherDireWolfHideArmor.jpg')}></Image></td>
                        <td>100</td>
                        <td>-9</td>
                        <td>500</td>
                    </tr>

                    <tr>
                        <td>Cultist Leather Robe - "Кожанная роба культистов"</td>
                        <td><Image src={require('../Armors/LightArmorImages/CultistLeatherRobe.jpg')}></Image></td>
                        <td>88</td>
                        <td>-9</td>
                        <td>240</td>
                    </tr>

                    <tr>
                        <td>Leather Lamellar Armor - "Ламеллярная броня из кожи"</td>
                        <td><Image src={require('../Armors/LightArmorImages/LeatherLamellarArmor.jpg')}></Image></td>
                        <td>95</td>
                        <td>-10</td>
                        <td>300</td>
                    </tr>

                    <tr>
                        <td>Hide and Bone Armor - "Шкуро-костяная броня"</td>
                        <td><Image src={require('../Armors/LightArmorImages/HideAndBoneArmor.jpg')}></Image></td>
                        <td>95</td>
                        <td>-10</td>
                        <td>220</td>
                    </tr>

                    <tr>
                        <td>Patched Mail Shirt - "Заплатанная кольчужная рубаха"</td>
                        <td><Image src={require('../Armors/LightArmorImages/PatchedMailShirt.jpg')}></Image></td>
                        <td>90</td>
                        <td>-10</td>
                        <td>250</td>
                    </tr>

                    <tr>
                        <td>Basic Mail Shirt - "Обычная кольчужная рубаха"</td>
                        <td><Image src={require('../Armors/LightArmorImages/BasicMailShirt.jpg')}></Image></td>
                        <td>115</td>
                        <td>-12</td>
                        <td>450</td>
                    </tr>

                    <tr>
                        <td>Worn Mail Shirt - "Поношенная кольчужная рубаха"</td>
                        <td><Image src={require('../Armors/LightArmorImages/WornMailShirt.jpg')}></Image></td>
                        <td>110</td>
                        <td>-12</td>
                        <td>400</td>
                    </tr>

                </table>
            

           </div> 
            )

    }


}