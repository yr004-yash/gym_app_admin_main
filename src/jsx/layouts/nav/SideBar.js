import React, {  useEffect,  useReducer, useState } from "react";

import {Collapse} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {MenuList} from './Menu';
/// Scroll
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
/// Link

import calimg from './../../../images/calendar.png';

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active : "",
  activeSubmenu : "",
}


const SideBar = () => {
  const d = new Date();
  const [state, setState] = useReducer(reducer, initialState);
  const handleMenuActive = status => {		
    setState({active : status});			
    if(state.active === status){				
      setState({active : ""});
    }   
  }
  const handleSubmenuActive = (status) => {		
    setState({activeSubmenu : status})
    if(state.activeSubmenu === status){
      setState({activeSubmenu : ""})			
    }    
  }

  //For scroll
  const [hideOnScroll, setHideOnScroll] = useState(true)
	useScrollPosition(
		({ prevPos, currPos }) => {
		  const isShow = currPos.y > prevPos.y
		  if (isShow !== hideOnScroll) setHideOnScroll(isShow)
		},
		[hideOnScroll]
	)
  
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    useEffect(() => {
      MenuList.forEach((data) => {
        data.content?.forEach((item) => {        
          if(path === item.to){         
            setState({active : data.title})          
          }
          item.content?.forEach(ele => {
            if(path === ele.to){
              setState({activeSubmenu : item.title, active : data.title})
            }
          })
        })
    })
    },[path]);
    
  
    return (
      <div className="deznav">
        <div className="deznav-scroll">
            <ul className="metismenu" id="menu">
                {MenuList.map((data, index)=>{
                  let menuClass = data.classsChange;
                    if(menuClass === "menu-title"){
                      return(
                        <li className={menuClass}  key={index} >{data.title}</li>
                      )
                    }else{
                      return(				
                        <li className={`has-menu ${ state.active === data.title ? 'mm-active' : ''}${data.to === path ? 'mm-active' : ''} `}
                          key={index} 
                        >                          
                          {data.content && data.content.length > 0 ?
                            <>
                              <Link to={"#"} 
                                className="has-arrow ai-icon"
                                onClick={() => {handleMenuActive(data.title)}}
                              >								
                                  {data.iconStyle}{" "}
                                  <span className="nav-text">{data.title}
                                    <span className="badge badge-xs style-1 badge-danger ms-2">{data.update}</span>
                                  </span>                                  
                              </Link>
                          
                              <Collapse in={state.active === data.title ? true :false}>
                                <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                  {data.content && data.content.map((data,index) => {									
                                    return(	
                                        <li key={index}
                                          className={`${ state.activeSubmenu === data.title ? "mm-active" : ""}${data.to === path ? 'mm-active' : ''}`}                                    
                                        >
                                          {data.content && data.content.length > 0 ?
                                              <>
                                                <Link to={data.to} className={data.hasMenu ? 'has-arrow' : ''}
                                                  onClick={() => { handleSubmenuActive(data.title)}}
                                                >
                                                  {data.title}
                                                </Link>
                                                <Collapse in={state.activeSubmenu === data.title ? true :false}>
                                                    <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                                      {data.content && data.content.map((data,index) => {
                                                        return(	                                                    
                                                          <li key={index}>
                                                            <Link className={`${path === data.to ? "mm-active" : ""}`} to={data.to}>{data.title}</Link>
                                                          </li>
                                                        )
                                                      })}
                                                    </ul>
                                                </Collapse>
                                              </>
                                            :
                                            <Link to={data.to} 
                                              className={`${data.to === path ? 'mm-active' : ''}`}                                                
                                            >
                                              {data.title}
                                            </Link>
                                          }
                                          
                                        </li>
                                      
                                    )
                                  })}
                                </ul>
                              </Collapse>
                            </>      
                            :
                            <Link  to={data.to} className={`${data.to === path ? 'mm-active' : ''}`}>
                                {data.iconStyle}{" "}
                                <span className="nav-text">{data.title}
                                  <span className="badge badge-xs style-1 badge-danger ms-2">{data.update}</span>
                                </span>                                
                            </Link>
                          }
                        </li>	
                      )
                  }
              })} 
            </ul>
            <div className="add-menu-sidebar">
              <img src={calimg} alt="" className="me-3" />
              <Link to={"/workoutplan"} className="font-w500 mb-0">Create Workout Plan Now</Link>
            </div>
            <div className="copyright">
              <p>
                <strong>Gymove Fitness Admin Dashboard</strong> © {d.getFullYear()} All
                Rights Reserved
              </p>
              <p>
                Made with{" "}
                <span className={`heart`}
                  onClick={(e)=>e.target.classList.toggle('heart-blast')}
                ></span>{" "}
                by DexignZone
              </p>
            </div>
        </div>
      </div>
    );
  
}

export default SideBar;
