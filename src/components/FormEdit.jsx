import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import '../styles/FormEdit.css'
import axios from 'axios'

const FormEdit = ( { user } ) => {

    const [file,setFile] = useState('')
    const {formUpdate,handleSubmitUpdate, handleFormUpdate} = useAuth()
    // const send = (file) => {
    //     const formData = new FormData();
    //     formData.append( 'file', file );
        // axios.post( `${ server }/user/photo`, formData, {
        //     mode: 'no-cors',
        //     onUploadProgress: () =>
        //     {
        //         // setShow( true )
        //     }
        // } ).then( res =>
        // {
        //     // setShow( false )
        //     if ( res.status === 201 )
        //     {
        //         // navigate( `/user/photo/upload/${ res.data.data._id }` )
        //     }
        // } ).catch( err =>
        // {
        //     console.log( err )
        // } );
    // }

    return (
        <Form className='userEditInfoContainer--form' onSubmit={(e) => {handleSubmitUpdate(e,file)}}>
            <div className='photoContainer'>
                <>
                    {user.picture ?
                        <span>
                            <img className="userinfo__tabel--photo__image" src={user.picture} alt="userPhoto" />
                            <span class="material-icons cameraIcon">
                                photo_camera
                            </span>
                        </span>
                        :
                        <span className="userPicture_none" >
                            {user.email[ 0 ]}
                            <span class="material-icons cameraIcon">
                                photo_camera
                            </span>
                        </span>}
                </>
                <Form.Group className="userEditInfoContainer--form__photo mb-3">
                    <Form.Label htmlFor="file" id="photoLabel">CHANGE PHOTO</Form.Label>
                    <Form.Control
                    id="file"
                    name="photo"
                    type="file"
                    onChange={() =>  {
                        setFile( document.getElementById( 'file' ).files[ 0 ] )
                        // send(file)
                    }} />
                </Form.Group>
            </div>
            <Form.Group className="userEditInfoContainer--form__name mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                name="name"
                value={formUpdate.name}
                onChange={handleFormUpdate}
                type="text"
                placeholder="Enter your name..." />
            </Form.Group>
            <Form.Group className="userEditInfoContainer--form__bio mb-3" >
                <Form.Label>Bio</Form.Label>
                <Form.Control
                name="description"
                value={formUpdate.description}
                onChange={handleFormUpdate}
                as="textarea"
                rows={3}
                placeholder="Enter your bio..." />
            </Form.Group>
            <Form.Group className="userEditInfoContainer--form__phone mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                name="phone"
                value={formUpdate.phone}
                onChange={handleFormUpdate}
                type="number"
                placeholder="Enter your phone..." />
            </Form.Group>
            <Form.Group className="userEditInfoContainer--form__email mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                name="email"
                value={formUpdate.email}
                onChange={handleFormUpdate}
                type="email"
                placeholder="Enter your email..." />
            </Form.Group>
            <Form.Group className="userEditInfoContainer--form__password mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                name="password"
                value={formUpdate.password}
                onChange={handleFormUpdate}
                type="password"
                placeholder="Enter your password..." />
            </Form.Group>
            <Button variant="primary" type="submit" className="userEditInfoContainer--form__button" onClick={(e)=> {
            }}>Save</Button>
        </Form>
    )
}

export default FormEdit