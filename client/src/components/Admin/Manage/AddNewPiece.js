import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addNewArtPiece } from '../../../store/actions/art'
import { Redirect } from 'react-router-dom';
import Menu from '../../AssetsPieces/Menu/Menu';
import { useSelector } from "react-redux";
import ManageLayout from '../../AssetsPieces/Layouts/ManageLayout'
import Footer from '../../Guset/Home/Footer/Footer';

const AddNewPiece = () => {
    const user = useSelector(state => state.authReducer.user)

    const [values, setValues] = useState({
        picture: '',
        artist: '',
        description: '',
        loading: false,
        error: '',
        createdArtPiece: '',
        redirectToProfile: false,
        formData: new FormData(),
    });

    const {
        picture,
        artist,
        description,
        loading,
        error,
        createdArtPiece,
        redirectToProfile,
        formData
    } = values;


    // useEffect(() => {
    // }, []);
    const dispatch = useDispatch()

    const handleChange = name => event => {
        const value = name === 'picture' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });
        dispatch(addNewArtPiece(formData)).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    picture: '',
                    artist: '',
                    description: '',
                    loading: false,
                    redirectToProfile: true,
                    createdArtPiece: data.name
                });
            }
        });
    };

    const newPostForm = () => (

        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input
                        onChange={handleChange('picture')}
                        type="file"
                        id="floatingInput"
                        required='required'
                        name="picture"
                        accept="image/*"
                    />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">
                    Artist
                                </label>
                <input onChange={handleChange('artist')}
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    required='required'
                    value={artist} />
            </div>

            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')}
                    className="form-control"
                    id="floatingInput"
                    required='required'
                    value={description} />
            </div>

            <button class="w-100 btn btn-warning mt-4">Add New</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdArtPiece ? '' : 'none' }}>
            <h2>{`${createdArtPiece}`} is created!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );
    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/admin/dashboard" />;
            }
        }
    };
    const FinalForm = () => {
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                    {redirectUser()}
                </div>
            </div>
        )
    }
    return (
        <div>
            <Menu user={user} />
            <ManageLayout HeaderPage={`Hello Mr ${user.userName}`}
                Description={`As Admin your go to add a new Piece to Museum`}
                childern={FinalForm()} className="container m-3">

            </ManageLayout>

            <Footer />
        </div>
    );
};

export default AddNewPiece;