import React from "react";
import {Formik, Form, Field, validateYupSchema, ErrorMessage} from "formik";
import * as Yup from 'yup'
import TextField from "../../components/TextField/TextField";
import axios from "axios";
import "./FilterBar.css"
import {searchInterface} from "../../shared/interfaces/SearchInterface";


const FilterBar: React.FC<searchInterface> = ({searchValue, setSearchValue}) => {

    const initialValues: searchInterface = {
        searchValue: '',
        setSearchValue: ''
    };

    const SearchValidate = Yup.object().shape({
        search: Yup.string().min(2, 'Must be at least 1 character')
    });

    const getError = (error: string | undefined, touch: boolean | undefined) => {
        if (error && touch)
            return error;
        return '';
    }

    const onClick = async (values: any, actions: any) => {
        try {
            const response = await axios.post('http://localhost:5000/api/search',
                {searchValue: values.searchValue})
        } catch (err) {
            console.log(err);
            return;
        }
        actions.setSubmitting(false);
        actions.resetForm();
    }
    return (
        <div className="filter">
            <Formik className="search-form"
                    initialValues={initialValues}
                    onSubmit={onClick}
                    validationSchema={SearchValidate}>
                {({errors, touched}) => (
                    <Field
                        className="search-field"
                        type="search"
                        name="search"
                        onChange={(event: any) => setSearchValue(event.target.value)}
                        placeholder="Search"/>
                )}
            </Formik>
            <div className="genres">
                <button>Action</button>
                <button>Horror</button>
                <button>Drama</button>
                <button>Comedy</button>
            </div>
        </div>
    )
}

export default FilterBar;