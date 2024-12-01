import React from 'react'

const Sign = () => {
    const [formData,setFormData] = React.useState({username:"",userage:"",password:""});
    const change = (e)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }
    const submit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:3000/signUp",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username:formData.username,
                userage:formData.userage,
                password:formData.password
            }),
        });
    };
    return (
    <div style={{fontFamily:'Verdana',
        // fontWeight : 'bold',
        backgroundColor: "purple",
        color:'white',
        padding: "20px",
        maxWidth: "400px",
        height: "300px",
        margin: "0 auto",
        marginTop: "150px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
      <form onSubmit={submit}>
        <label style={{marginRight:"40px"}}>Name:</label>
        <input type="text"
            name="username"
            onChange={change}
            placeholder="name"
            value={formData.username}
            style={{
            padding:'5px',
            border:'none',
            borderRadius: '6px',
            boxShadow:'0 4px 6px rgba(0,0,0,0.2)'
          }}
        /><br/><br/>
        <label style={{marginRight:"50px"}}>Age:  </label>
        <input type="number"
            name="userage"
            onChange={change}
            placeholder="age"
            value={formData.userage}
            style={{
            padding:'5px',
            border:'none',
            borderRadius: '6px',
            boxShadow:'0 4px 6px rgba(0,0,0,0.2)'
          }}
        /><br/><br/>
        <label style={{marginRight:"7px"}}>Password: </label>
        <input type="text"
            name="password"
            onChange={change}
            placeholder="password"
            value={formData.password}
            style={{
            padding:'5px',
            border:'none',
            borderRadius: '6px',
            boxShadow:'0 4px 6px rgba(0,0,0,0.2)'
          }}
        /><br/><br/>
        <button style={{
            fontSize:"14px",
            color:'white',
            marginTop:'12px',
            marginLeft: "100px",
            backgroundColor: "grey",
            borderRadius: "9px",
            padding: '7px 20px 7px 20px',
            border: "none",
        }} type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Sign
