
import arrow from '../Images/icons8-sort-right-30.png'
import bot from '../Images/Bot.png'
import decoreimg from '../Images/Untitled Project.jpg'
import done from '../Images/icons8-done-64.png'
import puzzle from '../Images/icons8-puzzle-64.png'
import confi from '../Images/icons8-self-confidence-64.png'
import refund from '../Images/icons8-exchange-dollar-96.png'
import secure from '../Images/icons8-secure-48.png'
import clock from '../Images/icons8-clock-32.png'
import styled from "styled-components"
import { useState } from 'react'
import Multistep from '../Component/Homelogin'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    const [onvideo, setonvideo] = useState(false)
    const {auth,data}=useSelector((store)=> store.loginreducer)
    console.log(auth,data)
    return <DIV onvideo={onvideo}>
        <div id='textrelative'>
            <div id='textimg'>
                <b>
                <div style={{ textAlign: 'center', color: '#202124', margin: '20px 0' }}>
                <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '0' }}>THE FASTEST, EASIEST WAY</h1>
                <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#1A73E8' }}> TO DO YOUR TAX RETURN.</h1>
                </div>

                </b>
            </div>
            
        </div>
        <div width='100%' className='formdiv'>
            
            <div id="form" >
                <button 
                    id="videobutton"
                     style={{border:'2px solid grey'}}
                      onClick={() => setonvideo(true)}>
                        <img src={bot} id='firstimg' alt="" /> 
                        Watch the Video 
                        <img style={{ paddingTop: '4px', width: '20px' }} src={arrow} alt="" />
                    </button>
                <Multistep />
        
            </div>
        </div>


        <div id='afterimg' >
            <div id='firstdivres'>
                
                <div id='firstdivrestext' >
                <div style={{ textAlign: 'center', padding: '20px', color: '#333' }}>
    <h1 style={{ fontSize: '27px', fontWeight: 'bold', color: '#202124' }}>
        How Does <span style={{ color: '#4285F4' }}>TaxEase</span> Work?
    </h1>
    <h2 style={{ fontSize: '24px', fontWeight: '500', color: '#5f6368' }}>
        It's quite easy actually!
    </h2>
    
</div>

                    <div >
                        <h1 className='headfirst' ><img src={done} alt="" />  <b>Register with TaxEase</b></h1>
                        <p className='headpara'>Sign up using your PAN card for quick and secure access.</p>
                        <br />
                        <h1 className='headfirst' ><img src={done} alt="" />  <b>Chat with Taxify.AI</b></h1>
                        <p className='headpara'>Get personalized tax guidance and maximize your deductions before filing.</p>
                        <br />
                        <h1 className='headfirst'><img src={done} alt="" />  <b>File & Pay with Ease</b></h1>
                        <p className='headpara'> Submit your tax return securely and hassle-free.</p>
                        <br />
                        <div style={{ display: 'flex', gap: '20px' }}>
                        <a href='https://taxassistantapp-ngw3e9zhm2qrsp3rmtaye6.streamlit.app/' target='_blank' rel='noopener noreferrer'>
  <button 
    id='buttontwo' 
    style={{
      backgroundColor: '#4285F4', /* Google Blue */
      color: 'white',
      fontWeight: '600',
      fontSize: '16px',
      padding: '10px 20px',
      borderRadius: '4px', /* Rounded corners */
      border: 'none',
      cursor: 'pointer',
      transition: 'background 0.3s ease-in-out',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', /* Subtle shadow */
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = '#357AE8'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#4285F4'}
    onMouseDown={(e) => e.target.style.backgroundColor = '#2A65C4'}
    onMouseUp={(e) => e.target.style.backgroundColor = '#357AE8'}
  >
    GET STARTED
  </button>
</a>
</div>

                    </div>

                </div>

            </div>
            <div  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#DAEFF4" fillOpacity="1" d="M0,288L60,256C120,224,240,160,360,122.7C480,85,600,75,720,90.7C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                <div style={{ backgroundColor: "#DAEFF4" }}>
                <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '10px' }}>
        Why Should I Use <span style={{ color: '#4285F4' }}>TaxEase</span> to File My Personal or Company Tax Return?
    </h1>
    <h1 style={{ fontSize: '28px', fontWeight: '600', color: '#5f6368' }}>
        Great Question!
    </h1>
    <br />
    <p>Let's talk taxes!  Answer a few simple questions, and I'll prepare and file your tax return seamlessly.</p>
    <br />
    <br />
    <div id='arrangegrid'>
        <div className='griddiv'>
            <h1 className='griddivhead'>
                <img src={puzzle} style={{ display: 'block', width: '45px', marginRight: '20px' }} alt="" />
                <b> AI-Powered Tax Recommendations</b>
            </h1>
            <br />
            <p>Get smart suggestions for deductions and tax-saving investments.</p>
        </div>
        <div className='griddiv'>
            <h1 className='griddivhead'>
                <img src={confi} style={{ display: 'block', width: '45px', marginRight: '20px' }} alt="" />
                <b>PAN Card Authentication</b>
            </h1>
            <br />
            <p>Secure and hassle-free registration using your PAN card.</p>
        </div>
        <div className='griddiv'>
            <h1 className='griddivhead'>
                <img src={refund} style={{ display: 'block', width: '55px', marginRight: '20px' }} alt="" />
                <b> Quick & Easy Filing</b>
            </h1>
            <br />
            <p>Automated calculations ensure accuracy and speed.</p>
        </div>
        <div className='griddiv'>
            <h1 className='griddivhead'>
                <img src={secure} style={{ display: 'block', width: '65px', marginRight: '6px' }} alt="" />
                <b>Multi-Platform Access</b>
            </h1>
            <br />
            <p>Sync your data securely across devices for convenience.
</p>
        </div>
        <div className='griddiv'>
            <h1 className='griddivhead'>
                <img src={clock} style={{ display: 'block', width: '50px', marginRight: '20px' }} alt="" />
                <b>Maximize Your Refund, Minimize Tax Liability</b>
            </h1>
            <br />
            <p> AI checks all eligible deductions to reduce tax liability.</p>
        </div>
    </div>
</div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#DAEFF4" fillOpacity="1" d="M0,160L80,138.7C160,117,320,75,480,96C640,117,800,203,960,245.3C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>

              
                <div style={{ backgroundColor: '#F8F9FA', padding: '40px 20px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#202124' }}>
                        Who Uses <span style={{ color: '#4285F4' }}>TaxEase?</span>
                    </h1>
                    
                    <p style={{ fontSize: '18px', color: '#5F6368', maxWidth: '600px', margin: '10px auto' }}>
                        TaxEase has helped <b>us.</b>
                    </p>

                    <div id='thriddivcontainer' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
                        
                        <div className='thirddiv' style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
                        maxWidth: '350px',
                        textAlign: 'center'
                        }}>
                        <img src={bot} alt="User Feedback" style={{ width: '50px', height: '50px' }} />
                        <h1 style={{ fontSize: '18px', fontWeight: '500', color: '#202124', marginTop: '10px' }}>
                        "TaxEase made tax filing effortless! The AI-powered recommendations helped me maximize my deductions, and the process was quick and seamless. I simply uploaded my Form 16, answered a few questions, and my return was filed accurately. Highly recommend for hassle-free tax filing!" – <b>Keerthi</b>
                        </h1>
                        </div>

                        <div className='thirddiv' style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
                        maxWidth: '350px',
                        textAlign: 'center'
                        }}>
                        <img src={bot} alt="User Feedback" style={{ width: '50px', height: '50px' }} />
                        <h1 style={{ fontSize: '18px', fontWeight: '500', color: '#202124', marginTop: '10px' }}>
                        "Filing my taxes has never been this easy! TaxEase guided me step by step, ensuring I claimed all eligible deductions. The AI recommendations and PAN authentication made the process smooth and accurate. Definitely a game-changer for stress-free tax returns!" – <b>Upendra</b>
                        </h1>
                        </div>

                    </div>
</div>

                <div>
                   
                </div>
            </div>
        </div>

    </DIV>
}

export default Home

const DIV = styled.div`
#imgback{
    display:block;
    position:absolute;
    width:100%; 
}
#textimg{
      position: relative;
    text-align: left;
    top: 180px;
    /* left: 10%; */
    font-size: 30px;
    width: 100%;
}
#textrelative{
    // margin-top: 55px;
    // position: absolute;
    width: 100%;
    pointer-events:all;
}
#videobutton{
    position:relative;
    display:${({ onvideo }) => onvideo ? 'none' : 'flex'};
    font-size:18px;
    background-color:white;
    padding:10px 10px 5px 100px;
    border-radius:5px;
    top:70px;
    right:150%;
}

#vedio{
    display:${({ onvideo }) => onvideo ? 'flex' : 'none'};
}
#firstimg{
    position:absolute;
    width:100px;
    top:-180.5%;
    left:1%;
}

#form{
    position:relative;
    width:95%
    right:-63%;
    top:15%;
}
.formdiv{
    position: relative;
    height: 700px;
}
#firstdivres{
    display: flex;
    justify-content:space-evenly;
    gap: 100px;
    width: 100%;
}
#firstdivresimg{
    width: 30%;
}
#afterimg{
    margin-top: 25%;
}
#firstdivrestext{
    padding: 20px 25px;
    text-align: left;
    width: 50%;
}
#arrangegrid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 35px;
    padding: 40px 80px;
}
#gridlogo{
    display: grid;
    grid-template-columns: repeat(4,1fr);
}
.headfirst{
    display: flex;
    font-size:19px;
}
.headfirst img{
    display: block;
    width: 28px;
    margin-right: 15px;
}
.headpara{
    padding-left: 45px;
}
#buttonone{
    border:2px solid grey;
    padding: 5px 25px;
    border-radius:5px;
}
#buttontwo{
    background-color: green;
    color: white;
    border-radius:5px;
    padding:5px 25px;
}
.griddiv{
    background-color:white;
    padding: 10px 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius:6px;
}
.griddivhead{
    display: flex;
    justify-content:center;
    align-items:center;
    font-size:24px;
}
.secondgrid{
    margin: auto;
    padding: 10px 20px;
}
.secondgridimg{
    width: 200px;
    margin: auto;
}
#thriddivcontainer{
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    padding: 20px 40px;
}
.thirddiv{
    background-color:white;
    border: 2px solid grey;
    border-radius: 10px;
    padding: 50px 5px;
    width: 30%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.thirddiv img{
    display: block;
    width: 50px;
    margin: auto;
}
@media screen and (min-width: 719px) and (max-width: 1321px){
    #textimg{
        position:relative;
        text-align:left;
        top: 9rem;
        left:10%;
        font-size:27px;
        width:90%;
    }
    #videobutton{
        position:relative;
        display:${({ onvideo }) => onvideo ? 'none' : 'flex'};
        font-size:18px;
        background-color:white;
        padding:10px 10px 5px 100px;
        border-radius:5px;
    }
    #vedio{
        display:${({ onvideo }) => onvideo ? 'flex' : 'none'};
    }
    #form{
        // display:none;
    } 
    .formdiv{
        position: relative;
        // height: 350px;
    }
    #firstdivres{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    #firstdivresimg{
        width: 70%;
    }
    #firstdivrestext{
        padding: 20px 25px;
        text-align: left;
        width: 90%;
    }
    #arrangegrid{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 35px;
        padding: 0px 80px;
    }
    #gridlogo{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap:20px;
    }
    #afterimg{
        margin-top: 29%;
    }
}

@media screen and (min-width: 500px) and (max-width: 719px){
    #textimg{
        position:relative;
        text-align:left;
        top:50px;
        left:10%;
        font-size:17px;
        width:90%;
    }
    #form{
        // display:none;
    } 
    .formdiv{
        position: relative;
        height: 100%;
        transform: translateX(-25%);
    }
    #videobutton{
        position:relative;
        display:${({ onvideo }) => onvideo ? 'none' : 'flex'};
        font-size:18px;
        background-color:white;
        padding:10px 10px 5px 100px;
        border-radius:5px;
    }
    #vedio{
        display:${({ onvideo }) => onvideo ? 'flex' : 'none'};
    }
    #firstdivres{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    #firstdivresimg{
        width: 90%;
    }
    #firstdivrestext{
        padding: 20px 25px;
        text-align: left;
        width: 90%;
    }
    #arrangegrid{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        gap: 35px;
        padding: 0px 80px;
    }
    #gridlogo{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        gap:20px;
    }
    #thriddivcontainer{
        display: flex;
        flex-direction:column;
    }
    .thirddiv{
        border: 2px solid grey;
        border-radius: 10px;
        padding: 50px 0px;
        margin:auto;
        width: 90%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    #firstimg{
        position:absolute;
        width:70px;
        top:-100.5%;
        left:1%;
    }
}

@media screen and (max-width: 500px){
    #textimg{
        position:relative;
        text-align:left;
        top:50px;
        left:10%;
        font-size:10px;
        width:90%;
    }
    #videobutton{
        position: relative;
        display: none;
        font-size: 18px;
        background-color: white;
        padding: 10px 10px 5px 100px;
        border-radius: 5px;
    }
    #vedio{
        display:${({ onvideo }) => onvideo ? 'flex' : 'none'};
    }
    #form{
    position:relative;
    top:65%;
    width:80%;
    transform: translateX(13%);
}
    .formdiv{
        position: relative;
        height: 100%;
                margin-top: 120px;
    }
    #firstdivres{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    #firstdivresimg{
        width: 90%;
    }
    #firstdivrestext{
        padding: 20px 25px;
        text-align: left;
        width: 90%;
    }
    #arrangegrid{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        gap: 35px;
        padding: 0px 80px;
    }
    #gridlogo{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        gap:20px;
    }
    #thriddivcontainer{
        display: flex;
        flex-direction:column;
    }
    .thirddiv{
        border: 2px solid grey;
        border-radius: 10px;
        padding: 50px 0px;
        margin:auto;
        width: 90%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    #firstimg{
        position:absolute;
        width:50px;
        top:-43.5%;
        left:1%;
    }
}
`