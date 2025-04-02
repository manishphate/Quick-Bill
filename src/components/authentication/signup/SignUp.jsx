import React from "react";
import { useForm } from "react-hook-form";
import style from "../signup/signUp.module.css";
import signuplogo from "../../../assets/signuplogo.svg";
import { FaGoogle, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";



const SignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
    // if (data.Email !== "aarif.mdaarif2002@gmail.com") {
    //   setError("myform", { message: "Email ID is invalid" });
    // }
  };

  const handleLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className={style.maincontainer}>
      <img src={signuplogo} alt="logo" />
      <h1>Let's get started.</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
        <div className={style.details}>
          {isSubmitting && <h3 style={{ color: "blue", fontSize: "20px" }}>Loading....</h3>}

          <input
            type="text"
            placeholder="Company Name"
            {...register("company", { required: "This field is required" })}
          />
          {errors.company && <div className={style.error}>{errors.company.message}</div>}
          
          <input  
            type="email" 
            placeholder= "Enter your Email"
            {...register("Email", { required: "This field is required" })}
          /> 
          {errors.Email && <div className={style.error}>{errors.Email.message}</div>}
          
          <input
            type="tel"
            placeholder="Mobile Number"
            {...register("number", {
              required: "This field is required",
              pattern: { value: /^[0-9]{11}$/, message: "Invalid phone number" },
            })}
          />
          {errors.number && <div className={style.error}>{errors.number.message}</div>}

          <input
            type="password"
            placeholder="Enter your Password"
            {...register("Password", { required: "Password is required" })}
          />
          {errors.Password && <div className={style.error}>{errors.Password.message}</div>}

          <select {...register("Country")} className={style.country}>
            <option value="Country">Country</option>
            <option value="India">India</option>
            <option value="Germany">Germany</option>
            <option value="England">England</option>
            <option value="Canada">Canada</option>
            <option value="other">Other</option>
          </select>

          <select {...register("state")} className={style.country}>
            <option value="state">state</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Delhi">New Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="other">Other</option>
          </select>

          <label className={style.checkbox} >
            <input type="checkbox" {...register("checkbox", { required: "Tick the checkbox" })}/>I agree to the <button className={style.privacyBtn}>Terms of Service</button> and <button className={style.privacyBtn}>Privacy Policy</button>.
            {errors.checkbox && <div className={style.error}>{errors.checkbox.message}</div>}
          </label>

          <input type="submit" value="Create my account" className={style.loginBtn} disabled={isSubmitting} />
          {errors.myform && <div className={style.error}>{errors.myform.message}</div>}

          <hr />

        <div className={style.optionalsignup}>
          <p>Sign up using</p>
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
          </div>
        </div>

          <div className={style.extradetails}>
            <p>
              Already have an account? <button className={style.signupBtn}>Login</button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
