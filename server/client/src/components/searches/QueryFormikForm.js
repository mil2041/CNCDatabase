import React from "react";
//import { render } from "react-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Papa from "papaparse";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCancerDriverList } from '../../actions/index';
import { fetchBygeneSymbol, fetchGeneSummary } from '../../actions/index';

import geneNameData from './data/functional_element_with_snv_by_cancer_merged_May_15_2019_unique_geneName.csv';
//import geneNameData from './data/test.csv';









const formikEnhancer = withFormik({


    mapPropsToValues: props => ({
      geneSymbol: [],
      elementType: [],
      cancerType: [],
      evidenceType: []
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
      const payload = {
        ...values,
        geneSymbol: values.geneSymbol.map(t => t.value),
        elementType: values.elementType.map(t => t.value),
        cancerType: values.cancerType.map(t => t.value),
        evidenceType: values.evidenceType.map(t => t.value)
      };
      setTimeout(() => {
        //alert(JSON.stringify(payload, null, 2));
        console.log("query payload", payload);
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
         <div className="form-row">
            <div className="form-group col-md-3">
              <GeneSymbolSelect
                className="form-control"
                value={values.geneSymbol}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.geneSymbol}
                touched={touched.geneSymbol}
              />
            </div>

            <div className="form-group col-md-3">
              <ElementTypeSelect
                className="form-control"
                value={values.elementType}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.elementType}
                touched={touched.elementType}
              />
            </div>
           

            <div className="form-group col-md-3">
              <CancerTypeSelect
                className="form-control"
                value={values.cancerType}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.cancerType}
                touched={touched.cancerType}
              />
            </div>

            <div className="form-group col-md-3">
              <EvidenceTypeSelect
                className="form-control"
                value={values.evidenceType}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.evidenceType}
                touched={touched.evidenceType}
              />
            </div>
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
  
  const testData="aa,bb";
  console.log("testData string",testData)

  const testString = Papa.parse(testData)
   
  console.log("papa parsed string",testString)                   

  let geneSymbolOptions3;
  Papa.parse(geneNameData, {
                                header: true,
                                delimiter: ",",
                                download: true,
                                dynamicTyping: true,
                                complete: function(results) {
                                console.log("Parsing complete", results);
                                geneSymbolOptions3 = results.data
                                }
                            });
  console.log("papa parsed file", geneSymbolOptions3)
   

  
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
    { value: 'computational prediction', label: 'computational prediction' },
    { value: 'gene expression association', label: 'RNA-seq gene expression association' },
    { value: 'experimental validation', label: 'other experimental validation' },
  ];


  const cancerTypeOptions = [
    { value: 'PanCancer', label: 'PanCancer' },
    { value: 'B-ALL', label: 'B-ALL, B-Cell Acute Lymphoblastic Leukemia' },
    { value: 'BLCA', label: 'BLCA, Bladder Urothelial Carcinoma' },
    { value: 'BRCA', label: 'BRCA, Breast Invasive Carcinoma' },
    { value: 'CLL', label: 'CLL, Chronic Lymphoctytic Leukemia' },
    { value: 'COAD', label: 'COAD, Colon Adenocarcinoma' },
    { value: 'COADREAD', label: 'COADREAD, Colorectal Cancer' },
    { value: 'DLBC', label: 'DLBC, Lymphoid Neoplasm Diffuse Large B-cell Lymphoma' },
    { value: 'ESAD', label: 'ESAD, Esophageal Carcinoma' },
    { value: 'ESCA', label: 'ESCA, Esophageal Carcinoma' },
    { value: 'ETMR', label: 'ETMR, Embryonal Tumor with Multilayered Rosettes' },
    { value: 'GBM', label: 'GBM, Glioblastoma Multiforme' },
    { value: 'HGG', label: 'HGG, High-grade Glioma' },
    { value: 'HNSC', label: 'HNSC, Head and Neck Squamous Cell Carcinoma' },
    { value: 'KICH', label: 'KICH, Kidney Chromophobe' },
    { value: 'KIRC', label: 'KIRC, Kidney Renal Clear Cell Carcinoma' },
    { value: 'LAML', label: 'LAML, Acute Myeloid Leukemia' },
    { value: 'LGG', label: 'LGG, Lower Grade Glioma' },
    { value: 'LIHC', label: 'LIHC, Liver Hepatocellular Carcinoma' },
    { value: 'LIRI', label: 'LIRI, Liver Hepatocellular Carcinoma' },
    { value: 'LUAD', label: 'LUAD, Lung Adenocarcinoma' },
    { value: 'LUSC', label: 'LUSC, Lung Squamous Cell Carcinoma' },
    { value: 'MALY', label: 'MALY, Malignant Lymphoma' },
    { value: 'MB', label: 'MB, Medullablastoma' },
    { value: 'OV', label: 'OV, Ovarian Serous Cystadenocarcinoma' },
    { value: 'PA', label: 'PA, Pilocytic Astrocytoma' },
    { value: 'PACA', label: 'PACA, Pancreatic Ductal Adenocarcinoma' },
    { value: 'PRAD', label: 'PRAD, Prostate Adenocarcinoma' },
    { value: 'RECA', label: 'RECA, Kidney Renal Papillary Cell Carcinoma' },
    { value: 'PHAB', label: 'PHAB, Rhabdoid Tumor' },
    { value: 'SKCM', label: 'SKCM, Skin Cutaneous Melanoma' },
    { value: 'STAD', label: 'STAD, Stomach Adenocarcinoma' },
    { value: 'THCA', label: 'THCA, Papillary Thyroid Carcinoma' },
    { value: 'UCEC', label: 'UCEC, Uterine Corpus Endometrial Carcinoma' },
    

  ];

  class GeneSymbolSelect extends React.Component {

    handleChange = value => {
      // this is going to call setFieldValue and manually update values.topcis
      this.props.onChange("geneSymbol", value);
    };
  
    handleBlur = () => {
      // this is going to call setFieldTouched and manually update touched.topcis
      this.props.onBlur("geneSymbol", true);
    };
  
    render() {
      return (
        <div style={{ margin: "1rem 0" }}>
          <label for="geneSymbol">Gene name </label>
          <Select
            id="geneSymbol"
            options={geneSymbolOptions3}
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