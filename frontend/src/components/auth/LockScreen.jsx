import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";
import { getImageUrl } from "../../utils/imageUrl";

import siteConfig from "../../config/site.config";

export default function LockScreen() {
  const { user, profile, logout, unlockScreen } = useAuth();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUnlock = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await unlockScreen(password);

      toast.success("Screen unlocked successfully");

      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Incorrect password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div>
              <Link to="/" className="mb-5 d-block auth-logo">
                <img
                  src="/assets/auth/images/logo-dark.png"
                  alt="Logo"
                  height="22"
                  className="logo logo-dark"
                />

                <img
                  src="/assets/auth/images/logo-light.png"
                  alt="Logo"
                  height="22"
                  className="logo logo-light"
                />
              </Link>

              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Lock Screen</h5>

                    <p className="text-muted">
                      Enter your password to unlock the screen.
                    </p>
                  </div>

                  <div className="p-2 mt-4">
                    <div className="user-thumb text-center mb-4">
                      <img
                        src={getImageUrl(profile?.image || user?.image)}
                        className="rounded-circle img-thumbnail avatar-lg"
                        alt="User"
                      />

                      <h5 className="font-size-15 mt-3">
                        {profile?.name || user?.name || "User"}
                      </h5>

                      <small className="text-muted">{user?.email}</small>
                    </div>

                    <form onSubmit={handleUnlock}>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>

                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                          required
                        />
                      </div>

                      <div className="mt-3 text-end">
                        <button
                          type="submit"
                          className="btn btn-primary w-sm waves-effect waves-light"
                          disabled={loading}
                        >
                          {loading ? "Unlocking..." : "Unlock"}
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          Not you?{" "}
                          <button
                            type="button"
                            className="btn btn-link p-0 fw-medium text-primary"
                            onClick={logout}
                          >
                            Sign In
                          </button>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
