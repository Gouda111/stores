<script>
	import Button from "../../components/Form/Button.svelte";
    import Field from "../../components/Form/Field.svelte";
	import Form from "../../components/Form/Form.svelte";
    import {validateEmail,validateRequiredField} from '../utils/validation'
</script>

<Form 
on:formData={(e)=>{console.log(e.detail);}}
initialvalues={{username:'Test',email:'test@gmail.com'}}
let:hasErrors
>
    <Field label="username" placeholder="enter username"  type="text" name="username" validate={(value,label)=>{ return validateRequiredField(value,label)}}/>
    <Field label="email" placeholder="enter email" type="email" name="email" validate={(value,label)=>{ return validateRequiredField(value,label) || validateEmail(value,label)}}/>
    <Field label="passowrd" placeholder ="enter password" type="password" name="password" validate={(value,label)=>{ return validateRequiredField(value,label)}}/>
    <Button disabled={hasErrors}>Submit</Button>
</Form>