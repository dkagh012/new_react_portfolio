import React from 'react';
import red from '../images/red.png';
import blue from '../images/blue.png';
import green from '../images/green.png';
import pink from '../images/pink.png';
import './Wrapper.css';

function Wrapper(){
    return (
        <body>

        <div class="wrapper">
            <ul class="team">
                <li class="team-item">
                    <div class="profile">
                    <img src={red}/>
                        <div class="profile-contents">
                            <h2>Liam <span>CEO</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</p>
                        </div>
                    </div>
                </li>
                <li class="team-item">
                    <div class="profile profile_beige">
                    <img src={blue}/>
                        <div class="profile-contents">
                            <h2>Coco <span>Mood Maker</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</p>
                        </div>
                    </div>
                </li>
                <li class="team-item">
                    <div class="profile profile_green">
                    <img src={green}/>
                        <div class="profile-contents">
                            <h2>Olivia <span>Designer</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</p>
                        </div>
                    </div>
                </li>

                <li class="team-item">
                    <div class="profile profile_purple">
                    <img src={pink}/>
                        <div class="profile-contents">
                            <h2>Ella <span>Back-end</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <script></script>
    </body>

    );
}

export default Wrapper;

