import React from "react";
//import { render } from "react-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCancerDriverList } from '../../actions/index'
import { fetchBygeneSymbol, fetchGeneSummary } from '../../actions/index';



const formikEnhancer = withFormik({


    mapPropsToValues: props => ({
      geneSymbol: "",
      elementType: [],
      cancerType: [],
      evidenceType: []
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
      const payload = {
        ...values,
        //geneSymbol: values.geneSymbol.map(t => t.value),
        elementType: values.elementType.map(t => t.value),
        cancerType: values.cancerType.map(t => t.value),
        evidenceType: values.evidenceType.map(t => t.value)
      };
      setTimeout(() => {
        //alert(JSON.stringify(payload, null, 2));
        console.log("payload", payload);
        props.fetchGeneSummary(payload.geneSymbol);
        props.fetchCancerDriverList(payload);

        setSubmitting(false);
      }, 1000);
    },
    displayName: "MyForm"
  });
  
const QueryForm = props => {
    
    const {
      values,
      touched,
      dirty,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      setFieldValue,
      setFieldTouched,
      isSubmitting
    } = props;


    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="geneSymbol">Gene name</label>
          <input
            id="geneSymbol"
            className="form-control"
            placeholder="Enter a gene name"
            type="text"
            value={values.geneSymbol}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.geneSymbol && touched.geneSymbol && (
            <div style={{ color: "red", marginTop: ".5rem" }}>{errors.geneSymbol}</div>
          )}
        </div>

        <div className="form-group">
          <ElementTypeSelect
            className="form-control"
            value={values.elementType}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={errors.elementType}
            touched={touched.elementType}
          />
        </div>
        
        <div className="form-group">
          <CancerTypeSelect
            className="form-control"
            value={values.cancerType}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={errors.cancerType}
            touched={touched.cancerType}
          />
        </div>

        <div className="form-group">
          <EvidenceTypeSelect
            className="form-control"
            value={values.evidenceType}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={errors.evidenceType}
            touched={touched.evidenceType}
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn btn-primary mr-2">
          Submit
        </button>
  
        <button
          type="reset"
          className="btn btn-secondary"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
        >
          Reset
        </button>


      </form>
    );
};
  
  const geneSymbolOptions = [
    { value: 'FOXA1', label: 'FOXA1' },
    { value: 'TERT', label: 'TERT' },
    { value: 'lncRNA', label: 'lncRNA' },
    { value: 'CTCF-cohesin insulator', label: 'CTCF-cohesin insulator' },
  ];



  const elementTypeOptions = [
    { value: 'promoter', label: 'promoter' },
    { value: 'enhancer', label: 'enhancer' },
    { value: 'lncRNA', label: 'lncRNA' },
    { value: 'CTCF-cohesin insulator', label: 'CTCF-cohesin insulator' },
  ];
  
  const evidenceTypeOptions = [
    { value: 'experimental validation', label: 'experimental validation' },
    { value: 'computational prediction', label: 'computational prediction' },
    { value: 'gene expression association', label: 'RNA-seq gene expression association' },
    
  ];


  const cancerTypeOptions = [
    { value: 'BRCA', label: 'BRCA, Breast Invasive Carcinoma' },
    { value: 'GBM', label: 'GBM' },
    { value: 'AML', label: 'AML' },
    { value: 'LUAD', label: 'LUAD' },
  ];

  class ElementTypeSelect extends React.Component {

    handleChange = value => {
      // this is going to call setFieldValue and manually update values.topcis
      this.props.onChange("elementType", value);
    };
  
    handleBlur = () => {
      // this is going to call setFieldTouched and manually update touched.topcis
      this.props.onBlur("elementType", true);
    };
  
    render() {
      return (
        <div style={{ margin: "1rem 0" }}>
          <label for="elementType">Element type </label>
          <Select
            id="elementType"
            options={elementTypeOptions}
            isMulti
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
          />
          {!!this.props.error && this.props.touched && (
            <div style={{ color: "red", marginTop: ".5rem" }}>
              {this.props.error}
            </div>
          )}
        </div>
      );
    }
}

class CancerTypeSelect extends React.Component {

    handleChange = value => {
      // this is going to call setFieldValue and manually update values.topcis
      this.props.onChange("cancerType", value);
    };
  
    handleBlur = () => {
      // this is going to call setFieldTouched and manually update touched.topcis
      this.props.onBlur("cancerType", true);
    };
  
    render() {
      return (
        <div style={{ margin: "1rem 0" }}>
          <label for="cancerType">Cancer type </label>
          <Select
            id="cancerType"
            options={cancerTypeOptions}
            isMulti
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
          />
          {!!this.props.error && this.props.touched && (
            <div style={{ color: "red", marginTop: ".5rem" }}>
              {this.props.error}
            </div>
          )}
        </div>
      );
    }
}

class EvidenceTypeSelect extends React.Component {

  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange("evidenceType", value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur("evidenceType", true);
  };

  render() {
    return (
      <div style={{ margin: "1rem 0" }}>
        <label for="evidenceType">Evidence type </label>
        <Select
          id="evidenceType"
          options={evidenceTypeOptions}
          isMulti
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {!!this.props.error && this.props.touched && (
          <div style={{ color: "red", marginTop: ".5rem" }}>
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}



const QueryEnhancedForm = formikEnhancer(QueryForm);

//export default QueryEnhancedForm;


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBygeneSymbol, fetchGeneSummary, fetchCancerDriverList }, dispatch);
}

export default connect(null, mapDispatchToProps)(QueryEnhancedForm);