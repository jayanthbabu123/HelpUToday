import React from 'react';
import Modal from 'react-awesome-modal'

const CustomModal = (props) => (
    <section>
        <Modal visible={props.visible} width="600" height="500" effect="fadeInDown" onClickAway={props.handlCloseModal}>
            <div className="p-4">
                <h2 className="text-center theme-blue">{props.subTitle}</h2>
                <p className="text-center">Let's fill the details to get served</p>
                <form onSubmit={props.handleBookService}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="Name">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="fullName"
                                    value={props.fullName}
                                    onChange={props.handleOnChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="Number">phone Number:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Mobile number"
                                    name="phoneNumber"
                                    value={props.phoneNumber}
                                    onChange={props.handleOnChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="date">date:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    value={props.date}
                                    onChange={props.handleOnChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="Address">Address:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={props.address}
                                    onChange={props.handleOnChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="comment">Comments:</label>
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    name="comments"
                                    value={props.comments}
                                    onChange={props.handleOnChange}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="pb-2">
                        <button type="submit" className="btn btn-sm btn-success float-right" >SUBMIT</button>
                    </div>
                </form>
                <button className="btn btn-sm btn-danger float-left" onClick={props.closeModal}>CANCEL</button>
            </div>
        </Modal>
    </section>
);
export default CustomModal;