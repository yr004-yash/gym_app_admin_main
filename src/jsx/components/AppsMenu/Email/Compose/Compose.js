// import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
// import DropFile from "./DropFile";

// import PageTitle from "../../../../layouts/PageTitle";

// const Compose = () => {
//    const [openMailBar, setOpenMailBar] = useState();
//    return (
//       <Fragment>
//          <PageTitle activeMenu="Compose" motherMenu="Email" />

//          <div className="row">
//             <div className="col-lg-12">
//                <div className="card">
//                   <div className="card-body">
//                         <div className="row">
//                            <div className={`col-lg-3 email-left-body ${openMailBar ? "active" : " "}`}>
//                               <div className="email-left-box">
//                                  <div className="p-0">
//                                     <Link
//                                        to="/email-compose"
//                                        className="btn btn-primary btn-block"
//                                     >
//                                        Compose
//                                     </Link>
//                                  </div>
//                                  <div className="mail-list mt-4 rounded">
//                                     <Link
//                                        to="/email-inbox"
//                                        className="list-group-item active"
//                                     >
//                                        <i className="fa fa-inbox font-18 align-middle me-2"></i>
//                                        Inbox
//                                        <span className="badge badge-secondary badge-sm text-white float-end">
//                                           198
//                                        </span>
//                                     </Link>
//                                     <Link
//                                        to="/email-compose"
//                                        className="list-group-item"
//                                     >
//                                        <i className="fa fa-paper-plane font-18 align-middle me-2"></i>
//                                        Sent
//                                     </Link>
//                                     <Link
//                                        to="/email-compose"
//                                        className="list-group-item"
//                                     >
//                                        <i className="fas fa-star font-18 align-middle me-2"></i>
//                                        Important
//                                        <span className="badge badge-danger text-white badge-sm float-end">
//                                           47
//                                        </span>
//                                     </Link>
//                                     <Link
//                                        to="/email-compose"
//                                        className="list-group-item"
//                                     >
//                                        <i className="mdi mdi-file-document-box font-18 align-middle me-2"></i>
//                                        Draft
//                                     </Link>
//                                     <Link
//                                        to="/email-compose"
//                                        className="list-group-item"
//                                     >
//                                        <i className="fa fa-trash font-18 align-middle me-2"></i>
//                                        Trash
//                                     </Link>
//                                  </div>
//                                  <div className="mail-list mt-4 rounded overflow-hidden">
//                                     <div className="intro-title d-flex justify-content-between my-0">
//                                        <h5>Categories</h5>
                                       
//                                     </div>
//                                     <Link to="/email-inbox" className="list-group-item">
//                                        <span className="icon-warning">
//                                           <i className="fa fa-circle"/>
//                                        </span>
//                                        Work
//                                     </Link>
//                                     <Link to="/email-inbox" className="list-group-item">
//                                        <span className="icon-primary">
//                                           <i className="fa fa-circle" />
//                                        </span>
//                                        Private
//                                     </Link>
//                                     <Link to="/email-inbox" className="list-group-item">
//                                        <span className="icon-success">
//                                           <i className="fa fa-circle" />
//                                        </span>
//                                        Support
//                                     </Link>
//                                     <Link to="/email-inbox" className="list-group-item">
//                                        <span className="icon-dpink">
//                                           <i className="fa fa-circle" />
//                                        </span>
//                                        Social
//                                     </Link>
//                                  </div>
//                               </div>
//                            </div>
//                            <div className="col-lg-9">                        
//                               <div className="email-right-box">
//                                  <div className="d-flex align-items-center">
//                                     <h4 className="card-title d-sm-none d-block">Email</h4>
//                                     <div className={`email-tools-box float-end mb-2 ${openMailBar ? "active" : " "}`} onClick={()=>setOpenMailBar(!openMailBar)}>	
//                                        <i className="fa-solid fa-list-ul"></i>
//                                     </div>
//                                  </div> 
                                 
//                                  <div className="compose-content">
//                                     <form action="#">
//                                        <div className="form-group">
//                                           <input
//                                              type="text"
//                                              className="form-control bg-transparent"
//                                              placeholder=" To:"
//                                           />
//                                        </div>
//                                        <div className="form-group">
//                                           <input
//                                              type="text"
//                                              className="form-control bg-transparent"
//                                              placeholder=" Subject:"
//                                           />
//                                        </div>
//                                        <div className="form-group">
//                                           <textarea
//                                              id="email-compose-editor"
//                                              className="textarea_editor form-control bg-transparent"
//                                              rows="8"
//                                              placeholder="Enter text ..."
//                                           ></textarea>
//                                        </div>
//                                     </form>
//                                     <h5 className="mb-4">
//                                        <i className="fa fa-paperclip"></i> Attatchment
//                                     </h5>
//                                     <DropFile />
//                                  </div>
//                                  <div className="text-left mt-4 ">
//                                     <button
//                                        className="btn btn-primary btn-sl-sm me-2"
//                                        type="button"
//                                     >
//                                        <span className="me-2">
//                                           <i className="fa fa-paper-plane"></i>
//                                        </span>
//                                        Send
//                                     </button>
//                                     <button
//                                        className="btn btn-danger light btn-sl-sm"
//                                        type="button"
//                                     >
//                                        <span className="me-2">
//                                           <i
//                                              className="fa fa-times"
                                             
//                                           ></i>
//                                        </span>
//                                        Discard
//                                     </button>
//                                  </div>
//                               </div>
//                            </div>
//                         </div>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </Fragment>
//    );
// };

// export default Compose;
