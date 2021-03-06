import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import Row from '../common/layout/row'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends React.Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Row>
                        <Field name='name' component={labelAndInput} readOnly={readOnly}
                            label='Nome' cols='12 4' placeholder='Informe o nome' />
                        <Field name='month' component={labelAndInput} readOnly={readOnly}
                            label='Mês' cols='12 4' placeholder='Informe o mês' type='number' />
                        <Field name='year' component={labelAndInput} readOnly={readOnly}
                            label='Ano' cols='12 4' placeholder='Informe o ano' type='number' min='1970' />
                    </Row>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className=' btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }

}

BillingCycleForm = reduxForm({ form: 'BillingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)