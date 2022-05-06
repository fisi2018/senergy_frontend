import { useState } from "react"
import { HandleChange, HookForm } from "../../types/form";

export const useForm:HookForm=(initForm)=>{

    const [form,setForm]=useState(initForm);
    const handleChange:HandleChange=(e)=>{
        const {name,value}=e.target;
        
            setForm({
                ...form,
                [name]:value
            })
    }
    return{
        form,
        handleChange,
        setForm
    }
}