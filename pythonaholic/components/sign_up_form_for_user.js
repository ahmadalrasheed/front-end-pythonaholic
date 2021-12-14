import Head from "next/head";

export default function SignUpFormForUsers(props) {
  return (
    <>
      <Head>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      </Head>
      {/* <!------ Include the above in your HEAD tag ----------> */}
      <form
        onSubmit={props.event_handler}
        class="bg-white   "
        action="#"
        method="POST"
      >
        <div class="login-reg-panel">
          <div class="login-info-box">
            <h2>Create Your Account To Connect</h2>
            <p>Post Your Service</p>
            <label id="label-register" for="log-reg-show">
              Company
            </label>
            <input
              type="radio"
              name="active-log-panel"
              id="log-reg-show"
              checked="checked"
            />
          </div>

          <div class="register-info-box">
            <h2>Create Your Account To Connect</h2>
            <p>Make an Offer</p>
            <label id="label-login" for="log-login-show">
              User
            </label>
            <input type="radio" name="active-log-panel" id="log-login-show" />
          </div>

          <div class="white-panel">
            <div>
              <div class="login-show">
                <h2>Company Sign Up</h2>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="number" placeholder="Mobile Number" />
                <div className="flex items-center gap-3">
                  <label className="">ID_Card</label>
                  <input
                    id="ID_Card"
                    accept="image/*"
                    name="ID_Card"
                    type="file"
                    autoComplete="ID_Card"
                    required
                    placeholder="ID Card"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label className="">Commerical_Certificate</label>
                  <input
                    accept="image/*"
                    id="CommericalCertificate"
                    name="CommericalCertificate"
                    type="file"
                    autocomplete="current-password"
                    required
                  />
                </div>
                
                <input type="button" type='submit' value="Sign Up" />
              </div>
              {/* <label className="">Password</label> */}
              {/* <div className="inline-flex align-item-baseline">
            <input
              class="pl-2 outline-none border-none"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            /></div> */}

              {/* <a href="">Forgot password?</a> */}
            </div>
            <div class="register-show">
              <h2>User Sign Up</h2>
              {/* <input type="text" placeholder="Full Name" name=""/> */}
              <input type="text" placeholder="Email" name="email"/>
              <input type="number" placeholder="Mobile Number" name="phonenumber" />
              <input type="password" placeholder="Password" name="password" />
              
              <input type="button" type='submit' value="Sign Up" />
            </div>
          </div>
        </div>
        <script src="/login_form.js"></script>
      </form>
    </>
  );
}
