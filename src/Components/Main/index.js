import { useEffect, useState } from "react";
import "./style.css"
import { Object1 } from "./object1";
import { Object2 } from "./object2";
import { Object3 } from "./object3";
import { Object4 } from "./object4";
import { House1, House2, House3, House4, House5, House6, House7, House8, House9, House10,
    // House11, House12, House13, House14, House15, House16, House17, House18, House19, House20, 
    //  House21, House22, House23, House24, House25
    } from "./houses";
import { UseAppContext } from "../../context";
import CellBlock from "./cellBlock";
import { FaBars, FaRegWindowClose, FaPowerOff } from "react-icons/fa";
import { MdOutlineMenu, MdPowerSettingsNew, MdOutlineClose } from "react-icons/md";
import LoadingIcons from 'react-loading-icons'


const Main = ()=>{
    const {AToB, AToC, AToD, BToC, BToD, CToD, loading, setLoading,
        sideboard, setSideBoard,start, setStart} = UseAppContext()


const setSideBoardValue =()=>{
    setSideBoard(!sideboard)
}

setTimeout(() => {
    setLoading(false)
}, 2000);

if(loading){
    return <div className="loading-board">
        <LoadingIcons.BallTriangle /></div>
}

    return <div className='cellBoard'>
        <CellBlock />
        <Object1 />
        <Object2 />
        <Object3 />
        <Object4 />
        <House1 />
        <House2 />
        <House3 />
        <House4 />
        <House5 />
        <House6 />
        <House7 />
        <House8 />
        <House9 />
        <House10 />
        {/* <House11 />
        <House12 />
        <House13 />
        <House14 />
        <House15 />
        <House16 />
        <House17 />
        <House18 />
        <House19 />
        <House20 />
        <House21 />
        <House22 />
        <House23 />
        <House24 />
        <House25 /> */}
    <div className="menu-btn" onClick={setSideBoardValue} >
        {sideboard ? 
        <MdOutlineClose className="menu-icon2" /> :
        <MdOutlineMenu className="menu-icon1"/>
        }
    </div>
    <div className="toggle-btn" onClick={()=>setStart(!start)} >
       {!sideboard && 
       <>
        {start ?
        <MdPowerSettingsNew className="toggle-icon1"/> :
        <MdPowerSettingsNew className="toggle-icon2"/>}
      </>
       }
    </div>
    <aside className="sideboard" style={sideboard? {transform:"translateX(0%)", width:"15rem", transition:"all 0.5s"} : 
    {transform: "translateX(100%)", width:"15rem", transition:"all 2s", zIndex:"2"}}>
        <div className="sideboard-heading">Relative Distances</div>
        <article>
            <strong>A to B</strong>
            <div>Direct distance: {AToB.main}</div>
            <div>Distance on X-Axis: {AToB.x}</div>
            <div>Distance on Y-Axis: {AToB.y}</div>
        </article><br/>
        <article>
            <strong>A to C</strong>
            <div>Direct distance: {AToC.main}</div>
            <div>Distance on X-Axis: {AToC.x}</div>
            <div>Distance on Y-Axis: {AToC.y}</div>
        </article><br/>
        <article>
            <strong>A to D</strong>
            <div>Direct distance: {AToD.main}</div>
            <div>Distance on X-Axis: {AToD.x}</div>
            <div>Distance on Y-Axis: {AToD.y}</div>
        </article><br/>

        <article>
            <strong>B to C</strong>
            <div>Direct distance: {BToC.main}</div>
            <div>Distance on X-Axis: {BToC.x}</div>
            <div>Distance on Y-Axis: {BToC.y}</div>
        </article><br/>
        <article>
            <strong>B to D</strong>
            <div>Direct distance: {BToD.main}</div>
            <div>Distance on X-Axis: {BToD.x}</div>
            <div>Distance on Y-Axis: {BToD.y}</div>
        </article><br/>
        <article>
            <strong>C to D</strong>
            <div>Direct distance: {CToD.main}</div>
            <div>Distance on X-Axis: {CToD.x}</div>
            <div>Distance on Y-Axis: {CToD.y}</div>
        </article><br/>
        <div className="credit">
        Houses and Cars Vectors by <a href="https://www.vecteezy.com/free-vector/house"><em>Vecteezy</em></a>
        <br/>
        Designed by <a href="https://www.smartegbuchulem.co"><em>Smart Egbuchulem</em></a>
        </div>
    {/* <button 
    style={{position:"absolute"}} className="toggle-regions"
     onClick={()=>setStart(!start)}
     >{start ? `Hide Regions`: `Show Regions`}
     </button> */}
    </aside>
    <div className="footer"></div>
    </div>
}

export default Main