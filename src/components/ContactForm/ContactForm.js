import React from 'react'
import axios from "axios";
import classes from './ContactForm.module.scss' 
import Input from './Input/Input'
import TextArea from './TextArea/TextArea'
import is from 'is_js'
import H1 from '../H1/H1'










// const API_PATH = 'http://www.xn----7sbad0bnab3abucy4dvh.xn--p1ai/mailer/send.php';
const API_PATH = 'http://www.cf13541.tmweb.ru/mailer/send.php';




export default class FeedBackForm extends React.Component{

   
    constructor() {
        super();
        this.state = {
          isFormValid: false,
          text: '',
          mailSent:'',
          textAreaPlaceholder:'Напишите Ваше сообщение...',
          
          
          formControls:{
            
            name: {
              value:'',
              type:'text',
              placeholder:'Введите Ваше имя',
              id:'name',
              name:'name',
              errorMessage: ' Имя должно содержать не менее двух букв',
              valide: 'false',
              touched: 'false',
              validation:{
                required: true,
                text: true,
                minLength: 2
              }
            },

            email: {
              value:'',
              type:'email',
              placeholder:' Введите Ваш e-mail',
              id:'email',
              name:'email',
              errorMessage: ' Адрес должен соответствовать формату xx@xx.xx',
              valide: 'false',
              touched: 'false',
              validation:{
                required: true,
                email: true
              }
            },

          }
        }
      }

    validateControl = (value, validation) => {
      if (!validation){
        return true
      }
      let isValid = true

      if (validation.required) {
        isValid = value.trim() !== '' && isValid
      }

      if (validation.email) {
        isValid = is.email(value) && isValid
      }

      if (validation.minLength) {
       isValid = value.length >= validation.minLength && isValid
      }

      return isValid
    }

    onChangeHandler = (e, controleName) => {
      // console.log(`${controleName}:`, e.target.value)
      const formControls = {...this.state.formControls} 
      const control = {...formControls[controleName]}
      control.value = e.target.value
      control.touched = true
      control.valid = this.validateControl(control.value, control.validation)
      formControls[controleName] = control
      let isFormValid = true
      Object.keys(formControls).forEach(name => {
        isFormValid = formControls[name].valid && isFormValid
      })
      this.setState({
        formControls, isFormValid
      })

    }


// рендерим инпуты
    renderInputs = () =>{
      return Object.keys(this.state.formControls).map((controleName, index) => {
        const control = this.state.formControls[controleName]
        return(
          <Input
            key={controleName + index}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            placeholder={control.placeholder}
            errorMessage={control.errorMessage}
            shouldValidate={control.validation}
            onChange={e => this.onChangeHandler(e, controleName)}
          />
        )
      })
    }


// после отправки данных поля формы надо очистить
      resetForm = () =>{
        // console.log(this.state.formControls.email.value)

        
        this.setState({isFormValid: false})
        this.setState({text: ''})
        this.setState({mailSent: ''})
        this.setState({textAreaPlaceholder:'Можно написать новое сообщение...'})
        

      
        this.setState({
          formControls:{
            
            name: {
              value:'',
              type:'text',
              placeholder:'Введите Ваше имя',
              id:'name',
              name:'name',
              errorMessage: ' Имя должно содержать не менее двух букв',
              valide: 'false',
              touched: 'false',
              validation:{
                required: true,
                text: true,
                minLength: 2
              }
            },

            email: {
              value:'',
              type:'email',
              placeholder:'Введите Ваш e-mail',
              id:'email',
              name:'email',
              errorMessage: ' Адрес должен соответствовать формату xx@xx.xx',
              valide: 'false',
              touched: 'false',
              validation:{
                required: true,
                email: true
              }
            },

          }
      })
     }

     


 // Сообщение об отправке письма исчезнет через 3 секунды
      resetMailSent = () => {
          this.setState({mailSent:''})
      }

// Отправка данных формы
      handleFormSubmit = e => {
        e.preventDefault();

       
        let bodyFormData = new FormData();
        bodyFormData.append('name', this.state.formControls.name.value);
        bodyFormData.append('email', this.state.formControls.email.value);
        bodyFormData.append('text', this.state.text);

      
      axios({
          method: 'post',
          url: API_PATH,
          data: bodyFormData,
          headers: {'Content-Type': 'multipart/form-data' }
      })
      .then((response) => {
          // console.log(response);
          this.resetForm()
          this.setState({mailSent:'Ваше сообщение отправлено. Спасибо за обращение!'}) 
          setTimeout(this.resetMailSent , 5000)
          // console.log(this.state.mailSent);

      })
      .catch((error) => {
          // console.log(error);
      });

      }
        render() {
            return (
              <div className={classes.FeedBackForm}>
              <div style={{margin:'0 auto', marginBottom:'30px', textAlign:'center'}}>
              <H1  titleType={this.props.titleType}>
              Свяжитесь с нами
              </H1>
              </div>
              <div>
              <form>
              
              <TextArea 
              errorMessage={'тест'}
              placeholder={this.state.textAreaPlaceholder}
              id={'text'}
              name={'text'}
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value  })}
              />

              { this.renderInputs() }
  

<div className={classes.submitHolder}>
              <input
              className = {classes.submit}
  type="submit" onClick={e => this.handleFormSubmit(e)}
  value="Отправить"
  disabled={!this.state.isFormValid}
  style={
    this.state.isFormValid
    ? {backgroundColor:'#25a599'}
    : {backgroundColor:'#857f9a'}
  }/>
</div>
                    






  <div>
    <div className={classes.send}>
      {this.state.mailSent}</div>
    </div>
</form >
              </div>
              </div>
            
            
            
            
            
            
            );
          }
       
  


}