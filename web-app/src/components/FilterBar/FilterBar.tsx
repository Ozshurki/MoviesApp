import React from "react";
import {Formik, Form, Field, validateYupSchema, ErrorMessage} from "formik";
import * as Yup from 'yup'
import TextField from "../../components/TextField/TextField";
import axios from "axios";
import "./FilterBar.css"

interface SearchInt {
    searchField: string;
}

const FilterBar: React.FC = () => {

    const initialValues: SearchInt = {
        searchField: ''
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
        const search = values;

        try {
            const response = await axios.post('http://localhost:5000/api/search',
                {searchField: values.searchField})
        } catch (err) {
            console.log(err);
            return;
        }
        actions.setSubmitting(false);
        actions.resetForm();
    }
    return (
        <div className="filter-container">
            <Formik className="search-form"
                    initialValues={initialValues}
                    onSubmit={onClick}
                    validationSchema={SearchValidate}>
                {({errors,touched}) => (
                    <Form className="search-form" autoComplete="off">
                        <TextField fieldName="search"
                                   fieldText=""
                                   placeholder="Search"/>
                    </Form>
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