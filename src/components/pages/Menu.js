import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom'

function menu() {
    return (
        <div className='menu'>
            <div className='soups'>
                <div class="cards">
                    <img src='https://shorturl.at/bdhk1' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Soups'>
                            Soups
                        </Link>
                    </div>
                </div>
            </div>
            <div className='salad'>
                <div class="cards">
                    <img src='https://www.recipetineats.com/wp-content/uploads/2021/08/Garden-Salad_47-SQ.jpg?w=500&h=375&crop=1' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Salad'>
                            Salad
                        </Link>
                    </div>
                </div>
            </div>
            <div className='appetizers'>
                <div class="cards">
                    <img src='https://rb.gy/v4420d' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Appetizers'>
                            Appetizers
                        </Link>
                    </div>
                </div>
            </div>
            <div className='tandoor'>
                <div class="cards">
                    <img src='https://rb.gy/l7eixm' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Tandoori'>
                            Tandoori
                        </Link>
                    </div>
                </div>
            </div>
            <div className='platters'>
                <div class="cards">
                    <img src='https://shorturl.at/svKO1' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Platters'>
                            Platters
                        </Link>
                    </div>
                </div>
            </div>
            <div className='egg'>
                <div class="cards">
                    <img src='https://www.lekhafoods.com/media/202155/masala-omelette.jpg' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Egg'>
                            Egg
                        </Link>
                    </div>
                </div>
            </div>
            <div className='livebbq'>
                <div class="cards">
                    <img src='https://rb.gy/pptglf' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Bbq'>
                            Live BBQ
                        </Link>
                    </div>
                </div>
            </div>
            <div className='barbite'>
                <div class="cards">
                    <img src='https://shorturl.at/vAZ24' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Barbites'>
                            Bar Bites
                        </Link>
                    </div>
                </div>
            </div>
            <div className='sandwich'>
                <div class="cards">
                    <img src='https://t.ly/qSt7y' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Sandwich'>
                            Sandwich
                        </Link>
                    </div>
                </div>
            </div>
            <div className='pasta'>
                <div class="cards">
                    <img src='https://shorturl.at/hos59' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Pasta'>
                            Pasta
                        </Link>
                    </div>
                </div>
            </div>
            <div className='pizza'>
                <div class="cards">
                    <img src='https://rb.gy/s95zax' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Pizza'>
                            Pizza
                        </Link>
                    </div>
                </div>
            </div>
            <div className='breads'>
                <div class="cards">
                    <img src='https://shorturl.at/sBGHQ' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Breads'>
                            Breads
                        </Link>
                    </div>
                </div>
            </div>
            <div className='maincourse'>
                <div class="cards">
                    <img src='https://rb.gy/gc46ot' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Maincourse'>
                            Maincourse
                        </Link>
                    </div>
                </div>
            </div>
            <div className='rice'>
                <div class="cards">
                    <img src='https://t.ly/wQNN1' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Rice'>
                            Rice
                        </Link>
                    </div>
                </div>
            </div>
            <div className='noodles'>
                <div class="cards">
                    <img src='https://www.chewoutloud.com/wp-content/uploads/2021/05/lo-mein-square.jpg' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Noodles'>
                            Noodles
                        </Link>
                    </div>
                </div>
            </div>
            <div className='milkshake'>
                <div class="cards">
                    <img src='https://t.ly/ZQxPW' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Milkshake'>
                            Milkshake
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className='mocktails'>
                <div class="cards">
                    <img src='https://shorturl.at/uCMQW' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Mocktails'>
                            Mocktails
                        </Link>
                    </div>
                </div>
            </div> */}
            <div className='dessert'>
                <div class="cards">
                    <img src='https://shorturl.at/dDPQU' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Dessert'>
                            Desserts
                        </Link>
                    </div>
                </div>
            </div>
            <div className='cocktail'>
                <div class="cards">
                    <img src='https://shorturl.at/qrNU0' alt='avatar'></img>
                    <div class="container">
                        <Link to='/Cocktail'>
                            Beer Cocktail
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default menu; 