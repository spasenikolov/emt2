import {useHistory} from "react-router-dom";
import React from "react";

const AuthorAdd = (props) => {
    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        surname:"",
        country: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const surname=formData.surname;
        const country=formData.country;
        props.onAddAuthor(name, surname, country);
        history.push("/authors");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Author name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter author name"
                               onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname">Author surname</label>
                        <input type="text"
                               className="form-control"
                               id="surname"
                               name="surname"
                               required
                               placeholder="Enter author surname"
                               onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Country</label>
                        <select name="country" className="form-control" onChange={handleChange}>
                            {
                                props.countries.map((term) =>
                                    <option value={term.id}>{term.name}</option>
                                )
                            }
                        </select>
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AuthorAdd;