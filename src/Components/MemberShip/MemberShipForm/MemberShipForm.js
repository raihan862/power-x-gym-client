import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './MemberShipForm.css'

const MemberShipForm = ({ setUserData, setIsSubmit}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // console.log(data);
        setUserData(data);
        setIsSubmit(true);
    }

    return (
        <Container className="container p-5">
            <h3 className="text-center py-2">Personal Details</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col sm={6}>
                        {/* first name */}
                        <label htmlFor="firstName">First Name</label>
                        <input
                            name="firstName"
                            placeholder="Enter first Name"
                            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                            ref={register({ required: true, maxLength: 20 })}
                        />

                        {/* last name */}
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            name="lastName"
                            placeholder="Enter last Name"
                            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                            ref={register({ required: true, maxLength: 20 })}
                        />
                        {/* date of birth */}
                        <label htmlFor="birthDay">date of birth</label>
                        <input
                            name="birthDay"
                            type="date"
                            className={`form-control ${errors.birthDay ? "is-invalid" : ""}`}
                            ref={register({
                                required: "date of birth is required",

                            })} />

                        {/* Address line 1 */}
                        <label htmlFor="address">Address line 1:</label>
                        <input
                            name="address"
                            placeholder="Enter your address"
                            className={`form-control ${errors.address ? "is-invalid" : ""}`}
                            ref={register({ required: true, maxLength: 30 })}
                        />
                        {/* City */}
                        <label htmlFor="city">City:</label>
                        <input
                            name="city"
                            placeholder="Enter city name"
                            className={`form-control ${errors.city ? "is-invalid" : ""}`}
                            ref={register({ required: true, maxLength: 15 })}
                        />
                    </Col>




                    <Col sm={6}>
                        {/* email */}
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            placeholder="Enter email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            ref={register({
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address format"
                                }
                            })}
                        />
                        <ErrorMessage className="invalid-feedback" name="email" as="div" errors={errors} />

                        {/* phone */}
                        <label htmlFor="phone">Mobile Number</label>
                        <input
                            name="phone"
                            type="number"
                            placeholder="Enter your phone number"
                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                            ref={register({
                                required: "Mobile number is required",
                                minLength: 11,
                                maxLength: 15
                            })} />

                        {/* Gender */}
                        <label htmlFor="gender">Gender</label>
                        <select
                            name="gender"
                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                            ref={register({
                                required: "Mobile number is required",
                            })}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>

                        {/* country */}
                        <label htmlFor="country">Country/Region:</label>
                        <select
                            name="country"
                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                            ref={register({
                                required: "Mobile number is required",
                            })}>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="india">India</option>
                            <option value="nepal">Nepal</option>
                            <option value="bhutan">Bhutan</option>
                        </select>

                        {/* Post code */}
                        <label htmlFor="postCode">Post Code</label>
                        <input
                            name="postCode"
                            placeholder="Enter your post code"
                            className={`form-control ${errors.postCode ? "is-invalid" : ""}`}
                            ref={register({ required: true, maxLength: 8 })}
                        />
                    </Col>
                </Row>
                {/* <input type="submit" /> */}
                <div className="d-flex flex-row-reverse pt-4">
                    <Button className="px-5 submit-btn" type="submit" variant="warning">Next</Button>
                </div>
                
            </form>
        </Container>
    );
};

export default MemberShipForm;