import React from 'react';
import { useForm } from 'react-hook-form';
import style from "../Signin/SignIn.module.css";
import signuplogo from "../../../assets/signuplogo.svg";
import banner from "../../../assets/banner.png"
import { FaGoogle, FaFacebook, FaLinkedin, FaXTwitter} from "react-icons/fa6";
import { BsApple } from "react-icons/bs";

const SignIn = () => {
  let { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve()

      }, d * 1000)
    })
  }

  const onSubmit = async (data) =>{
    await delay(2)
    console.log(data);
    if(data.Email !== "aarif.mdaarif2002@gmail.com"){
      setError("myform", {message: "Email id is invalid"})
    }
  }

  return (
<section>
  <div className={style.parentcontainer}>
     <div className={style.maincontainer}>
      <img src={signuplogo} alt="logo" />
      <h1>Sign in</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
        <div className={style.details}>
        {isSubmitting && <h3 style={{color:"black"}}>Loading....</h3>}
          <input
            type="email"
            placeholder="Enter your Email"
            {...register("Email", { required: "This field is required" })}
          />
          {errors.Email && <div className={style.error}>{errors.Email.message}</div>}

          <input
            type="password"
            placeholder="Enter your Password"
            {...register("Password", { required: "Password is required" })}
          />
          {errors.Password && <div className={style.error}>{errors.Password.message}</div>}

          <input type="submit" value="Login" className={style.loginBtn} disabled={isSubmitting} />
          {errors.myform && <div className={style.error}>{errors.myform.message}</div>}
        </div>

           <div className={style.optionalsignup}>
                  <p>Sign in using</p>
                  <div className={style.socialContainer}>
                    <button type="button" className={style.socialButton} onClick={() => handleLogin("Google")}>
                    <FaGoogle size={24} color="#DB4437" />
                   </button>
                  <button type="button" className={style.socialButton} onClick={() => handleLogin("LinkedIn")}>
                    <FaLinkedin size={24} color="#0077B5" />
                  </button>
                  <button type="button" className={style.socialButton} onClick={() => handleLogin("Twitter")}>
                    <FaXTwitter size={24} color="black" />
                  </button>
                  <button type="button" className={style.socialButton} onClick={() => handleLogin("Facebook")}>
                   <FaFacebook size={24} color="#1877F2" />
                  </button>
                  <button type="button" className={style.socialButton} onClick={() => handleLogin("Apple")}>
                  <BsApple size={24} />
                  </button>
                  </div>
                </div>

        <div className={style.extradetails}>
          <h4 className={style.forgot}><button>Forgot Email</button>/ <button>Password</button>?</h4>
          <p>
          Don't have a Zoho account? <button className={style.signupBtn}>Sign up now</button>
          </p>
        </div>
      </form>
     </div>


    <div className={style.bannercontainer}>
      <img src={banner} alt="" />
    </div>
  </div>

</section>
  );
};
export default SignIn;

