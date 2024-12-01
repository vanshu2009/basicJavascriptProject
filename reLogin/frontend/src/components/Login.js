import React from "react";

const Login = () => {
  const [FormData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username: FormData.username,
        password: FormData.password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      //localStorage.setItem('AccessToken',data.token);
      alert(data.message);
    } else {
      alert(data.message);
    }
  };

  return (
    <div
      style={{
        fontFamily:'Verdana',
        color:'white',
        backgroundColor: "purple",
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
      }}
    >
      <form onSubmit={submit}>
        <label style={{
           marginRight: "55px" 
        }}>Name:</label>
        <input
          type="text"
          name="username"
          onChange={change}
          placeholder="name"
          value={FormData.username}
          style={{
            padding:'5px',
            border:'none',
            borderRadius: '6px',
            boxShadow:'0 4px 6px rgba(0,0,0,0.5)'
          }}
        />
        <br />
        <br />
        <label style = {{
          marginRight : '20px'
        }}>Password: </label>
        <input
          type="text"
          name="password"
          onChange={change}
          placeholder="password"
          value={FormData.password}
          style={{
            padding:'5px',
            border:'none',
            borderRadius: '6px',
            boxShadow:'0 4px 6px rgba(0,0,0,0.5)'
          }}
        />
        <br />
        <br />
        <button
          style={{
            fontSize:"14px",
            color:'white',
            marginTop:'12px',
            marginLeft: "100px",
            backgroundColor: "grey",
            borderRadius: "9px",
            padding: '7px 20px 7px 20px',
            border: "none",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
