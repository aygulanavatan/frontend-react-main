import { NavLink, Link } from "react-router-dom";
import React from "react";

function Register() {
    return (
      <>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <form
              className="form-horizontal"
              id="login"
              onSubmit={(evt) => onSubmit(evt)}
            >
              <div className="form-group"
                style={{
                    marginTop : '100px'
                }}
              >
                <label className="col-sm-2 control-label">
                    Ad Soyad:
                </label>
                <div className="col-sm-10">
                  <label>
                    <input type="text"/>
                  </label>
                </div> 
              </div>
              <div className="form-group">
                <label className="col-xs-10 col-sm-2 control-label">
                  E-Posta:
                </label>
                <div className="col-xs-12 col-sm-2">
                  <label>
                    <input type="mail" />
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">
                    Şifre:
                </label>
                <div className="col-sm-10">
                  <label>
                    <input type="password"/>
                  </label>
                </div> 
              </div>
              <button className="btn btn-default pull-right">Kayıt ol</button>
              <Link to="/login">Giriş Yap</Link>
            </form>
          </div>
        </div>
      </>
    );
}
export default Register;
